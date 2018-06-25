lazy.plugins.rightmenu = {
	"init" : function(el,data) {
	    var mask = lazy.creat("div","mask");
	    var table = lazy.creat("div","table");
	    el.appendChild(mask);
	    el.style.display = "none";
	    el.appendChild(table);
	    mask.ontouchstart = function() {
            data.hide();
        }
        mask.onclick = function() {
            data.hide();
        }
	    var arr = data.table?data.table:[];
	    for(var i = 0; i < arr.length; i++) {
            add(arr[i]);
        }
        function add(obj) {
            var tr = lazy.creat("a","tr slh");
            tr.style.backgroundImage = "url("+obj.icon+")";
            tr.innerHTML = '<span>'+obj.title+'</span>';
            table.appendChild(tr);
            if(obj.onclick) {
                tr.onclick = function() {
                    data.hide();
                    obj.onclick();
                }
            }
        }
        data.show = function() {
            if(el.style.display == "none") {
                el.style.display = "block";
            }else {
                el.style.display = "none";
            }
            
        }
        data.hide = function() {
            el.style.display = "none";
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
