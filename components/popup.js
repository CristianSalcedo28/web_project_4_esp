import { popup, popupImage, popupNewCard, popupProfile, closeButtonAddCard, closeButtonNewImage, newCardButton, openFormButton } from "../pages/constants";

class PopUp {
  constructor(formSelector){
    this._formSelector = formSelector;
  }

  open () {
    popupNewCard.classList.add('popup__show');
    popup.classList.toggle('popup__opened');
  }
  close () {
    popup.remove();
  }

  _hadleEscClose () {

  }

  setEventListener () {
    closeButtonAddCard.addEventListener("click", () => {
      console.log("delete btn click")
      this.close();
    });

    closeButtonNewImage.addEventListener("click", () => {
      console.log("delete btn click")
      this.close();
    });

    newCardButton.addEventListener("click", () => {
      console.log("delete btn click")
      this.open();
    });

    openFormButton.addEventListener("click", () => {
      console.log("delete btn click")
      this.open();
    });

  }
}