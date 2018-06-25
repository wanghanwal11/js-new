lazy.plugins.div2 = {
	"init" : function(el,data) {
		if(data.text){
		    el.innerHTML = '<div class="content">'+data.text+'</div>';
		}
		if(data.textareatext){
            var div2 = lazy.create("div","content");
            var textarea = lazy.create("textarea",'context');
            textarea.value = data.textareatext;
            textarea.readOnly = true;
            textarea.style.width = '100%'
            
            div2.appendChild(textarea)
            el.appendChild(div2)
            //textarea.style.height=textarea.scrollHeight+'px'
        }
        data.hide=function(){
            el.style.display="none";
        }
        data.show=function(){
            el.style.display="block";
        }
        data.addtext=function(txt){
            if(txt){ el.innerHTML = '<div class="content">'+txt+'</div>';}
        }
        el.onclick=function(){
            if(data.onclick){data.onclick()}
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
