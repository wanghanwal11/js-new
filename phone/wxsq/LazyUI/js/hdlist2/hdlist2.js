lazy.plugins.hdlist2 = {
    "init" : function(el,data) {
       
        var table = lazy.create("div", "table box");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.create("div", "tr box box_v");
            if(obj.index%2==0){
                tr.style.marginRight = "4%"
            } 
            var pic = lazy.create("div","pic box");
            pic.style.backgroundImage = "url("+obj.picture+")";
            var title = lazy.create("div","title slh");
            title.innerHTML = "<span>"+obj.title+"</span>"
            var time = lazy.create("div","time box");
            time.innerHTML = "<span>"+obj.time+"</span>"
            
            tr.appendChild(pic);
            tr.appendChild(title);
            tr.appendChild(time);
            table.appendChild(tr);
            tr.onclick = function(){
                if(obj.onclick)
                obj.onclick(obj);
            }
            
        }
       
        data.add = one;
        
        data.clean = function() {
            table.innerHTML = '';
            if(document.getElementsByClassName("titlelb")[0])
                titlelb.remove();
        }
       
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
