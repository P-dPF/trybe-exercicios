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

//Exercício 10

const cost = 100;
const price = 500;

if (cost >= 0 && price >= 0) {
    let totalCost = cost * 1.2;
    let profit = (price - totalCost) * 1000;
    console.log(profit);
}
else {
    console.log("valores inválidos")
}

//Exercício 11

const salarioBruto = 3000;
/* let inss;
let ir;
let salarioBase
let salarioLiquido;
 */
if (salarioBruto <= 1556.94) {
    salarioBase = (salarioBruto * 0.92);
    salarioLiquido = salarioBase;
    console.log(salarioLiquido);
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioBase = (salarioBruto * 0.91);
    if (salarioBase <= 1903.98) {
        salarioLiquido = salarioBase;
        console.log(salarioLiquido);
    }
    else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
        salarioLiquido = ((salarioBase * 0.075) - 142.82) + salarioBase;
        console.log(salarioLiquido);
    }
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioBase = (salarioBruto * 0.89);
    if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
        salarioLiquido = ((salarioBase * 0.075) - 142.82) + salarioBase;
        console.log(salarioLiquido);
    }
    else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
        salarioLiquido = ((salarioBase * 0.15) - 354.80) + salarioBase;
        console.log(salarioLiquido);
    }
    else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
        salarioLiquido = ((salarioBase * 0.225) - 636.13) + salarioBase;
        console.log(salarioLiquido);
    }
}
else if (salarioBruto > 5189.82) {
    salarioBase = salarioBruto - 570.88
    if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
        salarioLiquido = ((salarioBase * 0.225) - 636.13) + salarioBase;
        console.log(salarioLiquido);
    }
    else if (salarioBase > 4664.68) {
        salarioLiquido = ((salarioBase * 0.275) - 869.36) + salarioBase;
        console.log(salarioLiquido);
    }
}


/* if (salarioBruto <= 1556.94) {
    salarioBase = (salarioBruto * 0.92);
    if (salarioBase <= 1903.98) {
        salarioLiquido = salarioBase;
        console.log(salarioLiquido);
    }
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioBase = (salarioBruto * 0,91);
    if (salarioBase 
} */