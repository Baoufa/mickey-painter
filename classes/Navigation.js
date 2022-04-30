


export default class Navigation {
  constructor(canvas) {
    this._colorBtnElements = document.querySelectorAll('.btn--color');
    this._sizeBtnElements = document.querySelectorAll('.btn--size');
    this._undoBtnElement = document.getElementById('undo');
    this._redoBtnElement = document.getElementById('redo');
    this._eraseBtnElement = document.getElementById('erase');
    this._canvas = canvas;
    this.addEventsOnColorBtns();
    this.addEventsOnSizeBtns();
    this._undoBtnElement.addEventListener('click', this.onUndo.bind(this));
    this._redoBtnElement.addEventListener('click', this.onRedo.bind(this));
    this._eraseBtnElement.addEventListener('click', this.onErase.bind(this));

  }

  addEventsOnColorBtns() {
    for (let btn of this._colorBtnElements) {
      let rgb = getComputedStyle(btn).backgroundColor;
      btn.addEventListener('click', this.changeColor.bind(this, rgb));
    }
  }

  changeColor(rgb) {
    this._canvas.color = rgb;
    for (let btn of this._sizeBtnElements) {
     btn.querySelector('span').style.backgroundColor = rgb;
     btn.querySelector('span').style.border = 'none';
     
     if(rgb === 'rgb(255, 255, 255)'){
      btn.querySelector('span').style.border = '1px dotted #d1d8e0';
     }
    }
  }

  addEventsOnSizeBtns() {
    for (let btn of this._sizeBtnElements) {
      let size = parseInt(getComputedStyle(btn.querySelector('span')).width);
      btn.addEventListener('click', this.changeSize.bind(this, size));
    }
  }

  changeSize(int) {
    this._canvas.size = int;
  }

  onUndo(){
    if(this._canvas.paths.length > 0){
      this._canvas.deletedPaths.push(this._canvas.paths.pop());
      this._canvas.redrawAll();
    }
  }

  onRedo(){
    if(this._canvas.deletedPaths.length > 0){
    this._canvas.paths.push(this._canvas.deletedPaths.pop());
    this._canvas.redrawAll();
    }
  }

  onErase(){
    this._canvas.eraseAll();
  }
}