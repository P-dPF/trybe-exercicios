const fs = require('fs').promises;
const { join } = require('path');

const readCacaoTrybeFile = async () => {
  const path = '/files/cacaoTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const getTotalOfChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates.length;
};

const getChocolatesByName = async (name) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates.filter((chocolate) => chocolate.name.includes(name));
};

const writeCacaoTrybeFile = async (newChocolatesList) => {
  const path = '/files/cacaoTrybeFile.json';
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(newChocolatesList))
  } catch (error) {
    console.log(error.message);
  }
};

const updateChocolate = async (id, name, brandId) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  let hasChanges = false;
  let updatedChocolate;
  for (let i = 0; i < cacaoTrybe.chocolates.length; i += 1) {
    const currChocolate = cacaoTrybe.chocolates[i];
    if (currChocolate.id === id) {
      currChocolate.name = name;
      currChocolate.brandId = brandId;
      updatedChocolate = currChocolate;
      hasChanges = true;
    }
  }
  if (hasChanges) {
    await writeCacaoTrybeFile(cacaoTrybe);
  }
  return updatedChocolate;
};

module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrand,
    getTotalOfChocolates,
    getChocolatesByName,
    updateChocolate,
};