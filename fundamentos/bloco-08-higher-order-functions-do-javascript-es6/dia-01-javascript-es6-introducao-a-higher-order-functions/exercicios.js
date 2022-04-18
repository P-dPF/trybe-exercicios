// Exercício 1

const employeeInfo = (fullName) => {
  const employeeEmail = `${fullName.toLowerCase().replace(' ', '_')}@trybe.com`;
  return {
    nomeCompleto: fullName,
    employeeEmail: employeeEmail
  };
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(employeeInfo));

// Exercício 2

const checkResult = (firstNumber, secondNumber) => firstNumber === secondNumber;

const prize = (betNumber, callback) => {
  answerNumber = Math.floor(Math.random() * 5 + 1);
  return callback(betNumber, answerNumber) ? 'Parabéns você ganhou': 'Tente novamente';
}

console.log(prize(1, checkResult));