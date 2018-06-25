lazy.plugins.leftNav = {
    
    init : function(el,data) {
        var bol = false;
        var mask = lazy.create('div', 'leftNav_mask');
        var leftdiv = lazy.create('div', 'leftNav_leftdiv box box_v box_i_center');
        var icon = lazy.create('div', 'leftNav_icon');
        var ul = lazy.create('div', 'leftNav_ul');
        el.appendChild(mask);
        leftdiv.appendChild(icon);
        leftdiv.appendChild(ul);
        el.appendChild(leftdiv);
        //
        lazy.for(data.list, function(obj) {
            one(obj);
        });
        function one(obj) {
            var li = lazy.create('a', 'leftNav_li box');
            li.innerHTML = '<i style="background-image:url('+obj.icon+')"></i><span class="h0">'+obj.title+'</span>';
            li.onclick = function() {
                
                obj.onclick && obj.onclick(obj);
            }
            ul.appendChild(li);
        }
        mask.onclick = function() {
            hide();
        }
        data.show = function() {
            el.style.display = 'block';
            leftdiv.className = 'leftNav_leftdiv leftNav_leftdiv_a box box_v box_i_center';
        }
        data.hide = hide;
        function hide() {
            bol = true;
            leftdiv.className = 'leftNav_leftdiv leftNav_leftdiv_a_o box box_v box_i_center';
        }
        leftdiv.addEventListener('webkitAnimationEnd', function() {
            if(bol) {
                bol = false;
                el.style.display = 'none';
            }
        },false);
    },
    clear : function() {
        
    }
    
}
