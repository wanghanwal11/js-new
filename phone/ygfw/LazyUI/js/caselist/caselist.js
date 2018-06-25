lazy.plugins.caselist = {
    "init" : function(el,data) {
        var caselistDom = lazy.create("div","caselistDom");
        var table = data.table;
        for(var i=0;i<table.length;i++){
            
            var caselist_row = lazy.create("div","caselist_row box");
            
            var caselist_left = lazy.create("div","caselist_left");
            caselist_row.appendChild(caselist_left);
            
            var caselist_center = lazy.create("div","caselist_center");
            
            if(table[i].first) caselist_center.className = "caselist_center first";
            var caselist_h1 = lazy.create("div","caselist_h1 box");
            if(table[i].h1.icon){
                var caselist_icon = lazy.create("div","caselist_icon");
                caselist_icon.style.backgroundImage = "url("+table[i].h1.icon+")";
                caselist_h1.appendChild(caselist_icon);
            }
            var caselist_label = lazy.create("div","caselist_label");
            caselist_label.innerHTML = table[i].h1.text;
            caselist_h1.appendChild(caselist_label);
            caselist_center.appendChild(caselist_h1)
            
            var caselist_h2 = lazy.create("div","caselist_h2 box");
            if(table[i].h2.icon){
                var caselist_icon = lazy.create("div","caselist_icon");
                caselist_icon.style.backgroundImage = "url("+table[i].h2.icon+")";
                caselist_h2.appendChild(caselist_icon);
            }
            var caselist_label = lazy.create("div","caselist_label");
            caselist_label.innerHTML = table[i].h2.text;
            caselist_h2.appendChild(caselist_label);
            caselist_center.appendChild(caselist_h2)
            caselist_row.appendChild(caselist_center)
            
            el.appendChild(caselist_row)
            
        }
    }
}