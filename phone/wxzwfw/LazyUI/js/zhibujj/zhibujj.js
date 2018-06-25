lazy.plugins.zhibujj = {
    "init" : function(el,data) {
        var table = lazy.creat("div", "table");
        var headtop = lazy.creat("div","headtop");
       
        var txicon = lazy.creat("div","txicon ub");
        var info = lazy.creat("div","info");
         var ospan=lazy.creat("span"); 
        var alink=lazy.creat("a","alink");
        alink.style.border="soild 1px #fff";
        
     
        var str1 =data.info;
        ospan.innerHTML=str1.substring(0,40); 
        alink.innerHTML=str1.length>40?"...":""; 
        alink.onclick=function(){ 
        if(alink.innerHTML=="..."){ 
            alink.innerHTML="收起"; 
            ospan.innerHTML=str1; 
          }else{ 
            alink.innerHTML="..."; 
            ospan.innerHTML=str1.substring(0,40); 
       } 
     }      
       info.appendChild(ospan);
       info.appendChild(alink);
       
        
        headtop.appendChild(txicon);
        headtop.appendChild(info);
        table.appendChild(headtop);
        
        var ban = lazy.creat("div","banner");
        var _b = '';
         _b += '<div class="zbinfo ub">';
        _b += '<div class="p_fist">本周全区排名&nbsp;第<span>'+(data.num1?data.num1:"3")+'</span>名&nbsp;</div><span class="slipt"></span>&nbsp;<div class="p_two">支部总积分&nbsp;共<span>'+(data.num2?data.num2:"386")+'</span>积分</div>';
        _b += '</div>';
        ban.innerHTML = _b;
        table.appendChild(ban);
        
        
        
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.creat("div", "tr ub ub-ver");
            var tr1 = lazy.creat("div","tr");
            
            var _html = '';
            _html = '<div class="title"><span></span>'+(obj.title)+'</div>'
            _html += '<div class="list">'
            for(var i=0;i<obj.content.length;i++){
               
                _html += '<div class="kuai">';
                _html += '<div class="picon" style="background:url('+obj.content[i].people+')"></div>';
                _html += '<span>'+(obj.content[i].name)+'</span>';
                _html += '</div>';
               
                tr1.innerHTML = _html; 
                
            }
            _html += '</div>';
            
           
           
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
        
        
    }
}
