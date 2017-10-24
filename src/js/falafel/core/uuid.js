let instance = null;

export default class UUID{  
    constructor() {
        if(!instance){
              instance = this;
        }

        this._id = 0;

        return instance;
      }
      
    get id()
    {
        this._id++;
        return this._id;
    }
}
