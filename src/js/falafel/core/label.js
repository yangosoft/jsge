import NodeBase from "./node.js";
import ContextManager from "../context/contextmng.js";


export default class Label extends NodeBase{
 
    constructor()
    {
        super();
        
        this._typeName = "Label";
        this._time = 0;
        this._ctx = new ContextManager().context;
        this._text = "";
        this._font = "";
        this._fillStyle = "";
        this._textAlign = "left";
        
    }
    
    draw(dt)
    {
        
     super.draw(dt);
     if( this._visible === true )
     {
        this._ctx.font = this._font;
        this._ctx.fillStyle = this._fillStyle;
        this._ctx.textAlign = this._textAlign;
        this._ctx.fillText(this._text, this._position.x, this._position.y); 
     }  
        
    }
    
    set font(strFont)
    {
        this._font = strFont;
    }
    
    set text(str)
    {
        this._text = str;
        let size = this._ctx.measureText(str);
        this._width = size.width;
        this._height = 50;
        console.log("text " + this._width + "x" + this._height);
        
    }
    
    set fillStyle(strFill)
    {
        this._ctx.fillStyle = strFill;
    }
};
