const lengthUnits: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const convertLength = (value: number, origUnit: string, newUnit: string) => {
  const origNumber = lengthUnits.indexOf(origUnit);
  const newNumber = lengthUnits.indexOf(newUnit);
  const conversionFactor = newNumber - origNumber;

  return value * (10 ** conversionFactor);
};