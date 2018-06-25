lazy.plugins.jfph = {
	"init" : function(el,data) {
	    var table = lazy.creat("div", "table");
	    lazy.for(data.table?data.table:[], function(val) {
	        one(val);
	    });
	    el.appendChild(table);
	    function one(obj) {
	        var div = lazy.creat("div", "div");
	        var tr = lazy.creat("div", "tr ub");
	        var _html = '';
	        _html+='<div class="left">'+obj.left+'</div>'
	        if(obj.src){
	            _html += ' <div class="icon"><img class="img" src='+obj.src+' /><div class="tab"><a class="a"><p class="slh2">'+obj.name+'</p></a></div></div>';
	        }
	        if(obj.title){
                _html += ' <div class="icon slh"><span class="txt">'+obj.title+'&nbsp;&nbsp;</span><span>'+obj.name+'</span></div>';
            }
            _html+='<div class="right">'+obj.right+'</div>'
	        tr.innerHTML=_html;
	        div.appendChild(tr);
	        if(obj.bumen){
              var bumen = lazy.creat("div", "bumen");
              bumen.innerHTML=obj.bumen;
               div.appendChild(bumen);
            }
	        table.appendChild(div);
	        if(obj.onclick){
	            tr.onclick=function(){
	                obj.onclick(obj.id)
	            }
	            
	        }
	    }
	    data.add = one;
	    data.clean = function() {
	        table.innerHTML = '';
	    }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
