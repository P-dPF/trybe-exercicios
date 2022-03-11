//Exercícios de Fixação

//Variáveis

const myName = "Pedro";

const birthCity = "Belo Horizonte";

let birthYear = 1998;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

birthYear = 2030;

console.log(birthYear);

birthCity = "Rio de Janeiro";

//Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

const base = 5;
let height = 8;

const area = base * height;
console.log(area);

const perimeter = 2 * height + 2 * base;
console.log(perimeter);

//Condições If e Else

const nota = 92;

if (nota >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
}
else if (nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera");
}
else {
    console.log("Você foi reprovada(a)");
}

//Operadores Lógicos

const currentHour = 8;
let message = "";

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
}
else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
}
else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour > 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
}
else {
    message = "Hmmm, cheiro de café recém passado";
}

console.log(message)

let weekDay = "quarta-feira";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else {
    console.log("FINALMENTE, descanso merecido UwU");
}

console.log(!(2 + 2) === 4);

//Switch e Case

let situacao = "aprovada";

switch (situacao) {
    case "aprovada":
        console.log("você está aprovada");
        break;
    
    case "lista":
        console.log("você está na lista de espera");
        break;
    
    case "reprovada":
        console.log("você está reprovada");
        break;
    
    default:
        console.log("não se aplica");
}