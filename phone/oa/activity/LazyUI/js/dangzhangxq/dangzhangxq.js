lazy.plugins.dangzhangxq = {
    "init" : function(el,data) {
        var table = lazy.creat("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.creat("div", "tr ub ub-ver");
            var num = obj.time;
            var m = Math.floor(num/60);
            var s = Math.floor(num%60);
            
            var path = getIP() + obj.mppath.replace(/\\/g,"/");
            lazy.playSound(path);
            var _html = '';
            _html += ' <div class="ub imgtitle">';
            _html += '<div class="time">';
            if(m<10){
                if(s<10){
                    _html += '<span id="time" style="color:#006dd9;">0'+m+':0'+s+'</span>'
                }else{
                    _html += '<span id="time" style="color:#006dd9;">0'+m+':'+s+'</span>'
                }
            }else{
                if(s<10){
                    _html += '<span id="time" style="color:#006dd9;">'+m+':0'+s+'</span>'
                }else{
                    _html += '<span id="time" style="color:#006dd9;">'+m+':'+s+'</span>'
                }
            }
             
            
            _html += '</div>';
            _html += '</div>';
            
            _html += ' <div class="h ub-f1">';
            _html += ' <div class="h1"><span>'+(obj.h1?obj.h1:"")+'</span></div>';
            _html += ' <div class="content">'+lazy.clearStr(obj.content?obj.content:"content", 1)+'</div>';
            _html += ' </div>';
            
            
            var start = setInterval(function() {
                if(m<10){
                    if(s < 10) {
                        document.getElementById("time").innerHTML = '0'+m + ':0' + s;
                    } else {
                        document.getElementById("time").innerHTML = '0'+m + ':' + s;
                    }
                }else{
                    if(s < 10) {
                        document.getElementById("time").innerHTML = m + ':0' + s;
                    } else {
                        document.getElementById("time").innerHTML = m + ':' + s;
                    }
                }
                    
                s--;
                if(s < 0) {
                    s = 59;
                    m--;
                }
                if(m<0){
                    var dzxqid=lazy.getParameter("dzxqid");
                    var jifenurl = djconfig.dangguilean + 'id='+dzxqid;
                    lazy.URLRequest(jifenurl);
                clearInterval(start);
            }
            }, 1000);
            
            tr.innerHTML = _html; 
          
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
