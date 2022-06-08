from flask import Blueprint, make_response, jsonify, request

from app import db
from app.models.estacao import Estacoes
from app.models.estacao_schema import EstacaoSchema


class EstacaoController:

    estacao_controller = Blueprint(name='estacao_controller', import_name=__name__)

    @estacao_controller.route('/estacoes', methods=['GET'])
    def index():
        lista_de_estacoes = Estacoes.query.all()
        estacao_schema = EstacaoSchema(many=True)
        estacoes = estacao_schema.dump(lista_de_estacoes)

        return make_response(jsonify({
            "estacoes": estacoes
        }))

    @estacao_controller.route('/estacoes/<id>', methods=['GET'])
    def get_produto(id):

        estacao = Produto.query.get(id)
        estacao_schema = ProdutoSchema()
        estacoes = estacao_schema.dump(estacao)

        return make_response(jsonify({
            "estacoes": estacoes
        }))

    @estacao_controller.route('/estacoes', methods=['POST'])
    def create():
        dados = request.get_json()
        estacao_schema = EstacaoSchema()
        estacaoObjeto = estacao_schema.load(dados)

        estacao = produto_schema.dump(estacaoObjeto.create())

        return make_response(jsonify({
            "estacao": estacao
        }), 201)

   
    @estacao_controller.route('/estacoes/<id>', methods=['PUT'])
    def update(id):

        estacao = Estacoes.query.get(id)
        dados = request.get_json().get('estacoes')

        estacao_schema = EstacaoSchema()

        if dados.get('nome_estacao'):
            estacao.nome_estacao = dados['nome_estacao']

        if dados.get('cod_regiao'):
            estacao.cod_regiao = dados['cod_regiao']

        if dados.get('uf'):
            estacao.uf = dados['uf']

        if dados.get('codigo_wmo'):
            estacao.codigo_wmo = dados['codigo_wmo']

        db.session.add(estacao)
        db.session.commit()

        estacao_atualizada = estacao_schema.dump(estacao)

        return make_response(jsonify({
            "estacao": estacao_atualizada
        }), 200)

    @estacao_controller.route('/estacoes/<id>', methods=['DELETE'])
    def delete(id):
        estacao = Estacoes().query.get(id)
        db.session.delete(estacao)
        db.session.commit()
        return make_response(jsonify({}), 204)