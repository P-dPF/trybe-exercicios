const readline = require('readline-sync');

const userWeight = readline.questionInt('What\'s your weight? ');
const userHeight = readline.questionFloat('What\'s your height? ');

const calculateBMI = (weight, height) => {
  const bmi = weight / (height ** 2);
  const roundedBmi = +(bmi.toFixed(1))
  let situation = 'Não foi possível calcular';
  switch (true) {
    case (roundedBmi < 18.5):
      situation = 'Abaixo do peso (magreza)';
    break;
    case (roundedBmi >= 18.5 && roundedBmi <= 24.9):
      situation = 'Peso normal';
      break;
    case (roundedBmi >= 25.0 && roundedBmi <= 29.9):
      situation = 'Acima do peso (sobrepeso)';
    break;
    case (roundedBmi >= 30.0 && roundedBmi <= 34.9):
      situation = 'Obesidade grau I';
    break;
    case (roundedBmi >= 35.0 && roundedBmi <= 39.9):
      situation = 'Obesidade grau II';
    break;
    case (roundedBmi >= 40.0):
      situation = 'Obesidade graus III e IV';
    break;
    default: situation;
  }
  console.log(`Seu IMC: ${roundedBmi} | Sua Situação: ${situation}`);
}

calculateBMI(userWeight, userHeight);
