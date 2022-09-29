const openFormButton = document.querySelector('.button-edit'); 
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.close-button');
const popupName = document.querySelector ('.popup__item_name');
/*const popupProfession = document.querySelector ('.popup__item_profession');
const profileName = document.querySelector ('.profile__name');
const profileProfession = document.querySelector ('.profile__professsion');*/

function toggleForm() {
  popup.classList.toggle('popup__opened');
}

openFormButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm); 
/*
let formElement = document.querySelector ('.popup__container');
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
const popupName = document.querySelector ('.popup__item_name');
const popupProfession = document.querySelector ('.popup__item_profession');
*/
