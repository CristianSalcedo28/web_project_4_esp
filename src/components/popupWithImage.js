import Popup from "./popup.js"

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._link = this._popupElement.querySelector('.popup__image');
    this._title = this._popupElement.querySelector('.popup__text');
  }

  open(evt) {
    this._link.src = evt.target.src;
    this._title.textContent = evt.target.alt;
    super.open();
  }
}