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
  test('nova implementação para upperCase para deixar em minúsculas', () => {
    const firstMock = jest.spyOn(service, 'upperCase').mockImplementation((string) => string.toLowerCase());
    expect(firstMock('PEdrO')).toBe('pedro');
    expect(service.upperCase).toHaveBeenCalled();
    expect(service.upperCase).toHaveBeenCalledTimes(1);
    expect(service.upperCase).toHaveBeenCalledWith('PEdrO');
  });
  test('nova implementação para firstLetter para retornar a última letra', () => {
    service.firstLetter = jest.fn().mockImplementation((string) => string[string.length - 1]);
    expect(service.firstLetter('pedro')).toBe('o');
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter).toHaveBeenCalledWith('pedro');
  });
  test('nova implementação para concatenate', () => {
    service.concatenate = jest.fn().mockImplementation((strOne, strTwo, strThree) => `${strOne}${strTwo}${strThree}`);
    expect(service.concatenate('pedro', 'pedro', 'pedro')).toBe('pedropedropedro');
    expect(service.concatenate).toHaveBeenCalled();
    expect(service.concatenate).toHaveBeenCalledTimes(1);
    expect(service.concatenate).toHaveBeenCalledWith('pedro', 'pedro', 'pedro');
  });
  test('testa se upperCase foi restaurada para a implementação original', () => {
    service.upperCase.mockRestore();
    expect(service.upperCase('pEdRo')).toBe('PEDRO');
  });
});

describe('testa mock da requisição de API fetchDogPics', () => {
  const apiMock = jest.spyOn(service, 'fetchDogPics');
});
