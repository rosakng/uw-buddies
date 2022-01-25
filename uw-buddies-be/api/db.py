from pymongo import MongoClient


def initialize_db(app):
    client = MongoClient(app.config["MONGO_URI"], serverSelectionTimeoutMS=5000)
    db = client
    try:
        print(client.server_info())
    except Exception:
        print("Unable to connect to the server.")
