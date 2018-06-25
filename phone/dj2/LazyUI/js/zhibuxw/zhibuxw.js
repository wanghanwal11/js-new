lazy.plugins.zhibuxw = {
    "init" : function(el,data) {
        var table = lazy.creat("div", "table");
       
            var tinfo = lazy.creat("div","title");
            var _html = '';
                _html += '<div class="ub">';
                _html += '<div class="tlf ub-f1" style="background:url('+(data.icon)+') 0.1rem center no-repeat;background-size:1.8rem;padding-left:2rem;">'+(data.tlf)+'</div>';
                _html += '<div class="ridt">'+(data.ridt)+'</div>';
                _html +='</div>'
        tinfo.innerHTML=_html;

        el.appendChild(tinfo);  
        tinfo.onclick = function() {
            if(data.onclick)
            data.onclick(data);
        }
    }
}
