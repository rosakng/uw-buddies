from flask import abort
from flask import request
from flask_restx import Namespace, Resource

from api.auth.helper import requires_auth
from api.user.service import getUser, createUser, updateUser

api = Namespace("User", description="User Operations")


@api.route("/<string:user_id>")
class User(Resource):
    method_decorators = [requires_auth]
    """
    Get user object by ID
    """

    def get(self, user_id):
        user = getUser(user_id)
        if user:
            return user, 200
        else:
            abort(400, "User not found.")

    """
    Update given fields for user object of given ID
    """

    def put(self, user_id):
        updated_user = updateUser(user_id, request.get_json())
        if updated_user:
            return updated_user, 200
        else:
            abort(400, "Unable to update user. User may not exist.")


@api.route("")
class User(Resource):
    """
    Create user object
    """

    def post(self):
        body = request.get_json()
        user_id = body['user']['_id']
        result = createUser(body['user'])
        if result:
            return "User with id {user_id} created.".format(user_id=user_id), 201
        else:
            abort(400, "Failed to create user.")
