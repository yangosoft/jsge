import * as F from "./js/falafel/falafel";

export default class MyRectangle extends F.Rectangle{
 
    constructor()
    {
        super();
        this.dataImage = null;
        this._typeName = "MyRectangle";
        this._time = 0;
        this._ctx = new F.ContextManager().context;
        this._toRigth = true;
    }
    
    draw(dt)
    {
        
     super.draw(dt);
     if( this._visible === true )
     {
         
         
         if((this._toRigth === true) && ( this._position.x < 1000))
         {
             this._position.x = this._position.x + Math.round( dt + 20 );
//              this.alpha = this.alpha - 0.05;
         }else if(this._position.x >= 1000){
                 this._toRigth = false;
                 this._position.x = 1000;
             
         }
         
         if((this._toRigth === false) && ( this._position.x > 0 ))
         {
             this._position.x = this._position.x - Math.round( dt + 20   );
//              this.alpha = this.alpha + 0.05;
         }else if(this._position.x <= 0){
                 this._toRigth = true;
                 this._position.x = 0;
         }
         
         

//          console.log(this._name + " drawing " + dt );
//           console.log(this._position.x, this._position.y, this._width, this._height);
//         console.log(this._time);
        this._ctx.fillStyle = 'rgba('+this._color.r+', '+this._color.g+', '+this._color.b+','+this._color.a+')';
        this._ctx.fillRect(this._position.x, this._position.y, this._width, this._height, this._alpha);
     }  
        
    }
    
};

export { MyRectangle }
