import { initialCards, templateCard, cardsContainer } from "../pages/constants.js";

export default class Card {
  constructor(data, imageModal, handleDeleteCard, handleBtnLike) {
    this._title = data.name;
    this._link = data.link;
    this._likes = data.likes.length;
    this.cardId = data._id;
    this.imageModal = imageModal;
    this.handleDeleteCard = handleDeleteCard;
    this._handleBtnLike = this._handleBtnLike.bind(this);
  }

  // para crear las tarjetas iniciales con js
  _getTemplate() {
    const cardTemplate = templateCard.cloneNode(true);
    return cardTemplate;
  }

  _handleBtnLike(cardId) {
  //  this.cardBtnLike.classList.toggle("button-like-active");
  if (!this.cardBtnLike.classList.contains("button-like-active")) {
    this.cardBtnLike.classList.add("button-like-active");
 //   await  this._api.addLike(cardId);
  } else {
    this.cardBtnLike.classList.remove("button-like-active");
 //   await  this._api.removeLike(cardId);
  }
   }

  // _handleBtnDelete() {
  //   this.cardElement.remove();
  // }

  _setEventListeners() {
    this.cardBtnDelete.addEventListener("click", () => {
      this.handleDeleteCard(this.cardId);
    });

    this.cardBtnLike.addEventListener("click", () => {
      this._handleBtnLike(this.cardId);
    });

    this.cardElement.querySelector(".cards__image").addEventListener('click',this.imageModal
    );
  }

  setCardProperties() {
    this.cardElement.querySelector(".cards__name").textContent = this._title;
    this.cardElement.querySelector(".cards__image").src = this._link;
    this.cardElement.querySelector(".cards__image").alt = this._title;
    this.cardBtnLike = this.cardElement.querySelector(".button-like");
    this.cardBtnDelete = this.cardElement.querySelector(".button-trash");

    const cardLikesCount = this.cardElement.querySelector(".likes__counter");
    cardLikesCount.textContent = this._likes;

  }

  generateCard() {
    this.cardElement = this._getTemplate();
    this.setCardProperties();
    this._setEventListeners();

    return this.cardElement;
  }
}

