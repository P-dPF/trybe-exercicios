const areaUnits: string[] = ['km2', 'hm2', 'dam2', 'm2', 'dm2', 'cm2', 'mm2'];

const convertArea = (value: number, origUnit: string, newUnit: string) => {
  const origNumber = areaUnits.indexOf(origUnit);
  const newNumber = areaUnits.indexOf(newUnit);
  const conversionFactor = newNumber - origNumber;

  return value * (100 ** conversionFactor);
};