from typing import List
from pydantic import BaseModel

class IntakeFormResponse(BaseModel):
    question: str
    answer: List[str]
    
class IntakeFormResponses(BaseModel):
    responses: List[IntakeFormResponse]