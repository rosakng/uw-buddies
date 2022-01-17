from flask_restx import Namespace, Resource
from flask import Flask


api = Namespace("Survey", description="Survey Operations")


@api.route("/")
class Survey(Resource):
    def get(self):
        return ""

