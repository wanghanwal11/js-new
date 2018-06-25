lazy.plugins.messagelist = {
	"init" : function(el,data) {
	    var arr = data.content;
        for(var i = 0; i < arr.length; i++) {
            add(arr[i]);
        }
		function add(json) {
		    var div = lazy.creat("a",".messagediv");
		    el.appendChild(div);
		    var _html = '';
		    _html += '<div class="messageheader"></div>';
		    _html += '<div class="messagebody">';
		    _html += '<div class="top" style="background-image:url('+json.img+')"><span>'+json.title+'</span></div>';
		    _html +='<div class="time"><span>'+json.time+'</span></div>'
		    if(json.imgs){
		        _html +='<div class="content1"><img src="'+json.imgs+'"/></div>'
		    }else{
		        _html +='<div class="content"><span>'+json.mes+'</span></div>'
		    }
		    _html += '<div class="messagefooter" style="background-image:url(LazyUI/js/messagelist/images/gt.png)"><span>立即查看</span></div>';
		    _html +='</div>';
		    div.innerHTML = _html;
		    div.onclick=function(){
		        json.onclick(json);
		    }
		}
		data.add = add;
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
