lazy.plugins.zhibujj = {
    "init" : function(el,data) {
        var table = lazy.creat("div", "table");
        var headtop = lazy.creat("div","headtop");
        var _hstr = '';
        _hstr += '<div class="txicon ub"></div>';
        _hstr += '<div class="zbinfo ub">';
        _hstr += '<p>全区支部排名&nbsp;第<span>'+(data.num1?data.num1:"3")+'</span>名&nbsp;<span class="slipt"></span>&nbsp;支部积分&nbsp;共<span>'+(data.num2?data.num2:"386")+'</span>积分</p>';
        _hstr += '</div>';
        
        headtop.innerHTML = _hstr;
        table.appendChild(headtop);
        
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.creat("div", "tr ub ub-ver");
            var tr1 = lazy.creat("div","tr");
            
            var _html = '';
            _html = '<div class="title"><span></span>'+(obj.title)+'</div>'
            _html += '<div class="list">'
            for(var i=0;i<obj.content.length;i++){
               
                _html += '<div class="kuai">';
                _html += '<div class="picon" style="background:url('+obj.content[i].people+')"></div>';
                _html += '<span>'+(obj.content[i].name)+'</span>';
                _html += '</div>';
               
                tr1.innerHTML = _html; 
                
            }
            _html += '</div>';
            
           
           
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
