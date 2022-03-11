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
    interests: str
    instagram: Optional[str]
    facebook: Optional[str]
    email: str
    contactInfoRevealed: bool
    reachedOut: bool


class Education(BaseModel):
    faculty: str
    program: str
    term: str
    stream: int
    current_coop_status: str


class Scoring(BaseModel):
    interests: int
    personality: int
    program: int
    faculty: int
    term: int
    current_coop_status: int


class Compatibility(BaseModel):
    life_of_the_party: Optional[int]
    little_concern_for_others: Optional[int]
    always_prepared: Optional[int]
    stressed_out_easily: Optional[int]
    rich_vocabulary: Optional[int]
    not_talk_alot: Optional[int]
    interested_in_people: Optional[int]
    leave_belongings_around: Optional[int]
    relaxed_most_of_the_time: Optional[int]
    difficulty_understanding_abstract_ideas: Optional[int]
    comfortable_around_people: Optional[int]
    insult_people: Optional[int]
    attention_to_details: Optional[int]
    worry_about_things: Optional[int]
    vivid_imagination: Optional[int]
    keep_in_background: Optional[int]
    sympathize_with_feelings: Optional[int]
    make_mess_of_things: Optional[int]
    seldom_feel_blue: Optional[int]
    not_interested_in_abstract_ideas: Optional[int]
    start_conversations: Optional[int]
    not_interested_in_other_peoples_problems: Optional[int]
    get_chores_done_right_away: Optional[int]
    easily_disturbed: Optional[int]
    excellent_ideas: Optional[int]
    little_to_say: Optional[int]
    soft_heart: Optional[int]
    forget_to_put_things_back: Optional[int]
    upset_easily: Optional[int]
    do_not_have_good_imagination: Optional[int]
    talk_to_different_people_at_parties: Optional[int]
    not_interested_in_others: Optional[int]
    like_order: Optional[int]
    change_mood_alot: Optional[int]
    quick_to_understand_things: Optional[int]
    dont_draw_attention_to_myself: Optional[int]
    take_time_out_for_others: Optional[int]
    shirk_duties: Optional[int]
    frequent_mood_swings: Optional[int]
    difficult_words: Optional[int]
    dont_mind_being_center_of_attention: Optional[int]
    feel_others_emotions: Optional[int]
    follow_schedule: Optional[int]
    irritated_easily: Optional[int]
    spend_time_reflecting: Optional[int]
    quiet_around_strangers: Optional[int]
    make_people_feel_at_ease: Optional[int]
    exacting_in_my_work: Optional[int]
    often_feel_blue: Optional[int]
    full_of_ideas: Optional[int]


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
