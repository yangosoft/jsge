

import NodeBase from "./node";
import Point from "./point.js";

export default class Scene extends NodeBase {
    
  
    
  constructor()
  {
      super();
    this.childs = [];
    this._typeName = "Scene";
    this._isSelectable = false;
    
  }
  
  
  draw(dt)
  {
       this.childs.forEach( (value) =>  {
//           console.log( " ---> " + value.name + " -> " + value.id + " parent " + value.parentId );  
          value.draw(dt);
        });
  }
  
  
  
  
  
    
};
