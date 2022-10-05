"use strict";
const readlineSync2 = require('readline-sync');
const massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
const convertMass = (value, origUnit, newUnit) => {
    const origNumber = massUnits.indexOf(origUnit);
    const newNumber = massUnits.indexOf(newUnit);
    const conversionFactor = newNumber - origNumber;
    return value * (10 ** conversionFactor);
};
const execMass = () => {
    const valueInput = readlineSync2.questionFloat('Insert a value: ');
    const origUnitInput = readlineSync2.keyInSelect(massUnits, 'Insert the unit to convert: ');
    const newUnitInput = readlineSync2.keyInSelect(massUnits, 'Insert the result unit: ');
    const origUnit = massUnits[origUnitInput];
    const newUnit = massUnits[newUnitInput];
    const convertResult = convertMass(valueInput, origUnit, newUnit);
    console.log(`${valueInput}${origUnit} é igual a ${convertResult}${newUnit}`);
};
execMass();
