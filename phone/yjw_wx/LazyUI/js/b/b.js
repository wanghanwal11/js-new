lazy.plugins.b = {
    "init" : function(el,data) {
        
       var banner = lazy.create("div","banner");
       banner.innerHTML = '<span>北科维拓手机组控件库</span>'
       var center = lazy.create("div","center");
       var left = lazy.create("div","left");
       var iframe = lazy.create("iframe", "iframe");
       iframe.src= data.list[0].href;
       
       var now_page = 0;
       lazy.for(data.list,function(obj,i){
           var li = lazy.create("a","li "+(i==0?"choose":""));
           li.innerHTML = '<span>'+obj.class+'</span>';
           li.setAttribute("index",i)
           li.onclick = function(){
               iframe.src= obj.href;
           }
           left.appendChild(li)
       })
       //renderRight(0)
       
       center.appendChild(left)
       center.appendChild(iframe)
       el.appendChild(banner)
       el.appendChild(center)
       
       
////
    }
}