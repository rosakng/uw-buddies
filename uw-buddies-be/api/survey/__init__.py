BASE_ROUTE = "survey"


def register_routes(api, app, root="api"):
    from .controller import api as survey_api

    api.add_namespace(survey_api, path=f"/{root}/{BASE_ROUTE}")
