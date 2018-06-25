lazy.plugins.list = {
    "init" : function(el,data) {
        //var _html = '';
        var listDom = lazy.create("div","table");
        var table = data.table;
        for(var i=0;i<table.length;i++){
            var row = lazy.create("a","rows box");
            var icon = lazy.create("a","icon ");
            //icon.style.backgroundImage = table[i].icon;
            var img = new Image();
            img.className = "img";
            img.src = table[i].icon;
            icon.appendChild(img)
            img.onerror = function(){
                this.src = lazy.url + "LazyUI/images/moren.png";
            }
            row.appendChild(icon);
            var title = lazy.create("a","title");
            var h1 = lazy.create("a","h1");
            h1.innerHTML = table[i].h1;
            title.appendChild(h1);
            var h2 = lazy.create("a","h2");
            h2.innerHTML = table[i].h2;
            title.appendChild(h2);
            row.appendChild(title);
            if(table[i].right){
                var right = lazy.create("a","right");
                right.innerHTML = table[i].right.label;
                right.onclick = table[i].right.onclick;
                row.appendChild(right);
            }
            listDom.appendChild(row);
        }
        el.appendChild(listDom);
        // el.innerHTML = _html
    }
}