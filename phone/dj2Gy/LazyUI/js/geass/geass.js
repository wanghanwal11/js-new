lazy.plugins.geass = {
	"init" : function(el,data) {
		var arr = data.content;
		if(data.title){
            var tit = lazy.creat("div","tit ub");
            var html = '';
            html+='<div class="title">'+data.title+'</div><div class="huifu">回复</div>'
            tit.innerHTML=html;
            el.appendChild(tit);
        }
		for(var i = 0; i < arr.length; i++) {
		    add(arr[i]);
		}
		function add(json) {
		    var tr = lazy.creat("div",".tr ub");
		    el.appendChild(tr);
		    var _html = '';
		    _html += '<div class="iconname ub"><div class="geren"><div class="icon"></div><div class="bumen">'+json.bumen+'</div></div><div class="name"><div class="txt">'+json.con+'</div><div class="time">'+json.tim+'</div></div></div>';
		    tr.innerHTML = _html;
		    var img = new Image();
		    img.src = json.icon;
		    img.onload = function() {
		          tr.getElementsByClassName("icon")[0].style.backgroundImage = "url("+img.src+")";
		    }
		    if(json.onclick) {
		        tr.onclick = function() {
		            json.onclick(json);
		        }
		    }
		}
		data.add = add;
		data.clear=function(){
		    arr=[];
		    el.innerHTML="";
		}
		if(el.getElementsByClassName("huifu")[0]){
		    el.getElementsByClassName("huifu")[0].onclick=function(){
		        data.select();
		    }
		}
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
