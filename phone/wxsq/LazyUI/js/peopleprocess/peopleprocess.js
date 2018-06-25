lazy.plugins.peopleprocess = {
	"init" : function(el,data) {
        var table = lazy.create("div", "table box box_v");
		var result = data.result?data.result:"dd";
        var arr = data.table?data.table:[];
        for(var i = 0; i < arr.length; i++) {
            one(arr[i], i);
        }
        el.appendChild(table);
        function one(obj, i) {
            var tr = lazy.create("div", "tr box");
            if(obj.onclick){
            	tr.onclick = function(){
            		obj.onclick(obj)
            	}
            }
            var _html = '';
            if(obj.result){
                if(obj.result == "yes"){
                    _html += '<div class="linediv"><div class="lineyes"></div><div class="lineicon '+obj.result+'"></div></div>';
                }else{
                    _html += '<div class="linediv"><div class="line"></div><div class="lineicon '+obj.result+'"></div></div>';
                }
            	//_html += '<div class="linediv"><div class="line"></div><div class="lineicon '+obj.result+'"></div></div>';
            }else{
            	if(i==arr.length-1){
            		_html += '<div class="linediv"><div class="line"></div><div class="lineicon '+result+'"></div></div>';
            	}else{
            		_html += '<div class="linediv"><div class="lineyes"></div><div class="lineicon yes"></div></div>';
            	}
            	
            }
            
            tr.innerHTML = _html;
            var td =  lazy.create("div", "td box_f1");
            //var jian = lazy.create("div", "jian");
            //td.appendChild(jian);
            var tddiv = lazy.create("div", "tddiv box");
            //
            var tmp = (obj.icon&&obj.icon!="")?getIP()+obj.icon:"";
            var icon = getIcon(tmp, obj.h1, i);
            var content = lazy.create("div", "content box box_f1");
            content.appendChild(icon);
            var h = lazy.create("div", "box_f1");
            var _html = '<div class="box box_f1">';
            _html += '<div class="h1 slh box_f1"><span>'+(obj.h1?obj.h1:"")+'</span></div><div class="h3"><span>'+(obj.h3?obj.h3:"")+'</span></div>';
            _html += '</div>';
            _html += '<div class="h2 hh"><span>'+(obj.h2?obj.h2:"")+'</span></div>';
            h.innerHTML = _html;
            content.appendChild(h);
            tddiv.appendChild(content);
            //
            td.appendChild(tddiv);
            tr.appendChild(td);
            table.appendChild(tr);
        }
        //返回图片
         function getIcon(path, title, i) {
             var img = new Image();
             img.src = path;
             var icon = lazy.create("div","icon");
             img.onerror = function() {
                 var icontitle1 = lazy.create("div","icontitle1 bcolor"+parseInt(i%7));
                 icontitle1.innerHTML = '<span>'+title.substring((title.length>2?1:0),3)+'</span>';
                 icon.appendChild(icontitle1);
             }
             img.onload = function() {
                 var iconimg = lazy.create("div","iconimg");
                 iconimg.style.backgroundImage = "url("+path+")";
                 icon.appendChild(iconimg);
             }
             return icon;
         }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
