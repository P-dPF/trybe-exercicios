const generateNumber = () => {
  return Math.floor(Math.random() * 101);
}
console.log(generateNumber());

module.exports = { generateNumber };
