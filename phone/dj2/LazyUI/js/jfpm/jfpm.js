lazy.plugins.jfpm = {
    "init" : function(el,data) {
       
        var table = lazy.creat("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.creat("div", "tr ub ub-ver");
            var tr_img = lazy.creat("img","tr_img");
            tr_img.src= '../LazyUI/js/jfpm/banner.png'
            var tr1 = lazy.creat("a", "tr1 ub");
            var _html = '';
            _html += ' <div class="jf ub-f1"><span>总积分</span></div>';
            _html += ' <div class="text ub"><span>'+(obj.jf?obj.jf:"0")+'分</span></div>';
           
            tr1.innerHTML = _html; 
            tr1.onclick = function() {
               
                if(obj.jf_onclick)
                obj.jf_onclick(obj);
            }
            
            var tr2 = lazy.creat("a", "tr1 ub");
            var _html = '';
            _html += ' <div class="pm ub-f1"><span>全区排名</span></div>';
            _html += ' <div class="text ub"><span>'+(obj.pm?'第'+obj.pm+'名':"暂无排名")+'</span></div>';
           
            tr2.innerHTML = _html; 
            tr2.onclick = function() {
               
                if(obj.pm_onclick)
                obj.pm_onclick(obj);
            }  
            tr.appendChild(tr_img);
            tr.appendChild(tr1);
            tr.appendChild(tr2);
            
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
