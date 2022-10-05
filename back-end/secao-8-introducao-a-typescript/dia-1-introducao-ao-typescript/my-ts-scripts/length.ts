const readlineSync1 = require('readline-sync');

const lengthUnits: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const convertLength = (value: number, origUnit: string, newUnit: string) => {
  const origNumber = lengthUnits.indexOf(origUnit);
  const newNumber = lengthUnits.indexOf(newUnit);
  const conversionFactor = newNumber - origNumber;

  return value * (10 ** conversionFactor);
};

const execLength = (): void => {
  const valueInput: number = readlineSync1.questionFloat('Insert a value: ');
  const origUnitInput: number = readlineSync1.keyInSelect(lengthUnits, 'Insert the unit to convert: ');
  const newUnitInput: number = readlineSync1.keyInSelect(lengthUnits, 'Insert the result unit: ');

  const origUnit = lengthUnits[origUnitInput];
  const newUnit = lengthUnits[newUnitInput];
  
  const convertResult = convertLength(valueInput, origUnit, newUnit);

  console.log(`${valueInput}${origUnit} é igual a ${convertResult}${newUnit}`);
  
};

execLength();