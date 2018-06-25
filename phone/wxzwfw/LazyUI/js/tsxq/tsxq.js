lazy.plugins.tsxq = {
    "init" : function(el,data) {
       
        var table = lazy.creat("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
        	
            var tr = lazy.creat("div", "tr ub ub-ver");
            
            var tr1 = lazy.creat("div", "tr1 ub");
            tr1.innerHTML = '<div class="content"><span>'+(obj.content)+'</span></div>';
            
            var tr2 = lazy.creat("div", "tr1 ub ub-ver");
            var tr2_innerHTML = '<div class="title ub"><span class="span3">图片</span></div>';
            var j = 0;
            
            for(var i = 0 ; i < obj.pic.length ; i++){
                if(j == 0){
                    tr2_innerHTML += '<div class="pic_line ub">';
                }
                tr2_innerHTML +='<div class="pic" style="background-image:url(\''+obj.pic[i]+'\')" index='+i+' src='+obj.pic[i]+'></div>';
                j++;
                if(j == 3){
                    tr2_innerHTML +='<div class="ub-f2"></div>';
                    tr2_innerHTML += '</div>';
                    j = 0;
                }
            }
            tr2.innerHTML = tr2_innerHTML;
            
            var tr3 = lazy.creat("div", "tr1 ub");
            tr3.innerHTML = '<span class="span3">'+(obj.addr)+'</span>';
            tr.appendChild(tr1);
            tr.appendChild(tr2);
            tr.appendChild(tr3);
            table.appendChild(tr);
            
            
            var list = table.getElementsByClassName("pic");
            for(var i = 0; i < list.length; i++) {
                if(obj.select){
                    list[i].onclick = function() {
                        obj.select(parseInt(this.getAttribute("index")),this.getAttribute("src"));
                    }
                }
            }
            
        }
        
        data.add = one;
        
        
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
