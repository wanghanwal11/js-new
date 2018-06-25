lazy.plugins.panel = {
    
	"init" : function(el, data){
	    var _i = -1; 
        lazy.for(data.list, function(obj,i) {
            one(obj);
        });
        function one(obj) {
            _i++;
            //(obj.icon?'':obj.iconFont)
            var tr = lazy.create('a','panel_tr box box_i_center');
            var _html = '';
            if(obj.icon!=undefined)_html += '<div class="panel_icon bcolor'+parseInt(_i%7)+'"></div>';
            //if(obj.icon!=undefined)_html += '<div class="panel_icon" style="background-image:url(\''+obj.icon+'\');background-color:rgb(63, 196, 153);">'+(obj.icon?'':obj.iconFont)+'</div>';
            _html += '<div class="panel_h box_f1 box box_v box_center">';
            _html += '      <div class="panel_t box">';
            _html += '          <div class="panel_h1 box_f1 slh">'+(obj.h1 || '')+'</div>';
            if(obj.h3!=undefined)_html += '          <div class="panel_h3">'+(obj.h3 || '')+'</div>';
            _html += '      </div>';
            _html += '      <div class="panel_b box">';
            _html += '          <div class="panel_h2 box_f1">'+(obj.h2 || '')+'</div>';
            if(obj.h4!=undefined)_html += '          <div class="panel_h4">'+(obj.h4 || '')+'</div>';
            _html += '      </div>';
            _html += '</div>';
            tr.innerHTML = _html;
            if(obj.icon!=undefined){
                var img = new Image();
                img.src = obj.icon;
                img.onload = function(){
                   tr.getElementsByClassName('panel_icon')[0].style.backgroundImage="url("+this.src+")";
                }
                img.onerror = function(){
                    tr.getElementsByClassName('panel_icon')[0].innerHTML = '<span class="h2 hh">'+obj.iconFont+'</span>';
                }
            }
            el.appendChild(tr);
            tr.onclick = function() {
                obj.onclick && obj.onclick(obj);
            }
        }
        data.add = one;
    },
    "edit" : function(parentEl, el, data){
        
    }
}