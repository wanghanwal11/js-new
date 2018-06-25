lazy.plugins.input = {
    "init" : function(el,data) {
        typeFun();
        function typeFun() {
            //alert("data.value:"+data.value)
            var key = data.key;
            //alert("data.key:"+data.key)
            var _html = '';
            _html += '<div class="cell">';
            if(data.title) _html += '<div class="title">'+(data.title)+'</div>';
            switch(data.inputtype) {
           
                case 'textarea' :
                    _html += '  <textarea class="input" value="'+(data.value?data.value:"")+'" placeholder="'+(data.placeholder?data.placeholder:"")+'"  '+(data.readOnly?"readOnly":"")+' /></textarea>';
                	
                    break;
                default :
                    _html += '  <input class="input" type="'+(data.inputtype?data.inputtype:'text')+'" value="'+(data.value?data.value:"")+'" placeholder="'+(data.placeholder?data.placeholder:"")+'"  '+(data.readOnly?"readOnly":"")+' type="text" />';
                    break;
            }
            
            if(data.icon) _html+='<div class="icon box" style="background-image: url('+(data.icon)+');"></div>';
             _html += '</div>';
             el.innerHTML = _html;
             if(data.inputtype=='textarea'&&data.value){
            	 el.getElementsByClassName('input')[0].value= data.value;
            }
             if(data.onclick){
                
                     var icon = el.getElementsByClassName("icon")[0];
                 if(icon){
                     //if(!data.readOnly){
                    icon.onclick = function(){
                         data.onclick(data.readOnly)
                     }
                //}
                     
                 }
                 
                 
                 
             }
             //alert("data.key:"+data.key)
             //alert("cache.key:"+lazy.getParameter(data.key))
             if((!data.value)&&data.key&&lazy.getParameter(data.key)){
            	 el.getElementsByClassName("input")[0].value = lazy.getParameter(data.key);
             }
             if(data.key){
            	 el.getElementsByClassName("input")[0].onchange = function(){
                     var value = el.getElementsByClassName("input")[0].value;
                     lazy.setParameter(data.key,value)
                 } 
             }
            
        }
        if(data.foc){
            el.getElementsByClassName('input')[0].onclick=function(){
                data.foc()
            }
        }
        data.add=function(val){
            el.getElementsByClassName('input')[0].value=val;
            lazy.setParameter(data.key,val)
        }
        data.getValue =function(){
            var s=el.getElementsByClassName('input')[0].value;
            return  s;
        }
        data.clear = function(){
            el.getElementsByClassName('input')[0].value = '';
            lazy.setParameter(data.key,'')
        }
        data.readonly = function(bol){
            el.getElementsByClassName('input')[0].readOnly=bol;
            var icon = el.getElementsByClassName("icon")[0];
            if(icon){
                    
                    icon.onclick = function(){
                         data.onclick(bol)
                     }
               
            }
        }
        if(data.elclick){
            el.onclick = function(){
                data.elclick()
            }
        }
        
    }
}