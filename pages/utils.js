const openFormButton = document.querySelector('.button-edit');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.close-button');

function toggleForm() {
  popup.classList.toggle('popup__opened');
}

openFormButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm);

const formElement = document.querySelector('.popup__container')

function changeTitle(evt){
  evt.preventDefault();
  this.inputName = document.querySelector('#name');
  this.inputProfession = document.querySelector('#profession');

  this.profileName = document.querySelector('.profile__name');
  this.profileProfession = document.querySelector('.profile__profession');

  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
}

const submitButton = document.querySelector('.button-submit');
submitButton.addEventListener("click", toggleForm);

document.querySelector(".popup__form").addEventListener('submit', changeTitle);