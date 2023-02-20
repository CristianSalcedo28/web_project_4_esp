const openFormButton = document.querySelector('.button-edit');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.close-button');
const popupPerfil = document.querySelector('.popup_perfil');

function toggleForm() {
  popup.classList.toggle('popup__opened');
}

openFormButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm);

const formElement = document.querySelector('.popup__container')

function cambiarTitulos(evt){
  evt.preventDefault();
  const inputName = document.querySelector('#name');
  const inputProfession = document.querySelector('#profession');

  const profileName = document.querySelector('.profile__name');
  const profileProfession = document.querySelector('.profile__profession');

  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
}

const submitButton = document.querySelector('.button-submit');
submitButton.addEventListener("click", toggleForm);

document.querySelector(".popup__form").addEventListener('submit', cambiarTitulos);



