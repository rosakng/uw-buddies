def register_routes(api, app):
    from api.survey import register_routes as attach_survey

    attach_survey(api, app)
