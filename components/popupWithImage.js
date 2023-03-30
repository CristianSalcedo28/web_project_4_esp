import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open({link, title}) {
//    this.popupImage = document.querySelector(".popup__image");
    const popupImage = document.querySelector('.popup_image');
    popupImage.querySelector('.popup__image').src = link;
    document.querySelector('.popup__text').textContent = title;
    // this.popupImage.src = link;
    // this.popupImage.alt = title;
    // this.imageText = document.querySelector(".popup__text");
    // this.imageText.textContent = title;
    super.open();
  }
}