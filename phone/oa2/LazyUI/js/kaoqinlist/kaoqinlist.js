lazy.plugins.kaoqinlist = {
	"init" : function(el,data) {
        var table = lazy.creat("div", "table");
		var arr =  data.table?data.table:[];
        for(var i = 0; i < arr.length; i++) {
            one(arr[i]);
        }
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.creat("div", "tr");
            var td = lazy.creat("div", "td ub");
            var icon = getIcon(obj.icon, obj.h1);
            var h = lazy.creat("div", "h ub-f1 ub");
            h.innerHTML = '<div class="h1"><span>'+obj.h1+'</span></div><div class="h2"><span>'+obj.h2+'</span></div>';
            td.appendChild(icon);
            td.appendChild(h);
            //state 状态
            var statediv = lazy.creat("div", "statediv");
            statediv.innerHTML = '<span>'+obj.state+'</span>';
            //时间
            	
            var timearr = obj.time?obj.time:[];
            var timediv = lazy.creat("div", "timediv ub");
            if(obj.time){
	            var _html = '<div class="title"><span>记录：</span></div><div class="ub-f1 pdiv hh">';
	            for(var i = 0; i < timearr.length; i++) {
	                if(i==timearr.length-1||timearr[i].indexOf("br")>-1){
	                    _html += '<span>'+timearr[i]+'</span>';
	                }else{
    	                _html += '<span>'+timearr[i]+',</span>';
	                }
	            }
	            _html += '</div>';
	            timediv.innerHTML = _html;
            }
            tr.appendChild(td);
            tr.appendChild(timediv);
            tr.appendChild(statediv);
            var chuo;
            if(obj.state.indexOf("迟到")!=-1) {
                chuo = lazy.creat("div","chuo chuo_cd"); 
            }else if(obj.state.indexOf("旷工")!=-1) {
                chuo = lazy.creat("div","chuo chuo_kg"); 
            }else if(obj.state.indexOf("早退")!=-1) {
                chuo = lazy.creat("div","chuo chuo_zt"); 
            }else if(obj.state.indexOf("忘记打卡")!=-1) {
                chuo = lazy.creat("div","chuo chuo_yc"); 
            }else {
                chuo = lazy.creat("div","chuo"); 
            }
            tr.appendChild(chuo);
            tr.onclick = function(){
            	obj.onclick(obj)
            }
            //
            table.appendChild(tr);
        }
        //返回图片
         function getIcon(path, title) {
             var img = new Image();
             img.src = path;
             var icon = lazy.creat("div","icon");
             img.onerror = function() {
                 var icontitle1 = lazy.creat("div","icontitle1 bcolor"+parseInt(2));
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
        data.add = one;
        data.clean = function() {
            table.innerHTML = '';
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
