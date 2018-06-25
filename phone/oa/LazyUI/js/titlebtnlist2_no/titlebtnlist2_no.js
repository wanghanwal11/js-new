lazy.plugins.titlebtnlist2_no = {
	"init" : function(el, data){
	     el.style.width = document.body.clientWidth + "px";
         var table = lazy.creat("div","table");
         var arr = data.table?data.table:[];
         var bi = -1;//颜色下标
         for(var i = 0; i < arr.length; i++) {
             add(arr[i]); 
         }
         function add(obj) {
            bi++;
            var tr = lazy.creat("a","tr ub");
            var td = lazy.creat("a","td ub-f1");
            var _html = '';
            _html += '<div class="td1 ub">';
            _html += '  <div class="h1 slh ub-f1"><span>'+obj.h1+'</span></div><div class="h3"><span>'+(obj.h3?obj.h3:"")+'</span></div>';
            _html += '</div>';
            _html += '<div class="td2 ub">';
            _html += '  <div class="h2 slh ub-f1"><span>'+(obj.h2?obj.h2:"")+'</span></div><div class="point"></div>';  
            _html += '</div>';
            td.innerHTML = _html;
            tr.appendChild(td);
            if(obj.onclick) {
                tr.onclick = function() {
                    obj.onclick(obj)
                }
            }
            table.appendChild(tr);
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