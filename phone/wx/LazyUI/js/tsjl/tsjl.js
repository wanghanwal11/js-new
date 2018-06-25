lazy.plugins.tsjl = {
    "init" : function(el,data) {
       
        var table = lazy.create("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.create("div", "tr box box_v");
            
            var tr1 = lazy.create("a", "tr1");
            var _html = '';
            
            _html += '<div class="title"><span>'+(obj.content?obj.content:"")+'</span></div>';
            _html += '<div class="box">'
            switch(obj.statename){
                case '已接收':
                    _html += '<div class="status box_f1"><span class="span1">已接收</span></div>';
                     break;
                case '已受理':
                    _html += '<div class="status box_f1"><span class="span1">已受理</span></div>';
                     break;
                case '正在办理':
                     _html += '<div class="status box_f1"><span class="span1">正在办理</span></div>';
                     break;
                case '已办结':
                    _html += '<div class="status box_f1"><span class="span1">已办结</span></div>';
                     break;
                case '逾期正在办理':
                    _html += '<div class="status box_f1"><span class="span2">逾期正在办理</span></div>';
                     break;
                case '逾期已办结':
                     _html += '<div class="status box_f1"><span class="span2">逾期已办结</span></div>';
                     break;
                case '已作废':
                    _html += '<div class="status box_f1"><span class="span3">已作废</span></div>';
                     break;
                 case '撤销':
                    _html += '<div class="status box_f1"><span class="span3">已撤回</span></div>';
                     break;
                default:
                     _html += '<div class="status box_f1"><span class="span2"></span></div>';
                     break;
            }
            //_html += '<div class="status box_f1"><span class="span1">'+(obj.statename)+'</span></div>';
  
            _html += '<div class="date"><span class="span1">'+(obj.date?obj.date:"")+'</span></div>';
            
             _html += '</div>'
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
            if(document.getElementsByClassName("titlelb")[0])
                titlelb.remove();
        }
       
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
