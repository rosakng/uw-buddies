from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel, Field
from typing import List, Optional

"""
Define user collection schema persisted in Mongo
"""

class Match(BaseModel):
    name: str
    matchBasis: str
    program: str
    term: str
    current_coop_status: str
    interests: Optional[List[str]]
    instagram: Optional[str]
    facebook: Optional[str]
    email: str
    contactInfoRevealed: bool
    reachedOut: bool


class Education(BaseModel):
    faculty: str
    program: str
    term: str
    current_coop_status: str


class Scoring(BaseModel):
    interests: int
    personality: int
    program: int
    faculty: int
    term: int
    current_coop_status: int


class Compatibility(BaseModel):
    life_of_the_party: int
    little_concern_for_others: int
    always_prepared: int
    stressed_out_easily: int
    rich_vocabulary: int
    not_talk_alot: int
    interested_in_people: int
    leave_belongings_around: int
    relaxed_most_of_the_time: int
    difficulty_understanding_abstract_ideas: int
    comfortable_around_people: int
    insult_people: int
    attention_to_details: int
    worry_about_things: int
    vivid_imagination: int
    keep_in_background: int
    sympathize_with_feelings: int
    make_mess_of_things: int
    seldom_feel_blue: int
    not_interested_in_abstract_ideas: int
    start_conversations: int
    not_interested_in_other_peoples_problems: int
    get_chores_done_right_away: int
    easily_disturbed: int
    excellent_ideas: int
    little_to_say: int
    soft_heart: int
    forget_to_put_things_back: int
    upset_easily: int
    do_not_have_good_imagination: int
    talk_to_different_people_at_parties: int
    not_interested_in_others: int
    like_order: int
    change_mood_alot: int
    quick_to_understand_things: int
    dont_draw_attention_to_myself: int
    take_time_out_for_others: int
    shirk_duties: int
    frequent_mood_swings: int
    difficult_words: int
    dont_mind_being_center_of_attention: int
    feel_others_emotions: int
    follow_schedule: int
    irritated_easily: int
    spend_time_reflecting: int
    quiet_around_strangers: int
    make_people_feel_at_ease: int
    exacting_in_my_work: int
    often_feel_blue: int
    full_of_ideas: int


class Questionnaire(BaseModel):
    scoring: Scoring
    interests: Optional[List[str]]
    compatibility: Compatibility
    survey_sentiment: Optional[int]


class User(BaseModel):
    id: str = Field(alias='_id')
    email: str
    name: str
    opted_in: bool
    education: Education
    questionnaire: Questionnaire
    matches: Optional[List[Match]]

    def to_json(self):
        return jsonable_encoder(self, exclude_none=True)

    def to_bson(self):
        data = self.dict(by_alias=True, exclude_none=True)
        return data
