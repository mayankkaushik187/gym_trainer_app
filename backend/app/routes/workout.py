from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List
from db.supabase import supabase
from utils.constants import MUSCLE_GAIN

router = APIRouter()


class Goal(BaseModel):
    goal_type: str
    experience_level: str
    available_equipments: List[str] = []


class WorkoutPlan(BaseModel):
    exercises: List[str]
    duration: int


@router.get("/plans")
async def get_workout_plans():
    response = supabase.table("Workout_Plans").select("*").execute()
    print(response)
    return response


@router.post("/insert")
async def insert_workout_plan(data: WorkoutPlan):
    response = supabase.table("Workout_Plans").insert(data.dict()).execute()
    return {"status": "success", "repsonse": response}


@router.post("/", response_model=WorkoutPlan)
async def generate_workout(goal: Goal):
    if goal.goal_type.lower() == MUSCLE_GAIN:
        exercises = ["Squats", "Bench Press", "Deadlifts"]
        duration = 60
    else:
        exercises = ["Jogging", "Bodyweight Circuit", "Yoga"]
        duration = 45
    plan = WorkoutPlan(exercises=exercises, duration=duration)
    return plan
