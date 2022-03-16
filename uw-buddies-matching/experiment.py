# Experiment framework
import sys
import random
from enum import Enum
import uuid
import time
import statistics

from main import MatchingAlgorithm

import pandas as pd


# M values to test
M_2 = 2
M_5 = 5
M_10 = 10
M_15 = 15
M_20 = 20
M_50 = 50


# Range 0, 0.25, 0.5, 0.75, 1 (maps to 0,1,2,3,4)
SCORE_WEIGHTS = {
    0: 1,
    1: 0.25,
    2: 0.5,
    3: 0.75,
    4: 1
}

ACADEMIC_TERM_CHOICES = ["1A", "1B", "2A", "2B", "3A", "3B", "4A",
                         "4B", "Undergraduate Year 4C+ or above", "Masters", "Doctorial"]

FACULTY_CHOICES = ["Arts", "Engineering",
                   "Environment", "Health", "Mathematics", "Science"]

PROGRAM_CHOICES = {
    "Arts": ["Accounting and Financial Management", "Anthropology", "Classical Studies", "Communication Studies",
             "Computing and Financial Management", "Economics", "English", "Fine Arts", "French", "Gender and Social Justice",
             "German", "Global Business and Digital Arts", "History", "Honours Arts", "Honours Arts and Business",
             "Legal Studies", "Liberal Studies", "Medieval Studies", "Music", "Peace and Conflict Studies", "Philosophy",
             "Political Science", "Psychology", "Religious Studies", "Sexuality, Marriage, and Family Studies", "Social Development Studies",
             "Social Work", "Sociology", "Spanish", "Sustainability and Financial Management", "Theatre and Performance"],

    "Engineering": ["Architectural Engineering", "Architecture", "Biomedical Engineering", "Chemical Engineering", "Civil Engineering",
                    "Computer Engineering", "Electrical Engineering", "Environmental Engineering", "Geological Engineering",
                    "Management Engineering", "Mechanical Engineering", "Mechatronics Engineering", "Nanotechnology Engineering",
                    "Software Engineering", "Systems Design Engineering"],

    "Environment": ["Climate and Environmental Change", "Environment and Business", "Environment, Resources and Sustainability",
                    "Geography and Aviation", "Geography and Environmental Management", "Geomatics", "International Development",
                    "Knowledge Integration", "Planning", "Sustainability and Financial Management"],

    "Health": ["Health Sciences", "Kinesiology", "Public Health", "Recreation and Leisure Studies", "Recreation and Sport Business", "Therapeutic Recreation"],

    "Mathematics": ["Actuarial Science", "Applied Mathematics", "Biostatistics", "Business Administration (Laurier) and Computer Science (Waterloo) Double Degree",
                    "Business Administration (Laurier) and Mathematics (Waterloo) Double Degree", "Combinatorics and Optimization", "Computational Mathematics", "Computer Science",
                    "Computing and Financial Management", "Data Science", "Information Technology Management", "Mathematical Economics", "Mathematical Finance", "Mathematical Optimization",
                    "Mathematical Physics", "Mathematical Studies", "Mathematics", "Mathematics/Business Administration", "Mathematics/Chartered Professional Accountancy",
                    "Mathematics/Financial Analysis and Risk Management", "Mathematics Teaching", "Pure Mathematics", "Statistics"],

    "Science": ["Biochemistry", "Biology", "Biomedical Sciences", "Biotechnology/Chartered Professional Accountancy", "Chemistry", "Earth Sciences", "Environmental Science",
                "Honours Science", "Life Physics", "Life Sciences", "Physical Sciences", "Psychology", "Materials and Nanosciences", "Mathematical Physics", "Medicinal Chemistry",
                "Optometry", "Pharmacy", "Physics", "Physics and Astronomy", "Science and Aviation", "Science and Business"],
}


CURRENT_COOP_CHOICES = ["I\"m on co-op right now",
                        "I\"m on a study term right now", "I\"m not in a co-op program"]


INTERESTS_CHOICES = {
    "creativity": ["Art", "Design", "Make-up", "Photography", "Writing", "Singing", "Dancing", "Crafts", "Making content"],
    "food": ["Vegan", "Pizza", "Vegetarian", "Foodie", "Sweet tooth", "Baking", "Brunch", "Cooking", "Eating out", "Health foods", "Sushi"],
    "goingOut": ["Concerts", "Stand up", "Festivals", "Museums & galleries", "Theatre", "Nightclubs", "Bars", "Book clubs", "Cinema", "Nature", "Picnics", "Coffee chats", "Karaoke"],
    "movies": ["Comedy", "Drama", "Horror", "Fantasy", "Sci-fi", "Rom-com", "Bollywood", "Indie", "Action", "K-drama"],
    "music": ["Hip hop", "Rock", "Electronic", "R&B", "Classical", "Country", "Jazz", "Soul", "Folk & acoustic", "Afro", "Arab", "Reggae", "Metal", "Blues", "Punk", "Latin", "Funk", "Pop", "Techno", "House", "Rap", "Indie", "80s", "90s", "00s"],
    "pets": ["Dogs", "Cats", "Rabbits", "Birds", "Snakes", "Lizards", "Turtles", "Fish", "Hamsters", "Horses"],
    "sportsFitness": ["Gym", "HIIT", "Hiking", "Pilates", "Running", "Spin", "Walking", "Yoga", "Badminton", "Baseball", "Basketball", "Bowling", "Boxing", "Curling", "Cycling", "Football", "Go karting", "Golf", "Gymnastics", "Handball", "Hockey", "Horse riding", "Martial arts", "Ping pong", "Rock climbing", "Roller blading", "Rowing", "Rugby", "Skateboarding", "Skiing", "Snowboarding", "Soccer", "Surfing", "Swimming", "Tennis", "Ultimate"],
    "stayingIn": ["Board games", "Gardening", "Cooking", "Takeout", "Gaming", "TV", "Movie nights", "Reading"],
    "travelling": ["Beaches", "Winter sports", "Camping", "Backpacking", "Hiking trips", "Road trips", "City breaks", "Staycations", "Fishing trips"],
    "wellness": ["Aromatherapy", "ASMR", "Meditation", "Nature", "Organic", "Plants", "Self care", "Spa weekends", "Yoga", "Journaling"],
}


def generate_preference_scoring_data(user):
    scoring = {
        "interests": SCORE_WEIGHTS[random.randint(0, 1)],
        "personality": SCORE_WEIGHTS[random.randint(0, 1)],
        "program": SCORE_WEIGHTS[random.randint(0, 1)],
        "faculty": SCORE_WEIGHTS[random.randint(0, 1)],
        "term": SCORE_WEIGHTS[random.randint(0, 1)],
        "current_coop_status": SCORE_WEIGHTS[random.randint(0, 1)]
    }

    user["questionnaire"]["scoring"] = scoring


# personality quiz answers: 1-5 inclusive
def generate_personality_data(user):
    compatibility = {
        "life_of_the_party": random.randint(1, 5),
        "little_concern_for_others": random.randint(1, 5),
        "always_prepared": random.randint(1, 5),
        "stressed_out_easily": random.randint(1, 5),
        "rich_vocabulary": random.randint(1, 5),
        "not_talk_alot": random.randint(1, 5),
        "interested_in_people": random.randint(1, 5),
        "leave_belongings_around": random.randint(1, 5),
        "relaxed_most_of_the_time": random.randint(1, 5),
        "difficulty_understanding_abstract_ideas": random.randint(1, 5),
        "comfortable_around_people": random.randint(1, 5),
        "insult_people": random.randint(1, 5),
        "attention_to_details": random.randint(1, 5),
        "worry_about_things": random.randint(1, 5),
        "vivid_imagination": random.randint(1, 5),
        "keep_in_background": random.randint(1, 5),
        "sympathize_with_feelings": random.randint(1, 5),
        "make_mess_of_things": random.randint(1, 5),
        "seldom_feel_blue": random.randint(1, 5),
        "not_interested_in_abstract_ideas": random.randint(1, 5),
        "start_conversations": random.randint(1, 5),
        "not_interested_in_other_peoples_problems": random.randint(1, 5),
        "get_chores_done_right_away": random.randint(1, 5),
        "easily_disturbed": random.randint(1, 5),
        "excellent_ideas": random.randint(1, 5),
        "little_to_say": random.randint(1, 5),
        "soft_heart": random.randint(1, 5),
        "forget_to_put_things_back": random.randint(1, 5),
        "upset_easily": random.randint(1, 5),
        "do_not_have_good_imagination": random.randint(1, 5),
        "talk_to_different_people_at_parties": random.randint(1, 5),
        "not_interested_in_others": random.randint(1, 5),
        "like_order": random.randint(1, 5),
        "change_mood_alot": random.randint(1, 5),
        "quick_to_understand_things": random.randint(1, 5),
        "dont_draw_attention_to_myself": random.randint(1, 5),
        "take_time_out_for_others": random.randint(1, 5),
        "shirk_duties": random.randint(1, 5),
        "frequent_mood_swings": random.randint(1, 5),
        "difficult_words": random.randint(1, 5),
        "dont_mind_being_center_of_attention": random.randint(1, 5),
        "feel_others_emotions": random.randint(1, 5),
        "follow_schedule": random.randint(1, 5),
        "irritated_easily": random.randint(1, 5),
        "spend_time_reflecting": random.randint(1, 5),
        "quiet_around_strangers": random.randint(1, 5),
        "make_people_feel_at_ease": random.randint(1, 5),
        "exacting_in_my_work": random.randint(1, 5),
        "often_feel_blue": random.randint(1, 5),
        "full_of_ideas": random.randint(1, 5),
    }
    user["questionnaire"]["compatibility"] = compatibility

    return user


# interests
def generate_interest_data(user):
    interests = []
    for category, choice_list in INTERESTS_CHOICES.items():
        # generate random number of interests to select
        max_selections = len(choice_list)
        num_selections = random.randint(0, max_selections)

        # randomly select random number of interests then append to interests array
        interests += (random.sample(choice_list, num_selections))

    user["questionnaire"]["interests"] = interests


# education
def generate_education_data(user):
    user_term = random.choice(ACADEMIC_TERM_CHOICES)
    user_faculty = random.choice(FACULTY_CHOICES)
    user_program = random.choice(PROGRAM_CHOICES[user_faculty])
    user_current_coop_status = random.choice(CURRENT_COOP_CHOICES)

    education = {
        "faculty": user_faculty,
        "program": user_program,
        "term": user_term,
        "current_coop_status": user_current_coop_status
    }

    user["education"] = education

    return user


def generate_user_personal_info(user):

    # uuid4 generates a random uuid
    user["_id"] = uuid.uuid4()
    user["name"] = uuid.uuid4()
    user["email"] = f"{user['name']}@uwaterloo.ca"
    user["opted_in"] = True

    return user


def get_blank_user():
    user = {
        "education": {},
        "questionnaire": {},
    }

    return user


# generate n random questionnaires and users
def generate_users(n):
    users = []
    for _ in range(n):
        user = get_blank_user()
        generate_user_personal_info(user)
        generate_education_data(user)
        generate_interest_data(user)
        generate_personality_data(user)
        generate_preference_scoring_data(user)

        print(user)
        users.append(user)
    return users

# match generated users based on multiple different m


# run matching algorithm experiment using provided m level and record metrics of run
def get_metrics(m, users, matching_algorithm):
    # total time to completion
    t0 = time.time()
    matches = matching_algorithm.get_matches(m, users)
    t1 = time.time()

    total_time = t1-t0
    # average time per user to get matches -> time / number of users
    average_time_per_user = total_time / len(users)

    # users with at least one match
    num_matches = [len(user_matches)
                   for user_id, user_matches in matches.items()]
    num_at_least_one_match = len([num for num in num_matches if num >= 1])

    # percent user with at least one match
    percent_at_least_one_match = num_at_least_one_match / len(users)

    # average number of matches per user
    average_num_matches = statistics.mean(num_matches)

    max_num_matches = max(num_matches)

    metrics = {
        "number of users": len(users),
        "M value being tested": m,
        "time to completion": total_time,
        "average time per user": average_time_per_user,
        "percentage of users with at least one match": percent_at_least_one_match,
        "average number of matches": average_num_matches,
        "maximum number of matches": max_num_matches
    }

    return metrics


def main(n):
    # get randomized users and questionnaire values
    print(f"generating {n} random users")
    users = generate_users(n)

    matching_algorithm = MatchingAlgorithm(users)

    # test multiple m values on get_matches method

    print(f"running test with M = {M_2}")
    m2_metrics = get_metrics(M_2, users, matching_algorithm)

    print(f"running test with M = {M_5}")
    m5_metrics = get_metrics(M_5, users, matching_algorithm)

    print(f"running test with M = {M_10}")
    m10_metrics = get_metrics(M_10, users, matching_algorithm)

    print(f"running test with M = {M_15}")
    m15_metrics = get_metrics(M_15, users, matching_algorithm)

    print(f"running test with M = {M_20}")
    m20_metrics = get_metrics(M_20, users, matching_algorithm)

    print(f"running test with M = {M_50}")
    m50_metrics = get_metrics(M_50, users, matching_algorithm)

    print("completed tests")
    print(f"saving results to experiment_metrics_with_{n}_users.csv")
    metrics_df = pd.DataFrame(
        [m2_metrics, m5_metrics, m10_metrics, m15_metrics, m20_metrics, m50_metrics])

    metrics_df.to_csv(f"experiment_metrics_with_{n}_users.csv", index=False)
    print(f"results available at experiment_metrics_with_{n}_users.csv")


if __name__ == "__main__":
    n = int(sys.argv[1])
    main(n)
