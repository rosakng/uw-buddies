from flask import Flask
from flask_restx import Api
from api.routes import register_routes
from api.config import config_by_name

app = Flask(__name__)
app.config.from_object(config_by_name["dev"])
api = Api(app)
register_routes(api, app)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)



