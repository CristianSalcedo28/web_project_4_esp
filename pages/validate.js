//const formSelector = document.querySelector(".popup__form");
//const formInput = formSelector.querySelector(".popup__item");
//const formError = formSelector.querySelector(`.${formInput.id}-error`);
//console.log(formInput.id);

//const POPUP_ITEM_NAME_ERROR = ".popup__item_name_error"
const showInputError = (formElement, inputElement, errorMessage) => {
//  console.log("llego aqui")
const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

//  element.classList.add(POPUP_ITEM_NAME_ERROR);
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__item-error");
};

const hideInputError = (formElement, inputElement) => {
 const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

//  element.classList.remove(POPUP_ITEM_NAME_ERROR);
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

/*       isValid(formElement, inputElement); */
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



//formElement.addEventListener("submit", function (evt) {
  // Cancela la acción del navegador por defecto, de modo que al hacer clic en el botón "Enviar" no se actualice la página
///  evt.preventDefault();
//});

// Llama a la función isValid() para cada entrada de caracteres
//formInput.addEventListener("change", function () {
//  isValid(formSelector, formInput);
//});