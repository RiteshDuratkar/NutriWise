import os

from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Depends, HTTPException, File, UploadFile

# Load environment variables from .env
load_dotenv()
from database.database import SessionLocal



# AI model imports
from transformers import pipeline
from PIL import Image

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


# ============================================================
# CORS CONFIGURATION
# ============================================================

frontend_url = os.getenv(
    "FRONTEND_URL",
    "http://localhost:5173"
)

allowed_origins = [
    "http://localhost:5173"
]

if frontend_url and frontend_url not in allowed_origins:
    allowed_origins.append(frontend_url)


app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ============================================================
# AI FOOD RECOGNITION MODEL
# ============================================================

print("Loading food recognition AI model...")

food_classifier = pipeline(
    "image-classification",
    model="nateraw/food",
)

print("Food recognition AI model loaded successfully!")


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

@app.post("/ai/analyze-food")
async def analyze_food_image(file: UploadFile = File(...)):
    db = SessionLocal()

    try:
        # Read uploaded image
        image_bytes = await file.read()

        # Open image using PIL
        from io import BytesIO

        image = Image.open(BytesIO(image_bytes)).convert("RGB")

        # Run AI food recognition
        results = food_classifier(image)

        # Get top prediction
        top_result = results[0]

        detected_food = top_result["label"]
        confidence = top_result["score"]

        # Search nutrition database for detected food
        food = (
            db.query(Food)
            .filter(Food.name.ilike(detected_food))
            .first()
        )

        return {
            "success": True,
            "food": detected_food,
            "confidence": round(confidence, 4),

            "nutrition": (
                {
                    "id": food.id,
                    "name": food.name,
                    "category": food.category,
                    "serving_size": food.serving_size,
                    "serving_unit": food.serving_unit,
                    "calories": food.calories,
                    "protein": food.protein,
                    "carbohydrates": food.carbohydrates,
                    "fat": food.fat,
                    "sugar": food.sugar,
                    "fiber": food.fiber,
                }
                if food else None
            ),

            "predictions": [
                {
                    "food": result["label"],
                    "confidence": round(result["score"], 4)
                }
                for result in results[:5]
            ]
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }

    finally:
        db.close()