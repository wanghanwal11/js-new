lazy.plugins.invite = {
	"init" : function(el,data) {
	    var project = data.project;
	    if(project == "oa"){
    	    var topdiv = lazy.creat("div","top oa");
    	    var titlediv = lazy.creat("div","title");
	        titlediv.innerHTML = "e政务";
	        topdiv.appendChild(titlediv)
	    }else{
	        var topdiv = lazy.creat("div","top dj");
	        var titlediv = lazy.creat("div","title");
            titlediv.innerHTML = "e党建";
            topdiv.appendChild(titlediv)
	    }
	    el.appendChild(topdiv);
	    var centerdiv = lazy.creat("div","center");
	    var icondiv = getIcon(data.icon,data.h1);
	    centerdiv.appendChild(icondiv);
	    var h1div = lazy.creat("div","h1");
	    h1div.innerHTML = data.h1+"邀请你加入";
	    centerdiv.appendChild(h1div);
	    var h2div = lazy.creat("div","h2");
	    h2div.innerHTML = data.h2;
	    centerdiv.appendChild(h2div);
	    el.appendChild(centerdiv);
	    if(data.upload){
	        var bottomdiv = lazy.creat("div","bottom");
	        var imgdiv = lazy.creat("div","img");
	        bottomdiv.appendChild(imgdiv);
	        var textdiv = lazy.creat("div","h3");
	        textdiv.innerHTML = data.remind;
	        bottomdiv.appendChild(textdiv);
            el.appendChild(bottomdiv);
	        var buttondiv = lazy.creat("div","button");
	        if(project=="oa") buttondiv.innerHTML = "下载E政务";
	        else buttondiv.innerHTML = "下载E党建";
	        buttondiv.onclick = function(){
	            data.upload();
	        }
            el.appendChild(buttondiv);
	    }else if(data.register){
	        var bottomdiv = lazy.creat("div","bottom");
	        var typearr = data.inputtype?data.inputtype:[];
            var placeholderarr = data.placeholder?data.placeholder:[];
            for(var i = 0;i<typearr.length;i++){
                inputFun(i,typearr[i])
            }
	        var buttondiv = lazy.creat("div","button1");
            el.appendChild(bottomdiv);
            buttondiv.innerHTML = "立即加入";
            buttondiv.onclick = function(){
                var inputs = el.getElementsByTagName("input");
                var returnObj = [];
                for(var i=0;i<inputs.length;i++){
                    if(inputs[i].value==""){
                        lazy.alert2(inputs[i].getAttribute("placeholder")+"不能为空");
                        return;
                    }else{
                        returnObj.push(inputs[i].value)
                    }
                }
                if(data.back) data.back(returnObj)
            }
            el.appendChild(buttondiv);
	    }else{
    	    var bottomdiv = lazy.creat("div","bottom");
    	    var buttondiv = lazy.creat("div","button");
    	    buttondiv.innerHTML = "下一步";
    	    var typearr = data.inputtype?data.inputtype:[];
    	    var placeholderarr = data.placeholder?data.placeholder:[];
    	    for(var i = 0;i<typearr.length;i++){
    	        if(typearr[i]=="phone"){
    	            phoneFun(i);
    	        }else if(typearr[i]=="code"){
    	            codeFun(i)
    	        }else{
    	            inputFun(i)   
    	        }
    	    }
    	    el.appendChild(bottomdiv);
    	    buttondiv.onclick = function(){
    	        var inputs = el.getElementsByTagName("input");
    	        var returnObj = [];
    	        for(var i=0;i<inputs.length;i++){
	                if(inputs[i].value==""){
                        lazy.alert2(inputs[i].getAttribute("placeholder")+"不能为空");
                        return;
                    }else{
    	                returnObj.push(inputs[i].value)
                    }
    	        }
    	        if(data.back) data.back(returnObj)
    	    }
    	    el.appendChild(buttondiv);
	    }
	    function phoneFun(i){
	        var hangdiv = lazy.creat("div","hang");
	        //var tishidiv = lazy.creat("div","care");
	        var inputdiv = lazy.creat("div","inputdiv");
	        //tishidiv.innerHTML = "国际手机号请在号码前加上”+[国家码]“";
	        var input = lazy.creat("input","input phone");
	        input.setAttribute("index",i);
	        input.setAttribute("placeholder",placeholderarr[i]);
	        //hangdiv.appendChild(tishidiv);
	        inputdiv.appendChild(input);
	        hangdiv.appendChild(inputdiv);
	        bottomdiv.appendChild(hangdiv)
	    }
	    function codeFun(i){
	        var hangdiv = lazy.creat("div","hang");
	        var codediv = lazy.creat("div","codediv ub");
	        var leftdiv = lazy.creat("div","codeleft ub-f1");
	        var input = lazy.creat("input","codeinput");
            input.setAttribute("index",i);
            input.setAttribute("placeholder",placeholderarr[i]);
            leftdiv.appendChild(input);
            codediv.appendChild(leftdiv);
	        var rightdiv = lazy.creat("div","coderight ub-f1");
	        rightdiv.innerHTML = "获取验证码"//getCodeFun();
	        rightdiv.onclick = function(){
	            var phonevalue = el.getElementsByClassName("phone")[0].value;
	            if(phonevalue==""){
	                lazy.alert2("手机号码不能为空");
	                return;
	            }
	            data.getCode(phonevalue);
	            //this.innerHTML = getCodeFun();
	        }
	        codediv.appendChild(rightdiv);
            hangdiv.appendChild(codediv);
            bottomdiv.appendChild(hangdiv)
	    }
	    function inputFun(i,type){
	        var hangdiv = lazy.creat("div","hang");
	        var inputdiv = lazy.creat("div","inputdiv");
	        var input = lazy.creat("input","input");
            input.setAttribute("index",i);
            input.setAttribute("placeholder",placeholderarr[i]);
            if(type&&type=="password") input.setAttribute("type","password");
            inputdiv.appendChild(input);
            hangdiv.appendChild(inputdiv);
            bottomdiv.appendChild(hangdiv)
	    }
	    function getIcon(path,h1) {
             var img = new Image();
             img.src = path;
             var icon = lazy.creat("div","icon");
             var waiimg = lazy.creat("div","waiimg");
             img.onerror = function() {
                 var neiimg = lazy.creat("div","neiimg moren");
                 waiimg.appendChild(neiimg);
                 icon.appendChild(waiimg);
             }
             img.onload = function() {
                 var neiimg = lazy.creat("div","neiimg");
                 neiimg.style.backgroundImage = "url("+path+")";
                 waiimg.appendChild(neiimg);
                 icon.appendChild(waiimg);
             }
             return icon;
         }
         function getCodeFun(){
             var code = "";
             // var codelength = 6;
             var arr = [0,1,2,3,4,5,6,7,8,9];
             for(var i = 0;i<6;i++){
                 code += arr[parseInt(Math.random()*10)]+"";
             }
             return code;
         }
         data.cleanCode = function(){
             var coderight = el.getElementsByClassName("coderight")[0];
             coderight.innerHTML = "59秒后点击";
             coderight.onclick = null;
             var i = 59;
             setInterval(function(){
                 if(i<=0){
                     coderight.innerHTML = "获取验证码";
                     coderight.onclick = function(){
                         var phonevalue = el.getElementsByClassName("phone")[0].value;
                         if(phonevalue==""){
                            lazy.alert2("手机号码不能为空");
                            return;
                         }
                         data.getCode(phonevalue);
                         clearInterval();
                     }
                 }else{
                     i--;
                     coderight.innerHTML = i+"秒后点击";
                 }
             },1000)
             // var i = 60;
             // setTimeout(function(){
                 // alert(1)
                 // alert(coderight)
                 // coderight.innerHTML = i+"秒后获取验证码";
                 // i--;
                 // coderight.onclick = function(){};
                 // if(i==0) {
                     // coderight.innerHTML = "获取验证码";
                     // coderight.onclick = function(){
                         
                     // };
                 // }
             // },600000)
         }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
