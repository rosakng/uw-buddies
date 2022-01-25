from flask_restx import Namespace, Resource


api = Namespace("Survey", description="Survey Operations")


@api.route("/")
class Survey(Resource):
    def get(self):
        return ""

