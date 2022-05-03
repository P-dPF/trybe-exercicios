// PARTE 1 - ADICIONANDO NOVAS CHAVES

const addNewProperties = (object, key, value) => {
  const newKey = key;
  const newValue = value;
  object[newKey] = newValue;
  return object;
}

console.log(addNewProperties({ propriedadeUm: 'valorUm' }, 'chaveTeste', 'valorTeste'));