lazy.plugins.icontitlelist = {
    
    init : function(el,data) {
        
        var icontitlelistdiv = lazy.create('div','icontitlelist_div');
        lazy.for(data.list, function(obj) {
            one(obj);
        });
        
        function one(obj) {
            var li = lazy.create('a','icontitlelist_li box');
            var _html = '';
            if(obj.icon)_html += '<i class="icontitlelist_i" style="background-image:url('+obj.icon+')"></i>';
            _html += '<div class="box_f1"><span class="h0">'+obj.title+'</span></div>';
            li.innerHTML = _html;
            icontitlelistdiv.appendChild(li);
            li.onclick = function() {
                obj.onclick && obj.onclick(obj);
            }
        }
        
        el.appendChild(icontitlelistdiv);
        
    },
    clear : function() {
        
    }
    
}
