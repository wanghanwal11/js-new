lazy.plugins.picker = {
    
    init : function(el,data) {
        var bol = false;
        var split = [];
        var datalist = [];
        var mask = lazy.create('div','picker_mask');
        var picker_div = lazy.create('div','picker_div box box_v');
        var titlediv = lazy.create('div','picker_titlediv box');
        titlediv.innerHTML = '<a class="picker_btn picker_qx"><span>取消</span></a><div class="box_f1"></div><a class="picker_btn picker_qd"><span>确定</span></a>';
        titlediv.getElementsByClassName("picker_qd")[0].onclick = function() {
            data.hide();
            data.onclick && data.onclick(datalist);
        }
        titlediv.getElementsByClassName("picker_qx")[0].onclick = function() {
            data.hide();
        }
        picker_div.appendChild(titlediv);
        var movediv = lazy.create('div','picker_movediv box_f1 box');
        picker_div.appendChild(movediv);
        //
        var line = lazy.create('div','picker_line box');
        picker_div.appendChild(line);
        //
        
        //one(data.list);
        renderer();
        //
        el.appendChild(mask);
        mask.onclick = function() {
            data.hide();
        }
        el.appendChild(picker_div);
        //
        function one(arr, num) {
            var picker_one = lazy.create('div','picker_one box_f1');
            var picker_touch = lazy.create('div','picker_touch');
            var picker_ul = lazy.create('div','picker_ul');
            //
            var _html = '';
            lazy.for(arr, function(obj) {
                _html += '<div class="picker_li"><span>'+obj.name+'</span></div>';
            });
            picker_ul.innerHTML = _html;
            //计算位置
            var len = arr.length;
            var h =  (3 -  parseInt(len/2)) * 2 * lazy.fontSize;
            var _n = 3 - parseInt(h/2/lazy.fontSize);
            datalist[num] = arr[_n];
            picker_ul.style.top = h +'px';
            var top_up = 6 * lazy.fontSize;
            var top_down = (4 - len) * 2 * lazy.fontSize;
            
            //
            picker_one.appendChild(picker_ul);
            picker_one.appendChild(picker_touch);
            movediv.appendChild(picker_one);
            //
            if(split[num] != undefined) {
                var picker_split = lazy.create('div','picker_split');
                picker_split.innerHTML = '<span class="h3">'+split[num]+'</span>'; 
                movediv.appendChild(picker_split);
            }
            
            //
            var y = 0, c= 0;
            lazy.touchEvent({
                dom : picker_touch,
                touchstart : function(obj) {
                    picker_ul.style.webkitTransition = null;
                    c = 0;
                    y = obj.y;
                },
                touchmove : function(obj) {
                    obj.event.preventDefault();
                    c = obj.y - y;
                    picker_ul.style.top = (h + c) + 'px';
                },
                touchend : function(obj) {
                    c = obj.y - y;
                    h = h + c;
                    picker_ul.style.webkitTransition = 'top .2s';
                    h = Math.round(h / lazy.fontSize / 2) * 2 * lazy.fontSize;
                    if(h > top_up) h = top_up;
                    else if(h<top_down) h = top_down;
                    picker_ul.style.top = h + 'px';
                    var n = 3 - parseInt(h/2/lazy.fontSize);
                    datalist[num] = arr[n];
                    //alert(parseInt(h/2/lazy.fontSize));
                }
            });
        }
        function renderer() {
            split = data.split || [];
            movediv.innerHTML = '';
            datalist = [];
            if(data.contact === true) {
                
            }else {
                lazy.for(data.list, function(arr, i) {
                    one(arr, i);
                });
            }
            //line
            /*
            line.innerHTML = '';
            lazy.for(data.split || [], function(val) {
                var picker_split = lazy.create('div','picker_split box_f1');
                picker_split.innerHTML = '<span class="h3">'+val+'</span>';
                line.appendChild(picker_split);
            });
            */
        }
        data.renderer = renderer;
        data.show = function() {
            bol = false;
            el.style.display = 'block';
            mask.className = 'picker_mask picker_mask_a';
            picker_div.className = 'picker_div box box_v picker_div_a';
        }
        data.hide = function() {
            bol = true;
            mask.className = 'picker_mask picker_mask_a_o';
            picker_div.className = 'picker_div box box_v picker_div_a_o';
        }
        mask.addEventListener('webkitAnimationEnd', function() {
            if(bol) el.style.display = 'none';
        },false);
    },
    clear : function() {
        
    }
    
}
