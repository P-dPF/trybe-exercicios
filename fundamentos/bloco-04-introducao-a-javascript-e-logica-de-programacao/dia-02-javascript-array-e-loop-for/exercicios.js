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