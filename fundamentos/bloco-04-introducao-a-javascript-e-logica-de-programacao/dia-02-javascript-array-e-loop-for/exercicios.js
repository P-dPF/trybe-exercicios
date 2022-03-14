//Exercício 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

//Exercício 2

let sum = 0;

for (index = 0; index < numbers.length; index += 1) {
    sum += numbers[index]
}
console.log(sum);

//Exercício 3
let soma = 0;

for (index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}

let average = soma / numbers.length;

console.log(average);

//Exercício 4

if (average > 20) {
    console.log('valor maior que 20');
}
else {
    console.log('valor menor ou igual a 20');
}

//Exercício 5

let maiorNumero = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }
}

console.log(maiorNumero);

//Exercício 6

let impares = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        impares += 1;
    }
}

if (impares === 0) {
    console.log('nenhum valor ímpar encontrado');
}

console.log(impares);

//Exercício 7

let menorNumero = numbers[0];

for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menorNumero) {
        menorNumero = numbers[i]
    }
}

console.log(menorNumero);

//Exercício 8

let sequencia = [];

for (i = 1; i <= 25; i += 1) {
    sequencia.push(i);
}

console.log(sequencia);

//Exercício 9

for (i = 0; i < 25; i += 1) {
    console.log(sequencia[i] / 2);
}