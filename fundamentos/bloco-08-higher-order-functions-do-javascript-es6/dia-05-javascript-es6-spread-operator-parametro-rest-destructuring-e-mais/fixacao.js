// SPREAD OPERATOR

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Kiwi', 'Mirtilo'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Granola', 'Chia', 'Aveia'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

// OBJECT DESTRUCTURING

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const generalInfo = { ...user, ... jobInfos};

const { name, age, nationality, profession, squad, squadInitials } = generalInfo;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm Brazilian. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

// ARRAY DESTRUCTURING

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

/* saudacoes[1](saudacoes[0]); // Olá */

const [word, wordUse] = saudacoes;

console.log(wordUse(word));