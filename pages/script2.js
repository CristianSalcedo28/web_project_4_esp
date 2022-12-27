const newCardButton = document.querySelector('.button-add');
const cardsContainer = document.querySelector('.cards');
const popupNewCard = document.querySelector('.popup_new-card');
const popupImage = document.querySelector('.popup_image');
const templateCard = document.querySelector('.template__card').content.querySelector('.cards__item');
const form = document.querySelector('.popup__form');
const likeButton = document.querySelector('.button-like');
const initialCards = [
  {
    title: 'Valle de Yosemite',
    link: 'https://code.s3.yandex.net/web-code/yosemite.jpg'
  },
  {
    title: 'Lago Louise',
    link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg'
  },
  {
    title: 'Montañas Calvas',
    link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg'
  },
  {
    title: 'Latemar',
    link: 'https://code.s3.yandex.net/web-code/latemar.jpg'
  },
  {
    title: 'Parque Nacional de la Vanoise',
    link: 'https://code.s3.yandex.net/web-code/vanoise.jpg'
  },
  {
    title: 'Lago di Braies',
    link: 'https://code.s3.yandex.net/web-code/lago.jpg'
  }
];
// para crear las tarjetas iniciales con js
initialCards.forEach(function(elemento){
  const nuevaTarjeta = templateCard.cloneNode(true);
  nuevaTarjeta.querySelector('.cards__image').src = elemento.link;
  nuevaTarjeta.querySelector('.cards__name').textContent = elemento.title;
  nuevaTarjeta.setAttribute('title', elemento.title);
  cardsContainer.prepend(nuevaTarjeta);
});
// para agrandar la imagen 
  const handleclick = function(event){
   if(event.target.tagName === 'IMG'){

    popupImage.querySelector('.popup__image').src = event.target.src;
    popupImage.classList.add('popup__show');
    const title = event.target.parentElement.getAttribute('title');
    console.log(event.target.parentElement);
    document.querySelector('.popup__text').textContent = title;
  }
  if(event.target.tagName === 'BUTTON'){
    event.target.parentNode.remove();
  }
}
//para quitar la foto ampliada con Escape (no funciona)
cardsContainer.addEventListener('click', handleclick);

const handleKeyPress = function (event) {
  if(event.key === 'esc'){
    popupImage.classList.remove('popup__show');
  }
};
//para quitar la foto con un click afuera 
document.addEventListener('keypress', handleKeyPress);

popupImage.addEventListener('click', function(event) {
  if(event.target.classList.contains('popup')){
    popupImage.classList.remove('popup__show');
  }
});
//abrir el popup para agregar una imagen
newCardButton.addEventListener('click', function(event){
  popup.classList.add('popup__show');
});
//cerrar el popup
closeButton.addEventListener('click', function(event){
  popup.classList.remove('popup__show');
});


form.addEventListener('submit', function(event){
  event.preventDefault();
  // obtener el valor del titulo
  const titulo = document.querySelector('#title').value;
  // obtener el valor del url
  const url = document.querySelector('#image').value;
  // crear nueva tarjeta
  const nuevaTarjeta = templateCard.cloneNode(true);
  // completar informacion
  nuevaTarjeta.querySelector('.cards__image').src = elemento.link;
  nuevaTarjeta.querySelector('.cards__name').textContent = elemento.title;
  // agregar al contenedor
  cardsContainer.prepend(nuevaTarjeta);
  // cerrar el popup
  popupNewCard.classList.remove('popup__show');
  // limpiar el formulario
  event.target.reset();
});

likeButton.addEventListener("click", function (event) {
  event.target.classList.toggle("button-like_active");
}); 