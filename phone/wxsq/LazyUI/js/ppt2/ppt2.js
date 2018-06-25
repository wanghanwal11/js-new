lazy.plugins.ppt2 = {
	"init" : function(el,data) {
	    var width = document.body.clientWidth;
	    var w2 = width - lazy.fontSize*parseInt(data.width);
	    w2 = parseInt(w2/2)
	    var w1 = lazy.fontSize*2 + lazy.fontSize*parseInt(data.width);
	    var offset_width = w1-w2;
	    var offset_width2 = lazy.fontSize*parseInt(data.width)+lazy.fontSize
	     var now_page = 0;
	     var length = 0;
	    function addPages(pages){
           //console.log(carousel)
           now_page=0;
           length = pages.length;
           var carousel = lazy.create("div","container box");
           el.appendChild(carousel);
            lazy.for(pages,function(obj,i){
                 var maxdiv = lazy.create("div","content box box_v");
                 maxdiv.setAttribute("index",i);
                var li = lazy.create("div","item box");
                li.setAttribute("index",i);
                li.style.width = data.width+"rem";
                li.style.minWidth = data.width+"rem";
                li.style.height = data.height+"rem";
                li.style.backgroundImage = "url("+obj.src+")";
                maxdiv.appendChild(li);
                var h1 = lazy.create("div","h1 slh");
                h1.style.width = (data.width-1)+"rem";
                h1.innerHTML = '<span>'+(obj.h1?obj.h1:'')+'</span>';
                var h2 = lazy.create("div","h2");
                h2.innerHTML = '<span>'+(obj.h2?obj.h2:'')+'</span>';
                h2.style.width = data.width+"rem";
                maxdiv.appendChild(h1);
                li.onclick = function(){
                    var index = this.getAttribute("index")
                    obj.onclick(pages[index].id)
                }
                
                if(obj.h2)maxdiv.appendChild(h2);
                
                if(obj.tag){
                    var tag = lazy.create("div","tag")
                    tag.innerHTML = '<span>'+obj.tag+'</span>'
                    tag.style.width = obj.tag.length + "rem"
                    maxdiv.appendChild(tag);
                }
                
                carousel.appendChild(maxdiv);
                
            })
             
            //轮播
            if(pages.length>1) {
                var a = 1;
                
                 var x0,x1,xw;
                 xw=0;
                 //var carousel = el.getElementsByClassName("container")[0];
                  carousel.addEventListener("touchstart",function(e){
                     //e.preventDefault();
                     x0=e.touches[0].clientX;
                 },false);
                 carousel.addEventListener("touchmove",function(e){
                    //e.preventDefault();
                     x1=e.changedTouches[0].clientX;
                     xw=x1-x0;
                     
                 },false);
                 
                 carousel.addEventListener("touchend",function(e){
                     if(xw>0){
                         //又滑
                            change_ppt2()
                            xw = 0
                            
                     }else if(xw<0){
                           //左滑
                            change_ppt()
                            xw = 0
                            
                     }else if(xw==0){
                         //点击事件
                         //alert(now_page)
                     }
                     
                 },false);     
                
            }
	    }
	    
        function change_ppt(){
            //左滑
               if(now_page<length-1){
                    el.getElementsByClassName("container")[0].style.marginLeft = "-"+(offset_width+now_page*offset_width2)+"px"; 
                    now_page++;
               }
               
        }
        function change_ppt2(){
              //右滑
               now_page--;
                if(now_page>0){
                    temp = now_page-1;
                    el.getElementsByClassName("container")[0].style.marginLeft = "-"+(offset_width+temp*offset_width2)+"px"; 
                    
               }else if(now_page == 0){
                    el.getElementsByClassName("container")[0].style.marginLeft = "0px"; 
               }
               
        }
        function change_other(){
            //修改文字
            var text_num = el.getElementsByClassName("maxdiv_li")[1].getAttribute("index");
            el.getElementsByClassName("h1")[0].innerHTML='<span>'+(pages[text_num].h1?pages[text_num].h1:'')+'</span>';
            if(pages[text_num].h2) el.getElementsByClassName("h2")[0].innerHTML='<span>'+(pages[text_num].h2?pages[text_num].h2:'')+'</span>';
        }
        data.add = addPages;

      
		
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
