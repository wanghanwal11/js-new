lazy.plugins.tsxq = {
    "init" : function(el,data) {
       
        var table = lazy.create("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
        	
            var tr = lazy.create("div", "tr box box_v");
            
            var tr1 = lazy.create("div", "tr1 box");
            tr1.innerHTML = '<div class="content"><span>'+(obj.content)+'</span></div>';
            
            var tr2 = lazy.creat("div", "tr1 box box_v");
            var tr2_innerHTML = '<div class="title box"><span class="span3">附件</span></div>';
            var j = 0;
            
            for(var i = 0 ; i < obj.pic.length ; i++){
                if(j == 0){
                    tr2_innerHTML += '<div class="pic_line box">';
                }
                tr2_innerHTML +='<div class="pic" style="background-image:url(\''+obj.pic[i]+'\')" index='+i+' src='+obj.pic[i]+'></div>';
                j++;
                if(j == 3){
                    tr2_innerHTML +='<div class="box_f2"></div>';
                    tr2_innerHTML += '</div>';
                    j = 0;
                }
            }
            tr2.innerHTML = tr2_innerHTML;
            
            var tr3 = lazy.creat("div", "tr1 box");
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
