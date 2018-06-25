lazy.plugins.huodongheader = {
	"init" : function(el,data) {
	    if(data.img) {
	        var img = lazy.creat("div","img", {
	            "style" : "background-image:url(\'"+data.img+"\')"
	        });
	        el.appendChild(img);
	    }
	    var table = lazy.creat("div","table");
	    var _html = "";
	    _html += '<div class="title"><span>'+(data.title?data.title:"")+'</span></div>';
	    _html += '<div class="h">';
	    lazy.for(data.h?data.h:[], function(val) {
	        _html += '<div class="h2"><span>'+val+'</span><div>';
	    });
	    _html += '</div>';
	    _html += '<div class="map">'+data.map+'</div>';
	    _html += '<a class="btn"><span>查看图文详情</span></a>';
	    table.innerHTML = _html;
	    //
	    var contentdiv =  lazy.creat("div","contentdiv");
	    _html = '<div class="tabhang"><div class="tabname"><span>活动介绍</span></div><div class="hj"></div></div>';
	    _html += '<div class="content">' + lazy.clearStr(data.content?data.content:"", 1) + '</div>';
	    _html += '<a class="btn2"><span>收起</span></a>';
	    contentdiv.innerHTML = _html;
	    //
	    
	    //
	    el.appendChild(table);
	    el.appendChild(contentdiv);
	    //事件
	    el.getElementsByClassName("btn")[0].onclick = function() {
	        contentdiv.style.display = "block";
	    }
	    el.getElementsByClassName("btn2")[0].onclick = function() {
            contentdiv.style.display = "none";
        }
        data.location1=function(loc){
            el.getElementsByClassName("map")[0].innerHTML=loc;
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
