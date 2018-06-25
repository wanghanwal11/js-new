lazy.plugins.hdtitle = {
    "init" : function(el,data) {
       var tr = lazy.create("div","tr box");
       var td1 = lazy.create("div","box_f1 box_v");
       tr.appendChild(td1)
       
       var h1 = lazy.create("div","h1")
       h1.innerHTML = "<span>"+data.h1+"</span>"
        var h2 = lazy.create("div","h2")
       h2.innerHTML = "<span>"+data.h2+"</span>"
       td1.appendChild(h1)
       td1.appendChild(h2)
       tr.appendChild(td1)
       
       el.appendChild(tr)
       if(data.right){
           var td2 = lazy.create("div","right box");
           td2.style.backgroundImage = "url("+data.right+")";
           tr.appendChild(td2)
       }
       tr.onclick = function(){
           data.onclick(data)
       }
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
