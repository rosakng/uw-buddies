from pymongo.collection import Collection
from api.db import db
from .model import User

users: Collection = db.users

def getUser():
    user = users.find_one({"email": "bxsheng@uwaterloo.ca"})
    user_json = User(**user).to_json()
    print(user_json)
    print(user_json['email'])

def createUser():
    user = {
        "_id": "id2",
        "email": "varoon@uwaterloo.ca"
    }
    post_id = users.insert_one(user).inserted_id
    print(post_id)
