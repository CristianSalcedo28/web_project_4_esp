import { initialCards, templateCard, cardsContainer } from "../constants/constants.js";
import Api from "./Api.js";

export default class Card {
  constructor(data, imageModal, handleDeleteCard) {
    this._title = data.name;
    this._link = data.link;
    this._likes = data.likes.length;
    this.arrayLikes = data.likes,
    this._ownerId = data.owner._id,
    this.cardId = data._id;
    this.userId = "c5d2679ba7b5995f5b6026eb";
    this.imageModal = imageModal;
    this.handleDeleteCard = handleDeleteCard;
    this._handleBtnLike = this._handleBtnLike.bind(this);
    this.api = new Api({
      baseUrl: 'https://around.nomoreparties.co/v1/web_es_cohort_03',
      headers: {
        authorization: '12f0e9bd-a113-4001-9763-cce8c5e105dc',
        'Content-Type': 'application/json',
      },
    });
  }

  // para crear las tarjetas iniciales con js
  _getTemplate() {
    const cardTemplate = templateCard.cloneNode(true);
    return cardTemplate;
  }

 async _handleBtnLike(cardId) {
  if (!this.cardBtnLike.classList.contains("button-like-active")) {
    this.cardBtnLike.classList.add("button-like-active");
    const likes = await  this.api.addLike(cardId);
    const cardLikesCount = this.cardElement.querySelector(".likes__counter");
    cardLikesCount.textContent = likes.likes.length;
  } else {
    this.cardBtnLike.classList.remove("button-like-active");
    const likes = await  this.api.removeLike(cardId);
    const cardLikesCount = this.cardElement.querySelector(".likes__counter");
    cardLikesCount.textContent = likes.likes.length;
  }
   }

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
    if (this._ownerId === this.userId) {
      this.cardBtnDelete.addEventListener("click", (evt) => {
        this.handleDeleteCard(evt);
      });
    } else {
      this.cardBtnDelete.remove();
    }
    const cardLikesCount = this.cardElement.querySelector(".likes__counter");
    cardLikesCount.textContent = this._likes;

  }

  generateCard() {
    this.cardElement = this._getTemplate();
    this.setCardProperties();
    this._setEventListeners();
    const hasLike = this.arrayLikes.some((item) =>{
      return item._id === this.userId
    })
    if (hasLike)this.cardBtnLike.classList.add("button-like-active");

    return this.cardElement;
  }
}

