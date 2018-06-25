lazy.plugins.nav = {
    "init" : function(el,data) {
        var n = (data.index==undefined)?-1:data.index, x = 0;
        var left = data.left || 0;
        var _html = '<div class="eldiv"><div class="uldiv"><div class="ul">';
        _html += '</div></div><a class="btn"></div></a>';
        el.innerHTML = _html;
        var ul = el.getElementsByClassName("ul")[0];
        lazy.for(data.list, function(obj, i) {
            one(obj, i)
        });
        function one(obj, i) {
            var li = lazy.create('div',"li "+(n==i?"li_c":""));
            li.innerHTML = obj.title;
            li.onclick = function() {
                data.onclick&&data.onclick(obj,left);
            }
            ul.appendChild(li);
        }
        ul.style.left = left+'px';
        lazy.touchEvent(el.getElementsByClassName("uldiv")[0], function(_x){x=_x;}, function(_x){
            ul.style.left = (left+_x-x)+'px';
        }, function(_x){
            var m = ul.clientWidth - document.body.clientWidth;
            left = left+_x-x;
            if(left > 0) {
                left = 0;
                ul.style.left = left+'px';
            }else if(left < -m) {
                left = -m;
                ul.style.left = left+'px';
            }
        });
        
    }
}