lazy.plugins.table9 = {
	"init" : function(el,data) {
        var url = lazy.url+'LazyUI/js/table9/images/';
        var trlen = parseInt(data.table.length / 4) + 1;//行数
		var _html = '';
        _html += '<div class="lz_tabel">';
        for(var i = 0; i < trlen; i++) {
            _html += '<div class="lz_tr ub">';
            for(var j = 0; j < 3; j++) {
                var n = i*3 + j;
                var obj = data.table[n]?data.table[n]:{"icon":"","label":""};
                var icon = obj.icon!=""?(obj.icon.indexOf('/')!=-1?obj.icon:(url+obj.icon)):"";
                _html += '<a onclick="table9_select('+n+')" href="javascript:;" class="lz_td ub-f1">';
                _html += '<div class="lz_icon" style="background-image: url('+icon+')"></div>';
                _html += '<div class="lz_label"><span>'+obj.label+'</span></div>';
                _html += '</a>';
            }
            _html += '</div>';
        }
        _html += '</div>';
        el.innerHTML = _html;
        window.table9_select = function(n) {
            if(data.select)data.select(n, data);
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
