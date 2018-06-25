/*
 * 输入框控件
 */
lazy.plugins.ewm1 = {
	"init" : function(el,data) {
		var _html = '';
		_html+="<div class='all'></div>"
		_html+="<div class='content' style='top:50%;margin-top:-"+(data.con.length*3)/2+"rem;height:"+(data.con.length*3)+"rem'>"
        for(var i=0;i<data.con.length;i++){
            _html+="<div class='rows' index="+i+">"+data.con[i]+"</div>"
        }
        _html+="</div>"
		el.innerHTML = _html;
		el.onclick=function(){
		    data.select();
		}
		var rows=el.getElementsByClassName("rows");
		for(var i=0;i<rows.length;i++){
    		rows[i].onclick=function(){
    		    data.onclick(this.getAttribute("index"))
    		}
		}
		data.setHide=function(){
		    el.style.display="none";
		}
		data.setShow=function(){
            el.style.display="block";
        }
	},
	"edit" : function(parentElement,el,data) {
	}
}
