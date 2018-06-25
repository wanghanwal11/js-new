lazy.plugins.wodesc = {
	"init" : function(el,data) {
        var table = lazy.creat("div","table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        function one(obj) {
            var tr = lazy.creat("div","wodesc");
            var _html = '';
            _html+='<div class="header">'
                _html+='<div class="h1">'
                    _html+='<div class="people"><span style="background:url('+obj.src+') no-repeat;background-size:cover"></span>'+obj.name+'</div><div class="time">'+obj.time+'</div>'
                _html+='</div>'
                _html+='<div class="h2">'
                    _html+='<div><img src='+obj.img+'>'+obj.title+'</div>'
                _html+='</div>'
            _html+='</div>'
            _html+='<div class="footer">'+obj.sorce+'</div>'
            tr.innerHTML = _html;
            table.appendChild(tr);
            if(obj.clk){obj.clk(tr,obj)}
        }
        el.appendChild(table);
        data.one=one;   
        data.clean = function() {
            table.innerHTML = '';
        }    
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
