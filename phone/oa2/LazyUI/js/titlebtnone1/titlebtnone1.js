lazy.plugins.titlebtnone1 = {
	"init" : function(el, data){
        var tr = lazy.creat("a","tr ub");
        var icon = lazy.creat("div","icon");
        icon.innerHTML = '<div class="iconimg" style="background-color:'+data.color+';background-image:url('+data.icon+')"></div>'
        var td = lazy.creat("a","td ub-f1");
        var _html = '';
        _html += '<div class="h1 slh"><span>'+(data.h1?data.h1:"")+'</span></div>';
        _html += '<div class="h2 slh"><span>'+(data.h2?data.h2:"")+'</span></div>';
        td.innerHTML = _html;
        var jian = lazy.creat("div","jian");
        tr.appendChild(icon);
        tr.appendChild(td);
        tr.appendChild(jian);
        el.appendChild(tr);
        if(data.onclick) {
            tr.onclick = function() {
                data.onclick(data);
            }
        }
    },
    "edit" : function(parentEl, el, data){
        
    }
}