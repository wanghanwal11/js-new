lazy.plugins.jym = {
	"init" : function(el,data) {
		el.innerHTML = '<div class="title"><span>手机号码</span></div>';
		var inputdiv = lazy.creat("div","inputdiv ub-f1");
		var input = lazy.creat("input","input",{"placeholder":"输入手机号码","type":"text"});
		input.onfocus = function() {
		    this.type='number';
		}
		input.onblur = function() {
            this.type='text';
        }
		inputdiv.appendChild(input);
		var button = lazy.creat("div","button");
		button.innerHTML = "<span>获取验证码</span>";
		el.appendChild(inputdiv);
		el.appendChild(button);
        var one = true;
        var t = null;
        var s = 60;
        button.onclick = function() {
            if(input.value=="") {
                alert("手机号不能为空！");
                return;
            }
            if(one) {
                if(data.onclick)data.onclick(input.value);
                one = false;
                button.className = "button button1";
                button.innerHTML = "<span>("+s+"s)验证码</span>";
                t = setInterval(function() {
                    if(s <= 0) {
                        s = 60;
                        one = true;
                        button.className = "button";
                        button.innerHTML = "<span>获取验证码</span>";
                        clearInterval(t);
                    }else {
                        s--;
                        button.innerHTML = "<span>("+s+"s)验证码</span>";
                    }
                    
                },1000);
            }
        }
        data.getValue = function() {
            return input.value;
        }
        data.clear = function() {
            input.value = "";
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
