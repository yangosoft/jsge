import * as F from "./js/falafel/falafel";


//Create custom rectangle class overriding
//draw method
export default class MyRectangle extends F.Rectangle {
  draw(dt) {
    super.draw(dt);

    if (this._position.x < 750) {
      this._position.x = this._position.x + Math.round(dt / 1000);
      this.alpha = this.alpha - 0.001;
    }
  }
}
