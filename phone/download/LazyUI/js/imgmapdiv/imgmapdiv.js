lazy.plugins.imgmapdiv = {
	"init" : function(el,data) {
	    var img = new Image();
	    img.src= data.src;
	    img.onload = function() {
	        var s = document.body.clientWidth / this.width ;
	        var idname = lazy.getAutoId();
            var _html = "";
            _html += '<img src='+data.src+'  usemap="#'+idname+'"/>';
            //_html += '<map  name="'+idname+'" id="'+idname+'">';
            lazy.for(data.rect,function(obj) {
                var arr = obj.coords.split(",");
                //_html += '<area shape="rect" coords="'+d(arr[0])+','+d(arr[1])+','+d(arr[2])+','+d(arr[3])+'" href ="'+obj.href+'" />';
                _html += '<a href ="'+obj.href+'" class="area" style="width:'+d(arr[2]-arr[0])+'px; height:'+d(arr[3]-arr[1])+'px; top:'+d(arr[1])+'px; left:'+d(arr[0])+'px;"></a>'
            });
            //_html += '</map>';
            el.innerHTML = _html;
            function d(a) {
                if(s<0)return a/s;
                else return a*s;
            }
	    }
	    img.onerror = function() {
	        lazy.alert2("图片路径不存在");
	    }
        
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
