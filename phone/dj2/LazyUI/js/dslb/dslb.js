lazy.plugins.dslb = {
    "init" : function(el,data) {
       
        var table = lazy.creat("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.creat("div", "tr box box_v");
            var h1 = lazy.creat("div", "h1");
            h1.innerHTML = '<span>'+obj.h1+'</span>';
            var date = lazy.creat("div","date");
            date.innerHTML = '<span>'+obj.date+'</span>';
            var content = lazy.creat("div", "content");
            content.innerHTML = '<span>'+slhfun(obj.content)+'</span>';
            tr.appendChild(h1);
            tr.appendChild(date);
            tr.appendChild(content);
            tr.onclick = function() {
                if(obj.onclick)
                obj.onclick(obj);
            } 
            
            table.appendChild(tr);
            
        }
        function slhfun(str) {
            var len = lazy.getStringByteLength(str) / 2 * lazy.fontSize;
            var len2 = (document.body.clientWidth - 2* lazy.fontSize) * 2;
            if(len > len2) {
                str = str.substring(0, parseInt(len2/(lazy.fontSize*0.8))) + "...";
            }
            return str;
        }
        data.add = one;
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
