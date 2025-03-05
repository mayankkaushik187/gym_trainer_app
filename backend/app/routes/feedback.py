from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class Feedback(BaseModel):
    energy: int
    fatigue: int
    soreness: int
    comments: str = ""


@router.post("/")
async def submit_feedback(feedback: Feedback):
    return {"status": "Feedback received", "feedback": feedback}
