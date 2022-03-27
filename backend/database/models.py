from typing import Optional
from bson import ObjectId
from time import time

from pydantic import BaseModel,Field

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate
    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)
    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")

class User(BaseModel):
    
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    full_name:str = Field(...)
    user_type:str = Field(...)
    wallet:str = Field(...,max_length=256)
    public_key:Optional[str] = None
    
    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "full_name": "Jane Doe",
                "user_type":"doctor",
                "wallet":"0x2njknjh",
                "public_key":"oiewfhnwnbiub"
            }
        }

    
class Reports(BaseModel):
    
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    hospital:Optional[str] = Field(...,max_length=256) 
    patient:Optional[str] = Field(...,max_length=256)
    contract:str = Field(...,max_length=256)
    date:Optional[float] = time()
    
    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        
        schema_extra = {
            "example": {
                "hospital": "Jane Doe",
                "patient":"doctor",
                "contract":"0x2njknjh",
                "datetime":651644165.4651
            }
        }

    