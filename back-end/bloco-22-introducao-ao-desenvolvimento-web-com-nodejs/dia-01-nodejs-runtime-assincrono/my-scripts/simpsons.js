const fsPromises = require('fs').promises;

const main = async () => {
  try {
    const characters = await fsPromises.readFile('./simpsons.json', 'utf-8');
    const charactersList = JSON.parse(characters);
    charactersList.forEach((character) => console.log(`${character.id} - ${character.name}`));
  } catch (error) {
    console.log(error.message);
  }
}

main();
