lazy.plugins.tsjl = {
    "init" : function(el,data) {
       
        var table = lazy.create("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.create("div", "tr box box_v");
            
            var tr1 = lazy.create("a", "tr1");
            var _html = '';
            
            _html += '<div class="title"><span>'+slhfun(obj.content?obj.content:"")+'</span></div>';
            if(obj.pictures.length){
                _html += '<div class="pictures box box_between">';
                for(var i=0;i<3;i++){
                     _html += '<div class="picture box" style="background:url('+obj.pictures[i]+') no-repeat center/7.2rem 4.8rem"></div>';
                }
                _html += '</div>';
            }
            
            _html += '<div class="tr3 box">'
           // 0: 已撤回     1: 待处理    2: 已上报    3: 已受理   4: 已办结
            //刚提交的应该叫待处理 可以撤回
            //然后PC那边上报到三维叫已上报 也可以撤回
            switch(obj.statename){
                case '1':
                case '2':
                    _html += '<div class="status status1 box_f1"><span>已提交</span></div>';
                     break;
                case '3':
                    _html += '<div class="status status2 box_f1"><span>办理中</span></div>';
                     break;
                case '4':
                     _html += '<div class="status status3 box_f1"><span>已回复</span></div>';
                     break;
                case '0':
                    _html += '<div class="status status4 box_f1"><span>已撤回</span></div>';
                     break;
               
                default:
                     _html += '<div class="status box_f1"><span class="span1">已提交</span></div>';
                     break;
            }
            //_html += '<div class="status box_f1"><span class="span1">'+(obj.statename)+'</span></div>';
  
            _html += '<div class="date"><span class="span1">'+(obj.date?obj.date:"")+'</span></div>';
            
             _html += '</div>'
            tr1.innerHTML = _html; 
            tr1.onclick = function() {
               
                if(obj.onclick)
                obj.onclick(obj);
            } 
            tr.appendChild(tr1);
            
            table.appendChild(tr);
            
        }
        function slhfun(str) {
            var len = lazy.getStringByteLength(str) / 2 * lazy.fontSize;
            var len2 = (document.body.clientWidth - (4) * lazy.fontSize) * 2;
            if(len > len2) {
                str = str.substring(0, parseInt(len2/lazy.fontSize)) + "...";
            }
            return str;
        }
        data.add = one;
        data.clean = function() {
            table.innerHTML = '';
            if(document.getElementsByClassName("titlelb")[0])
                titlelb.remove();
        }
       
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
