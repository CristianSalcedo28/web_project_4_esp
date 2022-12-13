const newCardButton = document.querySelector('.button-add');
const cardsContainer = document.querySelector('.cards');
const popupNewCard = document.querySelector('.popup_new-card');
const popupImage = document.querySelector('.popup_image');
const templateCard = document.querySelector('.template__card').content.querySelector('.cards__item');
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
  // console.log('click', event.target);
  if(event.target.tagName === 'IMG'){
    console.log('click en la imagen');

    popupImage.querySelector('.popup__image').src = event.target.src;
    popupImage.classList.add('popup__show');
  }
});
const handleKeyPress = function (event) {

}
document.addEventListener()