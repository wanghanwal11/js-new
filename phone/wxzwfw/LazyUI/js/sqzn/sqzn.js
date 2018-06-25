lazy.plugins.sqzn = {
    "init" : function(el,data) {
       
        var table = lazy.creat("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.creat("div", "tr ub ub-ver");
            //var tr_img = lazy.creat("img","tr_img");
            //tr_img.src= '../LazyUI/js/jfpm/banner.png'
            var tr1 = lazy.creat("a", "tr1 ub");
            var _html = '';
            _html += ' <div class="jf ub-f1" style="background:url('+obj.icon+');background-position: 0 center;background-size: 2rem;background-repeat: no-repeat"><span>'+obj.h1+'</span></div>';
            _html += ' <div class="text state ub"><span>'+(obj.h2?obj.h2:"")+'</span></div>';
            tr1.innerHTML = _html;
            var tr2 = lazy.creat("a", "tr2 ub");
            if(obj.content){
                tr2.innerHTML = '<div class="hh">'+obj.content+'</div>';
            }
            tr2.style.display="none";
            tr.appendChild(tr1);
            tr.appendChild(tr2);
            table.appendChild(tr);
            tr1.onclick = function() {
                if(tr2.style.display=="none"){
                    tr2.style.display="block";
                    tr1.getElementsByClassName("state")[0].className="text1 state ub";
                }else{
                    tr2.style.display="none";
                    tr1.getElementsByClassName("state")[0].className="text state ub";
                }
            }
            
        }
        data.add = one;
        data.clean = function() {
            table.innerHTML = '';
        }
        
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
