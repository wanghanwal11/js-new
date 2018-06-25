lazy.plugins.mapbutton = {
    "init" : function(el,data) {
    	
        var mapdiv = lazy.create("a","mapdiv");
        mapdiv.innerHTML = '<span>位置</span>';
        el.appendChild(mapdiv);
        
        
        
        var shequIframe = lazy.create("div","shequIframe");
        var iframe = lazy.create("iframe","iframe");
        iframe.src = "../map/mapnone.html";
        shequIframe.appendChild(iframe);
        document.body.appendChild(shequIframe);
        window.setShequIframe = function(obj) {
                shequIframe.style.left = "100%";
                shequIframe.style.webkitAnimation = "shequIframe_an1 0.5s";
                //el.getElementsByClassName("szsq")[0].value = obj.title;
                //lazy.setParameter("sqobj",obj);
            }
        
        
        mapdiv.onclick = function() {
            shequIframe.style.left = "0";
            shequIframe.style.webkitAnimation = "shequIframe_an 0.5s";
            if(data.onclick)data.onclick(iframe);
        }
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
