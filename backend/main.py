from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database.database import Base, engine

from models.user import User
from models.profile import Profile
from models.goal import Goal
from models.food import Food
from models.food_history import FoodHistory
from models.water_intake import WaterIntake
from models.meal_plan import MealPlan

from routers.user import router as user_router
from routers.auth import router as auth_router
from routers.food import router as food_router
from routers.food_history import router as food_history_router
from routers.goal import router as goal_router
from routers.meal_plan import router as meal_plan_router
from routers.water_intake import router as water_intake_router

Base.metadata.create_all(bind=engine)


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(user_router)
app.include_router(auth_router)
app.include_router(food_router)
app.include_router(food_history_router)
app.include_router(goal_router)
app.include_router(meal_plan_router)
app.include_router(water_intake_router)

@app.get("/")
def home():
    return {"message": "NutriWise Backend is running!"}