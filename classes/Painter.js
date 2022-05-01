import Canvas from './Canvas.js';
import Navigation from './Navigation.js';
import Auth from './Auth.js';


export default class Painter {
  constructor() {
    this._auth = new Auth();
    this._canvas = new Canvas(this._auth);
    this._navigation = new Navigation(this._canvas, this._auth);
  }

  // get navigation(){
  //   return this._navigation;
  // }

  // get canvas() {
  //   return this._canvas;
  // }

  // get auth(){
  //   return this._auth;
  // }
}
