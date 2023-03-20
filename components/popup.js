import { popup, popupImage, popupNewCard, popupProfile } from "../pages/constants";

class PopUp {
  constructor(formSelector){
    this._formSelector = formSelector;
  }

  open () {

  }
  close () {
    this.popup.remove();
  }

  _hadleEscClose () {

  }

  setEventListener () {
    this.closeButtonAddCard.addEventListener("click", () => {
      console.log("delete btn click")
      this.close();
    });

    this.closeButtonNewImage.addEventListener("click", () => {
      console.log("delete btn click")
      this.close();
    });
  }
}