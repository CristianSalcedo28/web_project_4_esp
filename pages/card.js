import { initialCards } from "./constants.js";
const templateCard = document.querySelector(".template__card").content.querySelector(".cards__item");
const cardsContainer = document.querySelector(".cards");

class Card {
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

  _handleBtnDelete() {
    this.cardElement.remove();
  }

  _setEventListeners() {
    this.cardBtnDelete.addEventListener("click", () => {
      this._handleBtnDelete();
    });

    this.cardBtnLike.addEventListener("click", () => {
      this._handleBtnLike();
    });
  }

  setCardProperties() {
    this.cardTitle = this.cardElement.querySelector(".cards__name").textContent = this._title;
    this.cardLink = this.cardElement.querySelector(".cards__image").src = this._link;
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

initialCards.forEach((data) => {
  const cardCreated = new Card(data).generateCard();
  cardCreated.setAttribute("title", data.title);
  cardsContainer.prepend(cardCreated);
});
