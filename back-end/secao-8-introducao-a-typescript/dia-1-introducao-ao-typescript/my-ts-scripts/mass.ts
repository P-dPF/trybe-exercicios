const readlineSync2 = require('readline-sync');


const massUnits: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

const convertMass = (value: number, origUnit: string, newUnit: string) => {
  const origNumber = massUnits.indexOf(origUnit);
  const newNumber = massUnits.indexOf(newUnit);
  const conversionFactor = newNumber - origNumber;

  return value * (10 ** conversionFactor);
};

const execMass = (): void => {
  const valueInput: number = readlineSync2.questionFloat('Insert a value: ');
  const origUnitInput: number = readlineSync2.keyInSelect(massUnits, 'Insert the unit to convert: ');
  const newUnitInput: number = readlineSync2.keyInSelect(massUnits, 'Insert the result unit: ');

  const origUnit = massUnits[origUnitInput];
  const newUnit = massUnits[newUnitInput];
  
  const convertResult = convertMass(valueInput, origUnit, newUnit);

  console.log(`${valueInput}${origUnit} é igual a ${convertResult}${newUnit}`);
  
};

execMass();