import { initialCards, templateCard, cardsContainer } from "../pages/constants.js";

export default class Card {
  constructor(data) {
    this._title = data.title,
    this._link = data.link;
  }

  // para crear las tarjetas iniciales con js
  _getTemplate() {
    const cardTemplate = templateCard.cloneNode(true);
    return cardTemplate;
  }

  _handleBtnLike() {
    this.cardBtnLike.classList.toggle("button-like-active");
  }

  _handleBtnTrash() {
    const popupRemove = document.querySelector(".popup_remove");
      popupRemove.classList.add('popup__show');
  }

  // _handleBtnDelete() {
  //   this.cardElement.remove();
  // }

//PARA EXPANDIR LA IMAGEN
  _handleClick() {
    const popupImage = document.querySelector('.popup_image');
      popupImage.querySelector('.popup__image').src = this._link;
      popupImage.classList.add('popup__show');
      document.querySelector('.popup__text').textContent = this._title;
  }

  _setEventListeners() {
    this.cardBtnDelete.addEventListener("click", () => {
      this._handleBtnTrash();
    });

    this.cardBtnLike.addEventListener("click", () => {
      this._handleBtnLike();
    });
    this.cardElement.querySelector(".cards__image").addEventListener('click',() => {
      this._handleClick();
    });
  }

  setCardProperties() {
    this.cardElement.querySelector(".cards__name").textContent = this._title;
    this.cardElement.querySelector(".cards__image").src = this._link;
    this.cardBtnLike = this.cardElement.querySelector(".button-like");
    this.cardBtnDelete = this.cardElement.querySelector(".button-trash");
  }

  generateCard() {
    this.cardElement = this._getTemplate();
    this.setCardProperties();
    this._setEventListeners();

    return this.cardElement;
  }
}

