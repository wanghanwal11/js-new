lazy.plugins.panel_html = {
    
    init : function(el,data) {
        
        lazy.for(data.list||[], function(obj) {
            one(obj);
        });
        
        function one(obj) {
            var box = lazy.create('div','panel_html_box');
            var header = lazy.create('div','panel_html_header box');
            var icon = lazy.create('div','panel_html_icon');
            var h = lazy.create('div','panel_html_h box_f1');
            
            box.appendChild(icon);
            box.appendChild(h);
            if(obj.more) {
                var more = lazy.create('div','panel_html_more');
                box.appendChild(more);
            }
            var content = lazy.create('div','panel_html_content');
            var button = lazy.create('a','panel_html_button');
            button.innerHTML = '<span>立即查看</span>';
            box.appendChild(header);
            box.appendChild(content);
            box.appendChild(button);
            el.appendChild(box);
        }
    },
    clear : function() {
        
    }
    
}
