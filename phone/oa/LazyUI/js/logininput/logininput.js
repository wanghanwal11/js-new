lazy.plugins.logininput = {
	"init" : function(el,data) {
	    var tr1 = lazy.creat("div","tr tr1");
	    var input1 = lazy.creat("input","input",{
	        "placeholder" : "请输入帐号"
	    });
	    tr1.appendChild(input1);
	    var tr2 = lazy.creat("div","tr tr2");
	    var input2 = lazy.creat("input","input",{
            "placeholder" : "密码",
            "type" : "password"
        });
        tr2.appendChild(input2);
	    el.appendChild(tr1);
	    el.appendChild(tr2);
	    data.getValue = function() {
	        return [input1.value , input2.value];
	    }
	    data.clean = function() {
	        input2.value = "";
	    }
	 },
	"edit" : function(parentElement,el,data) {
		
	}
}
