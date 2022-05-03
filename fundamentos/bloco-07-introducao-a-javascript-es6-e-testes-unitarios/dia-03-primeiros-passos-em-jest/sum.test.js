// EXERCÍCIO 1

// ITEM 1

const sum = require('./sum');

describe('verifica se a função soma retorna a soma dos seus parâmetros', () => {
  test('sum retorna a soma de 4 com 5 igual a 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  // ITEM 2
  test('sum retorna a soma de 0 com 0 igual a 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  // ITEM 3
  test('sum lança um erro se receber um valor não numérico como parâmetro', () => {
    expect(() => sum(4, '5')).toThrow();
  });
  // ITEM 4
  test('teste se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
  });
});
