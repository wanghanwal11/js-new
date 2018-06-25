lazy.plugins.banner = {
    "init" : function(el,data) {
        var n = x = 0, bol = true, len = lazy.fontSize*2, t=null;
        var content = lazy.create('div', 'content');
        var mask = lazy.create('div', 'mask');
        var _html = '<div class="ul">';
        var _dian = '';
        lazy.for(data.list, function(obj, i) {
            _html += '<div class="li '+(i==0?"":"hide")+'"><img src="'+obj.src+'"/></div>';    
            _dian += '<div class="dli '+(i==0?"q":"")+'"></div>';
        });
        _html += '';
        content.innerHTML = _html;
        var title = lazy.create('div', 'title');
        title.innerHTML = data.list[n].title;
        content.appendChild(title);
        el.appendChild(content);
        var dian = lazy.create('div', 'ddiv box box_center');
        dian.innerHTML = '<div class="dul box box_center">'+_dian+'</div>';
        el.appendChild(dian);
        el.appendChild(mask);
        lazy.touchEvent(mask, function(_x,_y){x = _x;bol = true;stop();},function(_x,_y) {
            if(x - _x < -len && bol) {
                var _n = n;
                var li = content.getElementsByClassName('li')[n];
                li.className = 'li c_r';n--;
                if(n<0)n = data.list.length-1;qiu(_n,n);
                var li = content.getElementsByClassName('li')[n];
                li.className = 'li l_c';
                bol = false;
            }else if(x-_x > len && bol){
                lfun();
                bol = false;
            }
        },function(_x,_y){start();});
        mask.onclick = function() {
            lazy.openWin(data.list[n].href);
        }
        start();
        function start() {
            stop();
            t = setInterval(function() {
                lfun();
            },4000);
        }
        function lfun() {
            var _n = n;
            var li = content.getElementsByClassName('li')[n];
            li.className = 'li c_l';n++;
            if(n>data.list.length-1)n = 0;qiu(_n,n);
            var li = content.getElementsByClassName('li')[n];
            li.className = 'li r_c';
        }
        function stop() {
            if(t){clearInterval(t);t=null};
        }
        function qiu(a,b) {
            title.innerHTML = data.list[b].title;
            dian.getElementsByClassName('dli')[a].className = 'dli';
            dian.getElementsByClassName('dli')[b].className = 'dli q';
        }
    }
}