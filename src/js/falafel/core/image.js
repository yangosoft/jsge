import NodeBase from "./node.js";

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
    draw(ctx,dt)
    {
        
        
//         console.log(this._name + " drawing");
//         console.log(this._position.x, this._position.y, this._width, this._height);
        if ( this._loaded === true )
        {
          ctx.drawImage(this._dataImage, this.position.x, this.position.y);  
        }
        
      
        
        
    }
    
};
