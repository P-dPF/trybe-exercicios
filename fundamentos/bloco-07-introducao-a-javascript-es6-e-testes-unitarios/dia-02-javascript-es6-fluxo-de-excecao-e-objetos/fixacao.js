// PARTE 1 - ADICIONANDO NOVAS CHAVES

const addNewProperties = (object, key, value) => {
  const newKey = key;
  const newValue = value;
  object[newKey] = newValue;
  return object;
}

console.log(addNewProperties({ propriedadeUm: 'valorUm' }, 'chaveTeste', 'valorTeste'));

// PARTE 2 - OBJECT.KEYS

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const showPairs = (student) => {
  let message = [];
  for (let property in student) {
    message.push(`${property}, Nível: ${student[property]}`);
  }
  return message
}

console.log(showPairs(student2));
