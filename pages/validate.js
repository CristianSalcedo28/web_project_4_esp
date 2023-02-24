const showInputError = (formElement, inputElement, errorMessage) => {
const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__item-error");
};

const hideInputError = (formElement, inputElement) => {
 const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove("popup__item-error");
  errorElement.textContent = "";
};

const checkValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // Si NO lo es (!), muestra el elemento erróneo
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // Si es válido, oculta el elemento erróneo
    hideInputError(formElement, inputElement);
  }
};

const isValid = (inputList) => {
  return inputList.every((inputElement) => inputElement.validity.valid);
}

const toggleButton = (formElement, inputList) =>{
  const buttonElement = formElement.querySelector(".button-submit")
  if (!isValid(inputList)) {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add("input__btn_disabled"); }
  else {
    buttonElement.removeAttribute("disabled", false);
    buttonElement.classList.remove("input__btn_disabled");
  }
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__item"));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkValidity(formElement, inputElement);
      toggleButton(formElement, inputList);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
  formElement.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });
  setEventListeners(formElement);
});
};
    enableValidation();

