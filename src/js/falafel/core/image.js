import NodeBase from "./node.js";
import ContextManager from "../context/contextmng.js";

export default class ImageNode extends NodeBase{
 
    constructor()
    {
        super();
        this._dataImage = new Image();
        let that = this;
        
        this._dataImage.onload = function()
        {
            that.onLoad(this);
            
        }
        this._typeName = "Image";
        this._loaded = false;
        this.contextMng =new ContextManager();
        this._ctx = this.contextMng.context;
        console.log("************************** " + this._ctx);
    }
    
    setImage(url)
    {
        this._dataImage.src = url;
    }
    
    onLoad(img)
    {
        console.log("Image loaded " + img.width + "x" + img.height);
        this._width = img.width;
        this._height = img.height;
        this._loaded = true;
    }
    draw(dt)
    {
        
        
//         console.log(this._name + " drawing");
//         console.log(this._position.x, this._position.y, this._width, this._height);
        if ( this._loaded === true )
        {
          this._ctx.drawImage(this._dataImage, this.position.x, this.position.y);  
        }
        
      
        
        
    }
    
};
