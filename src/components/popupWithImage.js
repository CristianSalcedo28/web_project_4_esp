import Popup from "./popup.js"

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._link = this._popupElement.querySelector('.popup__image');
    this._title = this._popupElement.querySelector('.popup__text');
  }

  open({link, title}) {
    this._link.src = link;
    this._title.textContent = title;
    super.open();
  }
}