import Popup from "./popup.js"

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
      this._formValues[input.title] = input.value;
    });
    return this._formValues;
  }

  setEventListener () {
    super.setEventListener()
    this._formElement.addEventListener('submit', (evt)=> {
      evt.preventDefault();
    })
  }
}