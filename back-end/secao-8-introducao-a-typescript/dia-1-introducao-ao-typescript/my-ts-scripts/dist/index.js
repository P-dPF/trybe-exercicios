"use strict";
const readlineSync = require('readline-sync');
const area = require('./area');
const capacity = require('./capacity');
const length = require('./length');
const mass = require('./mass');
const volume = require('./volume');
const functions = [area, capacity, length, mass, volume];
const userAlternatives = ['area', 'capacity', 'length', 'mass', 'volume'];
const makeConversion = () => {
    const decideConversion = readlineSync.keyInSelect(userAlternatives, 'Choose a type of conversion: ');
    functions[decideConversion]();
};
makeConversion();
