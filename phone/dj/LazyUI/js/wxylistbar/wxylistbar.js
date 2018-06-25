lazy.plugins.wxylistbar = {
    "init" : function(el, data) {
       var rl = data.rl?"已认领":"未认领";
       var tr = lazy.creat("a","tr ub");
       var icon = lazy.creat("div","icon");
       icon.style.backgroundImage="url("+data.icon+")";
      // icon.innerHTML = '<div class="icontitle '+(data.rl?"":"hui")+'"><span>'+rl+'</span></div>';
       tr.appendChild(icon);
       var td = lazy.creat("div","td ub-f1 ub ub-ver");
       var _html = "";
       _html += '<div class="title slh"><span>'+(data.title?data.title:"")+'</span></div>';
       var arr = data.table?data.table:[];  
       _html += '<div class="hs">';
       for(var i = 0; i < arr.length; i++) {
           _html += '<div class="h slh"><span>'+arr[i]+'</span></div>';
       }
       _html += "</div>";
       td.innerHTML = _html;
       tr.appendChild(td);
       if(data.onclick) {
           tr.onclick = function() {
               data.onclick(data);
           }
       }
       el.appendChild(tr);
       
    },
    "edit" : function(parentElement, el, data) {

    }
}
