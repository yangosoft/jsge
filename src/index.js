

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
    load:function() {

        $( "#draggable" ).draggable();
        $( "#rigthpanel" ).draggable();
        
        
    },
    setCanvas: function(idCanvas)
    {
        var canvas = document.getElementById(idCanvas);
        
        
   
        
        
        var ctx = canvas.getContext('2d');
        falafel = new F.Falafel(ctx);
        
        canvas.addEventListener("mousedown", (e) =>{ falafel._mouse.handleMouseDown(e) }, false);
        canvas.addEventListener("mousemove", (e) =>{ falafel._mouse.handleMouseMove(e) }, false);
        canvas.addEventListener("mouseup", (e) =>{ falafel._mouse.handleMouseUp(e) }, false);
        canvas.addEventListener("mouseout", (e) =>{ falafel._mouse.handleMouseOut(e) }, false);
        
        
        
        
        var s = new F.Scene();
        s.width = 1280;
        s.height = 720;
        s.name = "Escena";
        
        
        let k = new F.ImageNode();
        k.setImage("https://static.comicvine.com/uploads/original/0/40/2486696-batman_the_dark_knight_rises_the_dark_knight_rises_30411051_967_1450.jpeg");
        k.name = "img";
        let q = new F.Point(50,50);
        k.position = q;
        s.addChild(k);
        
        
        let i = new F.Rectangle();
        i.name = "red";
        let p = new F.Point(10,10);
        console.log("p " +  JSON.stringify(p));
        i.position = p;
        i.width = 100;
        i.height = 200;
        let red = new F.Color(255,0,0,1);
        i.color = red;
        
        s.addChild(i);
        
        
        
        let j = new F.Rectangle();
        
        j.name = "yellow";
        p = new F.Point(20,20);
        console.log("p " +  JSON.stringify(p));
        j.position = p;
        j.width = 200;
        j.height = 400;
        j.color = new F.Color(255,255,0,1);
        
        
        
        s.addChild(j);
        
        falafel.addChild(s);
        
        
     
        requestAnimationFrame(()=>{falafel.run()});
        
        //falafel.run();
        
    }
}
  
  
