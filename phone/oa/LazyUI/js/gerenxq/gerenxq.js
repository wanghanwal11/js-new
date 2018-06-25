lazy.plugins.gerenxq = {
	"init" : function(el,data) {
        var arr = data.table?data.table:[];
        var _html = '<div class="title"><span>'+data.title+'</span></div>';
        for(var i = 0; i < arr.length; i++) {
            _html += '<div class="tr ub">';
            _html += '  <div class="ub-f1">';
            _html += '      <div class="h1"><span>'+arr[i].h1+'</span></div>';
            _html += '      <div class="h2"><span>'+arr[i].h2+'</span></div>';
            _html += '  </div>';
            if(arr[i].type && arr[i].type=="phone") {
              _html += '  <a class="phone" num="'+arr[i].h1+'"></a>';  
            }
            _html += '</div>';
        }
        el.innerHTML = _html;
        el.getElementsByClassName("phone")[0].onclick = function() {
            var num = this.getAttribute("num");
            lazy.isAppcan(function(){
                uexCall.dial(num);
            },function(type){
                lazy.Call(type,num);
            })
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
