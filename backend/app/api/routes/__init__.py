from fastapi import APIRouter

from .cleanings import router as cleanings_router
from .profiles import router as profiles_router
from .users import router as users_router

router = APIRouter()

router.include_router(cleanings_router, prefix="/cleanings", tags=["cleanings"])
router.include_router(users_router, prefix="/users", tags=["users"])
router.include_router(profiles_router, prefix="/profiles", tags=["profiles"])
