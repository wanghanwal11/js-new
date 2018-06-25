lazy.plugins.grid = {
    
    init : function(el,data) {
        var grid_div = lazy.create('div','grid_div box box_v');
        el.appendChild(grid_div);
        var len = data.table[0].length;
        lazy.for(data.table, function(arr) {
            var tr = lazy.create('div','grid_tr box');
            if(data.border === false)
                var tr = lazy.create('div','grid_border_false box');
            for(var i = 0; i < len; i++) {
                one(tr, arr[i]);
            }
            grid_div.appendChild(tr);
        });
        function one(tr, obj) {
            var _obj = obj || {title:'',icon:''};
            
            var td = lazy.create('a','grid_td box_f1 box box_v box_i_center');
            if(data.border === false)
                var td = lazy.create('a','grid_td grid_border_false box_f1 box box_v box_i_center');
            if(_obj.num) {
                var num = lazy.create('div','grid_num');
                num.innerHTML = '<span class="grid_h1">'+_obj.num+'</span>';
                td.appendChild(num);
            }else {
                var icon = lazy.create('div','grid_icon');
                icon.style.backgroundImage = 'url('+_obj.icon+')';
                td.appendChild(icon);
            }
            var span = lazy.create('span','h1 grid_title');
            span.innerHTML = _obj.title;
            td.appendChild(span);
            //
            tr.appendChild(td);
            if(_obj.onclick) {
                td.onclick = function() {
                    _obj.onclick(obj);
                }
            }
        }
    },
    clear : function() {
        
    }
    
}
