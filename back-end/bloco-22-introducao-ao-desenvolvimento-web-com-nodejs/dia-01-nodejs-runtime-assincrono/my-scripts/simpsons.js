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

mainTwo(5)
  .then(result => console.log(result))
  .catch(error => console.log(error.message));
