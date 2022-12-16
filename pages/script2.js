const newCardButton = document.querySelector('.button-add');
const cardsContainer = document.querySelector('.cards');
const popupNewCard = document.querySelector('.popup_new-card');
const popupImage = document.querySelector('.popup_image');
const templateCard = document.querySelector('.template__card').content.querySelector('.cards__item');
const form = document.querySelector('.popup__form');
const initialCards = [
  {
    name: 'Valle de Yosemite',
    link: 'https://code.s3.yandex.net/web-code/yosemite.jpg'
  },
  {
    name: 'Lago Louise',
    link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg'
  },
  {
    name: 'Montañas Calvas',
    link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg'
  },
  {
    name: 'Latemar',
    link: 'https://code.s3.yandex.net/web-code/latemar.jpg'
  },
  {
    name: 'Parque Nacional de la Vanoise',
    link: 'https://code.s3.yandex.net/web-code/vanoise.jpg'
  },
  {
    name: 'Lago di Braies',
    link: 'https://code.s3.yandex.net/web-code/lago.jpg'
  }
];

initialCards.forEach(function(elemento){
  const nuevaTarjeta = templateCard.cloneNode(true);
  nuevaTarjeta.querySelector('.cards__image').src = elemento.link;
  nuevaTarjeta.querySelector('.cards__name').textContent = elemento.name;
  cardsContainer.append(nuevaTarjeta)
});

cardsContainer.addEventListener('click', function(event){
   if(event.target.tagName === 'IMG'){

    popupImage.querySelector('.popup__image').src = event.target.src;
    popupImage.classList.add('popup__show');
  }
});

cardsContainer.addEventListener('click', handleclick);

const handleKeyPress = function (event) {
  if(event.key === 'esc'){
    popupImage.classList.remove('popup__show');
  }
};

document.addEventListener('keypress', handleKeyPress);

popupImage.addEventListener('click', function(event) {
  if(event.target.classList.contains('popup')){
    popupImage.classList.remove('popup__show');
  }
});

newCardButton.addEventListener('click', function(event){
  popupNewCard.classList.add('popup__show');
})

form.addEventListener('submit', function(event){
  event.preventDefault();
})