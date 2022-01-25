from flask import Flask
from flask_restx import Api
from api.routes import register_routes
from api.config import config_by_name
from api.db import initialize_db

app = Flask(__name__)
app.config.from_object(config_by_name["dev"])
api = Api(app)
register_routes(api, app)
initialize_db(app)

if __name__ == "__main__":
    app.run()



