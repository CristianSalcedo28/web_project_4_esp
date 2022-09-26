const openFormButton = document.querySelector('.button-edit'); 
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.close-button');

function toggleForm() {
  popup.classList.toggle('popup');
}

openFormButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm); 