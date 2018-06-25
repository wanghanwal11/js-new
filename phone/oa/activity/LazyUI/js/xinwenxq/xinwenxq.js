lazy.plugins.xinwenxq = {
    "init" : function(el,data) {
        var table = lazy.creat("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.creat("div", "tr ub ub-ver");
            var tr1 = lazy.creat("div","tr ub");
            var _html = '';
           
            _html += ' <div class="h ub-f1">';
            _html += '     <div class="h1"><span>'+(obj.h1?obj.h1:"")+'</span></div>';
            _html += '     <div class="h2"><span>'+(obj.date?obj.date:"07-25")+'&nbsp;&nbsp;'+(obj.time?obj.time:"12:00")+'&nbsp;&nbsp;'+(obj.user?obj.user:"贵阳党校")+'</span></div>';
            _html += '     <div class="">'+lazy.clearStr(obj.content?obj.content:"content", 1)+'</div>';
            
            _html += ' </div>';
            
            tr1.innerHTML = _html; 
           
            tr.appendChild(tr1);
           
            table.appendChild(tr);
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
