import "./styles/index.css"
import  Card  from "./components/card.js"
import FormValidator from "./components/formValidator.js"
import { openFormButton, popup, submitButton, popupProfile, newCardButton, cardsContainer, popupNewCard, popupImage, templateCard, form, closeButtonAddCard, closeButtonNewImage, avatar, popupAvatar } from "./constants/constants.js"
import Popup from "./components/popup.js";
import PopupWithForm from "./components/popupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js"
import Api from "./components/Api.js"
import PopupDeleteImage from "./components/popupDeleteImage"

const inputName = document.querySelector('#name')
const inputProfession = document.querySelector('#profession')
const popupAddNewCard = document.querySelector(".popup_new-card")
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const profileAvatar = document.querySelector('.profile__avatar');
const popupRemove = document.querySelector(".popup_remove");
const deleteCardSubmit = document.querySelector(".button-submit-yes");
const profileInfo = new UserInfo({userName: profileName, userJob: profileProfession, userAvatar: profileAvatar})

function loadingHandler(loading, modalSelector, text) {
  const modal = document.querySelector(`.${modalSelector}`);
  if (loading) {
    modal.querySelector(".button-submi").textContent = text;
  } else {
    modal.querySelector(".button-submi").textContent = text;
  }
}

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
  },  (id)=>{
    popupDeleteCard.open();
    popupDeleteCard.setSubmitAction(() => {
      api.removeCard(id).then(() =>{
        popupDeleteCard.close();
        cardCreated.remove();
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

openFormButton.addEventListener('click', ()=> {
  inputName.value = profileName.textContent;
   inputProfession.value = profileProfession.textContent;
    popupEditProfile.open();
});

newCardButton.addEventListener('click', (evt)=> {
  popupAddCard.open();
});


avatar.addEventListener("click", function(event){
  popupSetAvatar.open();
});
