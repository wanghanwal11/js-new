lazy.plugins.groupiframe3 = {
    
    "init" : function(el, data){
        
        var header = lazy.creat("div","#header");
        var content = lazy.creat("div","#content");
        var footer = lazy.creat("div","#footer");
        var iframe = lazy.creat("iframe","#contentIframe");
        content.appendChild(iframe);
        el.appendChild(header);
        el.appendChild(content);
        el.appendChild(footer);
        document.body.appendChild(el);
    },
    "edit" : function(parentEl, el, data){
        
    }
	
}