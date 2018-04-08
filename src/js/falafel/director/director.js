import Falafel from "../falafel.js";

let instance = null;

export default class Director {
  constructor(falafel) {
    if (!instance) {

      this._falafel = falafel;
      this._running = false;
      this._currentScene = null;
      this._scenes = [];
      instance = this;
    }



    return instance;
  }

  addScene(s) {
    console.log("Add scene " + s._name);
    this._scenes.push(s);
  }

  runScene(name) {
    console.log("Searching " + name);

    for (var i = 0; i < this._scenes.length; i++) {
      console.log("Check " + this._scenes[i]._name);

      if (this._scenes[i]._name === name) {
        console.log("Scene running: " + name);
        this._currentScene = this._scenes[i];
      }
    }
  }


  run(dt) {
    if (this._currentScene !== null) {
      this._currentScene.childs.forEach((value) => {

        value.draw(dt);
      });
    }
  }

}
