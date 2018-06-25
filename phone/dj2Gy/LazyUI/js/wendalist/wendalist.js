lazy.plugins.wendalist = {
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
	    var title = lazy.creat("div", "title1");
        title.innerHTML="问答";
        var table = lazy.creat("div","table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        function one(obj) {
            var tr = lazy.creat("a","tr ub");
            var h = lazy.creat("div","h ub-f1");
            var _html = '';
            _html += '<div class="h2"><span class="hh">'+(obj.h2?obj.h2:"")+'</span></br>';
            if(obj.img.length>0){
                for(var i=0;i<obj.img.length;i++){
                   _html +='<img class="imgs" index='+i+' src='+lazy.getImagePx(obj.img[i], 140, 100)+'>';
                }
            }
            _html += '</div>';
            _html += '  <div class="h3">';
            if(obj.people.length>0){
                _html += '<div class="people"><img class="pic" src='+(obj.people[0].src?lazy.getImagePx(obj.people[0].src, 140, 100):"../LazyUI/images/morenpeople.png")+'><span class="name">'+(obj.people[0].name)+'</span></div>'
            }
            if(obj.yue){
                _html += '<span class="zan">'+(obj.yue?obj.yue:"0")+'</span>'
            }
            if(obj.del){
                _html += '<span class="del"></span>'
            }
            if(obj.pl){
                _html += '<span class="pl">'+(obj.pl?obj.pl:"0")+'</span>'
            }
            if(obj.time){
                _html += '<span class="time">'+obj.time+'</span>'
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
            if(obj.pl){
                var pl=tr.getElementsByClassName("pl")[0];  
                pl.onclick = function() {
                    if(obj.pinglun)obj.pinglun(obj);
                }  
            } 
            if(obj.del){
                var del=tr.getElementsByClassName("del")[0];  
                del.onclick = function() {
                    if(obj.delfun)obj.delfun(obj);
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
