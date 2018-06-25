lazy.plugins.gywm = {
    "init" : function(el,data) {
        var table = lazy.creat("div", "table");
        var banner = lazy.creat("div", "banner");
        var tu = lazy.creat("div","tu");
        banner.appendChild(tu);
        var tr = lazy.creat("div", "content ub");
        var tr1 = lazy.creat("a", "row1 ub");
        var _html='';
        _html +='<div class="ub-f1"><span>版本号</span></div>';
        _html +='<div><span>'+(data.version?data.version:"1.0.0.11")+'</span></div>';
        var _html1='';
        _html1 +='<div class="ub-f1"><span>公司简介</span></div>';
        _html1 +='<div class="left arrow_r"></div>';
        var _html2='';
        _html2 +='<div class="footer"><span>北京北科维拓科技有限公司</span></div>';
        tr.innerHTML=_html;
        tr1.innerHTML=_html1;
        table.innerHTML=_html2;
        table.appendChild(banner);
        table.appendChild(tr);
        table.appendChild(tr1);
        
        el.appendChild(table);
        tr1.onclick = function() {
              
               
                if(data.onclick)
                data.onclick(data);
             }
            
        }
       
}


