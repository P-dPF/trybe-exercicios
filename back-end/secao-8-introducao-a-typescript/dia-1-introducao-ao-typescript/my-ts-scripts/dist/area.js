"use strict";
const readlineSync4 = require('readline-sync');
const areaUnits = ['km2', 'hm2', 'dam2', 'm2', 'dm2', 'cm2', 'mm2'];
const convertArea = (value, origUnit, newUnit) => {
    const origNumber = areaUnits.indexOf(origUnit);
    const newNumber = areaUnits.indexOf(newUnit);
    const conversionFactor = newNumber - origNumber;
    return value * (100 ** conversionFactor);
};
const execArea = () => {
    const valueInput = readlineSync4.questionFloat('Insert a value: ');
    const origUnitInput = readlineSync4.keyInSelect(areaUnits, 'Insert the unit to convert: ');
    const newUnitInput = readlineSync4.keyInSelect(areaUnits, 'Insert the result unit: ');
    const origUnit = areaUnits[origUnitInput];
    const newUnit = areaUnits[newUnitInput];
    const convertResult = convertArea(valueInput, origUnit, newUnit);
    console.log(`${valueInput}${origUnit} é igual a ${convertResult}${newUnit}`);
};
execArea();
