from pymongo.collection import Collection, ReturnDocument
from api.db import get_db
from .model import User

db = get_db()

users: Collection = db.users

"""
Given a user ID, return the user object from Mongo.
If the user ID does not exist, return None. 
"""


def get_user(user_id):
    user = users.find_one({"_id": user_id})
    if user:
        return User(**user).to_json()
    else:
        return None


"""
Given a user object, create the user object and add it to the users collection in Mongo.
If successful, user ID will be returned.
If a schema error occurs, return None.
"""


def create_user(user_obj):
    try:
        user = User(**user_obj)
        user_id = users.insert_one(user.to_bson()).inserted_id
        return user_id
    except Exception as error:
        print(error)
        return None


"""
Given a user ID and an object of fields to be updated, update the user object in Mongo.
If successful, updated user object will be returned.
If an error occurs, return None.
"""


def update_user(user_id, edit_obj):
    updated_user = users.find_one_and_update(
        {"_id": user_id},
        {"$set": edit_obj},
        return_document=ReturnDocument.AFTER
    )
    if updated_user:
        return User(**updated_user).to_json()
    else:
        return None

"""
Given a user ID and data regarding the match object to be updated, update the match object for the user in Mongo.
If successful, updated user object will be returned.
If an error occurs, return None.
"""
def update_user_match(user_id, edit_obj):
    updated_user = users.find_one_and_update(
        {"_id": user_id, "matches.email": edit_obj['matchEmail']},
        {"$set": edit_obj['updateObject']},
        return_document=ReturnDocument.AFTER
    )

    if updated_user:
        return User(**updated_user).to_json()
    else:
        return None

"""
Given a user ID and a match object, add the new object to the user's matches list in Mongo.
If successful, updated user object will be returned.
If an error occurs, return None.
"""
def append_match(match_obj):
    updated_user = users.find_one_and_update(
        {"_id": match_obj['user_id']},
        {"$set": {"matches": match_obj['entire_match_list']}},
        return_document=ReturnDocument.AFTER
    )

    if updated_user:
        return User(**updated_user).to_json()
    else:
        return None

"""
Get all users in the users table.
If successful, returns list of user objects.
If an error occurs, return None.
"""
def get_all_users():
    all_users = users.find()

    if all_users:
        return [User(**user).to_json() for user in all_users]
    else:
        return None

