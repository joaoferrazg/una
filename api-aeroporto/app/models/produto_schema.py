from app import ma, db
from app.models.estacao import Estacoes


class EstacaoSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Estacoes
        sqla_session = db.session
        load_instance = True

    id = ma.auto_field()
    nome_estacao = ma.auto_field()
    cod_regiao = ma.auto_field()
    uf = ma.auto_field()
    codigo_wmo = ma.auto_field()