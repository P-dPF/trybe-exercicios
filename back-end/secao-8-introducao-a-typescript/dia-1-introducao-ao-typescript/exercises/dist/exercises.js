"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circulo = exports.trapezio = exports.losango = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
// FIXAÇÃO
// EXERCÍCIO 1
function losango(diagMaior, diagMenor) {
    return (diagMaior * diagMenor) / 2;
}
exports.losango = losango;
// EXERCÍCIO 2
function trapezio(baseMaior, baseMenor, altura) {
    return ((baseMaior + baseMenor) * altura) / 2;
}
exports.trapezio = trapezio;
// EXERCÍCIO 3
function circulo(raio) {
    const PI = 3.14;
    return PI * (raio ** 2);
}
exports.circulo = circulo;
// BÔNUS: EXERCÍCIOS DE ENUM
var Semana;
(function (Semana) {
    Semana[Semana["DOMINGO"] = 1] = "DOMINGO";
    Semana[Semana["SEGUNDA"] = 2] = "SEGUNDA";
    Semana[Semana["TERCA"] = 3] = "TERCA";
    Semana[Semana["QUARTA"] = 4] = "QUARTA";
    Semana[Semana["QUINTA"] = 5] = "QUINTA";
    Semana[Semana["SEXTA"] = 6] = "SEXTA";
    Semana[Semana["SABADO"] = 7] = "SABADO";
})(Semana || (Semana = {}));
var ArcoIris;
(function (ArcoIris) {
    ArcoIris["VERMELHO"] = "VERMELHO";
    ArcoIris["LARANJA"] = "LARANJA";
    ArcoIris["AMARELO"] = "AMARELO";
    ArcoIris["VERDE"] = "VERDE";
    ArcoIris["AZUL"] = "AZUL";
    ArcoIris["ANIL"] = "ANIL";
    ArcoIris["VIOLETA"] = "VIOLETA";
})(ArcoIris || (ArcoIris = {}));
