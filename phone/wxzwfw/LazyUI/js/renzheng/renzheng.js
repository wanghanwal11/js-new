lazy.plugins.renzheng = {
    "init" : function(el,data) {
        var table = lazy.creat("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.creat("div", "tr ub ub-ver");
            
            
            var _html = '';
            _html +='<div class="tr1 ub"><div class="title"><span>姓名</span></div>';
            _html +='<input type="text" id="name" value="" placeholder="请输入姓名"></div>';
            _html +='<div class="tr1 ub"><div class="title"><span>身份证号码</span></div>';
            _html +='<input type="text" id="idcard" value="" placeholder="请输入身份证号"></div>';
            _html +='<div class="tr1 ub"><div class="title"><span>手机号码</span></div>';
            _html +='<input type="text" id="mobile" readonly="readonly" value="" placeholder="请输入手机号码"></div>';
            tr.innerHTML = _html; 
            
            var tr1 = lazy.creat("div", "tr1 ub");
            var _html1 ='<div class="title"><span>社区</span></div>';
            _html1 +='<input class="szsq" id="community" readonly="readonly" type="text" placeholder="请选择您所在的社区">';
            _html1 +='<div class="right"></div>';
            tr1.innerHTML = _html1; 
            //
            lazy.setParameter("shequ",data.shequ);
            
            var shequIframe = lazy.creat("div","shequIframe");
            var iframe = lazy.creat("iframe","iframe");
            iframe.src = "shequ.html";
            shequIframe.appendChild(iframe);
            document.body.appendChild(shequIframe);
            //
            window.setShequIframe = function(obj) {
            	shequIframe.style.left = "100%";
            	shequIframe.style.webkitAnimation = "shequIframe_an1 0.5s";
            	el.getElementsByClassName("szsq")[0].value = obj.title;
            	lazy.setParameter("sqobj",obj);
            }
            tr1.onclick = function() {
            	//iframe.style.left = "100%";
                //iframe.style.webkitAnimation = "shequIframe_an1 0.5s";
            	shequIframe.style.left = "0";
            	shequIframe.style.webkitAnimation = "shequIframe_an 0.5s";
                /*
                if(obj.onclick)
                obj.onclick(obj);
                */
            } 
            var last = lazy.creat("div", "last ub");
            
            tr.appendChild(tr1);
            tr.appendChild(last);
            table.appendChild(tr);
            
        }
        function slhfun(str) {
            var len = lazy.getStringByteLength(str) / 2 * lazy.fontSize;
            var len2 = (document.body.clientWidth - (6.75 + 5) * lazy.fontSize) * 2;
            if(len > len2) {
                str = str.substring(0, parseInt(len2/lazy.fontSize)) + "...";
            }
            return str;
        }
        
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
