const service = require('./service');

describe('testes de generateNumber',() => {
  test('testa a função genrateNumber', () => {
    service.generateNumber = jest.fn().mockReturnValue(10);
    expect(service.generateNumber()).toBe(10);
    expect(service.generateNumber).toHaveBeenCalled();
    expect(service.generateNumber).toHaveBeenCalledTimes(1);
  });
  test('testa nova implementação de generateNumber', () => {
    service.generateNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    expect(service.generateNumber(10, 5)).toBe(2);
    expect(service.generateNumber).toHaveBeenCalled();
    expect(service.generateNumber).toHaveBeenCalledTimes(1);
  });
  test('testa nova implementação de generateNumber', () => {
    service.generateNumber = jest.fn().mockImplementation((a, b, c ) => a * b * c);
    expect(service.generateNumber(2 , 5, 10)).toBe(100);
    expect(service.generateNumber).toHaveBeenCalled();
    expect(service.generateNumber).toHaveBeenCalledTimes(1);
    expect(service.generateNumber).toHaveBeenCalledWith(2, 5, 10);
  
    service.generateNumber.mockReset();
    service.generateNumber = jest.fn().mockImplementation((a) => a * 2);
    expect(service.generateNumber(5)).toBe(10);
    expect(service.generateNumber).toHaveBeenCalledTimes(1);
    expect(service.generateNumber).toHaveBeenCalledWith(5);
  });
});

describe('testes de upperCase, firstLetter e concatenate', () => {
  
});
