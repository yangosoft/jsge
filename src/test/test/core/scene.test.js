
import * as F from '../../../js/falafel/falafel.js';



describe("Test Scene constructor", function () {
  it("should instantiate a Scene Node", function () {
    let s = new F.Scene();
    let r = new F.Rectangle();
    let c = new F.Color(255,0,0,1);
    r.color = c;
    s.addChild(r);
    
  });
  

});

