import { popupProfile, newCardButton, cardsContainer, popupNewCard, popupImage, templateCard, form, closeButtonAddCard, closeButtonNewImage } from "./constants.js"

// const initialCards = [
//   {
//     title: 'Valle de Yosemite',
//     link: 'https://code.s3.yandex.net/web-code/yosemite.jpg'
//   },
//   {
//     title: 'Lago Louise',
//     link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg'
//   },
//   {
//     title: 'Montañas Calvas',
//     link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg'
//   },
//   {
//     title: 'Latemar',
//     link: 'https://code.s3.yandex.net/web-code/latemar.jpg'
//   },
//   {
//     title: 'Parque Nacional de la Vanoise',
//     link: 'https://code.s3.yandex.net/web-code/vanoise.jpg'
//   },
//   {
//     title: 'Lago di Braies',
//     link: 'https://code.s3.yandex.net/web-code/lago.jpg'
//   }
// ];

const handleLike = function(event){
  event.target.classList.toggle('button-like-active');
}
// para crear las tarjetas iniciales con js
// initialCards.forEach(function(elemento){
//   const newCard = templateCard.cloneNode(true);
//   newCard.querySelector('.cards__image').src = elemento.link;
//   newCard.querySelector('.cards__name').textContent = elemento.title;
//   newCard.setAttribute('title', elemento.title);
//   newCard.querySelector('.button-like').addEventListener('click', function(event){
//     handleLike(event)
// });
//   cardsContainer.prepend(newCard);
// });
// para agrandar la imagen
//   const handleclick = function(event){
//    if(event.target.tagName === 'IMG'){
//     popupImage.querySelector('.popup__image').src = event.target.src;
//     popupImage.classList.add('popup__show');
//     const title = event.target.parentElement.getAttribute('title');
//     document.querySelector('.popup__text').textContent = title;
//   }
//   if(event.target.className === 'button-trash'){
//     event.target.parentNode.remove();
//   }
// }
// cardsContainer.addEventListener('click', handleclick);

// //para quitar la foto ampliada con Escape
// const keyHandler = (evt) => {
//   if(evt.key === "Escape") {
//    popupImage.classList.remove('popup__show');
//    popupNewCard.classList.remove('popup__show');
//    popupProfile.classList.remove('popup__opened');
//   }
// }

// document.addEventListener('keydown', keyHandler)

// //para quitar la foto con un click afuera
// document.addEventListener('click', function(event) {
//   if(event.target.classList.contains('popup')){
//     popupImage.classList.remove('popup__show');
//     popupNewCard.classList.remove('popup__show');
//     popupProfile.classList.remove('popup__opened');
//   }
// });

// //abrir el popup para agregar una imagen
// newCardButton.addEventListener('click', function(event){
//   popupNewCard.classList.add('popup__show');
// });
// //cerrar el popup
// closeButtonAddCard.addEventListener('click', function(event){
//   popupNewCard.classList.remove('popup__show');
// });

// // para cerrar popup imagen
// closeButtonNewImage.addEventListener('click', function(event){
//   popupImage.classList.remove('popup__show');
// });


form.addEventListener('submit', function(event){
  event.preventDefault();
  // obtener el valor del titulo
  const titulo = document.querySelector('#title').value;
  // obtener el valor del url
  const url = document.querySelector('#image').value;
  // crear nueva tarjeta
  const nuevaTarjeta = templateCard.cloneNode(true);
  // completar informacion
  nuevaTarjeta.querySelector('.cards__image').src = event.target.elements.image.value;
  nuevaTarjeta.querySelector('.cards__name').textContent = event.target.elements.titulo.value;
  nuevaTarjeta.querySelector('.button-like').addEventListener('click', function(event){
    handleLike(event)
});
  nuevaTarjeta.setAttribute('title', event.target.elements.titulo.value);
  // agregar al contenedor
  cardsContainer.prepend(nuevaTarjeta);
  // cerrar el popup
  popupNewCard.classList.remove('popup__show');
  // limpiar el formulario
  event.target.reset();
});


