lazy.plugins.titlebtnlist_radio = {
	"init" : function(el, data){
         var table = lazy.creat("div","table");
         var arr = data.table?data.table:[];
         for(var i = 0; i < arr.length; i++) {
             add(arr[i]); 
         }
         function add(obj) {
            var tr = lazy.creat("a","tr ub");
            var icon = lazy.creat("div","icon");
            if(obj.point) {
                icon.innerHTML = '<i class="iconi"></i>';
            }
            var td1 = lazy.creat("a","td1 ub-f1");
            var _html = '';
            _html += '<div class="h1 slh"><span>'+(obj.h1?obj.h1:"")+'</span></div>';
            _html += '<div class="h2 slh"><span>'+(obj.h2?obj.h2:"")+'</span></div>';  
            td1.innerHTML = _html;
            var td2 = lazy.creat("div","td2");
            if(obj.radio) {
                var td2i;
                var qiu;
                if(obj.radio == "off") {
                   td2i = lazy.creat("i","td2i td2i_off");
                   qiu = lazy.creat("div","qiu qiu_off"); 
                }else {
                   td2i = lazy.creat("i","td2i");
                   qiu = lazy.creat("div","qiu"); 
                }
                td2.appendChild(td2i);
                td2.appendChild(qiu);
                td2.onclick = function () {
                    onoff(qiu,td2i,obj);
                }
            }
            tr.appendChild(icon);
            tr.appendChild(td1);
            tr.appendChild(td2);
            
            if(obj.onclick) {
                td1.onclick = function() {
                    obj.onclick(obj)
                }
            }
            table.appendChild(tr);
         }
         function onoff(qiu,td2i,obj) {
             if(qiu.className.indexOf("qiu_off")!=-1) {
                 qiu.className = "qiu";
                 td2i.className = "td2i";
                 obj.radio = "on";
                 obj.onchange("on",obj);
             }else {
                 qiu.className = "qiu qiu_off";
                 td2i.className = "td2i td2i_off";
                 obj.radio = "off";
                 obj.onchange("off",obj);
             }
             
         }
         el.appendChild(table);
         
         data.add = add;
         //清除方法
         data.clean = function() {
            table.innerHTML = "";
         }
    },
    "edit" : function(parentEl, el, data){
        
    }
}