lazy.plugins.pinglist = {
	"init" : function(el,data) {
	    if(data.title) {
            var title = lazy.creat("div","title ub");
            title.innerHTML = '<div class="kuai"></div><div class="ub-f1"><span>'+data.title+'</span></div><a class="more"><span>更多评论...</span></a>';
            el.appendChild(title);
            if(data.titleonclick) {
                title.getElementsByClassName("more")[0].onclick = function() {
                    data.titleonclick();
                }
            }
	    }
        var table = lazy.creat("div","table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        function one(obj) {
            var tr = lazy.creat("a","tr ub");
            var icon = lazy.arcIcon(obj.icon,"1.5rem");
            var h = lazy.creat("div","h ub-f1");
            var _html = '';
            _html += '<div class="td1 ub">';
            _html += '  <div class="h1 slh ub-f1"><span>'+(obj.h1?obj.h1:"")+'</span></div>';
            _html += '</div>';
            _html += '<div class="h2"><span>'+(obj.h2?obj.h2:"")+'</span></div>';
            _html += '  <div class="h3"><span>'+(obj.h3?obj.h3:"")+'</span>';
            if(obj.zuijia&&obj.zuijia.length>0){
                _html +='<span class="zuijia"><img src='+obj.zuijia[0].src+'>'+(obj.zuijia[0].text?obj.zuijia[0].text:"")+'</span>'
            }
            _html +='</div>';
            h.innerHTML = _html;
            tr.appendChild(icon);
            tr.appendChild(h);
            table.appendChild(tr);
            if(obj.zuijia&&obj.zuijia.length>0){
                var zj=tr.getElementsByClassName("zuijia")[0];  
                zj.onclick = function() {
                    if(obj.isbest!="1"){
                        if(obj.zj)obj.zj(obj);
                    }
                }  
            }
        }
        el.appendChild(table);
        data.one=one;       
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
