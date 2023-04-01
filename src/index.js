import "./styles/index.css"
import {  initialCards } from "./pages/constants.js"
import  Card  from "./pages/card.js"
import FormValidator from "./pages/formValidator.js"
import { openFormButton, popup, closeButton, popupProfile, newCardButton, cardsContainer, popupNewCard, popupImage, templateCard, form, closeButtonAddCard, closeButtonNewImage } from "./pages/constants.js"
import Popup from "./components/popup.js";
import PopupWithForm from "./components/popupWithForm.js";

form.addEventListener('submit', function(event){
  event.preventDefault();
  // obtener el valor del titulo
  const title = document.querySelector('#title').value;
  // obtener el valor del url
  const link = document.querySelector('#image').value;
  // crear nueva tarjeta
  const nuevaTarjeta = new Card({link, title}).generateCard();
  nuevaTarjeta.setAttribute("title", title);
  // cerrar el popup
  popupNewCard.classList.remove('popup__show');
  // limpiar el formulario
  cardsContainer.prepend(nuevaTarjeta);
  event.target.reset();
});

function renderInitialCards() {
initialCards.forEach((data) => {
  const cardCreated = new Card(data).generateCard();
  cardCreated.setAttribute("title", data.title);
  cardsContainer.prepend(cardCreated);
});
}
renderInitialCards();

const formValidator = {
  formSelector: ".popup__form",
  inputSelector: ".popup__item",
  submitButtonSelector: ".button-submit",
  inactiveButtonClass: "pinput__btn_disabled",
  errorClass: "popup__item-error"
};

const editForm = new FormValidator (formValidator);
editForm._enableValidation();

function toggleForm() {
  popup.classList.toggle('popup__opened');
}

openFormButton.addEventListener('click', (evt)=> {
  const popupProfile = document.querySelector(".popup_profile")
    const popup = new Popup(popupProfile)
    popup.open();
    popup.setEventListener();
});
// closeButton.addEventListener('click', toggleForm);
console.log(newCardButton)
const popupNewCard2 = document.querySelector(".popup_new-card")
const popupAddCard = new PopupWithForm(popupNewCard2,  )
popupAddCard.setEventListener();
newCardButton.addEventListener('click', (evt)=> {

  console.log(popupAddCard)
  popupAddCard.open();
});

//const formElement = document.querySelector('.popup__container')

function changeTitle(evt){
  evt.preventDefault();
  this.inputName = document.querySelector('#name');
  this.inputProfession = document.querySelector('#profession');

  this.profileName = document.querySelector('.profile__name');
  this.profileProfession = document.querySelector('.profile__profession');

  this.profileName.textContent = this.inputName.value;
  this.profileProfession.textContent = this.inputProfession.value;
}

const submitButton = document.querySelector('.button-submit');
submitButton.addEventListener("click", toggleForm);

document.querySelector(".popup__form").addEventListener('submit', changeTitle);

//para quitar la foto ampliada con Escape
// const keyHandler = (evt) => {
//   if(evt.key === "Escape") {
//    popupImage.classList.remove('popup__show');
//    popupNewCard.classList.remove('popup__show');
//    popupProfile.classList.remove('popup__opened');
//   }
// }

// document.addEventListener('keydown', keyHandler)

//para quitar la foto con un click afuera
// document.addEventListener('click', function(event) {
//   if(event.target.classList.contains('popup')){
//     popupImage.classList.remove('popup__show');
//     popupNewCard.classList.remove('popup__show');
//     popupProfile.classList.remove('popup__opened');
//   }
// });

//abrir el popup para agregar una imagen
// newCardButton.addEventListener('click', function(event){
//   popupNewCard.classList.add('popup__show');
// });
// //cerrar el popup
// closeButtonAddCard.addEventListener('click', function(event){
//   popupNewCard.classList.remove('popup__show');
// });
//para cerrar popup imagen
closeButtonNewImage.addEventListener('click', function(event){
  popupImage.classList.remove('popup__show');
});

