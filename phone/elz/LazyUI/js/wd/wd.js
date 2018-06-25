lazy.plugins.wd = {
    "init" : function(el,data) {
       
        var table = lazy.creat("div", "table");
        var top = lazy.creat("div","top")
        var  str = '<img src='+(data.src)+'>'
        top.innerHTML = str; 
        table.appendChild(top);
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        
         function one(obj) {
             var list = lazy.creat("div","list");
             var tr1 = lazy.creat("a", "tr1");
             var  _str = '';
             _str += '<div class="row1 ub">'
             _str += '<div class="ub-f1 title"><img src='+(obj.tp)+'>'+(obj.title)+'</div>'
             _str += '<div class="arrow_r right"></div>'
             _str += '</div>'
             
        tr1.innerHTML = _str; 
        list.appendChild(tr1);
        table.appendChild(list);
        el.appendChild(table);
          tr1.onclick = function() {
               
                if(obj.onclick)
                obj.onclick(obj);
        } 
        }
        
        
        
       
      

    },

}
