import pytest
from fastapi import FastAPI, status
from httpx import AsyncClient

pytestmark = pytest.mark.asyncio


class TestEvaluationRoutes:
    async def test_routes_exist(self, app: FastAPI, client: AsyncClient) -> None:
        res = await client.post(
            app.url_path_for("evaluations:create-evaluation-for-cleaner", cleaning_id=1, username="bradpitt")
        )
        assert res.status_code != status.HTTP_404_NOT_FOUND
        res = await client.get(
            app.url_path_for("evaluations:get-evaluation-for-cleaner", cleaning_id=1, username="bradpitt")
        )
        assert res.status_code != status.HTTP_404_NOT_FOUND
        res = await client.get(app.url_path_for("evaluations:list-evaluations-for-cleaner", username="bradpitt"))
        assert res.status_code != status.HTTP_404_NOT_FOUND
        res = await client.get(app.url_path_for("evaluations:get-stats-for-cleaner", username="bradpitt"))
        assert res.status_code != status.HTTP_404_NOT_FOUND
