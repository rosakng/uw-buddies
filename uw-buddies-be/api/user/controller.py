from flask_restx import Namespace, Resource
from api.user.service import getUser


api = Namespace("User", description="User Operations")


@api.route("/")
class User(Resource):
    def get(self):
        getUser()
