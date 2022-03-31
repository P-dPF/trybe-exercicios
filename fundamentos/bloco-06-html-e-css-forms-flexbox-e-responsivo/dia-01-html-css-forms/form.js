let submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
});

let picUploadBtn = document.getElementById('trip-photos');

let agreeBtn = document.getElementById('agree');

agreeBtn.addEventListener('click', function(event) {
    if (event.target.checked === true) {
        picUploadBtn.disabled = false;
    }
    else {
        picUploadBtn.disabled = true;
    }
});