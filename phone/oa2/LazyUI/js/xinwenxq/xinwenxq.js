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
            var date=obj.date?obj.date:""
            var time=obj.time?obj.time:""
            _html += ' <div class="h ub-f1">';
            if(obj.h1){
                
                _html += '     <div class="h1"><span>'+(obj.h1?obj.h1:"")+'</span></div>';
            }
            if(obj.date||obj.time||obj.user){
                if(obj.date&&(obj.date=="" || obj.date.indexOf("Na")>-1)){
                    date="";
                }
                if(obj.time&&(obj.time=="" || obj.time.indexOf("Na")>-1)){
                    time="";
                }
                _html += '     <div class="h2"><span class="span1">'+(date?date:"")+'&nbsp;&nbsp;'+(time?time:"")+'&nbsp;&nbsp;'+(obj.user?obj.user:"")+'</span></div>';
            }
            _html += '     <div class="content hh">'+lazy.clearStr(obj.content?obj.content:"", 1)+'</div>';
            
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
         data.add = one;
    }
}
