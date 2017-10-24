import NodeBase from "./core/node.js";
import Point from "./core/types.js";
import ImageNode from "./core/image.js";
import Rectangle from "./core/rectangle.js";
import Scene from "./core/scene.js";
import Color from "./core/color.js";
import UUID from "./core/uuid.js";
import Mouse from "./core/mouse.js";


let instance = null;

class Falafel extends NodeBase
{
    constructor(ctx){
        if(!instance){
            super();
        this.ctx = ctx;
        this.childs = [];
        this._running = true;
        this._mouse = new Mouse(this); 
              instance = this;
        }
        
        
        this._nDraggable = null;
        this._nOffset = new Point();
        
        return instance;
    }
    
    instance()
    {
        return instance;
    }
    
    click(x,y)
    {
        this._running = false;
        let e = this.getChildByCoordinate(x,y);
        if ( null !== e )
        {
            e.onClick(x,y);  
            this._nOffset.x = e.position.x - x;
            this._nOffset.y = e.position.y - y;
            this._nDraggable = e;
            this._nDraggable.alpha = 0.75;
            var panel = document.getElementById("rigthpanel");
            panel.innerHTML = e.name;
        }
        this._running = true;
        
    }
    
    mouseUp(x,y)
    {
        if (null !== this._nDraggable)
        {
            this._nDraggable.alpha = 1;
            this._nDraggable = null;
        }
    }
    
    
    mouseDrag(x,y)
    {
        this._running = false;
        
        if ( this._nDraggable !== null )
        {
           this._nDraggable.position.x = this._nOffset.x + x;
           this._nDraggable.position.y = this._nOffset.y +y;
            
        }
        this._running = true;
        
    }
    
    mouseMove(x,y)
    {
        this._running = false;
        let e = this.getChildByCoordinate(x,y);
        if ( null !== e )
        {
            e.onClick(x,y);    
        }
        this._running = true;
        
    }
    
    
    getChildByCoordinate(x,y)
    {
        
        let vNodes = [];
        this.childs.forEach( (value) =>  {
            value.contains(x,y,vNodes);    
        });
        
        var id = 0;
        var e = null;
        vNodes.forEach( (v) =>{ 
            
//             console.log( "Click at " + v.name + " " + v.id );
            if (v.id > id )
            {
                id = v.id;
                e = v;
            }
            
        });
        return e;
        
        
    }
    
    
    run()
    {
        
        if ( this._running )
        {   
            this.ctx.clearRect(0, 0, 1280, 720);
            
            
            this.childs.forEach( (value) =>  {
            //console.log( "    " + value.name + " -> " + value.id + " parent " + value.parentId );  
            value.draw(this.ctx);
            });
        }
        
        requestAnimationFrame(()=>{this.run()});
        
        
//         this.ctx.fillStyle = 'rgb(200, 0, 0)';
//         this.ctx.fillRect(10, 10, 50, 50);
// 
//         this.ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
//         this.ctx.fillRect(30, 30, 50, 50);
    }
    

};

module.exports = {
    Falafel: Falafel,
    Scene: Scene,
    NodeBase: NodeBase,
    ImageNode: ImageNode,
    Rectangle: Rectangle,
    Point: Point,
    Color: Color,
    UUID: UUID,
    Mouse: Mouse
}
