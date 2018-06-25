lazy.plugins.alertcode3 = {
    "init" : function(el,data) {
        
        var alertdiv = lazy.create("div","alertdiv");
        var img = lazy.create("img","alertimg")
        img.setAttribute("src","../LazyUI/images/refresh.png")
        img.style.width = '10rem';
        img.style.height = '10rem';
        alertdiv.appendChild(img)
        alertdiv.onclick = function(e){
            if(lazy.getParameter("state")==0) e.stopPropagation(); 
            if(data.onclick) data.onclick(alertdiv)
        }
        el.appendChild(alertdiv);
        
        
        //事件
       
        data.changeUrl = function(url,width){
            img = el.getElementsByClassName('alertimg')[0];
            img.setAttribute("src",url)
            
            if(width){
                img.style.width = parseInt(width)+'rem';
                img.style.height = parseInt(width)+'rem';
            }else{
                img.style.width = '16rem';
                img.style.height = '16rem';
            }
            
        }
    }
}
