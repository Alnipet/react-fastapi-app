from typing import List

from fastapi import APIRouter, Body, status

from models.evaluation import EvaluationCreate, EvaluationPublic, EvaluationAggregate

router = APIRouter()


@router.post(
    "/{cleaning_id}/",
    response_model=EvaluationPublic,
    name="evaluations:create-evaluation-for-cleaner",
    status_code=status.HTTP_201_CREATED,
)
async def create_evaluation_for_cleaner(
    evaluation_create: EvaluationCreate = Body(..., embed=True),
) -> EvaluationPublic:
    return None


@router.get(
    "/",
    response_model=List[EvaluationPublic],
    name="evaluations:list-evaluations-for-cleaner",
)
async def list_evaluations_for_cleaner() -> List[EvaluationPublic]:
    return None


@router.get(
    "/stats/", response_model=EvaluationAggregate, name="evaluations:get-stats-for-cleaner",
)
async def get_stats_for_cleaner() -> EvaluationAggregate:
    return None


@router.get(
    "/{cleaning_id}/",
    response_model=EvaluationPublic,
    name="evaluations:get-evaluation-for-cleaner",
)
async def get_evaluation_for_cleaner() -> EvaluationPublic:
    return None
