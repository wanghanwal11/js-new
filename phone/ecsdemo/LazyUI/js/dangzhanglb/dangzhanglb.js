lazy.plugins.dangzhanglb = {
    "init" : function(el,data) {
        var table = lazy.creat("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.creat("div", "tr ub ub-ver");
            var tr1 = lazy.creat("a", "tr1 ub");
            var _html = '';
            
             _html += ' <div class="a1">';
             
             if(obj.status=="T"){
                 _html += '    <div class="x"></div>';
                 _html += '    <div class="q"></div>';
             }else if(obj.status=="L"){
                 _html += '    <div class="x4"></div>';
                 _html += '    <div class="x2"></div>';
                 _html += '    <div class="q2"></div>';
             }else if(obj.status=="F"){
                  _html += '    <div class="x2"></div>';
                 _html += '    <div class="x3"></div>';
                 _html += '    <div class="q3"></div>';
             }
             /*
             else{
                 _html += '    <div class="x5"></div>';
                 _html += '    <div class="q3"></div>';
             }
             */
             _html += ' </div>';
            
         
            _html += ' <div class="b ub-f1">';
             _html += '     <div class="ub">';
             _html += '     <div class="h1 ub-f1 slh"><span>'+(obj.h1?obj.h1:"")+'</span></div>';
             if(obj.status=="T"){
                _html += '     <div class="text"><span>已学</span></div>';
             }else {
                _html += '     <div class="status"><span>'+obj.jifen+'积分</span></div>';
             }
            
            _html += '     </div>';
            _html += '     <div class="ub">';
            _html += '       <div class="ub-f1"><div class="ub">'; 
            _html += '          <div class="yx"><span class="span1">'+(obj.peoplenumber?obj.peoplenumber:0)+'人已学</span></div>';
            _html += '          <div class="ping"><span class="span1">'+(obj.ping?obj.ping:0)+'</span></div>';
            _html += '       </div></div>'
            _html += '       <div class="time"><span class="span1">'+(obj.time?obj.time:"")+'</span></div>';
    
            
            _html += '     </div>';
            _html += ' </div>';
            tr1.innerHTML = _html; 
            tr1.onclick = function() {
                
                if(obj.onclick)
                obj.onclick(obj);
            }  
            tr.appendChild(tr1);
            
            table.appendChild(tr);
            
            
        }
       
        data.add = one;
        data.clean = function() {
            table.innerHTML = '';
        }
        el.style.width = document.body.clientWidth + "px";
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
