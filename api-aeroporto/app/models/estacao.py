from sqlalchemy import Column, BigInteger, String, Integer, Numeric, DateTime, CheckConstraint
from sqlalchemy.sql.functions import current_timestamp

from app import db


class Estacoes(db.Model):

    __tablename__ = 'Estacoes'

    id_estacao = Column(BigInteger, primary_key=True)
    nome_estacao = Column(String(128), nullable=False)
    cod_regiao = Column(String(128), nullable=False)
    uf = Column(String(128), nullable=False)
    codigo_wmo = Column(String(128), nullable=False)
  
    criado_em = Column(DateTime, server_default=current_timestamp())
    modificado_em = Column(
        DateTime,
        server_default=current_timestamp(),
        onupdate=current_timestamp())

    def __init__(self, nome_estacao: str = "", cod_regiao: str = "", uf: str = "", codigo_wmo: str = "", ) -> None:
        self.nome_estacao = nome_estacao
        self.cod_regiao = cod_regiao
        self.uf = uf
        self.codigo_wmo = codigo_wmo

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    def __repr__(self):
        return f'<Estacao: {self.nome}>'
