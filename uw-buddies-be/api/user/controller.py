from flask import abort, g
from flask import request
from flask_restx import Namespace, Resource, cors
from flask_cors import cross_origin

from api.auth.helper import requires_auth
from api.user.service import get_user, create_user, update_user, update_user_match, get_all_users, append_match

api = Namespace("User", description="User Operations", decorators=[cross_origin()])

@api.route("/profile")
class User(Resource):
    method_decorators = [requires_auth]
    """
    Get user object by ID
    """
    def get(self):
        authenticated_user = g.request_payload
        user = get_user(authenticated_user['sub'])
        if user:
            return user, 200
        else:
            abort(400, "User not found.")

    """
    Update given fields for user object of given ID
    """
    def put(self):
        authenticated_user = g.request_payload
        updated_user = update_user(authenticated_user['sub'], request.get_json())
        if updated_user:
            return updated_user, 200
        else:
            abort(400, "Unable to update user. User may not exist.")

@api.route("/matches")
class User(Resource):
    method_decorators = [requires_auth]

    """
    Update given matches for user object of given ID
    """
    def put(self):
        authenticated_user = g.request_payload
        updated_user = update_user_match(authenticated_user['sub'], request.get_json())
        if updated_user:
            return updated_user, 200
        else:
            abort(400, "Unable to update user.")


@api.route("/matches/new")
class User(Resource):
    method_decorators = [requires_auth]

    """
    Update given matches for user object of given ID
    """
    def put(self):
        updated_user = append_match(request.get_json())
        if updated_user:
            return updated_user, 200
        else:
            abort(400, "Unable to update user.")


@api.route("")
class User(Resource):
    method_decorators = [requires_auth]
    """
    Create user object
    """
    def post(self):
        body = request.get_json()
        user_id = body['user']['_id']
        result = create_user(body['user'])
        if result:
            return "User with id {user_id} created.".format(user_id=user_id), 201
        else:
            abort(400, "Failed to create user.")


@api.route("/all")
class User(Resource):
    method_decorators = [requires_auth]
    """
    Get all users
    """
    def get(self):
        users = get_all_users()
        if users:
            return users, 200
        else:
            abort(400, "Unable to get all users")