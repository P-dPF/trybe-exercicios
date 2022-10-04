const volumeUnits: string[] = ['km3', 'hm3', 'dam3', 'm3', 'dm3', 'cm3', 'mm3'];

const convertVolume = (value: number, origUnit: string, newUnit: string) => {
  const origNumber = volumeUnits.indexOf(origUnit);
  const newNumber = volumeUnits.indexOf(newUnit);
  const conversionFactor = newNumber - origNumber;

  return value * (1000 ** conversionFactor);
};