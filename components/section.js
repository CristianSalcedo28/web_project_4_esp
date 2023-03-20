import { cardsContainer } from "../pages/constants";
import { initialCards } from "../pages/constants";

class Section {
  constructor({ item, renderer }, containerSelector ) {
    this._initialArray = item;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderer() {
    initialCards.forEach((data) => {
      const cardCreated = new Card(data).generateCard();
      cardCreated.setAttribute("title", data.title);
      cardsContainer.prepend(cardCreated);

 //     this.addItem(cardElement);
    });
  }

  addItem(element) {
    this._container.append(element);
  }
}