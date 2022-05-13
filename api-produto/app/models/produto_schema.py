from app import ma, db
from app.models.produto import Produto


class produtoSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Produto
        sqla_session = db.session
        load_instance = True

    id = ma.auto_field()
    nome = ma.auto_field()
    preco = ma.auto_field()
    quantidade = ma.auto_field()