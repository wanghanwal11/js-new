lazy.plugins.panel = {
    "init" : function(el,data) {
        lazy.for(data.list, function(obj) {
            one(obj);
        });
        function one(obj) {
            var box = lazy.create(obj.onclick?'a':'div','box ub');
            var icon = lazy.create('div','icon green');
            icon.style.backgroundImage = "url("+obj.icon+")";
            var boxh = lazy.create('div','boxh ub-f1');
            var h1 = lazy.create('div','h1 ub-f1');
            var h3 = lazy.create('div','h3');
            var hh = lazy.create('div','hh ub');
            var h2 = lazy.create('p','h2');
            switch(obj.type) {
                case 'appmsg':
                    box.appendChild(icon);
                    h1.innerHTML = '<span>'+(obj.h1?obj.h1:"")+'</span>';
                    hh.appendChild(h1);
                    h3.innerHTML = '<span>'+(obj.h3?obj.h3:"")+'</span>';
                    hh.appendChild(h3);
                    boxh.appendChild(hh);
                    h2.innerHTML = '<span>'+(obj.h2?obj.h2:"")+'</span>';
                    boxh.appendChild(h2);
                    box.appendChild(boxh);
                    break;
                default :
                    
                    break;
            }
            el.appendChild(box);
        }
    }
}