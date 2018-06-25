lazy.plugins.iframe = {
    
    init : function(el,data) {
        var index = data.index || 0;
        var iframe_footer_parent = lazy.create('div','iframe_footer_parent');
        var iframe_footer = lazy.create('div','iframe_footer box');
        var content = lazy.create('div','iframe_content');
        
        el.appendChild(content);
        iframe_footer_parent.appendChild(iframe_footer);
        el.appendChild(iframe_footer_parent);
        //
        data.openWin = function(url) {
            url = url.replace('#','');
            content.innerHTML = '';
            router.rendererJs({
                dom : content,
                name : lazy.pathToName(url),
                path : url
            });
        }
        //
        lazy.for(data.list || [], function(obj,i) {
            one(obj,i);
        });
        function one(obj,i) {
            //icon onclick
            var icon1 = obj.icon1?obj.icon1:obj.icon;
            var li = lazy.create('div', 'iframe_footer_li box_f1', {
                style : i!=index?'background-image:url('+obj.icon+')':'background-image:url('+icon1+')',
                icon : obj.icon,
                icon1 : icon1,
                i : i,
                href : obj.href || ''
            });
            li.onclick = function() {
                var _li = document.getElementsByClassName('iframe_footer_li')[index];
                _li.style.backgroundImage = 'url('+_li.getAttribute('icon')+')';
                this.style.backgroundImage = 'url('+this.getAttribute('icon1')+')';
                index = parseInt(this.getAttribute('i'));
                var href = this.getAttribute('href');
                if(href!='')data.openWin(href);
                obj.onclick && obj.onclick(obj, index);
            }
            iframe_footer.appendChild(li);
            if(i == index) {
                obj.href && data.openWin(obj.href);
                obj.onclick && obj.onclick(obj, index);
            }
        }
    },
    clear : function() {
        
    }
    
}
