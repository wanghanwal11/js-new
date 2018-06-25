lazy.plugins.jianjiexq = {
    "init" : function(el,data) {
        var table = lazy.creat("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.creat("div", "tr ub ub-ver");
            var tr1 = lazy.creat("div", "tr1 ub");
            var _html = '';
            _html += ' <div class="icon" style="background-image:url('+obj.icon+')"></div>';

            
            tr1.innerHTML = _html; 
            var h = lazy.creat("div","h ub-f1");
            var h1 = lazy.creat("div","h1");
            h1.innerHTML='<span class='+(obj.sex=="男"?"male":"female")+'>'+(obj.name?obj.name:"某某某")+'</span>';
            
            var h2 = lazy.creat("div","h2");
            h2.innerHTML='<span>手机号：'+(obj.tel?obj.tel:"139202010290")+'</span>';
            h.appendChild(h1);
            h.appendChild(h2);
            tr1.appendChild(h);
            tr1.onclick = function() {
               
                if(obj.onclick)
                obj.onclick(obj);
            }  
            
            
            var tr2 = lazy.creat("div", "tr2 ub ub-ver");
            var _html = '';
            
            _html += ' <div class="line1 ub">';
            _html += '      <div class="title ub">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</div>';
            _html += '      <div class="content ub-f1">'+(obj.mail?obj.mail:"暂无")+'</div>';
            _html += ' </div>';
             _html += ' <div class="line1 ub">';
            _html += '      <div class="title ub">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</div>';
            _html += '      <div class="content ub-f1">'+(obj.addr?obj.addr:"暂无")+'</div>';
            _html += ' </div>';
            _html += ' <div class="line1 ub">';
            _html += '      <div class="title ub">个性签名：</div>';
            _html += '      <div class="content ub-f1">'+(obj.qianming?obj.qianming:"暂无")+'</div>';
            _html += ' </div>';
            /*
            _html += ' <div class="line1 ub">';
            _html += '      <div class="title ub-f1">二维码</div>';
            _html += '      <div class="content ub"><img src="../LazyUI/js/jianjiexq/images/erweima.png"></div>';
            _html += ' </div>';
            */
            tr2.innerHTML = _html;
            
            var ewm = lazy.creat("div","line1 ub");
            var _ewm = '';
            _ewm += '      <div class="title ub-f1">二维码</div>';
            _ewm += '      <div class="content ub"><img src="../LazyUI/js/jianjiexq/images/erweima.png"></div>';
            ewm.innerHTML = _ewm;
            ewm.onclick = function() {
               
                if(obj.onclick)
                obj.onclick(obj);
            }  
            var tr3 = lazy.creat("div", "tr2 ub ub-ver");
            var _html = '';
            
            _html += ' <div class="line1 ub">';
            _html += '      <div class="content ub-f1">所属支部</div>';
            _html += '      <div class="title right ub">'+(obj.zhibu?obj.zhibu:"暂无")+'</div>';
            _html += ' </div>';
             _html += ' <div class="line1 ub">';
            _html += '      <div class="content ub-f1">支部职务</div>';
            _html += '      <div class="title right ub">'+(obj.zhiwu?obj.zhiwu:"暂无")+'</div>';
            _html += ' </div>';
            _html += ' <div class="line1 ub">';
            _html += '      <div class="content ub-f1">入党时间</div>';
            _html += '      <div class="title right ub">'+(obj.rudang?obj.rudang:"暂无")+'</div>';
            _html += ' </div>';
            tr3.innerHTML = _html;
            
            tr.appendChild(tr1);
            tr.appendChild(tr2);
            tr2.appendChild(ewm);
            tr.appendChild(tr3);
            table.appendChild(tr);
            
        }
        
        data.add = one;
        data.clean = function() {
            table.innerHTML = '';
        }
        
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
