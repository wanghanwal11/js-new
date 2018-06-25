lazy.plugins.sousuoinput_move = {
	"init" : function(el,data) {
        var tr = lazy.create("div","tr box");
        var td = lazy.create("div","td box_f1 box");
        var icon = lazy.create("div","icon");
        var inputdiv =  lazy.create("div","inputdiv");
        var input = lazy.create("input","input", {"type" : "search"});
        input.placeholder = "搜索内容"
        inputdiv.appendChild(input);
        td.appendChild(icon);
        td.appendChild(inputdiv);
        var qx = lazy.create("div","qx");
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
            data.select(val);
        }
        /*
        if(lazy.browserType != "ios" && lazy.browserType != "vitoios" ) {
            input.onkeyup = function() {
                 if(val != this.value) {
                     val = this.value;
                     data.select(val);
                 }
             }
        }*/
       if(input.onsearch) {
           input.onsearch=function(){
                 if(val != this.value) {
                     val = this.value;
                     data.select(val);
                 }
             };
       }else {
           input.onkeyup = function() {
             if(val != this.value) {
                 val = this.value;
                 data.select(val);
             }
            }
       }
		 
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
