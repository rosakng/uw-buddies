from flask import Flask
from flask_restx import Api
from api.routes import register_routes

app = Flask(__name__)
api = Api(app)
register_routes(api, app)

if __name__ == "__main__":
    app.run()



