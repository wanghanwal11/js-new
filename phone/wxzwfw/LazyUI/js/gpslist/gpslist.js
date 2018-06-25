lazy.plugins.gpslist = {
    "init" : function(el,data) {
       
        var table = lazy.creat("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.creat("div", "tr ub");
            
            var tr1 = lazy.creat("a", "tr1 ub-f1");
            var _html = '';
            
            _html += '<div class="title"><span>'+slhfun(obj.title?obj.title:"")+'</span></div>';
            if(obj.content){
                _html += '<div class="content"><span>'+slhfun(obj.content?obj.content:"")+'</span></div>'
            }
            
            
            tr1.innerHTML = _html; 
            
            tr.appendChild(tr1);
            
            var tr2= lazy.creat("div", "gou ub");
            tr.appendChild(tr2);
            tr2.style.display='none';
            tr1.onclick = function() {
                if(obj.onclick)
                obj.onclick(obj,tr1,tr2);
            } 
            table.appendChild(tr);
            
        }
        function slhfun(str) {
            var len = lazy.getStringByteLength(str) / 2 * lazy.fontSize;
            var len2 = (document.body.clientWidth - (6.75 + 6) * lazy.fontSize) * 2;
            if(len > len2) {
                str = str.substring(0, parseInt(len2/lazy.fontSize)) + "...";
            }
            return str;
        }
        function add_title(name){
             var titlelb = lazy.creat("div", "titlelb");
             titlelb.innerHTML=name;
             table.appendChild(titlelb);
        }
        data.add_title = add_title;
        data.add = one;
        
        data.clean = function() {
            table.innerHTML = '';
            if(document.getElementsByClassName("titlelb")[0])
                titlelb.remove();
        }
        data.clean2 = function(i) {
            table.innerHTML = '';
            var titlelb = document.getElementsByClassName("titlelb")[i];
            if(titlelb)
                titlelb.remove();
        }
        data.appto=function(){
            var titlelb=document.getElementsByClassName("titlelb")[0];
            el.insertBefore(titlelb,table);
        }
        data.appto2=function(i){
            var titlelb=document.getElementsByClassName("titlelb")[i];
            var table=document.getElementsByClassName("table")[i];
            el.insertBefore(table,titlelb);
        }
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
