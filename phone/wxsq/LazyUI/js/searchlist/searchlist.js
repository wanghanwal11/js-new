lazy.plugins.searchlist = {
    "init" : function(el,data) {
       
        var table = lazy.create("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.create("div", "tr box");
            
            var icon = lazy.create("div","icon box");
            
            var tr1 = lazy.create("div","tr1 box_f1 box_v");
            
            var title = lazy.create("div","title")
            title.innerHTML = "<span>"+obj.title+"</span>"
            
            var address = lazy.create("div","address")
            address.innerHTML = "<span>"+obj.address+"</span>"
            
            tr1.appendChild(title) 
            tr1.appendChild(address) 
            
            tr.appendChild(icon);
            tr.appendChild(tr1);
            tr.onclick = function(){
                if(obj.onclick) obj.onclick(obj)
            }
            table.appendChild(tr);
            
        }
       
        data.add = one;
        
        data.clean = function() {
            table.innerHTML = '';
        }
       
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
