lazy.plugins.topNav_0 = {
    //最多4个
    init : function(el,data) {
        var topNav_0_div = lazy.create('div','topNav_0_div box');
        var zw = lazy.create('div','topNav_0_zw');
        el.parentNode.appendChild(zw);
        el.appendChild(topNav_0_div);
        if(data.leftOnclick) {
            var leftbtn = lazy.create('a','topNav_0_leftbtn topNav_0_btn');
            topNav_0_div.appendChild(leftbtn);
            leftbtn.onclick = function() {
                data.leftOnclick();
            }
        }
        var ul = lazy.create('div','topNav_0_ul box box_f1');
        data.setTitles = function(arr) {
            ul.innerHTML = '';
            for(var i = 0; i < 4; i++) {
                var li = lazy.create('div','topNav_0_li box', {
                    index : i
                 });
                if(arr[i]) {
                    li.innerHTML = '<a class="slh box_f1"><span>'+arr[i]+'</span></a><i class="topNav_0_j"></i>';
                    li.onclick = function() {
                        data.onclick(parseInt(this.getAttribute('index')));
                    }
                }
                ul.appendChild(li);
            }
        }
        data.setTitles(data.titles || []);
        topNav_0_div.appendChild(ul);
        if(data.rightOnclick) {
            var rightbtn = lazy.create('a','topNav_0_rightbtn topNav_0_btn');
            topNav_0_div.appendChild(rightbtn);
            rightbtn.onclick = function() {
                data.rightOnclick();
            }
        }
        
    },
    clear : function() {
        
    }
    
}
