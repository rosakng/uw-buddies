from flask import abort
from flask import request, _request_ctx_stack
from flask_restx import Namespace, Resource

from api.auth.helper import requires_auth
from api.user.service import get_user, create_user, update_user, get_user_info

api = Namespace("User", description="User Operations")


@api.route("/profile")
class User(Resource):
    method_decorators = [requires_auth]
    """
    Get user object by ID
    """

    def get(self):
        authenticated_user = _request_ctx_stack.top.current_user
        user = get_user(authenticated_user['sub'])
        if user:
            return user, 200
        else:
            abort(400, "User not found.")

    """
    Update given fields for user object of given ID
    """

    def put(self):
        authenticated_user = _request_ctx_stack.top.current_user
        updated_user = update_user(authenticated_user['sub'], request.get_json())
        if updated_user:
            return updated_user, 200
        else:
            abort(400, "Unable to update user. User may not exist.")


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
