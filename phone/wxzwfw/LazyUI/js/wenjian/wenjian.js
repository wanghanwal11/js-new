lazy.plugins.wenjian = {
	"init" : function(el,data) {
	    var table = lazy.creat("div", "table");
	    lazy.for(data.table?data.table:[], function(val) {
	        one(val);
	    });
	    el.appendChild(table);
	    function one(obj) {
	        var tr = lazy.creat("div", "tr ub ub-ver");
	        var _html = '';
	        if(obj.src){
	            _html += ' <div class="icon"><div class="tt slh ub-f1"><img class="img" src='+obj.src+' /><span>'+obj.name+'</span></div><span class="right"></span></div>';
	        }
	        if(obj.title){
                _html += ' <div class="icon"><span class="txt">'+obj.title+'&nbsp;&nbsp;</span><span>'+obj.name+'</span></div>';
            }
	        tr.innerHTML=_html;
	        table.appendChild(tr);
	        tr.onclick=function(){
	            lazy.onDownload(obj.fileurl);
	        }
	    }
	    var title = lazy.creat("div");
        el.insertBefore(title,table);
	    function addtitle(obj){
	        for(var i=0;i<obj.length;i++){
	            var t = lazy.creat("div", "title");
                t.innerHTML="<span>"+obj[i].title+"</span>";
                title.appendChild(t);
	        }
	    }
	    data.addtitle=addtitle;
	    data.add = one;
	    data.clean = function() {
	        table.innerHTML = '';
	        title.innerHTML = '';
	    }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
