lazy.plugins.peopleprocess = {
	"init" : function(el,data) {
        var table = lazy.creat("div", "table ub ub-ver");
		var result = data.result?data.result:"dd";
        var arr = data.table?data.table:[];
        for(var i = 0; i < arr.length; i++) {
            one(arr[i], i);
        }
        el.appendChild(table);
        function one(obj, i) {
            var tr = lazy.creat("div", "tr ub");
            
            var _html = '';
            if(obj.result){
            	_html += '<div class="linediv"><div class="line"></div><div class="lineicon '+obj.result+'"></div></div>';
            }else{
            	if(i==arr.length-1){
            		_html += '<div class="linediv"><div class="line"></div><div class="lineicon '+result+'"></div></div>';
            	}else{
            		_html += '<div class="linediv"><div class="line"></div><div class="lineicon yes"></div></div>';
            	}
            	
            }
            
            tr.innerHTML = _html;
            var td =  lazy.creat("div", "td ub-f1");
            var jian = lazy.creat("div", "jian");
            td.appendChild(jian);
            var tddiv = lazy.creat("div", "tddiv ub");
            //
            var path = obj.icon?obj.icon:"";
            if(path.indexOf("http://")>-1) path = path;
            else path = getIP()+path;
            var icon = getIcon(path, obj.h1, i);
            var content = lazy.creat("div", "content ub-f1 ub");
            content.appendChild(icon);
            var h = lazy.creat("div", "ub-f1");
            var _html = '<div class="ub-f1 ub">';
            _html += '<div class="h1 slh ub-f1"><span>'+(obj.h1?obj.h1:"")+'</span></div><div class="h3"><span>'+(obj.h3?obj.h3:"")+'</span></div>';
            _html += '</div>';
            _html += '<div class="h2 hh"><span>'+(obj.h2?obj.h2:"")+'</span></div>';
            h.innerHTML = _html;
            content.appendChild(h);
            tddiv.appendChild(content);
            //
            td.appendChild(tddiv);
            tr.appendChild(td);
            table.appendChild(tr);
            if(obj.onclick){
                tr.getElementsByClassName("icon")[0].onclick = function(){
                    obj.onclick(obj)
                }
                /*
                tr.onclick = function(event){
                    bj.onclick(obj)
                }
                */
            }
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
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
