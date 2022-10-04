const MassUnits: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

const convertMass = (value: number, origUnit: string, newUnit: string) => {
  const origNumber = MassUnits.indexOf(origUnit);
  const newNumber = MassUnits.indexOf(newUnit);
  const conversionFactor = newNumber - origNumber;

  return value * (10 ** conversionFactor);
};