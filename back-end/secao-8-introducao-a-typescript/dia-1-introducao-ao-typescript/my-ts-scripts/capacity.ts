const capacityUnits: string[] = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

const convertCapacity = (value: number, origUnit: string, newUnit: string) => {
  const origNumber = capacityUnits.indexOf(origUnit);
  const newNumber = capacityUnits.indexOf(newUnit);
  const conversionFactor = newNumber - origNumber;

  return value * (10 ** conversionFactor);
};