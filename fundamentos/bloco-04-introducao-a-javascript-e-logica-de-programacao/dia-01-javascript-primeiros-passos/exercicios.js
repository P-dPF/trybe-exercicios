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