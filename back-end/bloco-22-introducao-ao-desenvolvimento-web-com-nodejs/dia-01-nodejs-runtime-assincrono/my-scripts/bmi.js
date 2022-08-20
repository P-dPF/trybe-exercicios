const readline = require('readline-sync');

const userWeight = readline.questionInt('What\'s your weight? ');
const userHeight = readline.questionFloat('What\'s your height? ');

const calculateBMI = (weight, height) => {
  const bmi = weight / (height ** 2)
  console.log(bmi);
}

calculateBMI(userWeight, userHeight);
