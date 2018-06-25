lazy.plugins.dyboxlb = {
    "init" : function(el,data) {
        var table = lazy.creat("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            
           var tr = lazy.creat("div", "tr ub ub-ver");
           var tr1 = lazy.creat("a", "tr1 ub");
           var h = lazy.creat("div","h ub-f1");
           var icon = lazy.arcIcon(obj.icon,"2.5rem");
            
           var _html = '';
             
               //_html += ' <div class="icon" style="background-image:url(\''+(obj.icon)+'\')"></div>';
              
               _html += ' <div class="fitr ub">';
           
              
                _html += ' <div class="name ub-f1"><span class="span3">'+(obj.name?obj.name:"")+'</span></div>';
        
               
               _html += ' <div class="date"><span>'+(obj.date?obj.date:"")+'</span><span>'+(obj.time?obj.time:"")+'</span></div>';
               _html += ' </div>';
               _html += ' <div class="moneyinfo"><span>'+(obj.moneyinfo?obj.moneyinfo:"")+'</span></div>';
               _html += ' <div class="infocontent"><span>'+slhfun(obj.infocontent?obj.infocontent:"")+'</span></div>';
               _html += ' </div>'
               
               
               
           
            h.innerHTML = _html; 
            tr1.appendChild(icon);  
            tr1.appendChild(h);  
            
            tr.appendChild(tr1);
            table.appendChild(tr);
            tr1.onclick = function() {
               
                if(obj.onclick)
                obj.onclick(obj);
            }  
        }
        function slhfun(str) {
            var len = lazy.getStringByteLength(str) / 2 * lazy.fontSize;
            var len2 = (document.body.clientWidth - (6.75 + 5) * lazy.fontSize) * 2;
            if(len > len2) {
                str = str.substring(0, parseInt(len2/lazy.fontSize)) + "...";
            }
            return str;
        }
        
        
    }
}
