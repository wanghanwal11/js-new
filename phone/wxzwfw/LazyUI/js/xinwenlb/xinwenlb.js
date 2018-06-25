lazy.plugins.xinwenlb = {
    "init" : function(el,data) {
       
        var table = lazy.creat("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.creat("div", "tr ub ub-ver");
            if(obj.zw == 1){
                var tr_zw = lazy.creat("div","trzw ub"); 
                tr.appendChild(tr_zw);
            }
            
            var tr1 = lazy.creat("a", "tr1 ub");
            var _html = '';
            _html += ' <div class="icon" style="background-image:url(\''+obj.icon+'\')"></div>';
            
            _html += ' <div class="h ub-f1">';
            _html += '     <div class="h1"><span>'+slhfun(obj.h1?obj.h1:"")+'</span></div>';
            _html += '     <div class="yp ub">';
            _html += '        <div class="ub-f1"><div class="ub">';
            _html += '          <div class="yue"><span class="span1">'+(obj.yue?obj.yue:0)+'</span></div>';
            _html += (obj.ping!=null)?'          <div class="ping"><span class="span1">'+(obj.ping?obj.ping:0)+'</span></div>':'';
            _html += '        </div></div>'
            var str=obj.user?obj.user:"";
            if(str!=""){
                   if(str.length>5){
                   str=str.substring(0,5)+"...";
                }
            }            
            var date=obj.date?obj.date:""
            if(obj.date=="" || obj.date.indexOf("Na")>-1){
                date="";
            }
            _html += '        <div class="text"><span class="span1">'+(str?str:"")+'&nbsp;&nbsp;'+(date?date:"")+'</span></div>';
    
            
            _html += '     </div>';
            _html += ' </div>';
            tr1.innerHTML = _html; 
            tr1.onclick = function() {
               
                if(obj.onclick)
                obj.onclick(obj);
            } 
            tr.appendChild(tr1);
            
            table.appendChild(tr);
            
        }
        function slhfun(str) {
            var len = lazy.getStringByteLength(str) / 2 * lazy.fontSize;
            var len2 = (document.body.clientWidth - (6.75 + 5) * lazy.fontSize) * 2;
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
