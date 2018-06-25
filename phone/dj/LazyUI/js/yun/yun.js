lazy.plugins.yun = {
	"init" : function(el,data) {
	    var table = lazy.creat("div","table");
	    table.style.backgroundImage = "url("+data.src+")";
	    el.appendChild(table);
	    if(data.icon) {
	        el.style.height = "10rem";
	        add1(data.name,data.icon)
            function add1(name,icon){
                var trs=el.getElementsByClassName("tr")[0];
                if(trs){el.removeChild(trs);}
                var tr = lazy.creat("div","tr");
                tr.innerHTML = '<div class="quan1"><div class="quan2"></div></div><div class="title"><span>'+(name?name:"")+'</span></div>';
                el.appendChild(tr);
                var quan2 = el.getElementsByClassName("quan2")[0];
                var img = new Image();
                img.src = data.icon;
                img.onload = function() {
                    quan2.style.backgroundImage = 'url('+icon+')';
                }
            }
            if(data.divlist){
                el.style.height = "12rem";
                var divlists = lazy.creat("div","divlist");
                for(var s=0;s<data.divlist.length;s++){
                    divlists.innerHTML+="<div>"+data.divlist[s]+"</div>"
                }
                el.appendChild(divlists);
                add(data.divcontent)
                function add(json){
                    var divcontents=el.getElementsByClassName("divcontent")[0];
                    if(divcontents){el.removeChild(divcontents);}
                    var divcontent = lazy.creat("div","divcontent");
                    for(var s=0;s<json.length;s++){
                        divcontent.innerHTML+="<div index="+s+">"+json[s]+"</div>"
                    }
                    el.appendChild(divcontent);
                    var dd=divlists.getElementsByTagName("div");
                    if(data.onclick){
                         dd[3].onclick=function(){
                            data.onclick()
                        }
                    }
                }
            }
            
            if(data.qita){
                el.style.height = "16.5rem";
                var qita = lazy.creat("div","qita");
                qita.innerHTML="<div class='imgs'></div><div class='text'>支部联系人</div><div class='title'><div class='tx'>头像</div><div class='name'>姓名</div><div class='tel'>联系电话</div></div>"
                el.appendChild(qita);
            }
	    }else{
	        el.style.height = "3.6rem";
	    }
	    data.add=add;
	    data.add1=add1;
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
