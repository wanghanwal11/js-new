
lazy.plugins.movetabbar1 = {
	"init" : function(el,data) {
		var _html = '';
		var arr=data.title?data.title:[];
		var div = lazy.creat("div",".content");
        el.appendChild(div);
		for(var i=0;i<arr.length;i++){
		    _html+='<div><span index="'+i+'">'+arr[i]+'</span></div>'
		}
		div.innerHTML=_html;
		var span=el.getElementsByTagName("span");
		for(var j=0;j<span.length;j++){
		    if(j==0)span[0].className="bgred";
		    span[j].onclick=function(){
		        var sib=siblingsFun(this.parentNode);
		        for(var s=0;s<sib.length;s++){
		            sib[s].childNodes[0].className="";
		        }
		        this.className="bgred";
		        data.onclick(this.getAttribute("index"))
		    }
		}
	   
	    function siblingsFun(elm) {
        var a = [];
        var p = elm.parentNode.children;
        for(var i =0,pl= p.length;i<pl;i++) {
            if(p[i] !== elm) a.push(p[i]);
        }
        return a;
        }
	},
	"edit" : function(parentElement,el,data) {}
		
}
