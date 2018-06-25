lazy.plugins.commentbox = {
	"init" : function(el,data) {
	    var zw = lazy.creat("div", "commentboxzw");
	    var zw2 = lazy.creat("div", "commentboxzw2");
	    document.body.appendChild(zw);
	    document.body.appendChild(zw2);
	    if(!data.send) {
    	    //显示
            var showdiv = lazy.creat("div", "showdiv ub");
            var pingtitle = lazy.creat("a", "pingtitle ub-f1");
            pingtitle.innerHTML = '<span>我来说两句...</span>';
            pingtitle.onclick = function() {
                if(data.pingclick)data.pingclick();
            }
            var btn3 = lazy.creat("div", "btn");
            btn3.appendChild(iconbtn1("shoubtn",data.shou));
            btn3.onclick = function() {
                if(data.shouclick)data.shouclick();
            }
            var btn1 = lazy.creat("div", "btn quan");
            btn1.appendChild(iconbtn_ping("pingbtn",data.ping));
            btn1.onclick = function() {
                if(data.pingclick)data.pingclick();
            }
            var btn2 = lazy.creat("div", "btn");
            btn2.appendChild(iconbtn("fenbtn",data.fen));
            btn2.onclick = function() {
                if(data.fenclick)data.fenclick();
            }
            showdiv.appendChild(pingtitle);
            if(data.shou!=null)showdiv.appendChild(btn3);
            if(data.ping!=null)showdiv.appendChild(btn1);
            if(data.fen!=null)showdiv.appendChild(btn2);
            
            el.appendChild(showdiv);
            
            function iconbtn_ping(name, val) {
                var iconbtn = lazy.creat("a", "iconbtn ub");
                iconbtn.innerHTML = '<div class="ub-f1"></div><div class="iconbtn1 '+name+'"></div><div class="iconbtntitle pinquan" style="padding:0px"><span class="span1">'+(val?val:0)+'</span></div><div class="ub-f1"></div>';
                //var div = document.getElementsByClassName("pinquan")[0];
                //div.style.padding = "2";
                return iconbtn;
            }
            function iconbtn(name, val) {
                var iconbtn = lazy.creat("a", "iconbtn ub");
                iconbtn.innerHTML = '<div class="ub-f1"></div><div class="iconbtn1 '+name+'"></div><div class="iconbtntitle"><span class="">'+(val?val:0)+'</span></div><div class="ub-f1"></div>';
                return iconbtn;
            }
            function iconbtn1(name, val) {
                var iconbtn = lazy.creat("a", "iconbtn ub");
                iconbtn.innerHTML = '<div class="ub-f1"></div><div class="iconbtn1 '+name+'"></div><div class="iconbtntitle"></div><div class="ub-f1"></div>';
                return iconbtn;
            }
        }else {
            //输入框
            var w = document.body.clientWidth - 6.5 * lazy.fontSize;
            var inputdiv = lazy.creat("div", "inputdiv ub");
            var biaoqing = lazy.creat("a", "biaoqing");
            var biaoqingzw = lazy.creat("div", "biaoqingzw");
            var btnzw = lazy.creat("div", "btnzw");
            var textdiv = lazy.creat("textarea", "textdiv ub-f1");
            textdiv.id="mydiv";
            textdiv.placeholder="我来说两句..";
            textdiv.onkeyup = function() {
                autotextdiv();
            }
            function autotextdiv() {
                var str = textdiv.value;
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
                textdiv.style.height = (hang>1.5?3.5:hang+1.5) + "rem";
            }
            var btn = lazy.creat("a", "sendbtn");
            btn.innerHTML = '<span>发送</span>';
            btn.onclick = function() {
                if(data.send) data.send(textdiv.value);
                textdiv.value = '';
                textdiv.style.height = "1.5rem";
            }
            inputdiv.appendChild(biaoqingzw);
            inputdiv.appendChild(biaoqing);
            inputdiv.appendChild(textdiv);
            inputdiv.appendChild(btnzw);
            inputdiv.appendChild(btn);
            el.appendChild(inputdiv);
            //表情框
            var facediv = lazy.creat("div", "facediv hide");
            for(var i = 0; i < 8; i++) {
                var imgdiv = lazy.creat("a", "imgdiv", {"alt" : '_bq'+i+'_'});
                imgdiv.innerHTML = '<img class="img" src="'+lazy.url+'LazyUI/images/face/'+i+'.png" alt="_bq'+i+'_"/>';
                facediv.appendChild(imgdiv);
                imgdiv.onclick = function() {
                    textdiv.value = textdiv.value + this.getAttribute("alt");
                    autotextdiv();
                    /*
                    facediv.className = "facediv hide"; 
                    zw2.style.display = "none";
                    if(data.send) {
                        data.send(this.getAttribute("alt"));
                    }
                    */
                }
            }
            el.appendChild(facediv);
            //事件
            biaoqing.onclick = function() {
                if(facediv.className.indexOf("hide")!=-1) {
                    facediv.className = "facediv";
                    zw2.style.display = "block";
                }else {
                    facediv.className = "facediv hide"; 
                    zw2.style.display = "none";
                }
            }
        }
        //微信下无法操作
        if(lazy.browserType=="weixin"){
            el.innerHTML='';
            el.style.display = "none";
        }
        
      window.onload = function(){
        document.getElementById("mydiv").focus();
      }
        
        
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
