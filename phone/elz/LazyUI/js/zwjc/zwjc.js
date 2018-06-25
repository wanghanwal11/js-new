lazy.plugins.zwjc = {
    "init" : function(el,data) {
       
      var table = lazy.creat("div", "table");
      var top = lazy.creat("div","top")
      var  str = '<img src='+(data.src)+'>'
      top.innerHTML = str; 
      table.appendChild(top);
      lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
      el.appendChild(table);
      
      function one(obj) {
           var content = lazy.creat("div","content");
           var tr1 = lazy.creat("a", "tr1");
            var  _str = '';
           _str += '<div class="title"><span>'+(obj.title)+'</span></div>';
           tr1.innerHTML = _str; 
           content.appendChild(tr1);
           table.appendChild(content);
           el.appendChild(table);
           tr1.onclick = function() {
              if(obj.onclick){
                 obj.onclick(obj);
                } 
           }
      }
      
      
    },

}
