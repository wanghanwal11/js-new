lazy.plugins.orderlist = {
    "init" : function(el,data) {
       
        var table = lazy.create("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.create("div", "tr box box_v");
            var tr1 = lazy.create("div","tr1 box");
            var _html = '';
            _html += '<div class="type box box_f1">'+obj.type+'</div>';
            _html += '<div class="status box">'+obj.status+'</div>';
            tr1.innerHTML = _html;
            
            var tr2 = lazy.create("div","tr2 box box_v");
            var _html2 = '';
            _html2 += "<div class='address content slh'>地址："+obj.address+"</div>";
            _html2 += "<div class='time content slh'>预约时间："+obj.time+"</div>";
            _html2 += "<div class='money content slh'>金额："+obj.price+"</div>";
            tr2.innerHTML = _html2;
            /*var address = "<div class='address'>地址："+obj.address+"</div>";
            var time = "<div class='time'>预约服务时间："+obj.time+"</div>";
            var money = "<div class='money'>金额："+obj.money+"</div>";*/
            
            tr.appendChild(tr1);
            tr.appendChild(tr2);
            /*tr.appendChild(address);
            tr.appendChild(time);
            tr.appendChild(money);*/
            
            table.appendChild(tr);
            tr.onclick = function(){
                if(obj.onclick)
                obj.onclick(obj);
            }
            
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
