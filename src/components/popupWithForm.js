import Popup from "./popup.js"
import Card from "./card.js"
import UserInfo from "./UserInfo.js"
import { popupNewCard, cardsContainer, newCardButton } from "../pages/constants.js"

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit){
      super(popupSelector)
      this._inputList = this._popupElement.querySelectorAll('.popup__item')
      this._formElement = this._popupElement.querySelector('.popup__form')
      this._submitButton = this._popupElement.querySelector('.button-submit')
      this.handleFormSubmit = handleFormSubmit
  }

  close(){
    super.close()
    this._formElement.reset()
  }

  _addCard() {
      popupNewCard.classList.add('popup__show');
        evt.preventDefault();
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
        evt.target.reset();
  }

  _editProfile(value) {
    api.setUserInfo((data) =>{
      const popupProfile = document.querySelector(".popup_profile");
        popupProfile.classList.add('popup__show');
      this._userName.textContent = data.userName;
      this._userJob.textContent = data.userJob;
      this._userAvatar = data._userAvatar;
    })
  }


  _getInputValues(){
    this.formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.title] = input.value;
    });
    return this._formValues;
  }

  setEventListener () {
    super.setEventListener()
    this._formElement.addEventListener('submit', this.handleFormSubmit)
  }

}