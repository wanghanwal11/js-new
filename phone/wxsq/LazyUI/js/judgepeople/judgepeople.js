lazy.plugins.judgepeople = {
    "init" : function(el,data) {
       
        var table = lazy.create("div", "table box box_v");
        
        var icon = lazy.create("div","icon");
        icon.style.backgroundImage = 'url('+data.icon+')'
        var name = lazy.create("div","name");
        name.innerHTML = '<span>'+data.name+'</span>'
        
        table.appendChild(icon)
        table.appendChild(name)
        el.appendChild(table)
        //data.add = one;
        
        
       
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
