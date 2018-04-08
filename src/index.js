import $ from 'jquery';
import jquery from 'jquery';
import 'jquery-ui';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/selectable.css';
import 'jquery-ui/themes/base/draggable.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/selectable';
import 'jquery-ui/ui/widgets/draggable';




import * as F from "./js/falafel/falafel";


let falafel = null;

let n = new F.NodeBase();


module.exports = {
  load: function() {
    $("#draggable").draggable();
    $("#rigthpanel").draggable();
  },
  setCanvas: function(idCanvas) {
    var canvas = document.getElementById(idCanvas);
    var ctx = canvas.getContext('2d');
    falafel = new F.Falafel(ctx);

    canvas.addEventListener("mousedown", (e) => {
      falafel._mouse.handleMouseDown(e)
    }, false);
    canvas.addEventListener("mousemove", (e) => {
      falafel._mouse.handleMouseMove(e)
    }, false);
    canvas.addEventListener("mouseup", (e) => {
      falafel._mouse.handleMouseUp(e)
    }, false);
    canvas.addEventListener("mouseout", (e) => {
      falafel._mouse.handleMouseOut(e)
    }, false);




    var s = new F.Scene();
    s.width = 1280;
    s.height = 720;
    s.name = "Escena";


    let k = new F.ImageNode();
    k.setImage("https://apod.nasa.gov/apod/image/1804/ngc6960_Pugh_960.jpg");
    k.name = "img";
    let q = new F.Point(50, 50);
    k.position = q;
    s.addChild(k);


    let i = new F.Rectangle();
    i.name = "red";
    let p = new F.Point(10, 10);
    console.log("p " + JSON.stringify(p));
    i.position = p;
    i.width = 100;
    i.height = 200;
    let red = new F.Color(255, 0, 0, 1);
    i.color = red;

    s.addChild(i);



    let j = new F.Rectangle();

    j.name = "yellow";
    p = new F.Point(20, 20);
    console.log("p " + JSON.stringify(p));
    j.position = p;
    j.width = 200;
    j.height = 400;
    j.color = new F.Color(255, 255, 0, 1);
    s.addChild(j);

    let l = new F.Rectangle();

    l.name = "blue";
    p = new F.Point(40, 40);
    console.log("p " + JSON.stringify(p));
    l.position = p;
    l.width = 100;
    l.height = 40;
    l.color = new F.Color(0, 255, 255, 1);
    i.addChild(l);
    falafel.addChild(s);


    //Escena 2

    var s2 = new F.Scene();
    s2.width = 1280;
    s2.height = 720;
    s2.name = "Escena 2";

    k = new F.ImageNode();
    k.setImage("https://apod.nasa.gov/apod/image/1804/ngc6960_Pugh_960.jpg");
    k.name = "img";
    q = new F.Point(50, 50);
    k.position = q;
    s2.addChild(k);
    falafel.addChild(s2);
    //

    let t = new F.Label();
    p = new F.Point(300, 200);
    t.position = p;
    t.text = "HELLO WORLD";
    t.font = "100px Arial";
    t.fillStyle = "yellow";
    s2.addChild(t);

    //falafel._nEditor.describeScene(falafel);

    falafel.runScene(s._name);



    requestAnimationFrame((dt) => {
      falafel.run(dt)
    });

    //falafel.run();

  }
}
