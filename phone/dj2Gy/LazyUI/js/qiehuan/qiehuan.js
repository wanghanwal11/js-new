/*
 * 切换
 */
lazy.plugins.qiehuan = {
	"init" : function(el,data) {
		var _html = '';
		var tr = lazy.creat("div","tr");
		el.appendChild(tr);
		var arr=data.title?data.title:[];
		for(var i=0;i<arr.length;i++){
		    var li = lazy.creat("div","li");
		    li.setAttribute("index",i);
		    tr.appendChild(li);
		    _html="<span>"+arr[i]+"</span>";
		    li.innerHTML=_html;
		    li.onclick=function(){
		        var sib=lazy.siblings(this);
		        this.childNodes[0].style.color="white";
		        this.childNodes[0].style.background="#1d2087";
		        for(var j=0;j<sib.length;j++){
		            sib[j].childNodes[0].style.color="#1d2087";
		            sib[j].childNodes[0].style.background="rgb(220, 228, 231)";
		        }
		        if(data.onclick){
		            data.onclick(this.getAttribute("index"))
		        }
		    }
		}
	},
	"edit" : function(parentElement,el,data) {
	    
	}
}
