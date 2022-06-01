
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow



app = Flask(__name__)
app.config.from_object('config')

db = SQLAlchemy(app)
ma = Marshmallow(app)

CORS(app)


# Importa classes de modelo
from app.models import produto
db.create_all()

# Importa classes controladoras
from app.controllers.produto_controller import ProdutoController
app.register_blueprint(ProdutoController.produto_controller, url_prefix="/api/v1/")