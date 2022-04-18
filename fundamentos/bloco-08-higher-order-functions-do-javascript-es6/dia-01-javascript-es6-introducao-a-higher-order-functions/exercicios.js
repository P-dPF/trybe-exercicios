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
  return callback(betNumber, answerNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(prize(1, checkResult));

// Exercício 3

const answerCheck = (firstArray, secondArray) => {
  scoreCount = 0;
  for (let i = 0; i < firstArray.length; i += 1) {
    for (let i2 = 0; i2 < secondArray.length; i += 1) {
      if (firstArray[i] === secondArray[i2]) {
        scoreCount += 1;
      } else if (firstArray !== secondArray && secondArray !== 'N.A') {
        scoreCount -= 0.5;
      }
    }
  }
  return scoreCount;
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];

const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const evaluation = (rightAnswers, studentAnswers, callback) => {}