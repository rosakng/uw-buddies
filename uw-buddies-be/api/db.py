from pymongo import MongoClient

_db = None

def initialize_db(app):
    global _db
    _db = MongoClient(app.config['MONGO_URI']).uwbuddies

def get_db():
    return _db