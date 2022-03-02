from databases import Database

from db.repositories.base import BaseRepository
from db.repositories.offers import OffersRepository


class EvaluationsRepository(BaseRepository):
    def __init__(self, db: Database) -> None:
        super().__init__(db)
        self.offers_repo = OffersRepository(db)
