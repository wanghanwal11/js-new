lazy.plugins.preview_icon = {
    
    init : function(el,data) {
        var colorArr = ['#3399ff', '#17c295', '#f15a4a', '#f7b55e', '#5fcaf8', '#ff943a'];
        var k = -1;
        
        lazy.for(data.list||[], function(obj) {
            one(obj);
        });
        function one(obj) {
            
            var preview_h = lazy.create('div','preview_h');
            var top = lazy.create('div','preview_top box box_i_center');
            var icon = lazy.create('div','preview_icon',{
                style : 'background-color:'+autoColor()+';background-image: url('+obj.icon+');'
            });
            var img = new Image();
            img.src = obj.icon;
            img.onerror = function() {
                icon.innerHTML = '<span class="h2">'+(obj.h1.substr(0,2))+'</span>';
            }
            var hang = lazy.create('div','preview_hang box_f1 box box_v');
            hang.innerHTML = '<div class="slh preview_h1"><span class="h0">'+obj.h1+'</span></div><div class="slh preview_h2"><span class="h2">'+obj.h2+'</span></div>'
            top.appendChild(icon);
            top.appendChild(hang);
            if(obj.menu) {
                var menu = lazy.create('a','preview_menu');
                top.appendChild(menu);
                menu.onclick = function() {
                    obj.menu();
                }
            }
            var center = lazy.create('a','preview_center');
            center.innerHTML = obj.html || "";
            var bottom = lazy.create('a','preview_bottom');
            bottom.innerHTML = '<span class="h1 color">立即查看</span>';
            preview_h.appendChild(top);
            preview_h.appendChild(center);
            preview_h.appendChild(bottom);
            
            el.appendChild(preview_h);
            
            if(obj.onclick) {
                bottom.onclick = function() {
                    obj.onclick(obj);
                }
                center.onclick = function() {
                    obj.onclick(obj);
                }
            }
            
        }
        
        function autoColor() {
            k++;
            return colorArr[parseInt(k%6)];
        }
    },
    clear : function() {
        
    }
    
}
