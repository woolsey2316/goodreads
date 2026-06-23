import jwt
from datetime import datetime, timedelta, timezone

from django.conf import settings
from django.contrib.auth.hashers import check_password, make_password

from books.models import GoodreadsUser

JWT_ALGORITHM = "HS256"
JWT_EXPIRY_HOURS = 24


def hash_password(password: str) -> str:
    return make_password(password)


def verify_password(password: str, hashed: str) -> bool:
    return check_password(password, hashed)


def create_token(user: GoodreadsUser) -> str:
    now = datetime.now(timezone.utc)
    payload = {
        "user_id": user.user_id,
        "username": user.username,
        "exp": now + timedelta(hours=JWT_EXPIRY_HOURS),
        "iat": now,
    }
    return jwt.encode(payload, settings.SECRET_KEY, algorithm=JWT_ALGORITHM)


def decode_token(token: str) -> dict | None:
    try:
        return jwt.decode(token, settings.SECRET_KEY, algorithms=[JWT_ALGORITHM])
    except jwt.InvalidTokenError:
        return None


def get_user_from_request(request) -> GoodreadsUser | None:
    auth_header = request.headers.get("Authorization", "")
    if not auth_header.startswith("Bearer "):
        return None

    payload = decode_token(auth_header[7:])
    if payload is None:
        return None

    try:
        return GoodreadsUser.objects.get(user_id=payload["user_id"])
    except GoodreadsUser.DoesNotExist:
        return None
