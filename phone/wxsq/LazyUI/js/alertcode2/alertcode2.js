lazy.plugins.alertcode2 = {
    "init" : function(el,data) {
        
        var alertdiv = lazy.create("div","alertdiv");
            alertdiv.style.backgroundImage = 'url(../LazyUI/images/refresh.png)';
            alertdiv.style.backgroundSize = '10rem 10rem';
        alertdiv.onclick = function(e){
            if(lazy.getParameter("state")==0) e.stopPropagation(); 
            if(data.onclick) data.onclick(alertdiv)
        }
        el.appendChild(alertdiv);
        
        
        //事件
       
        data.changeUrl = function(url,width){
            alertdiv = el.getElementsByClassName('alertdiv')[0];
            alertdiv.style.backgroundImage = 'url('+url+')';
            
            if(width){
                alertdiv.style.backgroundSize = parseInt(width)+'rem '+parseInt(width)+'rem';
            }else{
                alertdiv.style.backgroundSize = '16rem 16rem';
            }
            
        }
    }
}
