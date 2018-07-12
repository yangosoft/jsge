import NodeBase from "./node.js";
import ContextManager from "../context/contextmng.js";


export default class Circle extends NodeBase{
 
    constructor()
    {
        super();
        this.dataImage = null;
        this._typeName = "Circle";
        this._time = 0;
        this._ctx = new ContextManager().context;
        this._radius = 0;
        
    }
    
    set radius(radius)
    {
      this._radius = radius;
    }
  
    
    draw(dt)
    {
        super.draw(dt);
        if( this._visible === true )
        {
            this._ctx.save();
            this._ctx.beginPath();
            this._ctx.fillStyle = 'rgba('+this._color.r+', '+this._color.g+', '+this._color.b+','+this._color.a+')';
    //         centerX, centerY, radius, 0, 2 * Math.PI, false)
            this._ctx.arc(this._position.x, this._position.y, this._radius, 0, 2 * Math.PI, false);
            this._ctx.closePath();
            this._ctx.stroke();
            this._ctx.restore();
        }  
    }
    
};
