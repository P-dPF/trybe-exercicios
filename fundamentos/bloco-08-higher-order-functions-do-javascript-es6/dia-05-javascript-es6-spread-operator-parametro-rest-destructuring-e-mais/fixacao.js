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

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida);


let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

[,,, ...pares] = numerosPares; 

console.log(pares);

// DEFAUT DESTRUCTURING

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

// PROPERTY SHORTHAND

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

console.log(getPosition(-19.8157, -43.9542));