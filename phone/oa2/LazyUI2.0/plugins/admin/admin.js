lazy.plugins.admin = {
    
    init : function(el,data) {
        var hrem = 25.5;
        var admin_header = lazy.create('div','admin_header');
        var admin_header_title = lazy.create('div','admin_header_title box box_i_center');
        //三个小按钮
        var admin_qiandao1 = lazy.create('div','admin_header_btn1 admin_qiandao1');
        var admin_xiaoxi1 = lazy.create('div','admin_header_btn1 admin_xiaoxi1');
        var admin_saoyisao1 = lazy.create('div','admin_header_btn1 admin_saoyisao1');
        admin_header_title.appendChild(admin_qiandao1);
        admin_header_title.appendChild(admin_xiaoxi1);
        admin_header_title.appendChild(admin_saoyisao1);
        //
        admin_header.appendChild(admin_header_title);
        
        var admin_header_bg = lazy.create('div','admin_header_bg');
        var admin_header_bg_div = lazy.create('div','admin_header_bg_div box');
        //三个按钮
        var admin_qiandao = lazy.create('div','admin_header_btn admin_qiandao box_f1');
        admin_qiandao.innerHTML = '<span>签到</span>';
        var admin_xiaoxi = lazy.create('div','admin_header_btn admin_xiaoxi box_f1');
        admin_xiaoxi.innerHTML = '<span>消息</span>';
        var admin_saoyisao = lazy.create('div','admin_header_btn admin_saoyisao box_f1');
        admin_saoyisao.innerHTML = '<span>扫一扫</span>';
        admin_header_bg_div.appendChild(admin_qiandao);
        admin_header_bg_div.appendChild(admin_xiaoxi);
        admin_header_bg_div.appendChild(admin_saoyisao);
        //
        admin_header_bg.appendChild(admin_header_bg_div);
        admin_header.appendChild(admin_header_bg);
        
        var admin_header_table = lazy.create('div','admin_header_table');
        admin_header.appendChild(admin_header_table);
        
        
        
        var content = lazy.create('div','admin_content');
        el.appendChild(admin_header);
        el.appendChild(content);
        //画个圈圈
        var canvas_div = lazy.create('div','admin_canvas_div box box_center');
        var w = parseInt(2 * lazy.fontSize);
        var w1 = w - 4;
        var canvas = lazy.create('canvas','admin_canvas',{
            width : w,
            height : w,
            style : 'witch:'+(w)+'px;height:'+(w)+'px;'
        });
        //canvas.scale(window.devicePixelRatio, window.devicePixelRatio);
        
        var ctx = canvas.getContext("2d");
        var v64 = lazy.create('img','v64',{
            src : lazy.name + '/images/admin/v64.png'
        });
        drawarc(1.5);
        //
        canvas_div.appendChild(canvas);
        el.appendChild(canvas_div);
        function drawarc(p) {
            ctx.clearRect(0,0,w,w);
            ctx.drawImage(v64,2,2,w1,w1);
            ctx.imageSmoothingEnabled = true;
            ctx.beginPath();
            ctx.strokeStyle="#00d600";
            ctx.lineWidth = 3;
            ctx.arc(w/2,w/2,(w1-1)/2,1.5*Math.PI, p*Math.PI);
            ctx.stroke();
            
        }
        //
        var bol = false;
        var nj = 1; //延时一下
        eventone();
        function eventone() {
            var y = 0;
            bol = false;    //是否移除时间
            var first = null;   //第一次方向
            var eventObj = lazy.touchEvent({
                dom : content, 
                touchstart : function(obj) {
                    y = obj.y;
                    first = null;
                    content.style.webkitTransition = '';
                    nj++;
                },
                touchmove :  function(obj) {
                    if(nj > 0) {
                        
                        var c = obj.y - y;
                        if(c > 0 && first === null && document.body.scrollTop==0) first = true;
                        if(c <= 0 && first === null) first = false;
                        
                        if(first) {
                            //下
                            obj.event.preventDefault();
                            if(c > 7 * lazy.fontSize)c = 7 * lazy.fontSize;
                            if(c < 0)c = 0;    
                            content.style.top = (hrem *lazy.fontSize + c) + 'px';
                            //画圆
                            var p = c*2/(9*lazy.fontSize);
                            var t = c*lazy.fontSize/(4*lazy.fontSize);
                            
                            if(p>1.5)p = 3.5;
                            canvas.style.top = t+'px';
                            drawarc(p);
                            //
                        }else {
                            bol = true;
                            lazy.removeTouchEvent(eventObj);
                            bounce.start();
                        }
                        
                    }
                    
                    
                },
                touchend : function(obj) {
                    content.style.webkitTransition = 'top 0.4s';
                    content.style.top = null;
                }});
        }
        //
        var beforeScroll = afterScroll = 0;
        var bounce = lazy.bounce({
            down : function() {
                if(bol) {
                    nj = 0;
                    eventone();
                }
            },
            center : function(y) {
                beforeScroll = y;
                var o = y / (10 * lazy.fontSize);
                if(o>1)o = 1;
                admin_header_title.style.opacity = o;
                admin_header_bg_div.style.opacity = 1-o;
                admin_header_bg_div.style.top = (y*0.3)+"px";
            }
        });
        //
        /*
        var ely = 0, t;
        lazy.touchEvent({
            dom : el, 
            touchstart : function(obj) {
                ely = obj.y;
                if(t)lazy.clearAnimation(t);
            },
            touchmove :  function(obj) {
                
            },
            touchend : function(obj) {
                var c = obj.y - ely;
                if(c>0) {
                    //上
                }else if(beforeScroll <= 10*lazy.fontSize){
                    //下
                    window.scrollTo(0,10*lazy.fontSize);
                    //window.scrollTo(0,10*lazy.fontSize);
                    
                    var time = 400 * (10*lazy.fontSize - beforeScroll)/(13*lazy.fontSize);
                    console.log(time);
                    t = lazy.animation(beforeScroll, 10*lazy.fontSize, time, 'jiansu', function(_y) {
                        window.scrollTo(0,_y);
                    });
                    
                }
                
        }});
        
        */
        //渲染gride
        setData({
            id : 'grid',
            type : 'grid',
            border : false,
            table : data.grid || []
        }, function(_el) {
            admin_header_table.appendChild(_el);
        });
        //渲染panel
        setData({
            id : 'panel_html',
            type : 'panel_html',
            list : data.panel || []
        }, function(_el) {
            content.appendChild(_el);
        });
    },
    clear : function() {
        
    }
    
}
