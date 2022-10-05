"use strict";
const readlineSync3 = require('readline-sync');
const capacityUnits = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
const convertCapacity = (value, origUnit, newUnit) => {
    const origNumber = capacityUnits.indexOf(origUnit);
    const newNumber = capacityUnits.indexOf(newUnit);
    const conversionFactor = newNumber - origNumber;
    return value * (10 ** conversionFactor);
};
const execCapacity = () => {
    const valueInput = readlineSync3.questionFloat('Insert a value: ');
    const origUnitInput = readlineSync3.keyInSelect(capacityUnits, 'Insert the unit to convert: ');
    const newUnitInput = readlineSync3.keyInSelect(capacityUnits, 'Insert the result unit: ');
    const origUnit = capacityUnits[origUnitInput];
    const newUnit = capacityUnits[newUnitInput];
    const convertResult = convertCapacity(valueInput, origUnit, newUnit);
    console.log(`${valueInput}${origUnit} é igual a ${convertResult}${newUnit}`);
};
// execCapacity();
module.exports = execCapacity;
