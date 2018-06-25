
lazy.plugins.movetabbar2 = {
	"init" : function(el,data) {
	    var tr = lazy.creat("div","tr ub");
	    var opentrn = 0;
	    el.appendChild(tr);
		var arr = data.table;
		for(var i = 0; i < 3; i++) {
		    var td = lazy.creat("a","td slh ub-f1 ub");
		    if(arr[i]) {
		        one(td, arr[i], i);
		    }
		    tr.appendChild(td);
		}
		//
		function one(td, obj, n) {
		    td.innerHTML = '<div><span class="span">'+obj.title+'</span></div><div class="icon icon1"></div>';
            var _tr = lazy.creat("div","_tr");
            var _arr = obj.table;
            for(var i = 0; i < _arr.length; i++) {
                _one(_tr, _arr[i], i, obj.onclick);
            }
            el.appendChild(_tr);
            td.onclick = function() {
                if(opentrn != n) {
                    var _el = el.getElementsByClassName("_tr")[opentrn];
                    _el.style.height = "0";
                    _el.className = "_tr";
                    
                    var tdtd = this.parentNode.getElementsByClassName("td")[opentrn];
                    tdtd.getElementsByClassName("span")[0].className = "span";
                    tdtd.getElementsByClassName("icon")[0].className = "icon icon1";
                    opentrn = n; 
                    
                }
                if(_tr.className.indexOf("open")!=-1) {
                    _tr.style.height = "0";
                    _tr.className = "_tr";
                    
                    td.getElementsByClassName("span")[0].className = "span";
                    td.getElementsByClassName("icon")[0].className = "icon icon1";
                }else {
                    _tr.style.height = (_arr.length*2)+"rem";
                    _tr.className = "_tr open";
                    td.getElementsByClassName("span")[0].className = "span red";
                    td.getElementsByClassName("icon")[0].className = "icon icon2";
                }
                
            }
		}
		function _one(_tr, title, i, back) {
		    var _td = lazy.creat("a","_td");
		    _td.innerHTML = '<span>'+title+'</span>';
		    _tr.appendChild(_td);
		    _td.onclick = function() {
		       var tt = _tr.parentNode.getElementsByClassName("tr")[0];
		       _tr.style.height = "0";
               _tr.className = "_tr";
               back(i);
            }
		    
		}
	},
	"edit" : function(parentElement,el,data) {}
		
}
