lazy.plugins.alertinput = {
	"init" : function(el,data) {
	    el.className = "alertinput";
        var _html = '';
        _html += '<div class="mask ub ub-ver">';
        _html += '<div class="ub-f1"></div>';
        _html += '<div class="center">';
        _html += '  <div class="centerdiv">';
        _html += '      <div class="title"><span>'+data.title+'</span></div>';
        _html += '      <div class="tr ub">';
        if(data.icon)
        _html += '          <div class="icon" style="background-image:url('+data.icon+')"></div>';
        _html += '          <div class="td ub-f1"><input placeholder="请输入" value="'+(data.value?data.value:"")+'" class="input" type="text" /></div>';
        _html += '      </div>';
        _html += '      <div class="btns ub">';
        _html += '          <a class="quxiao btn ub-f1"><span>取消</span></a>';
        _html += '          <div style="width:0.5rem; height:100%;"></div>';
        _html += '          <a class="queding btn ub-f1"><span>确定</span></a>';
        _html += '      </div>';
        _html += '  </div>';
        _html += '</div>';
        _html += '<div class="ub-f1"></div>';
        _html += '</div>';
        el.innerHTML = _html;
	    document.body.appendChild(el);
	    
	    var input = el.getElementsByClassName("input")[0];
	    var queding = el.getElementsByClassName("queding")[0];
	    var quxiao = el.getElementsByClassName("quxiao")[0];
	    queding.onclick = function() {
	        var str = input.value;
	        input.value = "";
	        el.style.display = "none";
	        data.select("确定", str);
	        
	    }
	    quxiao.onclick = function() {
	        var str = input.value;
	        input.value = "";
	        el.style.display = "none";
            data.select("取消", str);
        }
        data.show = function(value) {
            if(value)input.value = value;
            el.style.display = "block";
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
