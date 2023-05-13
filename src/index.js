import "./styles/index.css"
import {  initialCards } from "./pages/constants.js"
import  Card  from "./components/card.js"
import FormValidator from "./components/formValidator.js"
import { openFormButton, popup, submitButton, popupProfile, newCardButton, cardsContainer, popupNewCard, popupImage, templateCard, form, closeButtonAddCard, closeButtonNewImage, avatar, popupAvatar } from "./pages/constants.js"
import Popup from "./components/popup.js";
import PopupWithForm from "./components/popupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js"
import Api from "./components/Api.js"
import PopupDeleteImage from "./components/popupDeleteImage"

const popupAddNewCard = document.querySelector(".popup_new-card")

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const profileAvatar = document.querySelector('.profile__avatar');

const popupRemove = document.querySelector(".popup_remove");
const deleteCardSubmit = document.querySelector(".button-submit-yes");


const profileInfo = new UserInfo({userName: profileName, userJob: profileProfession, userAvatar: profileAvatar})

export const api = new Api({
  baseUrl: 'https://around.nomoreparties.co/v1/web_es_cohort_03',
  headers: {
    authorization: '12f0e9bd-a113-4001-9763-cce8c5e105dc',
    'Content-Type': 'application/json',
  },
});

api.getUserInfo().then((json)=>{
  profileInfo.setUserInfo(json)
  })


//  form.addEventListener('submit', function(event){
//    event.preventDefault();
//   // obtener el valor del titulo
//    const title = document.querySelector('#title').value;
//   // obtener el valor del url
//    const link = document.querySelector('#image').value;
//   // crear nueva tarjeta
//   const nuevaTarjeta = new Card({link, title}).generateCard();
//    nuevaTarjeta.setAttribute("title", title);
//   // cerrar el popup
//   popupNewCard.classList.remove('popup__show');
//   // limpiar el formulario
//   cardsContainer.prepend(nuevaTarjeta);
// //   event.target.reset();
//  });


const popupExpandedImage = document.querySelector(".popup_image")

const popupAddCard = new PopupWithForm(popupAddNewCard, (value)=> {
  console.log(value);
  api.addCard({name: value.title, link: value.link}).then((json)=> {
    const card = createCard(json);
    cardsContainer.prepend(card)})
})

function createCard(data){
  const cardCreated = new Card(data, (evt) => {
    const modalCard = new PopupWithImage(popupExpandedImage)
    modalCard.open(evt)
  },
  // handleBtnLike, (buttonLiked) => {
  //   return buttonLiked ? api.addLike(data._id) : api.removeLike(data._id);
  // },
  (id)=>{
    popupDeleteCard.open();
    popupDeleteCard.setSubmitAction(() => {
      api.removeCard(id).then(() =>{
        popupDeleteCard.close();
      })
    });
  }
  ).generateCard();
  return cardCreated
}

function renderInitialCards() {
  api.getInitialCards().then((json)=>{
  json.forEach((data) => {
    const cardCreated = createCard(data);
    cardCreated.setAttribute("title", data.title);
    cardsContainer.prepend(cardCreated);
  });
})}
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

const popupEditProfile = new PopupWithForm(popupProfile, (value)=> {
  api.setUserInfo({name: value.user, about: value.profession}).then(() => {
    api.getUserInfo().then((json)=>{
      profileInfo.setUserInfo(json)
      }); submitButton.textContent = "Save";
  })
})


const popupSetAvatar = new PopupWithForm(popupAvatar, (value)=> {
  api.setUserAvatar({avatar: value.image}).then((json) => {
    profileInfo.setUserAvatar(json.avatar)
  })
})

const popupDeleteCard = new PopupDeleteImage({popupSelector: popupRemove, submitButton: deleteCardSubmit})
  popupDeleteCard.setEventListeners();


openFormButton.addEventListener('click', (evt)=> {
    popupEditProfile.open();
});

newCardButton.addEventListener('click', (evt)=> {
  popupAddCard.open();
});


avatar.addEventListener("click", function(event){
  popupSetAvatar.open();
});


// function changeTitle(evt){
//   evt.preventDefault();
//   this.inputName = document.querySelector('#name');
//   this.inputProfession = document.querySelector('#profession');

//   this.profileName = document.querySelector('.profile__name');
//   this.profileProfession = document.querySelector('.profile__profession');

//   this.profileName.textContent = this.inputName.value;
//   this.profileProfession.textContent = this.inputProfession.value;

// }

// const submitButton = document.querySelector('.button-submit');
// submitButton.addEventListener("click", toggleForm);

// document.querySelector(".popup__form").addEventListener('submit', changeTitle);