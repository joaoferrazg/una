from sqlalchemy import Column, BigInteger, CheckConstraint, Integer, DateTime, String, Numeric
from sqlalchemy.sql.functions import current_timestamp

from app import db


class Produto(db.Model):

    __tablename__ = 'Produto'

    id = Column(BigInteger, primary_key=True)
    nome = Column(String(128), nullable=False)
    preco = Column(Numeric(10, 2), CheckConstraint('preco >= 0.0'), nullable=False, server_default="0.0")
    quantidade = Column(Integer, CheckConstraint('quantidade >= 0.0'), nullable=False, server_default="0.0")

    criado_em = Column(DateTime, server_default=current_timestamp())
    modificado_em = Column(
        DateTime,
        server_default=current_timestamp(),
        onupdate=current_timestamp
    )

    def __init__(self, nome:str = "", preco: float = 0.0, quantidade: int = 0) -> None:
        self.nome = nome
        self.preco = preco
        self.quantidade = quantidade

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self
    def __repr__(self):
        return f'<Produto: {self.nome}>'