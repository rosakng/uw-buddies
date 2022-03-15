import os
import json

from dotenv import load_dotenv
import requests


class Auth:
    def __init__(self):
        print("initializing authentication object")
        # get env vars
        load_dotenv()
        self._set_env_vars()
        self._get_access_token()

    def _set_env_vars(self):
        self.domain = os.getenv("DOMAIN")
        self.client_id = os.getenv("CLIENT_ID")
        self.client_secret = os.getenv("CLIENT_SECRET")
        self.audience = os.getenv("AUDIENCE")

    def _get_access_token(self):
        url = f"{self.domain}/oauth/token"

        payload = json.dumps({
            "client_id": self.client_id,
            "client_secret": self.client_secret,
            "audience": self.audience,
            "grant_type": "client_credentials"})

        headers = {"content-type": "application/json"}

        print("attempting to get access token now")
        res = requests.post(url, data=payload, headers=headers)

        if res.status_code != 200:
            print(res.status_code)
            print(res.reason)
            print(res.request)

        res_dict = res.json()

        print(f"successfully got token: {res_dict['access_token']}")

        self.access_token = res_dict['access_token']
