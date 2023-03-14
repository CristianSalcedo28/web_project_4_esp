import {  initialCards, cardsContainer, popupNewCard, templateCard, form } from "./constants.js"
import  Card  from "./card.js"
import FormValidator from "./formValidator.js"

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