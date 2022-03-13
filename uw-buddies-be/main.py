from flask import Flask
from flask_restx import Api
from flask_cors import CORS
from api.routes import register_routes
from api.config import config_by_name
from api.db import initialize_db

app = Flask(__name__)
CORS(app)
app.config.from_object(config_by_name["dev"])
initialize_db(app)
api = Api(app)
register_routes(api, app)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)



