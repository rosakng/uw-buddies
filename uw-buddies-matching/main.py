import sys
import itertools
from heapq import heappush, heappop
from collections import defaultdict
from operator import itemgetter
import pprint

from auth import Auth
from client import Client


import pandas as pd
from util import get_lowest_10_float


class MatchingAlgorithm:

    def __init__(self, users):
        self.users = {}
        for user in users:
            self.users[user['_id']] = user

    def get_common_interests_score(self, user_1, user_2):
        # TODO: update this syntax once data format is finalized
        interests_1 = user_1["questionnaire"]["interests"]
        interests_2 = user_2["questionnaire"]["interests"]

        if not interests_1:
            return 0

        common_interests = set(interests_1).intersection(set(interests_2))

        return len(common_interests) / len(interests_1)

    def get_personality_compatiblity_score(self, user_1, user_2):
        MAX_SCORE = 40

        score_percent_map = {
            "high": 1,
            "good": 0.75,
            "fair": 0.5,
            "low": 0.25
        }

        openness_compat = pd.read_csv("big_5_compat/openness.csv", index_col=0)
        openness_compat.index = openness_compat.index.map(str)

        conscientiousness_compat = pd.read_csv(
            "big_5_compat/conscientiousness.csv", index_col=0)
        conscientiousness_compat.index = conscientiousness_compat.index.map(
            str)

        extroversion_compat = pd.read_csv(
            "big_5_compat/extroversion.csv", index_col=0)
        extroversion_compat.index = extroversion_compat.index.map(str)

        neuroticism_compat = pd.read_csv(
            "big_5_compat/neuroticism.csv", index_col=0)
        neuroticism_compat.index = neuroticism_compat.index.map(str)

        agreeableness_compat = pd.read_csv(
            "big_5_compat/agreeableness.csv", index_col=0)
        agreeableness_compat.index = agreeableness_compat.index.map(str)

        answers_1 = user_1["questionnaire"]["compatibility"]
        answers_2 = user_2["questionnaire"]["compatibility"]

        # OPENNESS
        openness_to_experience_1 = (
            8 +
            answers_1["rich_vocabulary"] -
            answers_1["difficulty_understanding_abstract_ideas"] +
            answers_1["vivid_imagination"] -
            answers_1["not_interested_in_abstract_ideas"] +
            answers_1["excellent_ideas"] -
            answers_1["do_not_have_good_imagination"] +
            answers_1["quick_to_understand_things"] +
            answers_1["difficult_words"] +
            answers_1["spend_time_reflecting"] +
            answers_1["full_of_ideas"]
        )

        openness_to_experience_2 = (
            8 +
            answers_2["rich_vocabulary"] -
            answers_2["difficulty_understanding_abstract_ideas"] +
            answers_2["vivid_imagination"] -
            answers_2["not_interested_in_abstract_ideas"] +
            answers_2["excellent_ideas"] -
            answers_2["do_not_have_good_imagination"] +
            answers_2["quick_to_understand_things"] +
            answers_2["difficult_words"] +
            answers_2["spend_time_reflecting"] +
            answers_2["full_of_ideas"]
        )

        openness_compat_score_percent = score_percent_map[openness_compat.loc[
            str(get_lowest_10_float(openness_to_experience_1, MAX_SCORE)),
            str(get_lowest_10_float(openness_to_experience_2, MAX_SCORE)),
        ]]

        # CONSCIENTIOUSNESS
        conscientiousness_1 = (
            14 +
            answers_1["always_prepared"] -
            answers_1["leave_belongings_around"] +
            answers_1["attention_to_details"] -
            answers_1["make_mess_of_things"] +
            answers_1["get_chores_done_right_away"] -
            answers_1["forget_to_put_things_back"] +
            answers_1["like_order"] -
            answers_1["shirk_duties"] +
            answers_1["follow_schedule"] +
            answers_1["exacting_in_my_work"]
        )

        conscientiousness_2 = (
            14 +
            answers_2["always_prepared"] -
            answers_2["leave_belongings_around"] +
            answers_2["attention_to_details"] -
            answers_2["make_mess_of_things"] +
            answers_2["get_chores_done_right_away"] -
            answers_2["forget_to_put_things_back"] +
            answers_2["like_order"] -
            answers_2["shirk_duties"] +
            answers_2["follow_schedule"] +
            answers_2["exacting_in_my_work"]
        )

        conscientiousness_compat_score_percent = score_percent_map[conscientiousness_compat.loc[
            str(get_lowest_10_float(conscientiousness_1, MAX_SCORE)),
            str(get_lowest_10_float(conscientiousness_2, MAX_SCORE)),
        ]]

        # EXTROVERSION
        extroversion_1 = (
            20 +
            answers_1["always_prepared"] -
            answers_1["not_talk_alot"] +
            answers_1["comfortable_around_people"] -
            answers_1["keep_in_background"] +
            answers_1["start_conversations"] -
            answers_1["little_to_say"] +
            answers_1["talk_to_different_people_at_parties"] -
            answers_1["dont_draw_attention_to_myself"] +
            answers_1["dont_mind_being_center_of_attention"] -
            answers_1["quiet_around_strangers"]
        )

        extroversion_2 = (
            20 +
            answers_2["always_prepared"] -
            answers_2["not_talk_alot"] +
            answers_2["comfortable_around_people"] -
            answers_2["keep_in_background"] +
            answers_2["start_conversations"] -
            answers_2["little_to_say"] +
            answers_2["talk_to_different_people_at_parties"] -
            answers_2["dont_draw_attention_to_myself"] +
            answers_2["dont_mind_being_center_of_attention"] -
            answers_2["quiet_around_strangers"]
        )

        extroversion_compat_score_percent = score_percent_map[extroversion_compat.loc[
            str(get_lowest_10_float(extroversion_1, MAX_SCORE)),
            str(get_lowest_10_float(extroversion_2, MAX_SCORE)),
        ]]

        # AGREEABLENESS
        agreeableness_1 = (
            14 -
            answers_1["little_concern_for_others"] +
            answers_1["interested_in_people"] -
            answers_1["insult_people"] +
            answers_1["sympathize_with_feelings"] -
            answers_1["not_interested_in_other_peoples_problems"] +
            answers_1["soft_heart"] -
            answers_1["not_interested_in_others"] +
            answers_1["take_time_out_for_others"] +
            answers_1["feel_others_emotions"] +
            answers_1["make_people_feel_at_ease"]
        )
        agreeableness_2 = (
            14 -
            answers_2["little_concern_for_others"] +
            answers_2["interested_in_people"] -
            answers_2["insult_people"] +
            answers_2["sympathize_with_feelings"] -
            answers_2["not_interested_in_other_peoples_problems"] +
            answers_2["soft_heart"] -
            answers_2["not_interested_in_others"] +
            answers_2["take_time_out_for_others"] +
            answers_2["feel_others_emotions"] +
            answers_2["make_people_feel_at_ease"]
        )

        agreeableness_compat_score_percent = score_percent_map[agreeableness_compat.loc[
            str(get_lowest_10_float(agreeableness_1, MAX_SCORE)),
            str(get_lowest_10_float(agreeableness_2, MAX_SCORE)),
        ]]

        # NEUROTICISM
        neuroticism_1 = (
            38 -
            answers_1["stressed_out_easily"] +
            answers_1["relaxed_most_of_the_time"] -
            answers_1["worry_about_things"] +
            answers_1["seldom_feel_blue"] -
            answers_1["easily_disturbed"] -
            answers_1["upset_easily"] -
            answers_1["change_mood_alot"] -
            answers_1["frequent_mood_swings"] -
            answers_1["irritated_easily"] -
            answers_1["often_feel_blue"]
        )
        neuroticism_2 = (
            38 -
            answers_2["stressed_out_easily"] +
            answers_2["relaxed_most_of_the_time"] -
            answers_2["worry_about_things"] +
            answers_2["seldom_feel_blue"] -
            answers_2["easily_disturbed"] -
            answers_2["upset_easily"] -
            answers_2["change_mood_alot"] -
            answers_2["frequent_mood_swings"] -
            answers_2["irritated_easily"] -
            answers_2["often_feel_blue"]
        )

        neuroticism_compat_score_percent = score_percent_map[neuroticism_compat.loc[
            str(get_lowest_10_float(neuroticism_1, MAX_SCORE)),
            str(get_lowest_10_float(neuroticism_2, MAX_SCORE)),
        ]]

        personality_compat_score = (
            openness_compat_score_percent +
            conscientiousness_compat_score_percent +
            extroversion_compat_score_percent +
            agreeableness_compat_score_percent +
            neuroticism_compat_score_percent) / 5

        return personality_compat_score

    def get_faculty_score(self, user_1, user_2):
        faculty_1 = user_1["education"]["faculty"]
        faculty_2 = user_2["education"]["faculty"]

        return 1 if faculty_1 == faculty_2 else 0

    def get_program_score(self, user_1, user_2):
        program_1 = user_1["education"]["program"]
        program_2 = user_2["education"]["program"]

        return 1 if program_1 == program_2 else 0

    def get_term_score(self, user_1, user_2):
        term_1 = user_1["education"]["term"]
        term_2 = user_2["education"]["term"]

        return 1 if term_1 == term_2 else 0

    def get_current_coop_status_score(self, user_1, user_2):
        current_coop_status_1 = user_1["education"]["current_coop_status"]
        current_coop_status_2 = user_2["education"]["current_coop_status"]

        return 1 if current_coop_status_1 == current_coop_status_2 else 0

    # takes json loaded user dicts returned by api call to server

    def get_compatibility_score(self, user_1, user_2):
        preferences = user_1["questionnaire"]["scoring"]

        interests_score = preferences["interests"] * \
            self.get_common_interests_score(user_1, user_2)
        personality_score = preferences["personality"] * self.get_personality_compatiblity_score(
            user_1, user_2)
        faculty_score = preferences["program"] * \
            self.get_faculty_score(user_1, user_2)
        program_score = preferences["faculty"] * \
            self.get_program_score(user_1, user_2)
        term_score = preferences["term"] * self.get_term_score(user_1, user_2)
        current_coop_status_score = preferences["current_coop_status"] * self.get_current_coop_status_score(
            user_1, user_2)

        final_score = (
            interests_score +
            personality_score +
            program_score +
            faculty_score +
            term_score +
            current_coop_status_score
        )

        score_tuples = [
            ("interests", interests_score),
            ("personality", personality_score),
            ("faculty", faculty_score),
            ("program", program_score),
            ("term", term_score),
            ("current coop status", current_coop_status_score)
        ]

        # compare on values but return string
        match_basis = max(score_tuples, key=itemgetter(1))[0]

        # get personality score
        return final_score, match_basis

    # useful for experimenting with diff m values later on

    def get_complete_ranked_lists(self, users):
        ranked_lists = defaultdict(list)

        for user_1 in users:
            counter = itertools.count()
            for user_2 in users:
                # ensure no scoring against self
                if user_1 != user_2:
                    # generate tuple to use as priority queue entry
                    count = next(counter)

                    # python heapq is a min heap internally, have to use negative to make it max heap
                    compatibility_score, match_basis = self.get_compatibility_score(
                        user_1, user_2)
                    priority = -1 * compatibility_score
                    entry = (priority, count, user_2['_id'], match_basis)

                    # creates empty list at ranked_lists[user_1] if user_1 key not there
                    # see defaultdict
                    heappush(ranked_lists[user_1['_id']], entry)

        return ranked_lists

    def get_top_m_sets(self, m, users):

        ranked_lists = self.get_complete_ranked_lists(users)

        # get top m
        top_m = defaultdict(set)
        top_m_ids = defaultdict(set)
        for user_1_id, ranking_tuples in ranked_lists.items():
            # edge case where m > number of users in the system
            for _ in range(min(int(m), len(ranking_tuples))):
                user_2 = heappop(ranking_tuples)
                _, _, user_2_id, user_2_match_basis = user_2
                top_m[user_1_id].add((user_2_id, user_2_match_basis))
                top_m_ids[user_1_id].add(user_2_id)

        return top_m, top_m_ids

    def user_id_to_match_dict(self, user_id, match_basis):
        user = self.users[user_id]
        match = {
            "name": user['name'],
            "matchBasis": match_basis,
            "program": user['education']['program'],
            "term": user['education']['term'],
            "current_coop_status": user['education']['current_coop_status'],
            "interests": user['questionnaire']['interests'],
            "instagram": "not available",
            "facebook": "not available",
            "email": user['email'],
            "contactInfoRevealed": bool,
            "reachedOut": bool
        }
        return match

    def get_matches(self, m, users):

        top_m, top_m_ids = self.get_top_m_sets(m, users)

        print(top_m)

        # check every users top m list, identify if they are also in their top m user's list
        matches = defaultdict(list)

        for user_1_id, top_m_set in top_m_ids.items():
            for user_2 in top_m_set:
                if user_1_id in top_m_ids[user_2]:
                    # get match basis
                    match_basis = None
                    for i, t in enumerate(top_m[user_1_id]):
                        if user_2 in t:
                            match_basis = t[1]
                            break
                    match = self.user_id_to_match_dict(
                        user_2, match_basis)
                    matches[user_1_id].append(match)
                    # don't add user 1 to user 2's matches right now,
                    # since we are not using sets bc we are storing user dict as data
                    # we will encounter adding the same person twice if we add user 1 to user 2 matches rn
                    # it will get covered later on

        return matches

    def apply_matches(self, matches, api_client):
        # iterate through matches
        for user_id, match_list in matches.items():
            # convert list to dict by email
            email_to_match_map = {match['email']
                : match for match in match_list}

            existing_match_emails = set(
                [user["email"] for user in self.users[user_id][matches]])
            current_cycle_match_emails = set(
                [user["email"] for user in match_list])

            # find set difference and add to existing match list for user
            new_match_emails = existing_match_emails.difference(
                current_cycle_match_emails)
            for match_email in new_match_emails:
                match_list.append(email_to_match_map[match_email])

            api_client.update_user_match(user_id, match_list)
        return


def main(m):
    pp = pprint.PrettyPrinter(indent=4)
    auth = Auth()
    client = Client(auth)
    users = client.get_all_users()
    matching_algorithm = MatchingAlgorithm(users, client)

    print('-----------------------MATCHES-------------------------')
    matches = matching_algorithm.get_matches(m, users)
    pp.pprint(matches)

    matching_algorithm.apply_matches(matches, client)


if __name__ == "__main__":
    m = sys.argv[1]
    main(m)
