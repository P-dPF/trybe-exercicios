// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

//Execício 1
HREF_LINK.addEventListener('click', function(event) {
    event.preventDefault();
});

//Exercício 2
INPUT_CHECKBOX.addEventListener('click', function(event) {
    event.preventDefault();
});

//Exercício 3
INPUT_TEXT.addEventListener('keypress', function(event) {
   if (event.key !== 'a') {
       event.preventDefault();
   } 
});