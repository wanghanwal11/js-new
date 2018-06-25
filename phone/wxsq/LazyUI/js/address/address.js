lazy.plugins.address = {
    "init" : function(el,data) {
       
        var table = lazy.create("div", "table");
        el.appendChild(table);
        one(data)
        function one(obj) {
            var tr = lazy.create("div", "tr box");
            var icon = lazy.create("div","icon box");
            var td = lazy.create("div","td box_f1 box_v");
            var right = lazy.create("div","right box")
            if(obj.address1){
                var tr1 = lazy.create("div","tr1")
                tr1.innerHTML = '<span>'+obj.address1+'</span>';
                var tr2 = lazy.create("div","tr2")
                tr2.innerHTML = '<span>'+obj.address2+'</span>';
                td.appendChild(tr1)
                td.appendChild(tr2)
            }else{
                td.innerHTML = '<div class="default"><span>'+obj.placeholder+'</span></div>'
            }
            tr.onclick = function(){
                if(obj.onclick)  obj.onclick(obj,1);
            }
           
            tr.appendChild(icon);
            tr.appendChild(td);
            tr.appendChild(right);
            table.appendChild(tr);
            
        }
       
        data.add = one;
        
        data.getvalue1 = function() {
           var val = el.getElementsByClassName('tr1')[0].getElementsByTagName("span")[0].innerText;
           return val;
        }
        data.getvalue2 = function() {
           var val = el.getElementsByClassName('tr2')[0].getElementsByTagName("span")[0].innerText;
            return val;
        }
        data.addaddress1 = function(val){
            var td = el.getElementsByClassName("td")[0];
            if(el.getElementsByClassName("tr1")[0]){
                el.getElementsByClassName("tr1")[0].getElementsByTagName("span")[0].innerText = val;
            }else{
                if(td.getElementsByClassName("default")[0])td.innerHTML = ''
                
                var tr1 = lazy.create("div","tr1")
                tr1.innerHTML = '<span>'+val+'</span>';
                td.appendChild(tr1)
            }
            
        }
        data.addaddress2 = function(val){
            var td = el.getElementsByClassName("td")[0];
            if(el.getElementsByClassName("tr2")[0]){
                el.getElementsByClassName("tr2")[0].getElementsByTagName("span")[0].innerText = val;
            }else{
                if(td.getElementsByClassName("default")[0]) td.innerHTML = ''
                 
                var tr2 = lazy.create("div","tr2")
                tr2.innerHTML = '<span>'+val+'</span>';
                td.appendChild(tr2)
            }
        }
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
