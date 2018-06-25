lazy.plugins.tree1 = {
	"init" : function(el,data) {
	    /*
	           添加obj
	       var obj = {
	        "id" : "221",
            "pid" : "123",
            "title" : "1.2",
            "child" : []
            }
                     返回obj
            
	     */
	    var arr = data.child?data.child:[];
	    //child不存在在当最后一层
	    for(var i = 0; i < arr.length; i++) {
	        add(arr[i],el,0, true);
	    }
	    function add(obj, pel, c, bol) {
	        var table = lazy.creat("div","table ub");
            var zw = lazy.creat("div","zw");
            zw.style.width = (c * 0.5) + "rem";
            var tr = lazy.creat("div","tr ub-f1 ub");
            var td = lazy.creat("a","td ub-f1 slh");
            var icon = lazy.creat("div","icon");
            var sel = lazy.creat("div","sel");
            td.innerHTML = '<span class="slh">'+obj.title+'</span>';
            tr.appendChild(icon);
            tr.appendChild(td);
            tr.appendChild(sel);
            table.appendChild(zw);
            table.appendChild(tr);
            pel.appendChild(table);
            var tablediv = null;
            if(obj.child) {
                tablediv = lazy.creat("div","tablediv hide");
                pel.appendChild(tablediv);
            }
            td.onclick = function() {
                if(tablediv) {
                    if(tablediv.className == "tablediv hide") {
                        tablediv.className = "tablediv";
                    }else {
                        tablediv.className = "tablediv hide";
                    }
                }
                if(icon.className == "icon") {
                    icon.className = "icon icon_click";
                }else {
                    icon.className = "icon";
                }
                if(!this.getAttribute("oneclick")) {
                    obj.add = addarr;
                    data.onclick(obj, tablediv, c+1);
                    this.setAttribute("oneclick","true")
                }
            }

	    }
	    function addarr(child, pel, c) {
	        for(var i = 0; i < child.length; i++) {
	            add(child[i],pel,c);
	        }
	    }
	    
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
