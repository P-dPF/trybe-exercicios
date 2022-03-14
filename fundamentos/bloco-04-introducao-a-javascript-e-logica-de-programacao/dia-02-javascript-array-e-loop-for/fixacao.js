//Exercício de Fixação - Dia 4.2

//Arrays

//Exercício 1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//Exercício 2

let menu1 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu1.indexOf('Portfólio');

console.log(indexOfPortfolio);

//Exercício 3

let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];

console.log(menu2);

menu2.push('Contato');

console.log(menu2);

//For

//Exercício 1

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

//For/of

//Exercício 1

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let pessoas of names) {
    console.log(pessoas);
}