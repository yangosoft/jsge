import NodeBase from "./node.js";


export default class Rectangle extends NodeBase{
 
    constructor()
    {
        super();
        this.dataImage = null;
        this._typeName = "Rectangle";
        this._time = 0;
        
    }
    
    draw(ctx,dt)
    {
        
     super.draw(ctx,dt);
     if( this._visible === true )
     {
//         if( this._position.x < 1000)
//         {
//             this._position.x = this._position.x + Math.round( dt / 1000 );
//             this.alpha = this.alpha - 0.001;
//         }
        
        
//         console.log(this._name + " drawing");
//          console.log(this._position.x, this._position.y, this._width, this._height);
//         console.log(this._time);
        ctx.fillStyle = 'rgba('+this._color.r+', '+this._color.g+', '+this._color.b+','+this._color.a+')';
        ctx.fillRect(this._position.x, this._position.y, this._width, this._height, this._alpha);
     }  
        
    }
    
};
