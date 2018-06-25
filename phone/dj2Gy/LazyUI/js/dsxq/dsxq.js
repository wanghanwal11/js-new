lazy.plugins.dsxq = {
    "init" : function(el,data) {
            var tr = lazy.creat("div", "tr box box_v");
            var h1 = lazy.creat("div", "h1");
            h1.innerHTML = '<span>'+data.h1+'</span>';
            var date = lazy.creat("div","date");
            date.innerHTML = '<span>'+data.date+'</span>';
            var content = lazy.creat("div", "content");
            content.innerHTML = '<span>'+data.content+'</span>';
            tr.appendChild(h1);
            tr.appendChild(date);
            tr.appendChild(content);
           
            el.appendChild(tr);
            
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
