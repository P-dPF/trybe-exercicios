"use strict";
const readlineSync1 = require('readline-sync');
const lengthUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const convertLength = (value, origUnit, newUnit) => {
    const origNumber = lengthUnits.indexOf(origUnit);
    const newNumber = lengthUnits.indexOf(newUnit);
    const conversionFactor = newNumber - origNumber;
    return value * (10 ** conversionFactor);
};
const execLength = () => {
    const valueInput = readlineSync1.questionFloat('Insert a value: ');
    const origUnitInput = readlineSync1.keyInSelect(lengthUnits, 'Insert the unit to convert: ');
    const newUnitInput = readlineSync1.keyInSelect(lengthUnits, 'Insert the result unit: ');
    const origUnit = lengthUnits[origUnitInput];
    const newUnit = lengthUnits[newUnitInput];
    const convertResult = convertLength(valueInput, origUnit, newUnit);
    console.log(`${valueInput}${origUnit} é igual a ${convertResult}${newUnit}`);
};
execLength();
