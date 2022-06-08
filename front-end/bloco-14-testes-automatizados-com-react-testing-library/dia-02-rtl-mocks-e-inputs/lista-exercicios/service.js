const generateNumber = () => {
  return Math.floor(Math.random() * 101);
}
console.log(generateNumber());

module.exports = { generateNumber };

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
