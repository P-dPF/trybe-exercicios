// EXERCÍCIO 1

// ITEM 1

const sum = require('./sum');

describe('verifica se a função soma retorna a soma dos seus parâmetros', () => {
  test('sum retorna a soma de 4 com 5', () => {
    expect(sum(4, 5)).toEqual(9);
  });
})
