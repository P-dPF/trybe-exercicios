const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// EXERCÍCIO 1

const addShift = (object, key, value) => {
  const shift = key;
  object[shift] = value;
  return object;
}

console.log(addShift(lesson2, 'turno', 'noite'));

// EXERCÍCIO 2

const listKeys = (object) => Object.keys(object);

console.log(listKeys(lesson3));