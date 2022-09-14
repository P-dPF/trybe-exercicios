const chai = require('chai');
const sinon = require('sinon');
const fs = require('fs')
const chaiHttp = require('chai-http');
const app = require('../../src/app');

const { expect } = chai;

chai.use(chaiHttp);

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ]});

  describe('Testando a API Cacao Trybe', function () {
    beforeEach(function () {
      sinon.stub(fs.promises, 'readFile')
        .resolves(mockFile);
    });
  
    afterEach(function () {
      sinon.restore();
    });
    
    describe('Usando o método GET em /chocolates', function () {
      it('Retorna a lista completa de chocolates!', async function () {
        const output = [
          { id: 1, name: 'Mint Intense', brandId: 1 },
          { id: 2, name: 'White Coconut', brandId: 1 },
          { id: 3, name: 'Mon Chéri', brandId: 2 },
          { id: 4, name: 'Mounds', brandId: 3 },
        ];
  
        const response = await chai
          .request(app)
          .get('/chocolates');
        expect(response.status).to.be.equal(200);
        expect(response.body.chocolates).to.deep.equal(output);
      });
    });
    
    describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
      it('Retorna o chocolate Mounds', async function () {
        const response = await chai
          .request(app)
          .get('/chocolates/4');
  
        expect(response.status).to.be.equal(200);
        expect(response.body.chocolate).to.deep.equal([
          {
            id: 4,
            name: 'Mounds',
            brandId: 3,
          }]);
      });
    });
  
    describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
      it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
        const response = await chai
          .request(app)
          .get('/chocolates/brand/1');
  
        expect(response.status).to.be.equal(200);
        expect(response.body.chocolates).to.deep.equal([
          {
            id: 1,
            name: 'Mint Intense',
            brandId: 1,
          },
          {
            id: 2,
            name: 'White Coconut',
            brandId: 1,
          },
        ]);
      });
    });

    describe('Usando o endpoint GET /chocolates/total para exibir a quantidade de chocolates na base de dados', function () {
      it('Retorna a quantidade de chocolates', async function () {
        const response = await chai.request(app).get('/chocolates/total');

        expect(response.status).to.be.equal(200);
        expect(response.body).to.deep.equal({ totalChocolates: 4 });
      });
    });

    describe('Usando o endpoint GET /chocolates/search busca chocolates com termos inseridos na pesquisa', function () {
      it('retorna os dois chocolates que contêm "Mo" no nome', async function () {
        const response = await chai.request(app).get('/chocolates/search?name=Mo');

        expect(response.status).to.be.equal(200);
        expect(response.body.searchedChocolates).to.deep.equal([
          {
            id: 3,
            name: "Mon Chéri",
            brandId: 2
          },
          {
            id: 4,
            name: "Mounds",
            brandId: 3
          }
        ]);
      });

      it('retorna um array vazio caso não sejam encontrados chocolates com o termo pesquisado', async function () {
        const response = await chai.request(app).get('/chocolates/search');

        expect(response.status).to.be.equal(404);
        expect(response.body).to.be.deep.equal([]);
      });
    });

    describe('Atualiza um chocolate com o método PUT em chocolates/:id', function () {
      it('retorna o chocolate devidamente atualizado', async function () {
        const response = await chai.request(app)
          .put('/chocolates/1')
          .send({ name: 'Mint Pretty Good', brandId: 2 });

        expect(response.status).to.be.equal(200);
        expect(response.body).to.be.deep.equal({
          chocolate: { 
            id: 1,
            name: "Mint Pretty Good",
            brandId: 2
          }
        })
      });

      it('retorna mensagem de erro caso nenhum chocolate seja encontrado', async function () {
        const response = await chai.request(app)
          .put('/chocolates/8')
          .send({ name: 'Mint Pretty Good', brandId: 2 });

        expect(response.status).to.be.equal(404);
        expect(response.body).to.be.deep.equal({ message: "chocolate not found" });
      });
    });
  });