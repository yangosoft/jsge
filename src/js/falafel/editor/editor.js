import Falafel from "../falafel.js";

let instance = null;

export default class Editor{  
    constructor(falafel) {
        if(!instance) {           
            this._falafel = falafel;
            
            this._editor = {
                propX: null,
                propY: null,
                propW: null,
                propH: null,
                propName: "",
                treeView: null
            };  
            
            this._editor.propX = document.getElementById("propx");
            this._editor.propX.onchange=this.editorInputChange;             
            this._editor.propY = document.getElementById("propy");
            this._editor.propY.onchange=this.editorInputChange;
            this._editor.propW = document.getElementById("propw");  
            this._editor.propW.onchange=this.editorInputChange;
            this._editor.propH = document.getElementById("proph");
            this._editor.propH.onchange=this.editorInputChange;
            
            this._editor.propName = document.getElementById("propname");
            this._editor.propName.onchange=this.editorInputChange;
            
            this._editor.treeView = document.getElementById("treeView");
            
            instance = this;
        }
        return instance;
      }
      
    editorInputChange(event)
    {
        if(instance._falafel._nDraggable === null)
        {
            return;
        }
        console.log(event.target.id);
        switch(event.target.id)
        {
            case instance._editor.propX.id:
                instance._falafel._nDraggable.position.x = event.target.value;
                break;
            case instance._editor.propY.id:
                instance._falafel._nDraggable.position.y = event.target.value;
                break;
                
            case instance._editor.propW.id:
                instance._falafel._nDraggable.width = event.target.value;
                break;
            case instance._editor.propH.id:
                instance._falafel._nDraggable.height = event.target.value;
                break;
                
            case instance._editor.propName.id:
                instance._falafel._nDraggable.name = event.target.value;
                break;
                
                
        }
    }
    
    updatePanel(e)
    {
            
        if ( e !== null)
        {
            elementTitle
            this._editor.propX.value = e.position.x;
            this._editor.propY.value = e.position.y;
            this._editor.propW.value = e.width;
            this._editor.propH.value = e.height;
            this._editor.propName.value = e.name;
            
        }else
        {
            this._editor.propX.value = "";
            this._editor.propY.value = "";
            this._editor.propW.value = ""
            this._editor.propH.value = ""
            this._editor.propName.value = "";            
        }
    }
    
    drawGuides(el)
    {
        if (null !== el)
        {
            
            this._falafel.ctx.strokeStyle = '#ff0000';
            
            this._falafel.ctx.setLineDash([5, 1]);
            let x = el._position.x + (el.width / 2);
            let y = el._position.y + (el.height / 2);
            
            
            this._falafel.ctx.beginPath();
            this._falafel.ctx.moveTo( x , y);
            this._falafel.ctx.lineTo( x, 0);
//             console.log("LINE FROM " + x + ", " + y);
            this._falafel.ctx.stroke();
            
            this._falafel.ctx.strokeStyle = '#ff0000';
            this._falafel.ctx.beginPath();
            this._falafel.ctx.moveTo( x , y);
            this._falafel.ctx.lineTo( 0, y);
            this._falafel.ctx.stroke();
            
            this._falafel.ctx.strokeStyle = '#0000ff';
            this._falafel.ctx.rect(el._position.x, el._position.y, el._width, el._height);
            this._falafel.ctx.stroke();
            
        }
    }
    
    describeScene(elem)
    {
        instance._editor.treeView.innerHtml = instance._editor.treeView.innerHtml + elem.name + "\n";
        console.log(elem.name);
        elem.childs.forEach( (c) => { 
            instance.describeScene(c);
        });
         
    }
      
      
}
