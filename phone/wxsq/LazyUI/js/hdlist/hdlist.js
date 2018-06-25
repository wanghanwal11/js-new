lazy.plugins.hdlist = {
    "init" : function(el,data) {
       
        var table = lazy.create("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.create("div", "tr box");
            var pic = lazy.create("div","pic box");
            pic.style.backgroundImage = "url("+obj.picture+")";
           
            var td = lazy.create("div","td box_f1 box_v");
            var html = '';
            html += '<div class="tr1 box">'
            html += '   <div class="title box_f1"><span>'+obj.title+'</span></div>'
            if(obj.status)html += '   <div class="box status'+obj.status+'">'+(obj.status=='1'?'进行中':'已结束')+'</div>'
            html += '</div>';
            if(obj.type) html+= '<div class="type box"><span>'+obj.type+'</span></div>';
            html += '<div class="time '+(obj.type?'':"space")+' box"><span>'+obj.time+'</span></div>';
            html += '<div class="address box"><span>'+obj.address+'</span></div>';
            td.innerHTML = html;
            tr.appendChild(pic);
            tr.appendChild(td);
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
