// EXERCÍCIO 3

const myFizzBuzz = require('./myFizzBuzz');

describe('verifica se myFizzBuzz dá o retorno esperado conforme a divisibilidade do parâmetro recebido por 3 e por 5', () => {
  // ITEM 1
  test('verifica se myFizzBuzz retorna a string "fizzbuzz" quando o parâmetro recebido é divisível por 3 e por 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
});