lazy.plugins.sousuoinput_move = {
	"init" : function(el,data) {
        var tr = lazy.creat("div","tr ub");
        var td = lazy.creat("div","td ub-f1 ub");
        var icon = lazy.creat("div","icon");
        var inputdiv =  lazy.creat("div","inputdiv");
        var input = lazy.creat("input","input", {"type" : "search"});
        input.placeholder = "搜索内容"
        inputdiv.appendChild(input);
        td.appendChild(icon);
        td.appendChild(inputdiv);
        var qx = lazy.creat("div","qx");
        qx.innerHTML = '<span>取消</span>';
        tr.appendChild(td);
        tr.appendChild(qx);
        el.appendChild(tr);
        td.onclick = function() {
            icon.style.width = '1.2rem';
            td.style.backgroundColor = '#fff';
            qx.style.display = "block";
            input.focus();
        }
        var val = '';
        qx.onclick = function() {
            icon.style.width = '50%';
            td.style.backgroundColor = '#e0e0e0';
            qx.style.display = "none";
            input.blur();
            input.value = "";
            val = "";
            data.select();
        }
        if(lazy.browserType != "ios" && lazy.browserType != "vitoios" ) {
            input.onkeyup = function() {
                 if(val != this.value) {
                     val = this.value;
                     data.select(val);
                 }
             }
        }
		 input.onsearch=function(){
		     if(val != this.value) {
                 val = this.value;
                 data.select(val);
             }
		 };
		 data.clean = function(){
		     icon.style.width = '50%';
             td.style.backgroundColor = '#e0e0e0';
             qx.style.display = "none";
             input.blur();
             input.value = "";
             val = "";
		 }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
