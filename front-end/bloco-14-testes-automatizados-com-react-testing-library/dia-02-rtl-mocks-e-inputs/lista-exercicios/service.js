const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const generateNumber = () => {
  return Math.floor(Math.random() * 101);
}
console.log(generateNumber());

const upperCase = (string) => {
  return string.toUpperCase();
}

console.log(upperCase('pedro'));

const firstLetter = (string) => {
  return string[0];
}

console.log(firstLetter('pedro'));

const concatenate = (strOne, strTwo) => {
  return strOne.concat(strTwo);
}

console.log(concatenate('pedro', 'pedro'));

const fetchDogPics = () => {
  const URL = 'https://dog.ceo/api/breeds/image/random';
  return fetch(URL).then(response => response.json()).then(data => data.message);
}

module.exports = { generateNumber, upperCase, firstLetter, concatenate, fetchDogPics };
