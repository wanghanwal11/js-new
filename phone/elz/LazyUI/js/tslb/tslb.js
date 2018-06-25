lazy.plugins.tslb = {
    "init" : function(el,data) {
       
        var table = lazy.creat("div", "table");
        var top = lazy.creat("div","top");
        var  _str = ''
             _str += '<div class="ub title">'+(data.title)+'</div>'
             _str += '<div class="ub time">'
             _str += '<div class="date">'+(data.date)+'</div>'
             _str += '<div class="t">'+(data.t)+'</div>'
             _str += '</div>'
             _str += '<div class="content">'+(data.content)+'</div>'
        top.innerHTML = _str; 
        table.appendChild(top);
        
        var mid = lazy.creat("div","top");
        var  _str = ''
             _str += '<div class="ub title">'+(data.title2)+'</div>'
             _str += '<div class="ub time">'
             _str += '<div class="date">'+(data.date)+'</div>'
             _str += '<div class="t">'+(data.t)+'</div>'
             _str += '</div>'
             _str += '<div class="content"><img src='+(data.tp1)+'></div>'
        mid.innerHTML = _str; 
        table.appendChild(mid);
        
        var foot = lazy.creat("div","top");
        var  _str = ''
             _str += '<div class="ub title">'+(data.title3)+'</div>'
             _str += '<div class="ub time">'
             _str += '<div class="date">'+(data.date)+'</div>'
             _str += '<div class="t">'+(data.t)+'</div>'
             _str += '</div>'
             _str += '<div class="content"><img src='+(data.tp2)+'></div>'
        foot.innerHTML = _str; 
        table.appendChild(foot);
        
        
        
        
        el.appendChild(table);
}
}
