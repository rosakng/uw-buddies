from pymongo.collection import Collection, ReturnDocument
from api.db import db
from .model import User

users: Collection = db.users


def getUser(user_id):
    user = users.find_one({"_id": user_id})
    if user:
        return User(**user).to_json()
    else:
        return None


def createUser(user_obj):
    try:
        user = User(**user_obj)
        user_id = users.insert_one(user.to_bson()).inserted_id
        return user_id
    except Exception as error:
        print(error)
        return None


def updateUser(user_id, edit_obj):
    updated_user = users.find_one_and_update(
        {"_id": user_id},
        {"$set": edit_obj},
        return_document=ReturnDocument.AFTER
    )
    if updated_user:
        return User(**updated_user).to_json()
    else:
        return None
