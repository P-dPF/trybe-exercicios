//Exercício 1

const a = 75;
const b = 12;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Exercício 2

const numero1 = 1862;
const numero2 = 9272;

if (numero1 > numero2) {
    console.log("o primeiro número é maior");
}
else {
    console.log("o segundo número é maior");
}

//Exercício 3

const primeiro = 10;
const segundo = 40;
const terceiro = 50;

if (primeiro > segundo && primeiro > terceiro) {
    console.log("o primeiro é maior");
}
else if (segundo > primeiro && segundo > terceiro) {
    console.log("o segundo é maior");
}
else {
    console.log("o terceiro é maior");
}

//Exercício 4

const valor = 10;

if (valor > 0) {
    console.log("positive");
}
else if (valor < 0) {
    console.log("negative");
}
else {
    console.log("zero");
}

//Exercício 5

const angulo1 = 90;
const angulo2 = 30;
const angulo3 = 60;

let somaAngulos = angulo1 + angulo2 + angulo3 === 180
let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0

if (angulosPositivos) {
    if (angulo1 + angulo2 + angulo3 === 180) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}
else {
    console.log("há pelo menos um ângulo inválido");
}

//Exercício 6

let piece = "QuEEn";

switch (piece.toLowerCase()) {
    case "king":
        console.log("verticals, horizontals and diagonals - one step");
        break;

    case "queen":
        console.log("verticals, horizontals and diagonals");
        break;

    case "rook":
        console.log("verticals and horizontals");
        break;

    case "pawn":
        console.log("only foward verticals");
        break;

    case "bishop":
        console.log("diagonals");
        break;

    case "knight":
        console.log("verticals and horizontals as an L");
        break;

    default:
        console.log("invalid piece");
}

//Exercício 7

let nota = 92;

if (nota >= 90 && nota <= 100) {
    console.log("A");
}
else if (nota >= 80 && nota < 90) {
    console.log("B");
}
else if (nota >= 70 && nota < 80) {
    console.log("C");
}
else if (nota >= 60 && nota < 70) {
    console.log("D");
}
else if (nota >= 50 && nota < 60) {
    console.log("E");
}
else if (nota < 50 && nota >= 0) {
    console.log("F");
}
else {
    console.log("nota inválida");
}

//Exercício 8

const number1 = 15;
const number2 = 11;
const number3 = 13;

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
    console.log("true");
}
else {
    console.log("false");
}

//Exercício 9

const numberOne = 10
const numberTwo = 13
const numberThree = 22

let isOdd = false

if (numberOne % 2 !== 0 || numberTwo % 2 !== 0 || numberThree % 2 !== 0) {
    isOdd = true
}

console.log(isOdd)