lazy.plugins.inboxxq = {
    "init" : function(el,data) {
        var table = lazy.creat("div", "table");
        //第一个数组内容
        var top = lazy.creat("div","top");
        //var icon = lazy.arcIcon(data.icon,"1.5rem");
        var _html = '';
            _html += '<div class="h">';
            _html += '<div class="str1 ub">';
            _html += '<div class="d ub-f1"><span>'+(data.moneyinfo?data.moneyinfo:"")+'</span></div>';
            _html += '<div class="date"><span class="span1">'+(data.date?data.date:"")+'</span><span class="span1">'+(data.time?data.time:"")+'</span></div>';
            _html += '</div>';
            _html += '<div class="str2 ub">';//lazy.arcIcon
            _html += '<div class="ub"><span class="icon"><img src='+(data.icon)+'></span><span class="name span1">'+(data.name?data.name:"")+'</span></div>';
            _html += '</div>';
            _html += '</div>';
            _html += '<div class="boxcontent">'+(data.boxcontent)+'</div>';
       top.innerHTML = _html; 
       table.appendChild(top);
     
       //第二个数组内容
       var content = lazy.creat("div","content");
            var _str = '';
            _str += '<div class="tup">';
            _str += '<div style="margin-bottom:0.5rem"><span style="color:#aaaaaa;padding-left:1rem">'+(data.type1)+'</span></div>'
            _str += '<div class="tp">'
           
            if(data.tp.length>0){
            for(var i=0;i<data.tp.length;i++){
                 _str += '<img class="a" type='+data.tp[i].tplist+' index='+i+' src='+lazy.getImagePx(data.tp[i].tplist, 80, 60)+'>'
            
            
            }
            }
             
            _str += '</div>'
            
            _str += '</div>'
           
           
       content.innerHTML = _str; 
       table.appendChild(content);
       el.appendChild(table);
        var list = el.getElementsByClassName("a");
            // console.log(list);
            // alert(list.length)
            for(var i = 0; i < list.length; i++) {
                if(data.select){
                    list[i].onclick = function() {
                        data.select(parseInt(this.getAttribute("index")),this.getAttribute("src"));
                    }
                }
            }
    }
}
