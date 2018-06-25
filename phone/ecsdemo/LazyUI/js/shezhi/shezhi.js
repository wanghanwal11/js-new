lazy.plugins.shezhi = {
	"init" : function(el,data) {
        var jia=lazy.creat("div","alljia");
        var h="";
        h+='<div class="left"></div><div class="right"></div>';
        h+='<div class="szbj">';
         for(var i=0;i<data.content.length;i++){
             h+='<a class="list" index='+i+'  style="background:url('+data.content[i].icon+') no-repeat 0rem 0.5rem;background-size: 1rem">'+data.content[i].name+'</a>';
         }
        h+='</div>'
        jia.innerHTML=h;
        el.appendChild(jia);
        var szbj=el.getElementsByClassName("szbj")[0];
        szbj.style.display="none";
        el.getElementsByClassName("left")[0].onclick = function() {
            data.clk1();
        }
        el.getElementsByClassName("right")[0].onclick = function() {
            if(szbj.style.display=="none"){
                szbj.style.display="block"
            }else{
                szbj.style.display="none"
            }
        }
        var list=el.getElementsByClassName("list");
        for(var i=0;i<list.length;i++){
            list[i].onclick=function(){
                    data.clk2(this.getAttribute("index"))
                 }
        }
        
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
