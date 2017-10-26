
import Falafel from "../falafel.js";

let instance = null;

export default class ContextManager{  
    constructor(falafel,defaultContext) {
        if(!instance){
              
              this._falafel = falafel;            
              this._defaultContext = defaultContext;
              instance = this;
        }
        return instance;
    }
        
    get context()
    {   
        return this._defaultContext;
    }
}
