const formSelector = document.querySelector(".popup__form");
const formInput = formSelector.querySelector(".popup__item");
const formError = formSelector.querySelector(".name-error");
console.log(formInput.id);

const POPUP_ITEM_NAME_ERROR = ".popup__item_name_error"
const showInputError = (element, errorMessage) => {
//  console.log("llego aqui")
  element.classList.add(POPUP_ITEM_NAME_ERROR);
  formError.textContent = errorMessage;
  formError.classList.add("popup__item-error");
};

const hideInputError = (element) => {
  element.classList.remove(POPUP_ITEM_NAME_ERROR);
  formError.classList.remove("popup__item-error");
  formError.textContent = "";
};

const isValid = () => {
  if (!formInput.validity.valid) {
    // Si NO lo es (!), muestra el elemento erróneo
    showInputError(formInput, formInput.validationMessage);
  } else {
    // Si es válido, oculta el elemento erróneo
    hideInputError(formInput);
  }
};

formElement.addEventListener("submit", function (evt) {
  // Cancela la acción del navegador por defecto, de modo que al hacer clic en el botón "Enviar" no se actualice la página
  evt.preventDefault();
});

// Llama a la función isValid() para cada entrada de caracteres
formInput.addEventListener("change", isValid);