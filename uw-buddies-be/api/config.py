import os
from api.credentials import username, password
from typing import List, Type

basedir = os.path.abspath(os.path.dirname(__file__))


class BaseConfig:
    CONFIG_NAME = "base"
    DEBUG = False


class DevelopmentConfig(BaseConfig):
    CONFIG_NAME = "dev"
    DEBUG = True
    MONGO_URI = "mongodb+srv://{username}:{password}@uwbuddiesclustermain.tovpk.mongodb.net/uwbuddies" \
                "?retryWrites=true&w=majority".format(username=username, password=password)


class ProductionConfig(BaseConfig):
    CONFIG_NAME = "prod"
    DEBUG = False


EXPORT_CONFIGS: List[Type[BaseConfig]] = [
    DevelopmentConfig,
    ProductionConfig,
]
config_by_name = {cfg.CONFIG_NAME: cfg for cfg in EXPORT_CONFIGS}
