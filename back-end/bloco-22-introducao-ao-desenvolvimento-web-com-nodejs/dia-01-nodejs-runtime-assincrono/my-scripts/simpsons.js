const fsPromises = require('fs').promises;

const mainOne = async () => {
  try {
    const characters = await fsPromises.readFile('./simpsons.json', 'utf-8');
    const charactersList = JSON.parse(characters);
    charactersList.forEach((character) => console.log(`${character.id} - ${character.name}`));
  } catch (error) {
    console.log(error.message);
  }
}

// mainOne();

const mainTwo = (characterId) => {
  const promise = new Promise(async (resolve, reject) => {
    const characters = await fsPromises.readFile('./simpsons.json', 'utf-8');
    const charactersList = JSON.parse(characters);
    const foundCharacter = charactersList.find((character) => Number(character.id) === Number(characterId));
    if (!foundCharacter) {
      reject(new Error('id não encontrado'));
    }
    resolve(foundCharacter);
  })
  return promise;
}

// mainTwo(5)
//   .then(result => console.log(result))
//   .catch(error => console.log(error.message));

const mainThree = async () => {
  try {
    const characters = await fsPromises.readFile('./simpsons.json', 'utf-8');
    const charactersList = JSON.parse(characters);
    const filteredCharacters = charactersList.filter((character) => (
      +(character.id) !== 6 && +(character.id) !== 10
    ));
    const stringifiedCharacters = JSON.stringify(filteredCharacters);
    await fsPromises.writeFile('./simpsons.json', stringifiedCharacters);
  } catch (error) {
    console.log(error.message);
  }
}

// mainThree();

const mainFour = async() => {
  try {
    const characters = await fsPromises.readFile('./simpsons.json', 'utf-8');
    const charactersList = JSON.parse(characters);
    const filteredCharacters = charactersList.filter((character) => (
      +(character.id) >= 1 && +(character.id) <= 4
    ));
    const stringifiedCharacters = JSON.stringify(filteredCharacters);
    await fsPromises.writeFile('simpsonFamily.json', stringifiedCharacters);
  } catch (error) {
    console.log(error.message);
  }
}

// mainFour();

const mainFive = async () => {
  try {
    const characters = await fsPromises.readFile('./simpsonFamily.json', 'utf-8');
    const charactersList = JSON.parse(characters);
    const nelsonMuntz = { id: '5', name: 'Nelson Muntz' };
    const updatedCharactersList = [...charactersList, nelsonMuntz];
    const stringifiedCharacters = JSON.stringify(updatedCharactersList);
    await fsPromises.writeFile('./simpsonFamily.json', stringifiedCharacters);
  } catch (error) {
    console.log(error.message);
  }
}

// mainFive();

const mainSix = async () => {
  try {
    const characters = await fsPromises.readFile('./simpsonFamily.json', 'utf-8');
    const replaceNelson = characters.replace('Nelson Muntz', 'Maggie Simpson');
    await fsPromises.writeFile('./simpsonFamily.json', replaceNelson);
  } catch (error) {
    console.log(error.message);
  }
}

mainSix();
