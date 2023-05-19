import Popup from "./popup.js"
import Card from "./card.js"
import UserInfo from "./UserInfo.js"
import { popupNewCard, cardsContainer, newCardButton } from "./constants.js"

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit){
      super(popupSelector)
      this._inputList = this._popupElement.querySelectorAll('.popup__item')
      this._formElement = this._popupElement.querySelector('.popup__form')
      this._submitButton = this._popupElement.querySelector('.button-submit')
      this.handleFormSubmit = handleFormSubmit
      this.handleForm = this.handleForm.bind(this)
  }

  close(){
    super.close()
    this._formElement.reset()
    this._formElement.removeEventListener("submit", this.handleForm);
  }

  _getInputValues(){
    this.formValues = {};
    this._inputList.forEach((input) => {
     return this.formValues[input.name] = input.value;
    });
    return this.formValues;
  }

  handleForm(evt){
    evt.preventDefault()
    evt.target.querySelector(".button-submit").textContent = "Saving...";
    this.handleFormSubmit(this._getInputValues())
    this.close();
  }

  setEventListener () {
    super.setEventListener()
    this._formElement.addEventListener('submit', this.handleForm);
    }
  }

