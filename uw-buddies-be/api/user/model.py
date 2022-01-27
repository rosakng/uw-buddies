from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel, Field
from typing import List


class Education(BaseModel):
    faculty: str
    program: str
    term: str


class Scoring(BaseModel):
    interests: int
    personality: int
    program: int
    faculty: int
    term: int


class Compatibility(BaseModel):
    q1: int


class Questionnaire(BaseModel):
    scoring: Scoring
    interests: List[str]
    compatibility: Compatibility


class User(BaseModel):
    id: str = Field(alias='_id')
    email: str
    name: str
    opted_in: bool
    education: Education
    questionnaire: Questionnaire

    def to_json(self):
        return jsonable_encoder(self, exclude_none=True)

    def to_bson(self):
        data = self.dict(by_alias=True, exclude_none=True)
        return data
