lazy.plugins.quanzilist = {
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
            _html += '<div class="h2"><span>'+(obj.h2?obj.h2:"")+'</span></br>';
            if(obj.img.length>0){
                for(var i=0;i<obj.img.length;i++){
                    _html +='<img class="imgs" index='+i+' src='+getIP()+(obj.img[i]).replace(/\\/g,"/")+'>';
                }
            }
            _html += '</div>';
            _html += '  <div class="h3"><span>'+(obj.h3?obj.h3:"")+'</span>';
            if(obj.pl){
                _html += '<span class="pl">'+(obj.pl?obj.pl:"0")+'</span>'
            }
            if(obj.zan){
                _html += '<span class="zan '+(obj.zanstaute=="1"?"red":"gray")+'">'+(obj.zan?obj.zan:"0")+'</span>'
            }
            _html += '</div>';
            h.innerHTML = _html;
            tr.appendChild(icon);
            tr.appendChild(h);
            table.appendChild(tr);
            if(obj.pl){
                var pl=tr.getElementsByClassName("pl")[0];  
                pl.onclick = function() {
                    if(obj.pinglun)obj.pinglun(obj);
                }  
            } 
            if(obj.zan){
                var zan=tr.getElementsByClassName("zan")[0];  
                zan.onclick = function() {
                    var bool=obj.zanstaute;
                    if(zan.getAttribute("class")=="zan gray"){
                        zan.setAttribute("class","zan red")
                        bool=1;
                    }else{
                        zan.setAttribute("class","zan gray");
                        bool=0;
                    }
                    if(obj.zan)obj.dianzan(obj,zan);
                }  
            }
            var list = el.getElementsByClassName("imgs");
            for(var i = 0; i < list.length; i++) {
                if(obj.select){
                    list[i].onclick = function() {
                        obj.select(parseInt(this.getAttribute("index")),this.getAttribute("src"));
                    }
                }
            }
        }
        el.appendChild(table);
        data.one=one;   
        data.clean = function() {
            table.innerHTML = '';
        }    
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
