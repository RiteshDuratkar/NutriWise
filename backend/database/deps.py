from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from sqlalchemy.orm import Session

from database.database import SessionLocal
from models.user import User
from auth import SECRET_KEY, ALGORITHM


oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/auth/login"
)


def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
):

    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={
            "WWW-Authenticate": "Bearer"
        }
    )

    try:
        print("DEBUG TOKEN RECEIVED:", token[:20] + "...")
        print("DEBUG SECRET KEY:", SECRET_KEY)
        print("DEBUG ALGORITHM:", ALGORITHM)

        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        print("DEBUG JWT PAYLOAD:", payload)

        user_id = payload.get("sub")

        if user_id is None:
            print("DEBUG ERROR: sub is missing")
            raise credentials_exception

        user_id = int(user_id)

        print("DEBUG USER ID:", user_id)

    except (JWTError, ValueError) as e:
        print("DEBUG JWT ERROR:", repr(e))
        raise credentials_exception

    user = (
        db.query(User)
        .filter(User.id == user_id)
        .first()
    )

    if user is None:
        raise credentials_exception

    return user