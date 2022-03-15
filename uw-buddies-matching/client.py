import json

import requests
import pprint


class Client:
    def __init__(self, auth):
        self.server_hostname = "https://uwbuddies-be.herokuapp.com/api"
        self.auth_headers = {
            "authorization": f"Bearer {auth.access_token}"}

    # returns an array of dict, representing user objects stored in mongodb

    def get_all_users(self):
        pp = pprint.PrettyPrinter(indent=4)
        url = f"{self.server_hostname}/user/all"
        r = requests.get(url, headers=self.auth_headers)
        users = json.loads(r.text)
        # pp.pprint(users[0])
        # pp.pprint(users)
        return users
