const openFormButton = document.querySelector('.button-edit');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.close-button');

function toggleForm() {
  popup.classList.toggle('popup__opened');
}

openFormButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm);

const formElement = document.querySelector('.popup__container')

function cambiarTitulos(evt){
  evt.preventDefault();
  const inputName = document.querySelector('.popup__item_name').value;
  const inputProfession = document.querySelector('.popup__item_profession').value;

  const profileName = document.querySelector('.profile__name');
  const profileProfession = document.querySelector('.profile__profession');

  profileName.textContent = inputName;
  profileProfession.textContent = inputProfession;
  evt.target.reset();
}

const submitButton = document.querySelector('.button-submit');
submitButton.addEventListener("click", toggleForm);

document.querySelector(".popup__form").addEventListener('submit', cambiarTitulos);

