"use strict";
const readlineSync5 = require('readline-sync');
const volumeUnits = ['km3', 'hm3', 'dam3', 'm3', 'dm3', 'cm3', 'mm3'];
const convertVolume = (value, origUnit, newUnit) => {
    const origNumber = volumeUnits.indexOf(origUnit);
    const newNumber = volumeUnits.indexOf(newUnit);
    const conversionFactor = newNumber - origNumber;
    return value * (1000 ** conversionFactor);
};
const execVolume = () => {
    const valueInput = readlineSync5.questionFloat('Insert a value: ');
    const origUnitInput = readlineSync5.keyInSelect(volumeUnits, 'Insert the unit to convert: ');
    const newUnitInput = readlineSync5.keyInSelect(volumeUnits, 'Insert the result unit: ');
    const origUnit = volumeUnits[origUnitInput];
    const newUnit = volumeUnits[newUnitInput];
    const convertResult = convertVolume(valueInput, origUnit, newUnit);
    console.log(`${valueInput}${origUnit} é igual a ${convertResult}${newUnit}`);
};
// execVolume();
module.exports = execVolume;
