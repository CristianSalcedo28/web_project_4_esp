export default class Popup {
  constructor(popupSelector){
    this._popupElement = popupSelector;
  }

  open () {
    this._popupElement.classList.add('popup__show');
    this._hadleEscClose();
  }
  close () {
    this._popupElement.classList.remove('popup__show');
  }

  _hadleEscClose () {
    document.addEventListener("keydown", (evt)=> {
    if(evt.key === "Escape") {
      this.close();
    }
  })
  }

  setEventListener () {
    this._popupElement.querySelector(".close-button").addEventListener("click", ()=> {
      this.close()
    })
    document.addEventListener('click', (evt)=> {
      if(evt.target.classList.contains('popup')) {
      this.close()
    }
    })
  }
}