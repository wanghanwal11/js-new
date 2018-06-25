/*
 * movetabbar 可滑动选择按钮
 */
lazy.plugins.movetabbar = {
	"init" : function(el,data) {
		var _html = '';
		var w = 0,t;
		var changecolor = (data.changecolor?data.changecolor:"#27acfe");
		var xl = 0;
		var index = parseInt(data.index?data.index:0);
		data.index = index;
		el.setAttribute("index",index);
		el.setAttribute("changecolor",changecolor);
		
		var bol = true;
		if(!data.line||data.line=="false") {
			bol = false;
		}
		//文本
		if(data.h1){
			if(data.h2) {
				for(var i = 0; i < data.h1.length; i++) {
					if(index == i){
						_html += '<div class="textdiv" index="'+i+'" style="color:'+changecolor+';"><div class="text">';
						_html += 	'<div class="h1">'+(data.h1[i])+'</div>';
						_html += 	'<div class="h2" style="color:'+changecolor+';">'+(data.h2[i]?data.h2[i]:"")+'</div>';
					}else {
						_html += '<div class="textdiv" index="'+i+'"><div class="text">';
						_html += 	'<div class="h1">'+(data.h1[i])+'</div>';
						_html += 	'<div class="h2">'+(data.h2[i]?data.h2[i]:"")+'</div>';
					}
					_html += '</div></div>';
				}
			}else {
				for(var i = 0; i < data.h1.length; i++) {
					if(index == i) {
						_html += '<div class="textdiv" style="color:'+changecolor+';"><div class="text">';
					}else {
						_html += '<div class="textdiv"><div class="text">';
					}
					_html += 	'<div class="h1">'+(data.h1[i])+'</div>';
					_html += '</div></div>';
				}
			}
			w = document.body.clientWidth / (data.h1.length);		
		}
		//取消移动线条
		if(bol) {
			_html += '<div class="line" style=\"width:'+w+'px;left:'+(index*w)+'px;\"></div>';
		}
		el.innerHTML = _html;
		//选择事件
		if(data.select) {
			var line = el.getElementsByClassName("line")[0];
			var list = el.getElementsByClassName("textdiv");
			for(var i = 0; i < list.length; i++) {
				list[i].onclick = function() {
					var n = parseInt(this.getAttribute("index"));
					var morenel = el.getElementsByClassName("textdiv")[data.index];
					//替换颜色
					morenel.style.color = "#000";
					if(morenel.getElementsByClassName("h2")[0]) {
						morenel.getElementsByClassName("h2")[0].style.color = "#a2a2a2";
					}
					this.style.color = changecolor;
					if(this.getElementsByClassName("h2")[0]) {
						this.getElementsByClassName("h2")[0].style.color = changecolor;
					}
					if(bol) {
						var l = parseInt(line.style.left); 
						var a = l;
						var b = w*n;
						if(t) {
							lazy.clearHuanChong(t);
						}
						t = lazy.huanChong(a,b,300,"jiansu",function(v){
							line.style.left = v+"px";
						})
					}
					//
					data.index = n;
					el.setAttribute("index",index);
					data.select(n);
					window.setData(window.winJson);
				}
			}
		}
	},
	"edit" : function(parentElement,el,data) {
		var w = document.body.clientWidth / (document.getElementsByClassName("textdiv").length);	
		var changecolor = el.getAttribute("changecolor");
		if(data.index) {
			var t;
			var index= parseInt(data.index);
			var n = parseInt(el.getAttribute("index"));
			if(el.getElementsByClassName("textdiv")[index]) {
				var _this = el.getElementsByClassName("textdiv")[index];
				var morenel = el.getElementsByClassName("textdiv")[n];
				//替换颜色
				morenel.style.color = "#000";
				if(morenel.getElementsByClassName("h2")[0]) {
					morenel.getElementsByClassName("h2")[0].style.color = "#a2a2a2";
				}
				_this.style.color = changecolor;
				if(_this.getElementsByClassName("h2")[0]) {
					_this.getElementsByClassName("h2")[0].style.color = changecolor;
				}
				var line;
				if(el.getElementsByClassName("line")[0]) {
					line = el.getElementsByClassName("line")[0];
					var l = parseInt(line.style.left); 
					var a = l;
					var b = w*index;
					if(t) {
						lazy.clearHuanChong(t);
					}
					t = lazy.huanChong(a,b,300,"jiansu",function(v){
						line.style.left = v+"px";
					})
				}
				el.setAttribute("index",index);
			}
			
		}
		//修改
		if (data.h1) {
			var h1list = el.getElementsByClassName("h1");
			for(var i = 0; i < h1list.length; i++) {
				h1list[i].innerHTML = data.h1[i];
			}
		}
		if (data.h2) {
			var h2list = el.getElementsByClassName("h2");
			for(var i = 0; i < h2list.length; i++) {
				h2list[i].innerHTML = data.h2[i];
			}
		}
	}
}
