
import Falafel from "../falafel.js";

let instance = null;

export default class Mouse{  
    constructor(falafel) {
        if(!instance){
              this._isDragging=false;
              this._falafel = falafel;
//                   $("#canvas").mousedown(function(e){handleMouseDown(e);});
//     $("#canvas").mousemove(function(e){handleMouseMove(e);});
//     $("#canvas").mouseup(function(e){handleMouseUp(e);});
//     $("#canvas").mouseout(function(e){handleMouseOut(e);});
    
              
              instance = this;
        }

       
        
        return instance;
      }
      
      
      
      

    handleMouseDown(e){
        console.log("handleMouseDown");
        console.log(e.pageX+","+e.pageY);
        
        this._falafel.click(e.pageX, e.pageY);
        
//       canMouseX=parseInt(e.clientX-0);
//       canMouseY=parseInt(e.clientY-0);
//       
       this._isDragging=true;
    }

    handleMouseUp(e){
//         console.log(JSON.stringify(e));
//       canMouseX=parseInt(e.clientX-0);
//       canMouseY=parseInt(e.clientY-0);
//       // clear the drag flag
        
       this._falafel.mouseUp(e.pageX, e.pageY);
       this._isDragging=false;
    }

    handleMouseOut(e){
//         console.log(JSON.stringify(e));
//       canMouseX=parseInt(e.clientX-0);
//       canMouseY=parseInt(e.clientY-0);
//       
       this._isDragging=false;
    }

    handleMouseMove(e){
//         console.log(JSON.stringify(e));
//       canMouseX=parseInt(e.clientX-0);
//       canMouseY=parseInt(e.clientY-0);
//       // if the drag flag is set, clear the canvas and draw the image
       if(this._isDragging){
           console.log(e.pageX+","+e.pageY);
           this._falafel.mouseDrag(e.pageX, e.pageY);
//           ctx.clearRect(0,0,canvasWidth,canvasHeight);
//           ctx.drawImage(img,canMouseX-128/2,canMouseY-120/2,128,120);
       }
    }
      
    
}
