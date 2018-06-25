lazy.plugins.ppt = {
	"init" : function(el,data) {
	    var timer;
	    var pages = data.pages;
	    var maxdiv = lazy.create("div","maxdiv ub");
	    var carousel = lazy.create("div","carousel");
	    el.appendChild(carousel);
	    function add(pages){
	    var t = 0;    
	    
	    var temp_page = lazy.create("div","maxdiv_li maxdiv_lid");
                    temp_page.setAttribute("index",pages.length-1);
                    temp_page.setAttribute("listindex",pages.length-1);
                    temp_page.style.backgroundImage = "url("+pages[pages.length-1].src+")";
                    temp_page.style.marginLeft = -100 + "%"; 
                    maxdiv.appendChild(temp_page);
		lazy.for(pages,function(obj,i){
		    var li = lazy.create("div","maxdiv_li "+(i==0?"maxdiv_lid":""));
		    li.setAttribute("index",i);
		    li.setAttribute("listindex",i)
		    li.style.backgroundImage = "url("+obj.src+")";
		    li.onclick = function(){
		    }
		    maxdiv.appendChild(li);
		})
		carousel.appendChild(maxdiv);
		//el.appendChild(maxdiv);
		//点
		if(pages.length>1){
		    
		
    		var dians = lazy.create("div","dians box box_i_around");
    		//alert(pages.length*5)
    		dians.style.marginLeft = "-"+(pages.length*5+5)+"px";
    		lazy.for(pages,function(obj,i){
    		    var dian = lazy.create("div","dian "+(i==0?"dian1":"dian2"));
    		    //dian.innerHTML = '<span>●</span>';
    		    dians.appendChild(dian)
    		})
    		carousel.appendChild(dians);
		//dians.style.marginLeft = '-'+(pages.length/2)*10+"px";
		}
		if(data.button){
		    //箭头
            var left =lazy.create("div","left");
            var right =lazy.create("div","right");
            left.onclick = function(){
                if(timer){
                    clearInterval(timer)
                }
                change_ppt2()
                change_other() 
                timer = setInterval(function(){
                    change_ppt()
                    change_other()
                   
                },2500)
            }
            
            right.onclick = function(){
                if(timer){
                    clearInterval(timer)
                }
                change_ppt()
                change_other()
                timer = setInterval(function(){
                    change_ppt()
                    change_other()
                   
                },2500)
            }
            el.appendChild(left);
            el.appendChild(right);
		}
		
		//标题栏
		var h1 = lazy.create("div","h1 slh");
		h1.innerHTML = '<span>'+(pages[0].h1?pages[0].h1:'')+'</span>';
		var h2 = lazy.create("div","h2");
        h2.innerHTML = '<span>'+(pages[0].h1?pages[0].h2:'')+'</span>';
        el.appendChild(h1);
        if(data.h2)el.appendChild(h2);
        
		//点击事件
		var list = el.getElementsByClassName("maxdiv_li");
		for(var i = 0; i < list.length; i++) {
		    var j = parseInt(list[i].getAttribute("index"))
		    if(pages[j].onclick) {
		        list[i].onclick = function() {
                    pages[j].onclick();
                }
		    }
		    
		}
		//轮播
		if(pages.length>1) {
		    var a = 1;
            timer = setInterval(function(){
                change_ppt()
                change_other()
               
            },2500)
            
             var x0,x1,xw;
            
             var now_page = el.getElementsByClassName("maxdiv_lid")[0];
             var index = now_page.getAttribute("index")
             
             var ppt = el.getElementsByClassName("maxdiv")[0];
              ppt.addEventListener("touchstart",function(e){
                 //e.preventDefault();
                 x0=e.touches[0].clientX;
             },false);
             ppt.addEventListener("touchmove",function(e){
                 //e.preventDefault();
                 x1=e.changedTouches[0].clientX;
                 xw=x1-x0;
                 
             },false);
             console.log(ppt)
             ppt.onclick = function(){
                 var listindex = el.getElementsByClassName("maxdiv_li")[1].getAttribute("listindex");
                console.log(pages[listindex])
                data.onclick(pages[listindex].id)
                
             }
             ppt.addEventListener("touchend",function(e){
                 if(xw>0){
                     if(timer){
                            clearInterval(timer)
                        }
                        change_ppt2()
                        change_other() 
                        timer = setInterval(function(){
                            change_ppt()
                            change_other()
                           
                        },2500)
                 }else if(xw<0){
                       if(timer){
                            clearInterval(timer)
                        }
                        change_ppt()
                        change_other() 
                        timer = setInterval(function(){
                            change_ppt()
                            change_other()
                           
                        },2500)
                 }
                 
             },false);     
            
        }else{
            var ppt = el.getElementsByClassName("maxdiv")[0];
            ppt.onclick = function(){
                 var listindex = el.getElementsByClassName("maxdiv_li")[1].getAttribute("listindex");
                console.log(pages[listindex])
                data.onclick(pages[listindex].id)
                
             }
        }
        function change_ppt(){
           t++;
                if(list.length>data.pages.length){
                     maxdiv.removeChild(list[0]);
                }
                var num = el.getElementsByClassName("maxdiv_li")[0].getAttribute("index");
                var listindex = el.getElementsByClassName("maxdiv_li")[0].getAttribute("listindex");
                var temp = lazy.create("div","maxdiv_li");
                temp.setAttribute("index",num);
                temp.setAttribute("listindex",listindex);
                temp.style.backgroundImage = "url("+pages[num].src+")";
                maxdiv.appendChild(temp);
                el.getElementsByClassName("maxdiv_li")[0].style.marginLeft = -100 + "%"; 
                el.getElementsByClassName("maxdiv_li")[0].className = "maxdiv_li maxdiv_lid";
           
        }
        function change_ppt2(){
               t--;
                el.getElementsByClassName("maxdiv_li")[0].className = "maxdiv_li maxdiv_lid";
                el.getElementsByClassName("maxdiv_li")[0].style.marginLeft = 0; 
               
                var ln;
                ln= list.length;
                if(list.length>data.pages.length){
                      maxdiv.removeChild(maxdiv.childNodes[ln-1]);
                }
                ln= list.length-1;
                var num = el.getElementsByClassName("maxdiv_li")[ln].getAttribute("index");
                var listindex = el.getElementsByClassName("maxdiv_li")[0].getAttribute("listindex");
                var temp = lazy.create("div","maxdiv_li");
                temp.setAttribute("index",num);
                temp.setAttribute("listindex",listindex);
                temp.style.backgroundImage = "url("+pages[num].src+")";
                temp.style.marginLeft = -100 + "%"; 
                maxdiv.insertBefore(temp,maxdiv.childNodes[0]);
               
        }
        function change_other(){
            //修改文字
            var text_num = el.getElementsByClassName("maxdiv_li")[1].getAttribute("index");
            
            el.getElementsByClassName("h1")[0].innerHTML='<span>'+(pages[text_num].h1?pages[text_num].h1:'')+'</span>';
            if(pages[text_num].h2) el.getElementsByClassName("h2")[0].innerHTML='<span>'+(pages[text_num].h2?pages[text_num].h2:'')+'</span>';
            //修改点颜色
            el.getElementsByClassName("dian1")[0].className="dian dian2";
            el.getElementsByClassName("dian")[text_num].className="dian dian1";
        }
        }//add
        data.add = add;
		
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
