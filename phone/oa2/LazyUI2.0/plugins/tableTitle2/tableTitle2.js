lazy.plugins.tableTitle2 = {
    
    init : function(el,data) {
        data.renderer = function(list) {
            data.list = list;
            one();
        } 
        one();
        function one() {
            var _html = '<div class="tableTitle2_div">';
            if(data.list.length % 2 != 0) data.list.push({h1:"",h2:""});
            lazy.for(data.list, function(obj, i) {
                if(i%2 == 0)_html += '<div class="tableTitle2_ul box">';
                _html += '<div class="tableTitle2_li box_f1"><div class="tableTitle2_h1"><span>'+obj.h1+'</span></div><div class="tableTitle2_h2"><span>'+obj.h2+'</span></div></div>';
                if(i%2 != 0)_html += '</div>';
            });
            _html += '</div>';
            el.innerHTML = _html;
        }
        
    },
    clear : function() {
        
    }
    
}
