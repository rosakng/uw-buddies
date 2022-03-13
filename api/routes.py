def register_routes(api, app):
    from api.user import register_routes as attach_user

    attach_user(api, app)
