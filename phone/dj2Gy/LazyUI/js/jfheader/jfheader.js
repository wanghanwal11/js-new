lazy.plugins.jfheader = {
	"init" : function(el,data) {
		var header = lazy.creat("div","header");
		var html="";
		html+='<div class="people"><img class="imgs" src=../LazyUI/images/morenpeople.png /></div>';
		html+='<div class="jf"><div class="left"></div><div class="center"></div><div class="right">总计<span class="right1">&nbsp;&nbsp;</span>分</div></div>'
		header.innerHTML=html;
		el.appendChild(header);
		var sel=lazy.creat("div","sel");
        header.appendChild(sel);
        sel.innerHTML=data.title+"&nbsp;&nbsp;<span class='xia'></span>";
        sel.onclick=function(){
            if(data.select)data.select()
        }
        data.addsel=function(o){
         sel.innerHTML=o+"&nbsp;&nbsp;<span class='xia'></span>";   
        }
        data.setc=function(peopleimg,count,num){
            if(count&&num){
                el.getElementsByClassName("imgs")[0].src=peopleimg;
                el.getElementsByClassName("left")[0].innerHTML="第<span class='left1'>"+count+"</span>名";
                el.getElementsByClassName("left")[0].style.lineHeight="2.6rem";
                el.getElementsByClassName("right1")[0].innerHTML=num;
            }else{
                el.getElementsByClassName("imgs")[0].src=peopleimg;
                el.getElementsByClassName("left")[0].innerHTML="暂无排名";
                el.getElementsByClassName("left")[0].style.lineHeight="3.2rem";
                el.getElementsByClassName("right1")[0].innerHTML=0;
            }
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
