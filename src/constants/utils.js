// import { openFormButton, popup, closeButton, popupProfile, newCardButton, cardsContainer, popupNewCard, popupImage, templateCard, form, closeButtonAddCard, closeButtonNewImage } from "./constants.js"
// import PopUp from "../src/components/popup.js.js";
// import PopupWithForm from "../components/popupWithForm.js";

// function toggleForm() {
//   popup.classList.toggle('popup__opened');
// }

// openFormButton.addEventListener('click', (evt)=> {
//   console.log("probando")
//   const popupProfile = document.querySelector(".popup_profile")
//     const popup = new PopUp(popupProfile)
//     popup.open();
//     popup.setEventListener();
// });
// // closeButton.addEventListener('click', toggleForm);

// newCardButton.addEventListener('.click', (evt)=> {
//   const popupNewCard = document.querySelector(".popup_new-card")
//     const popupAddCard = new PopupWithForm(popupNewCard)
//     popupAddCard.open();
//     popupAddCard.setEventListener();
// });

//const formElement = document.querySelector('.popup__container')

function changeTitle(evt){
  this.inputName = document.querySelector('#name');
  this.inputProfession = document.querySelector('#profession');

  this.profileName = document.querySelector('.profile__name');
  this.profileProfession = document.querySelector('.profile__profession');

  this.profileName.textContent = this.inputName.value;
  this.profileProfession.textContent = this.inputProfession.value;
}

// const submitButton = document.querySelector('.button-submit');
// submitButton.addEventListener("click", toggleForm);

// document.querySelector(".popup__form").addEventListener('submit', changeTitle);

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

// //para cerrar popup imagen
// closeButtonNewImage.addEventListener('click', function(event){
//   popupImage.classList.remove('popup__show');
// });

