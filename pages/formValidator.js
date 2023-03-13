// enableValidation({
//   formSelector: ".popup__form",
//   inputSelector: ".popup__item",
//   submitButtonSelector: ".button-submit",
//   inactiveButtonClass: "pinput__btn_disabled",
//   // inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__item-error"
// });


// class FormValidator {
//   constructor (enableValidation){
//     this.formSelector = enableValidation.formSelector,
//     this.inputSelector = enableValidation.inputSelector,
//     this.errorClass = enableValidation.errorClass,
//     this.submitButtonSelector = enableValidation.submitButtonSelector,
//     this.inactiveButtonClass = enableValidation.inactiveButtonClass,
//     this._errorElement = enableValidation._errorElement
//   }

class FormValidator {
  constructor (errorElement){
    this._errorElement = errorElement
  }

  _showInputError = (formElement, inputElement, errorMessage) => {
    this._errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add("popup__item-error");
  };

  _hideInputError = (formElement, inputElement) => {
    this._errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    this._errorElement.classList.remove("popup__item-error");
    this._errorElement.textContent = "";
  };

  _checkValidity (formElement, inputElement) {
    if (!inputElement.validity.valid) {
      // Si NO lo es (!), muestra el elemento erróneo
      _showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      // Si es válido, oculta el elemento erróneo
      _hideInputError(formElement, inputElement);
    }
  };

  _isValid = (inputList) => {
    return inputList.every((inputElement) => inputElement.validity.valid);
  }

  _toggleButton = (formElement, inputList) =>{
    const buttonElement = formElement.querySelector(".button-submit")
    if (!this._isValid(inputList)) {
      buttonElement.setAttribute("disabled", true);
      buttonElement.classList.add("input__btn_disabled"); }
    else {
      buttonElement.removeAttribute("disabled", false);
      buttonElement.classList.remove("input__btn_disabled");
    }
  }
}

   function setEventListeners (formElement) {
    const inputList = Array.from(formElement.querySelectorAll(".popup__item"));

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        _checkValidity(formElement, inputElement);
        _toggleButton(formElement, inputList);
      });
    });
  };

   function enableValidation() {
    const formList = Array.from(document.querySelectorAll(".popup__form"));

    formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
  };
     enableValidation()