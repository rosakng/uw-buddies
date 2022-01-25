from pymongo import MongoClient
from api.credentials import username, password

conn_str = "mongodb+srv://{username}:{password}@uwbuddiesclustermain.tovpk.mongodb.net/uwbuddies" \
           "?retryWrites=true&w=majority".format(username=username, password=password)
db = MongoClient(conn_str).uwbuddies