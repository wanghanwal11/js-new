lazy.plugins.wode = {
    "init" : function(el,data) {
       //el.style.width = document.body.clientWidth + "px";
        var table = lazy.creat("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
        	/*
            var tr = lazy.creat("div", "tr ub ub-ver");
            //var tr_img = lazy.creat("img","tr_img");
            //tr_img.src= '../LazyUI/js/jfpm/banner.png'
            var tr1 = lazy.creat("a", "tr1 ub");
            var _html = '';
            _html += ' <div class="jf ub-f1" style="background:url('+obj.icon+');background-position: 0 center;background-size: 1.5rem;background-repeat: no-repeat"><span>'+obj.h1+'</span></div>';
            _html += ' <div class="text ub"><span>'+(obj.h2?obj.h2:"")+'</span></div>';
           
            tr1.innerHTML = _html; 
            tr1.onclick = function() {
               
                if(obj.onclick)
                obj.onclick(obj);
            }
            tr.appendChild(tr1);
            table.appendChild(tr);
            */
        	var tr = lazy.creat("div", "tr ub");
        	var _html = '';
        	_html += ' <div class="jf" style="background:url('+obj.icon+');background-position: 0 center;background-size: 1.5rem;background-repeat: no-repeat"><span>'+obj.h1+'</span></div>';
            _html += ' <a class="text ub-f1"><span>'+(obj.h2?obj.h2:"")+'</span></a>';
            tr.innerHTML = _html; 
            tr.getElementsByClassName("text")[0].onclick = function() {
            	if(obj.onclick)obj.onclick(obj);
            }
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
