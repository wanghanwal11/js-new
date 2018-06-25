/*
 * 输入框控件
 */
lazy.plugins.fujian = {
	"init" : function(el,data) {
		var _html = '';
		var arr = data.content?data.content:[];
		if(data.content){
		    _html+="<div>"
    		_html+="<div class='fujian'>附件</div>"
    		for(var i = 0; i < arr.length; i++) {
    			_html += '<img class="imagediv" index="'+i+'" src="'+getIP()+arr[i].replace(/\\/g,"/")+'"/>'
    		}
    		_html+="</div>"
		}
		el.innerHTML = _html;
		var list = el.getElementsByClassName("imagediv");
		for(var i = 0; i < list.length; i++) {
			if(data.select){
				list[i].onclick = function() {
					data.select(parseInt(this.getAttribute("index")),this.getAttribute("src"));
				}
			}
		}
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
