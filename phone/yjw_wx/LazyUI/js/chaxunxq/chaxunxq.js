lazy.plugins.chaxunxq = {
	"init" : function(el,data) {
	    if(data.title) {
            var title = lazy.create("div","title box");
            title.innerHTML = '<div class="kuai"></div><div class="box box_f1"><span>'+data.title+'</span></div><a class="more"><span>更多评论...</span></a>';
            el.appendChild(title);
            if(data.titleonclick) {
                title.getElementsByClassName("more")[0].onclick = function() {
                    data.titleonclick();
                }
            }
	    }
	    var title = lazy.create("div", "title1");
        title.innerHTML="问答";
        var table = lazy.create("div","table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        function one(obj) {
            console.log(obj)
            var tr = lazy.create("a","tr box");
            var h = lazy.create("div","h box box_v");
            var _html = '';
            _html += '<div class="title"><span class="tit">'+(obj.title?obj.title:"")+'</span></div>';
            _html += '<div class="h2"><span class="hh">'+(obj.h2?obj.h2:"")+'</span></div>';
            if(obj.img){
                _html += '<div class="img"><img src='+obj.img+'></div>';
            }
            _html += '  <div class="h3">';
            if(obj.time){
                _html += '<span class="time">'+obj.time+'</span>'
            }
            if(obj.socus){
                _html += '<span class="socus">'+obj.socus+'</span>'
            }
            if(obj.right){
                _html += '<span class="right">'+obj.right+'</span>'
            }
            _html += '</div>';
            h.innerHTML = _html;
            tr.appendChild(h);
            table.appendChild(tr);
            var list = el.getElementsByClassName("imgs");
            for(var i = 0; i < list.length; i++) {
                if(obj.select){
                    list[i].onclick = function() {
                        obj.select(parseInt(this.getAttribute("index")),this.getAttribute("src"));
                    }
                }
            }
            var h2 = tr.getElementsByClassName("h2")[0];
            h2.onclick=function(){
                obj.onclick(obj)
            }
            var title = tr.getElementsByClassName("title")[0];
            title.onclick=function(){
                obj.onclick(obj)
            }
            if(obj.news){
                var right=tr.getElementsByClassName("right")[0];  
                right.onclick = function() {
                    if(obj.news)obj.news(obj);
                }  
            } 
        }
        el.appendChild(table);
        data.one=one;
        data.clean = function() {
            table.innerHTML = '';
            if(title)title.remove();
        }
        data.appto=function(){
            el.insertBefore(title,table);
        }       
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
