import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open({link, title}) {
    const popupImage = document.querySelector('.popup_image');
    popupImage.querySelector('.popup__image').src = link;
    document.querySelector('.popup__text').textContent = title;
    super.open();
  }
}