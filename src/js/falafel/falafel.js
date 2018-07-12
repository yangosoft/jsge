import NodeBase from "./core/node.js";
import Point from "./core/types.js";
import ImageNode from "./core/image.js";
import Rectangle from "./core/rectangle.js";
import Circle from "./core/circle.js";
import Scene from "./core/scene.js";
import Color from "./core/color.js";
import Label from "./core/label.js";
import UUID from "./core/uuid.js";
import Mouse from "./core/mouse.js";
import Editor from "./editor/editor.js";
import Director from "./director/director.js";
import ContextManager from "./context/contextmng.js";


let instance = null;

class Falafel extends NodeBase
{
    constructor(ctx) {
        if(!instance) {
            super();
            this.ctx = ctx;
            this.childs = [];
            this._running = true;
            this._mouse = new Mouse(this); 
            this._director = new Director(this);
            this._nEditor = new Editor(this);
            this._contextMng = new ContextManager(this,ctx);
            this._oldDt = 0;
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
        
        
        if (( null !== e ) && ( e._isSelectable === true))
        {
            if ( e == this._nDraggable )
            {
                this._nDraggable.alpha = 1;
                this._nDraggable = null;
                this._nEditor.updatePanel(null);
                this._running = true;
                return;
            }
            
            e.onClick(x,y);
            this._nOffset.x = e.position.x - x;
            this._nOffset.y = e.position.y - y;
            this._nDraggable = e;
            this._nDraggable.alpha = 0.75;
            this._nEditor.updatePanel(e);
        }
        this._running = true;   
    }
    
    mouseUp(x,y)
    {
        /*if (null !== this._nDraggable)
        {
            this._nDraggable.alpha = 1;
            this._nDraggable = null;
        }*/
    }
    
    
    mouseDrag(x,y)
    {
        this._running = false;
        
        if ( this._nDraggable !== null )
        {
            var dx = this._nDraggable.position.x;
            var dy = this._nDraggable.position.y;
            
           this._nDraggable.position.x = this._nOffset.x + x;
           this._nDraggable.position.y = this._nOffset.y +y;
           dx = this._nDraggable.position.x -dx;
           dy = this._nDraggable.position.y -dy;
           
           this._nDraggable.childs.forEach( (c) => { c.move(dx,dy); } );
           
           
           
           this._nEditor.updatePanel(this._nDraggable);
          
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
        this._director._currentScene.childs.forEach( (value) =>  {
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
    
    
    run(dt)
    {
        let d = dt - this._oldDt;
        //console.log(dt);
        if ( this._running )
        {   
            this.ctx.clearRect(0, 0, 1280, 720);
            this._director.run(d);
            
            this._nEditor.drawGuides(this._nDraggable);
        }
        this._oldDt = dt;
        
        requestAnimationFrame((dt)=>{this.run(dt)});
    }
    
    addChild(scene)
    {
      scene.parentId = this.id;
      //this.childs.push(scene); 
      this._director.addScene(scene);
    }
    
    runScene(name)
    {
        console.log("Trying to run " + name);
        this._director.runScene(name);
    }
    

};

export { Falafel, Scene, NodeBase, ImageNode, Circle, Rectangle, Point, Color, Label, UUID, Mouse, Director, ContextManager }


// module.exports = {
//     Falafel: Falafel,
//     Scene: Scene,
//     NodeBase: NodeBase,
//     ImageNode: ImageNode,
//     Rectangle: Rectangle,
//     Point: Point,
//     Color: Color,
//     Label: Label,
//     UUID: UUID,
//     Mouse: Mouse,
//     Director: Director,
//     ContextManager: ContextManager
// }
