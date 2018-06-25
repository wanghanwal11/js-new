lazy.plugins.view = {
    "init" : function(el,data) {
        var table = lazy.creat("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.creat("div", "tr ub ub-ver");
            var tr1 = lazy.creat("a", "tr1 ub");
            var _html = '';
                  _html += ' <div class="icon" style="background-image:url('+obj.icon+')"></div>';
            
            _html += ' <div class="h ub-f1">';
            _html += '     <div class="h1"><span>'+slhfun(obj.h1?obj.h1:"")+'</span></div>';
            _html += '     <div class="ub">';
            _html += '        <div class="ub-f1"><div class="ub">';
            _html += '          <div class="yue"><span>'+(obj.yue?obj.yue:0)+'</span></div>';
            _html += '          <div class="ping"><span>'+(obj.ping?obj.ping:0)+'</span></div>';
            _html += '        </div></div>'
            var str=obj.user?obj.user:"";
            if(str!=""){
                   if(str.length>5){
                   str=str.substring(0,5)+"...";
                }
            }            
            _html += '        <div class="text"><span>'+(str?str:"贵阳党校")+'&nbsp;&nbsp;'+(obj.date?obj.date:"07-25")+'</span></div>';
    
            
            _html += '     </div>';
            _html += ' </div>';
            tr1.innerHTML = _html; 
            tr1.onclick = function() {
                //alert(obj.id)
                if(obj.onclick)
                obj.onclick(obj);
            }  
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
        data.clean = function() {
            table.innerHTML = '';
        }
        
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
