//Exercícios Dia 4.3

//Exercício 1

let fatorial = 1;

for (i = 10; i >= 1; i -= 1) {
    fatorial *= i;
}

console.log(fatorial);

//Exercício 2

let word = 'tryber';

let novaPalavra = ''

for (i = word.length -1; i >= 0; i -= 1) {
    novaPalavra += word[i];
}

console.log(novaPalavra);

