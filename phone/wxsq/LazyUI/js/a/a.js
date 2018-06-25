lazy.plugins.a = {
    "init" : function(el,data) {
       
       var a = lazy.create("div","tip");
       ///a.setAttribute("href","tel:12345");
       a.style.color = data.color;
       a.innerHTML=data.label;
       a.onclick = function(){
           data.onclick(data)
       }
       el.appendChild(a)
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
