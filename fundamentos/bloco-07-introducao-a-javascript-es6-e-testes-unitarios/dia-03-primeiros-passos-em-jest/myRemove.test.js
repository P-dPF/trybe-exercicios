// EXERCÍCIO 2

const myRemove = require('./myRemove');

describe('verifica se myRemove retorna uma cópia do array recebido como parâmetro sem o item recebido como segundo parâmetro, caso ele exista np array', () => {
  // ITEM 1
  test('testa se myRemove retorna o array esperado com os parâmetros [1, 2, 3, 4] e 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  // ITEM 2
  test('testa se myRemove não retorna [1, 2, 3, 4] quando recebe os parâmetros [1, 2, 3, 4] e 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4], 3);
  });
  // ITEM 3
  test('testa se myRemove retorna o array esperado com os parâmetros [1, 2, 3, 4] e 5', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});