const service = require('./service');

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