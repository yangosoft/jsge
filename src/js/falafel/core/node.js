

import Point from "./point.js";
import Color from "./color.js";

import UUID from "./uuid.js";

export default class NodeBase{
    
  
    
  constructor()
  {
    
      this.childs = [];
      
      
      this._position = new Point(0,0);
      this._width = 0;
      this._height = 0;
      
      this._id = 0;
      this._parentId = 0;
      this._name = "";
      this._typeName = "NodeBase";
      
      let uuid = new UUID();
      this._id = uuid.id;
      
      this._alpha = 1;
      this._color = new Color();
      
      
  }
  
  
  set id(currentId)
  {
      this._id = currentId;
  }
  
  set parentId(id)
  {
       this._parentId = id;
  }
  
  get id()
  {
      return this._id;
  }
  
  get parentId()
  {
       return this._parentId;
  }
  
  set name(name)
  {
      this._name = name;
  }
  
  get name()
  {
      return this._name;
  }
  
  set position(value){
      
      this._position.x = value.x;
      this._position.y = value.y;
      console.log("set position " + this._position.x + ", " + this._position.y);
  }
  
  get position()
  {
      return this._position;
  }
  
  set width(w)
  {
      this._width = w;
  }
  
  get width()
  {
      return this._width;
  }
  
  set height(h)
  {
      this._height = h;
  }
  
  get height()
  {
      return this._height;
  }
  
  set alpha( alpha)
  {
      this._color.a = alpha;
  }
  
  get alpha()
  {
      return this._color.a;
  }
  
  set color(color)
  {
      this._color = color;
  }
  
  get color()
  {
      return this._color;
  }
  
//   setPosition(p)
//   {
//       this._position.x = p.x;
//       this._position.y = p.y;
//       
//       console.log(JSON.stringify(this.p));
//   }
//   
  addChild(c)
  {
      c.parentId = this.id;
      this.childs.push(c);
      
  }
  
  draw(ctx)
  {
       this.childs.forEach( (value) =>  {
//           console.log( value.name + " -> " + value.id + " parent " + value.parentId + " " + this.position.x);  
          value.draw(ctx);
        });
  }
  
  getChildById(id)
  {
      if( this._id === id)
      {
          return this;
      }
     
      
      
      let v = null;
      //Cambiar esto
      
      this.childs.forEach( (value) =>{  
          
          if ( null === v )
          {
            v = value.getChildById(id)
            if ( null !== v )
            {
                return;
            }
          }
          
      });
      
      return v;
      
  }
  
  contains(x,y,v)
  {
//       console.log(this.name + " id " + this._id + " checking " + this._position.x+"," + this._position.y + "," + (this._position.x+this._width) +"," + (this._position.y+this._height) + " vs " + x + ", " + y);
      
      
      
      
      
     
      
      let found =  ( x >= this._position.x ) && ( x <= this._position.x+this._width) && ( y >= this._position.y ) && ( y <= this._position.y+this._height );
      
           this.childs.forEach( (value) =>{  
                
                value.contains(x,y,v)
                           
            });
      
      if ( false === found )
      {
       
        
          
      }else
      {
          v.push(this);
      }
      
  }
  
  onClick(x,y)
  {
      console.log("Click " + this.name);
  }
  
  onDrag(x,y)
  {
      this._position.x = x;
      this._position.y = y;
  }
  
    
};




// module.exports = {
//     Node: Node
// }
