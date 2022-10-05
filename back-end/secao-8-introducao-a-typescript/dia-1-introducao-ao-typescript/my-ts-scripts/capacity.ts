const readlineSync3 = require('readline-sync');


const capacityUnits: string[] = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

const convertCapacity = (value: number, origUnit: string, newUnit: string) => {
  const origNumber = capacityUnits.indexOf(origUnit);
  const newNumber = capacityUnits.indexOf(newUnit);
  const conversionFactor = newNumber - origNumber;

  return value * (10 ** conversionFactor);
};

const execCapacity = (): void => {
  const valueInput: number = readlineSync3.questionFloat('Insert a value: ');
  const origUnitInput: number = readlineSync3.keyInSelect(capacityUnits, 'Insert the unit to convert: ');
  const newUnitInput: number = readlineSync3.keyInSelect(capacityUnits, 'Insert the result unit: ');

  const origUnit = capacityUnits[origUnitInput];
  const newUnit = capacityUnits[newUnitInput];
  
  const convertResult = convertCapacity(valueInput, origUnit, newUnit);

  console.log(`${valueInput}${origUnit} é igual a ${convertResult}${newUnit}`);
  
};

// execCapacity();

module.exports = execCapacity;
