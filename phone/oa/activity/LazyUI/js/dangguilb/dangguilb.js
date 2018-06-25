lazy.plugins.dangguilb = {
    "init" : function(el,data) {
        el.style.width = document.body.clientWidth + "px";
        var table = lazy.creat("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.creat("div", "tr ub ub-ver");
            var tr1 = lazy.creat("a", "tr1 ub-f1");
            var _html = '';
            
            
            _html += ' <div class="h ub-f1">';
             _html += '     <div class="ub">';
             _html += '     <div class="h1 ub-f1 slh"><span>'+(obj.h1?obj.h1:"")+'</span></div>';
            
            
            _html += '     </div>';
            _html += '     <div class="ub">';
            _html += '          <div class="line">共<span>'+(obj.zongfen?obj.zongfen:0)+'</span>节</div>';
            _html += '          <div class="line">已学<span>'+(obj.yxf?obj.yxf:0)+'</span>节</div>';
            _html += '          <div class="line">共<span>'+(obj.zongjie?obj.zongjie:0)+'</span>分</div>';
            _html += '          <div class="line">已学<span>'+(obj.yxj?obj.yxj:0)+'</span>分</div>';
            _html += '     </div>';
            _html += ' </div>';
            tr1.innerHTML = _html; 
            tr1.onclick = function() {
                
                if(obj.onclick)
                obj.onclick(obj);
            }  
            tr.appendChild(tr1);
            
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
