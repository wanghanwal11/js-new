lazy.plugins.headerbutton = {
	"init" : function(el,data) {
        var tr = lazy.creat("div", "tr ub");
	    var arr = data.table?data.table:[];
        for(var i = 0; i < arr.length; i++) {
            one(arr[i]);
        }
        function one(obj) {
            //120*120 105*105
            var td = lazy.creat("div", "td ub-f1");
            var _html = '';
            _html += '<div class="icon" style="background-image:url('+obj.icon+');">';
            if(obj.point) {
                _html += '  <div class="point"><span>'+obj.point+'</span></div>';
            }else {
                _html += '  <div class="point hide"></div>';
            }
            _html += '</div>';
            _html += '<div class="title"><span>'+obj.title+'</span></div>';
            td.innerHTML = _html;
            tr.appendChild(td);
            
            if(obj.onclick) {
                td.onclick = function() {
                    obj.onclick();
                }
            }
        }
        el.appendChild(tr);
        //添加小点
         data.setPoint = function(i,num) {
             var td = el.getElementsByClassName("td")[i];
             if(td) {
                 var point = td.getElementsByClassName("point")[0];
                 if(!num || num==0) {
                     point.className = "point hide";
                  }else {
                     point.className = "point";
                     point.innerHTML = '<span>'+num+'</span>';
                 }
             }
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
