lazy.plugins.cjry = {
	"init" : function(el,data) {
        var jia=lazy.creat("div","cjry ub");
        var h="";
        h+='<div class="left">'+data.left+'</div>';
        h+='<div class="center ub-f1">';
           for(var i=0;i<data.center.length;i++){
             h+='<a class="list" index='+i+'  style="background:url('+data.center[i].src+') no-repeat;background-size: cover"><div class='+(data.center[i].state=="0"?"hei":"")+'></div></a>';
         }
        h+='</div>'
        if(data.right){
            h+='<div class="right" style="background:url('+data.right+') no-repeat 1rem 1.2rem;background-size: 1rem"></div>';
        }
        if(data.right1){
            h+='<div class="right1" style="background:url('+data.right1+') no-repeat 1rem 1.2rem;background-size: 1rem"></div>';
        }
        jia.innerHTML=h;
        el.appendChild(jia);
        if(data.right){
            var center=el.getElementsByClassName("center")[0];
            el.getElementsByClassName("right")[0].onclick = function() {
                if(center.style.overflow!="hidden"){
                    center.style.height="3rem";
                    center.style.overflow="hidden";
                }else{
                    center.style.height="auto";
                    center.style.overflow="auto";
                }
                
            }
        }
        if(data.right1){
            el.getElementsByClassName("right1")[0].onclick = function() {
            data.onclick()
            }
        }
        
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
