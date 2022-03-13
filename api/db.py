from pymongo import MongoClient
import os

_db = None

def initialize_db(app):
    global _db
    _db = MongoClient(os.getenv('MONGO_URI')).uwbuddies

def get_db():
    return _db