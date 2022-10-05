const readlineSync4 = require('readline-sync');


const areaUnits: string[] = ['km2', 'hm2', 'dam2', 'm2', 'dm2', 'cm2', 'mm2'];

const convertArea = (value: number, origUnit: string, newUnit: string) => {
  const origNumber = areaUnits.indexOf(origUnit);
  const newNumber = areaUnits.indexOf(newUnit);
  const conversionFactor = newNumber - origNumber;

  return value * (100 ** conversionFactor);
};

const execArea = (): void => {
  const valueInput: number = readlineSync4.questionFloat('Insert a value: ');
  const origUnitInput: number = readlineSync4.keyInSelect(areaUnits, 'Insert the unit to convert: ');
  const newUnitInput: number = readlineSync4.keyInSelect(areaUnits, 'Insert the result unit: ');

  const origUnit = areaUnits[origUnitInput];
  const newUnit = areaUnits[newUnitInput];
  
  const convertResult = convertArea(valueInput, origUnit, newUnit);

  console.log(`${valueInput}${origUnit} é igual a ${convertResult}${newUnit}`);
  
};

// execArea();

module.exports = execArea;