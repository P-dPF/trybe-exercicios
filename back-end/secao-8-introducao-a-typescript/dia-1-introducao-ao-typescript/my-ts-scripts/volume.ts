const readlineSync5 = require('readline-sync');

const volumeUnits: string[] = ['km3', 'hm3', 'dam3', 'm3', 'dm3', 'cm3', 'mm3'];

const convertVolume = (value: number, origUnit: string, newUnit: string) => {
  const origNumber = volumeUnits.indexOf(origUnit);
  const newNumber = volumeUnits.indexOf(newUnit);
  const conversionFactor = newNumber - origNumber;

  return value * (1000 ** conversionFactor);
};

const execVolume = (): void => {
  const valueInput: number = readlineSync5.questionFloat('Insert a value: ');
  const origUnitInput: number = readlineSync5.keyInSelect(volumeUnits, 'Insert the unit to convert: ');
  const newUnitInput: number = readlineSync5.keyInSelect(volumeUnits, 'Insert the result unit: ');

  const origUnit = volumeUnits[origUnitInput];
  const newUnit = volumeUnits[newUnitInput];
  
  const convertResult = convertVolume(valueInput, origUnit, newUnit);

  console.log(`${valueInput}${origUnit} é igual a ${convertResult}${newUnit}`);
  
};

execVolume();