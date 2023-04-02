export default class FormValidator {
  constructor ({formSelector, inputSelector, errorClass, submitButtonSelector, inactiveButtonClass, errorElement }){
    this.formSelector = formSelector,
    this.inputSelector = inputSelector,
    this.errorClass = errorClass,
    this.submitButtonSelector = submitButtonSelector,
    this.inactiveButtonClass = inactiveButtonClass,
    this._errorElement = errorElement
  }

  _showInputError = (formElement, inputElement, errorMessage) => {
    this._errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this.errorClass);
  };

  _hideInputError = (formElement, inputElement) => {
    this._errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    this._errorElement.classList.remove(this.errorClass);
    this._errorElement.textContent = "";
  };

  _checkValidity (formElement, inputElement) {
    if (!inputElement.validity.valid) {
      // Si NO lo es (!), muestra el elemento erróneo
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      // Si es válido, oculta el elemento erróneo
      this._hideInputError(formElement, inputElement);
    }
  };

  _isValid = (inputList) => {
    return inputList.every((inputElement) => inputElement.validity.valid);
  }

  _toggleButton = (formElement, inputList) =>{
    const buttonElement = formElement.querySelector(this.submitButtonSelector)
    if (!this._isValid(inputList)) {
      buttonElement.setAttribute("disabled", true);
      buttonElement.classList.add(this.inactiveButtonClass); }
    else {
      buttonElement.removeAttribute("disabled", false);
      buttonElement.classList.remove(this.inactiveButtonClass);
    }
  }

  _setEventListeners (formElement) {
    const inputList = Array.from(formElement.querySelectorAll(this.inputSelector));

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkValidity(formElement, inputElement);
        this._toggleButton(formElement, inputList);
      });
    });
  };

  _enableValidation() {
    const formList = Array.from(document.querySelectorAll(this.formSelector));

    formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners(formElement);
  });
  };
}