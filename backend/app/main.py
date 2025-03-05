from fastapi import FastAPI
from app.routes import workout, feedback

app = FastAPI(title="Gym trainer app")

app.include_router(workout.router, prefix="/api/workout", tags=["Workout"])
app.include_router(feedback.router, prefix="/api/feedback", tags=["Feedback"])


@app.get("/")
async def root():
    return {"message": "Welcome to the Gym Trainer App"}
