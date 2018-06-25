lazy.plugins.qiandao = {
	"init" : function(el,data) {
	    var arr = data.table;
	    var table = lazy.creat("div","table");
	    for(var i=0;i<arr.length;i++){
	        add(arr[i]);
	    }
	    function add(obj){
	        var zu = lazy.creat("div","zu");
	        //var _html = '<div class="title">'+obj.title+'</div>';
	        var title = lazy.creat("div","title");
	        title.innerHTML = obj.title;
	        zu.appendChild(title)
	        for(var i=0;i<obj.content.length;i++){
	            var _obj = obj.content[i];
    	        var tr = lazy.creat("a","tr ub");
    	        tr.setAttribute("obj",JSON.stringify(_obj));
                var icon = getIcon(_obj.icon, _obj.h1, i);
                var td = lazy.creat("a","td ub-f1");
	            var _html = '<div class="td1 ub">';
                _html += '  <div class="h1 slh ub-f1"><span>'+_obj.h1+'</span></div><div class="h3 ub-f1"><span>'+(_obj.h3?_obj.h3:"")+'</span></div>';
                _html += '</div>'; 
                _html += '<div class="td2 ub">';
                _html += '  <div class="h2 slh ub-f1"><span>'+_obj.h2+'</span></div>'; 
                _html += '</div>';
    	        td.innerHTML = _html;
    	        tr.appendChild(icon);
                tr.appendChild(td);
                if(obj.onclick) {
                    tr.onclick = function() {
                        // alert(JSON.stringify(obj))
                        //this.getElementsByClassName("point")[0].innerHTML = "";
                        // var list = el.getElementsByClassName("tr");
                        // for(var i = 0; i < list.length; i++) {
                            // if(this == list[i]) {
                                obj.onclick(JSON.parse(this.getAttribute("obj")));
                                // return;
                            // }
                        // }
                    }
                }
    	        zu.appendChild(tr);
	        }
	        table.appendChild(zu);
	    }
	    el.appendChild(table)
	    data.add = add;
	    data.clean = function(){
	        table.innerHTML = "";
	    }
	    //返回图片
         function getIcon(path, title, i) {
             var img = new Image();
             img.src = path;
             var icon = lazy.creat("div","icon");
             img.onerror = function() {
                 var icontitle1 = lazy.creat("div","icontitle1 bcolor"+parseInt(i%7));
                 icontitle1.innerHTML = '<span>'+title.substring((title.length>2?1:0),3)+'</span>';
                 icon.appendChild(icontitle1);
             }
             img.onload = function() {
                 var iconimg = lazy.creat("div","iconimg");
                 iconimg.style.backgroundImage = "url("+path+")";
                 icon.appendChild(iconimg);
             }
             return icon;
         }
	    // var _html = '<div class="ub">';
		// _html += '<div class="first slh"><span class="title slh">'+(data.text?data.text:"")+'</span></div>';
	    // _html +='</div>';
	    // el.innerHTML = _html;
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
