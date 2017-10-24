import NodeBase from "./node.js";

export default class Rectangle extends NodeBase{
 
    constructor()
    {
        super();
        this.dataImage = null;
        this._typeName = "Rectangle";
    }
    
    draw(ctx)
    {
//         console.log(this._name + " drawing");
//          console.log(this._position.x, this._position.y, this._width, this._height);
        
        ctx.fillStyle = 'rgba('+this._color.r+', '+this._color.g+', '+this._color.b+','+this._color.a+')';
        ctx.fillRect(this._position.x, this._position.y, this._width, this._height, this._alpha);
        
        
    }
    
};
