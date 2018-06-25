lazy.plugins.actionsheet = {
    
    init : function(el,data) {
        var bol = false;
        var mask = lazy.create('div', 'actionsheet_mask');
        var ul = lazy.create('div', 'actionsheet_ul');
        var arr = data.list || [];
        arr.push({title : '取消', function() {}});
        lazy.for(arr, function(obj) {
            var li = lazy.create('a', 'actionsheet_li');
            li.innerHTML = '<span class="h0">'+obj.title+'</span>';
            ul.appendChild(li);
            one(li, obj);
        });
        function one(li, obj) {
            li.onclick = function() {
                data.hide();
                obj.onclick && obj.onclick(obj);
            }
        }
        el.appendChild(mask);
        el.appendChild(ul);
        data.show = function() {
             bol = false;
             el.style.display = 'block';
             ul.className = 'actionsheet_ul actionsheet_ul_a';
             mask.className = 'actionsheet_mask actionsheet_mask_a';
        }
        data.hide = function() {
            bol = true;
            ul.className = 'actionsheet_ul actionsheet_ul_a_o';
            mask.className = 'actionsheet_mask actionsheet_mask_a_o';
        }
        mask.onclick = function() {
            data.hide();
        }
        mask.addEventListener('webkitAnimationEnd', function() {
            if(bol) el.style.display = 'none';
        },false);
        
    },
    clear : function() {
        
    }
    
}
