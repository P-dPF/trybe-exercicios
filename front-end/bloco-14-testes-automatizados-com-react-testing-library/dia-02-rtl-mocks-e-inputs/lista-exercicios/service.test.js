const service = require('./service');

test('testa a função genrateNumber', () => {
  service.generateNumber = jest.fn().mockReturnValue(10);
  expect(service.generateNumber()).toBe(10);
  expect(service.generateNumber).toHaveBeenCalled();
  expect(service.generateNumber).toHaveBeenCalledTimes(1);
});