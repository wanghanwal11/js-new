/*
 * 搜索表单
 */
lazy.plugins.sousuoinput = {
	"init" : function(el,data) {
		var lishidata = [];//搜索历史
		var border = "border-bottom:"+(data.borderBottom?data.borderBottom:"")+";";
		var lishibol = true;
		if(data.lishi&&(data.lishi=="false")) {
			lishibol = false;
		}
		var _html = '<div class="sousuogrongqi" style="'+border+'">';
		if(data.icon) {
			_html += '<div class="icon" icon="'+(lazy.url+"LazyUI/images/Icon/"+data.icon+".png")+'" typename="left"></div>';
		}else {
			_html += '<div class="iconnull"></div>';
		}
		_html += '<div class="flex1"><div class="flex1div"><input class="sousuoinput" type="text" placeholder='+(data.placeholder?data.placeholder:"")+'></div></div>';
		_html += '<div class="icon" style="background:url('+lazy.url+'LazyUI/js/sousuoinput/sousuo.png);background-size: 100%" typename="right"></div>';
		_html += '</div>';
		_html += '<div class="sousuolishi" style="display:none;">';
		if(data.icon) {
			_html += '<div class="iconzw"></div>';
		}
		else {
			_html += '<div class="iconnull"></div>';
		}
		_html += '<div class="lishidiv">';
		_html += '	<div class="lishiul">';
//		_html += '		<div class="lishili">'+lishidata[i]+'</div>';
		_html += '	</div>';
		_html += '	<div class="lishidel"><span class="lishilispan">清除历史记录</span></div>';
		_html += '</div>';
		_html += '<div class="iconzw"></div>';
		_html += '</div>'
		el.innerHTML = _html;
		//搜索文本
		
		var sousuoinput = el.getElementsByClassName("sousuoinput")[0];
		var sousuolishi = el.getElementsByClassName("sousuolishi")[0];
		var lishiul = el.getElementsByClassName("lishiul")[0];
		var lishidel = el.getElementsByClassName("lishidel")[0];
		lishidel.onclick = function() {
			if(lishibol)sousuolishi.style.display = "none";
			lazy.setParameter(winName+"lishidata",[]);
			lishidata = [];
		}
		sousuoinput.onfocus = function() {
			if(lishibol&&lishidata.length>0){
				sousuolishi.style.display = "";
				lishiul.innerHTML = "";
				for(var i = 0; i < lishidata.length; i++) {
					var _lishili = document.createElement("div");
					_lishili.className = "lishili";
					_lishili.innerHTML = "<span class='lishilispan'>"+lishidata[i]+"</span>";
					_lishili.onclick = function() {
						if(lishibol)sousuolishi.style.display = "none";
						sousuoinput.value = this.getElementsByClassName("lishilispan")[0].innerHTML;
						if(data.select)data.select(sousuoinput.value);
					}
					lishiul.appendChild(_lishili);
				}
			}
		}
		sousuoinput.onblur = function() {
			if(lishibol){
				setTimeout(function(){
					sousuolishi.style.display = "none";
				},300);
			}
		}
		//处理图标
        var iconlist = el.getElementsByClassName("icon");
        for(var i = 0; i < iconlist.length; i++) {
            //事件
            iconlist[i].onclick = function() {
                var typename = this.getAttribute("typename");
                var val = sousuoinput.value;
                if(typename=="right"){
                    if(data.select)data.select(val);
                    if((val!="")&&(lishidata.indexOf(val)==-1)) {
                        lishidata.push(val);
                        if(lishidata.length > 9)lishidata.shift();
                    }
                }else {
                    if(data.iconclick)data.iconclick();
                }
            }
        }
		
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
