lazy.plugins.topNav_1 = {
    
    init : function(el,data) {
        var index = data.index || 0;
        var topNav_0_div = lazy.create('div','topNav_1_div box box_around');
        var zw = lazy.create('div','topNav_1_zw');
        el.parentNode.appendChild(zw);
        el.appendChild(topNav_0_div);
        lazy.for(data.list, function(name,i) {
            var topNav_1_li = lazy.create('a','topNav_1_li '+(i == index && 'topNav_1_li_index'), {
                index : i
            });
            topNav_1_li.innerHTML = '<span class="h1">'+name+'</span>';
            topNav_0_div.appendChild(topNav_1_li);
            topNav_1_li.onclick = function() {
                data.onclick(this.getAttribute('index')*1);
            }
        });
        
        data.setIndex = function(n) {
            topNav_0_div.getElementsByClassName('topNav_1_li')[index].className = 'topNav_1_li';
            topNav_0_div.getElementsByClassName('topNav_1_li')[n].className = 'topNav_1_li topNav_1_li_index';
            index = n;
        }
        
    },
    clear : function() {
        
    }
    
}
