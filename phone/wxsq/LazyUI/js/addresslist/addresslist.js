lazy.plugins.addresslist = {
    "init" : function(el,data) {
       
        var table = lazy.create("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.create("div", "tr box box_v");
            var tr0 = lazy.create("div","tr0 box box_f1");
            var name = lazy.create("div","name box_f1");
            name.innerHTML = '<span>'+obj.name+'</span>';
            var phone = lazy.create("div","phone box");
            phone.innerHTML = '<span>'+obj.phone+'</span>';
            tr0.appendChild(name)
            tr0.appendChild(phone)
            
            var tr1 = lazy.create("div","tr1 box_f1");
            tr1.innerHTML = "<span>地址："+obj.address+"</span>"
            
            var tr2 = lazy.create("div","tr2 box box_f1");
            var tagimg = lazy.create("div","tagimg box");
            var tag = lazy.create("div","tag box box_f1");
            tag.innerHTML = "<span>"+obj.tag+"</span>";
            var edit = lazy.create("div","edit box");
            edit.innerHTML = "<span>编辑</span>";
            var del = lazy.create("div","del box");
            del.innerHTML = "<span>删除</span>";
            tr2.appendChild(tagimg)
            tr2.appendChild(tag)
            tr2.appendChild(edit) 
            tr2.appendChild(del) 
            
            edit.onclick = function(){
                if(obj.onclick)  obj.onclick(obj,1);
            }
            del.onclick = function(){
                if(obj.onclick)  obj.onclick(obj,0);
            }
            tr.appendChild(tr0);
            tr.appendChild(tr1);
            tr.appendChild(tr2);
            
            table.appendChild(tr);
            
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
