lazy.plugins.xinwenxq = {
    "init" : function(el,data) {
       
            var tr = lazy.create("div", "tr ub ub-ver");
           
            var _html = '';
            
            _html += '     <div class="h1"><span>'+(data.h1?data.h1:"")+'</span></div>';
            _html += '     <div class="h2"><span class="span1">'+(data.date)+'&nbsp;&nbsp;'+(data.user?data.user:"")+'</span></div>';
            _html += '     <div class="content">'+data.content+'</div>';
          
            tr.innerHTML = _html; 
           
            el.appendChild(tr);
        
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
