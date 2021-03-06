from fastapi import APIRouter

from .cleanings import router as cleanings_router
from .evaluations import router as evaluations_router
from .offers import router as offers_router
from .profiles import router as profiles_router
from .users import router as users_router

router = APIRouter()

router.include_router(cleanings_router, prefix="/cleanings", tags=["cleanings"])
router.include_router(users_router, prefix="/users", tags=["users"])
router.include_router(profiles_router, prefix="/profiles", tags=["profiles"])
router.include_router(offers_router, prefix="/cleanings/{cleaning_id}/offers", tags=["offers"])
router.include_router(evaluations_router, prefix="/users/{username}/evaluations", tags=["evaluations"])
