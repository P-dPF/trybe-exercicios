// EXERCÍCIO 2

const myRemove = require('./myRemove');

describe('verifica se myRemove retorna uma cópia do array recebido como parâmetro sem o item recebido como segundo parâmetro', () => {
  // ITEM 1
  test('teste se myRemove retorna o array esperado com os parâmetros [1, 2, 3, 4] e 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
});