lazy.plugins.navbar = {
    "init" : function(el,data) {
        var n = (data.index==undefined)?-1:data.index, x = 0;
        var _html = '<div class="uldiv box"></div>';
        
        el.innerHTML = _html;
        var ul = el.getElementsByClassName("uldiv")[0];
        lazy.for(data.list, function(obj, i) {
            one(obj, i)
        });
        function one(obj, i) {
            var li = lazy.create('div',"box_f1 li "+(n==i?"li_c":""));
            li.innerHTML = '<span>'+obj.title+'</span>';
            li.onclick = function() {
                el.getElementsByClassName("li_c")[0].className = 'box_f1 li';
                li.className = 'box_f1 li li_c';
                obj.onclick(obj);
            }
            ul.appendChild(li);
        }
       data.initN = function(n){
           el.getElementsByClassName("li_c")[0].className = 'box_f1 li';
           el.getElementsByClassName("li")[n].className = 'box_f1 li li_c';
       }
    }
}