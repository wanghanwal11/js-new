lazy.plugins.commentsend = {
	"init" : function(el,data) {
	    var commentsend_zw = lazy.creat("div","commentsend_zw");
	    document.body.appendChild(commentsend_zw);
	    var w = data.width?data.width:parseInt(document.body.clientWidth - 2.5*lazy.fontSize);
	    var tr = lazy.creat("div","tr ub");
        var inputdiv = lazy.creat("div","inputdiv ub-f1");
        var input = lazy.creat("textarea","input");
        inputdiv.appendChild(input);
        var button = lazy.creat("a","button");
        button.innerHTML = '<span>评论</span>';
        button.onclick = function() {
            var str = input.value;
            if(str=="") {
                lazy.alert1("内容不能为空");
            }else {
                data.onclick(str);
                input.value = "";
            }
        }
        tr.appendChild(inputdiv);
        tr.appendChild(button);
        el.appendChild(tr);
        var nn = 0;
        var nn2 = 0;
        var hang = 0;
        input.onfocus = function() {
            document.body.scrollTop = document.body.scrollHeight; 
        }
        input.onkeyup = function() {
            var str = input.value;
            var narr = str.match(/\n/g);
            if(!narr) {
                nn = 0;
            }else if(narr && nn!=narr.length) {
                nn = narr.length;
            }
            //
            var nn2 = 0;
            lazy.for(str.split(/\n/), function(val) {
                var lenpx = (lazy.getStringByteLength(val) - 1) / 2 * 1.3 * lazy.fontSize;
                nn2 += parseInt(lenpx / w);
            }) 
            //
            hang = nn2 + nn;
            input.style.height = (hang>2?5:hang+2) + "rem";
            document.body.scrollTop = document.body.scrollHeight; 
        }
        
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
