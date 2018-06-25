lazy.plugins.navbar = {
    
    init : function(el,data) {
        
        var index = data.index || 0;
        var navbar_header_parent = lazy.create('div','navbar_header_parent');
        var navbar_header = lazy.create('div','navbar_header box');
        var content = lazy.create('div','navbar_content');
        var color = data.color || '#414A5A';
        var changeColor = data.changeColor || '#2196f3';
            
        
        navbar_header_parent.appendChild(navbar_header);
        el.appendChild(navbar_header_parent);
        el.appendChild(content);
        //打开新页面
        data.openWin = function(url) {
            var obj  = lazy.splitUrl(url);
            content.innerHTML = '';
            router.thisPage = {
                path : obj.path,
                response : obj.response,
                noRemove : true,
                parent : content
            };
            router.loadPage(router.thisPage);
        }
        //
        lazy.for(data.list || [], function(obj,i) {
            one(obj,i);
        });
        function one(obj,i) {
            var li = lazy.create('div', 'navbar_header_li box_f1', {
                href : obj.href || '',
                index : i
            });
            li.innerHTML = '<span>'+obj.title+'</span>';
            if(i == index) {
                li.style.color = changeColor;
                li.style.borderBottomColor = changeColor;
                data.openWin(obj.href);
            }
            li.onclick = function() {
                var _li = document.getElementsByClassName('navbar_header_li')[index];
                _li.style.color = color;
                _li.style.borderBottomColor = 'rgba(0,0,0,0)';
                //
                var _index = parseInt(this.getAttribute('index'));
                var _li = document.getElementsByClassName('navbar_header_li')[_index];
                _li.style.color = changeColor;
                _li.style.borderBottomColor = changeColor;
                data.openWin(this.getAttribute('href'));
                //
                index = _index;
            }
            navbar_header.appendChild(li);
        }
        
    },
    clear : function() {
        
    }
    
}
