lazy.plugins.bslist = {
    "init" : function(el,data) {
        var table = lazy.create("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.create("div", "tr box box_v");
            var _html = '';
            _html += ' <div class="h1"><span>'+slhfun(obj.h1?obj.h1:obj.content)+'</span></div>';
            
            _html += ' <div class="tr1 box">';
            _html += '     <div class="h2 box box_f1"><span>'+(obj.src?obj.src:"")+'</span></div>';
            _html += '     <div class="h3 box"><span>'+(obj.date?obj.date:"")+'</span></div>';
            _html += ' </div>';
            tr.innerHTML = _html; 
            tr.onclick = function() {
                if(obj.onclick)
                obj.onclick(obj);
            } 
           
            table.appendChild(tr);
            
        }
        function slhfun(str) {
            var len = lazy.getStringByteLength(str) / 2 * lazy.fontSize;
            var len2 = (document.body.clientWidth - (9 + 5) * lazy.fontSize) * 4;
            if(len > len2) {
                str = str.substring(0, parseInt(len2/lazy.fontSize)) + "...";
            }
            return str;
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
