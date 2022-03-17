import json

import requests
import pprint


class Client:
    def __init__(self, auth):
        self.server_hostname = "http://10.0.0.117:5000/api"
        # self.server_hostname = "https://uwbuddies-be.herokuapp.com/api"
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

    def update_user_match(self, user_id, matches):
        url = f"{self.server_hostname}/user/matches/new"
        payload = {
            "user_id": user_id,
            "entire_match_list": matches}

        r = requests.put(url, json=payload, headers=self.auth_headers)
        if r.status_code != 200:
            print(r.status_code)
            print(r.reason)
            return

        print(f"Successfully updated matches for user_id {user_id}")


# {"user_id": "auth0|621942d56b4ea800680d2df0",
# "entire_match_list": [
#     {"name": "Bill Sheng",
#     "matchBasis": "program",
#     "program": "Management Engineering",
#     "term": "4B",
#     "current_coop_status": "I'm on a study term right now",
#     "email": "bxsheng@uwaterloo.ca",
#     "contactInfoRevealed": false,
#     "reachedOut": false,
#     "interests": ["Making content", "Vegetarian", "Museums & galleries", "Action", "Folk & acoustic", "Birds", "Skateboarding", "Cooking", "Fishing trips", "Nature"]}]}
