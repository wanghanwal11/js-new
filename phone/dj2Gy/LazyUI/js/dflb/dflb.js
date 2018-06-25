lazy.plugins.dflb = {
    "init" : function(el,data) {
       
        var table = lazy.creat("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.creat("div", "tr ub ub-ver");
           
            var tr1 = lazy.creat("div", "tr1 ub");
            var _html = '';
            _html += ' <div class="ub-f1"><span>缴纳党费'+(obj.money)+'元</span></div>';
            _html += ' <div class="ub"><span>'+(obj.date)+'月</span></div>';
            tr1.innerHTML = _html; 
            
            var tr2 = lazy.creat("div", "tr1 ub");
            tr2.innerHTML = ' <span>支付方式：'+(obj.way)+'</span>';
            
            var tr3 = lazy.creat("div", "ub");
            var _html3 = '';
            _html3 += ' <div class="ub-f1"><span>状态：'+(obj.status)+'</span></div>';
            tr3.innerHTML = _html3; 
            
            if(obj.status == "未缴纳" || obj.status == "审核不通过" ){
                var tr_link = lazy.creat("div", "link ub");
                tr_link.innerHTML = ' <span>缴纳党费</span>'; 
                tr3.appendChild(tr_link);
                
                tr_link.onclick = function() {
                   
                    if(obj.onclick)
                    obj.onclick(obj);
                } 
            }
           
            tr.appendChild(tr1);
            tr.appendChild(tr2);
            tr.appendChild(tr3);
            
            table.appendChild(tr);
            
        }
        data.add = one;
        
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
