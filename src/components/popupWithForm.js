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

  _getInputValues(){
    this.formValues = {};
    this._inputList.forEach((input) => {
     return this.formValues[input.name] = input.value;
    });
    return this.formValues;
  }

  setEventListener () {
    super.setEventListener()
    this._formElement.addEventListener('submit', (evt)=> {
      evt.preventDefault()
      this.handleFormSubmit(this._getInputValues())
      this.close();
    })
  }

}