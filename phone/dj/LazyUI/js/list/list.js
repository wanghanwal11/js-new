lazy.plugins.list = {
	"init" : function(el,data) {
		var arr = data.content;
		var _html = '';
		var divs = lazy.creat("div",".header");
		var html='<div>排名</div><div>姓名</div><div>积分</div>';
        divs.innerHTML=html;
        el.appendChild(divs);
		var div = lazy.creat("div",".content");
        el.appendChild(div);
        for(var i = 0; i < arr.length; i++) {
            add(arr[i]);
        }
		function add(json) {
            _html += '<div class="list">'
            _html +='<div class="left">'+json.grade+'</div><div class="center">'
            if(json.img||json.img==""){
            _html +='<img src='+json.img+' />'
            }
            _html +=json.name+'</div><div class="right">'+json.count+'</div>';
            _html +='</div>';
            div.innerHTML = _html;
        }
        data.add = add;
        data.clean=function(){
            div.innerHTML=" ";
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
