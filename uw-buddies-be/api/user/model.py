from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder


class User(BaseModel):
    _id: str
    email: str

    def to_json(self):
        return jsonable_encoder(self, exclude_none=True)
