lazy.plugins.serverinfo = {
     "init" : function(el, data){
        if(data.table.length){
            one(data.table[0])
        }
        function one(_data){
           
            console.log(_data)
            var table = lazy.create("div","table box");
            var icon = lazy.create("div","icon");
            icon.style.backgroundImage = 'url('+_data.icon+')';
            table.appendChild(icon);
            
            var tr = lazy.create("div","tr box box_v box_f1");
            var html = '';
            html += "<div class='name'>"+_data.name+"</div>";
            html += "<div class='tr1 box'>";
            if(_data.address){
                html += "  <div class='address'>"+_data.address+"</div>";
            }
            if(_data.level){
                html += "  <div class='xing box'>";
                for(var i = 0 ; i<_data.level ; i++){
                    html += '<div class="ystar"></div>';
                }
                for(var i = 5 ; i>_data.level ; i--){
                    html += '<div class="gstar"></div>';
                }
                html += "  </div>"
                html += "  <div class='number'>"+_data.number+"单</div>";
            }
            
            html += "</div>";
            tr.innerHTML = html;
            table.appendChild(tr);
            
            var xian = lazy.create("div","x");
            //"<div class='x'></div>"
            table.appendChild(xian);
            
            var tel = lazy.create("div","tel");
            tel.innerHTML=' <a href="tel://'+_data.tel+'"></a>';
            table.appendChild(tel)
            el.appendChild(table);
        }
        
       
        
        data.add = one;
        
        data.clean = function() {
            table.innerHTML = '';
            if(document.getElementsByClassName("tr0")[0])
            	document.getElementsByClassName("tr0")[0].remove();
        }
    },
    "edit" : function(parentEl, el, data){
       
    }
}