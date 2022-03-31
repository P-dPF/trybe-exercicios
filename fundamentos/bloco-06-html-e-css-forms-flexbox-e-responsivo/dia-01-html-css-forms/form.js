let submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
});

let picUploadBtn = document.getElementById('trip-photos');

let agreeBtn = document.getElementById('agree');

agreeBtn.addEventListener('change', function(event) {
    if (event.target.checked === true) {
        picUploadBtn.disabled = false;
    }
    else {
        picUploadBtn.disabled = true;
    }
});

let nameInput = document.getElementById('user-name');
let emailInput = document.getElementById('user-email');
let explanationInput = document.getElementById('explanation');

submitBtn.addEventListener('click', function() {
    if (nameInput.value.length < 10 || nameInput.value.length > 40) {
        alert('Dados Inválidos');
    }
    else if (emailInput.value.length < 10 || emailInput.value.length > 50) {
        alert('Dados Inválidos');
    }
    else if (explanationInput.value.length > 500) {
        alert('Dados Inválidos');
    }
    else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    }
});