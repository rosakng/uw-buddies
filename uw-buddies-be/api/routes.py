def register_routes(api, app):
    from api.user import register_routes as attach_survey

    attach_survey(api, app)