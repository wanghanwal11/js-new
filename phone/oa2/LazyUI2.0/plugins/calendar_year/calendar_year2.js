lazy.plugins.calendar_year = {
    
    init : function(el,data) {
        //
        var mydate = (data.date && new Date(data.date)) || new Date();
        var W = document.body.clientWidth;
        var domArr = [];
        //
        renderer(domArr, mydate.getFullYear());
        //渲染
        function renderer(arr, year) {
            arr[0] = yearone(year - 1, 'leftDom');
            arr[1] = yearone(year, 'centerDom');
            arr[2] = yearone(year + 1, 'rightDom');
            el.appendChild(arr[0]);
            el.appendChild(arr[1]);
            el.appendChild(arr[2]);
            addEvent(arr[1]);
        }
        //移除
        function clear(arr) {
            if(arr[0])arr[0].parentNode.removeChild(arr[0]);
            if(arr[1])arr[1].parentNode.removeChild(arr[1]);
            if(arr[2])arr[2].parentNode.removeChild(arr[2]);
        }
        /*
        lazy.touchEvent({
            dom : el,
            touchmove : function(obj) {
                obj.event.preventDefault();
            }
        })*/
        //添加滑动事件
        function addEvent(dom) {
            var x = c = 0;
            var list = dom.getElementsByClassName('moon');
            for(var i = 0; i < list.length; i++) {
                list[i].onclick = function() {
                    data.onchange && data.onchange({
                        year : parseInt(this.getAttribute("year")),
                        month : parseInt(this.getAttribute("month")),
                        day : 0
                    });
                }
            }
            dom.getElementsByClassName('nowbtn')[0].onclick = function() {
                clear(domArr);
                renderer(domArr, mydate.getFullYear());
            }
            lazy.touchEvent({
                dom : dom,
                touchstart : function(obj) {
                    x = obj.x;
                    c = 0;
                },
                touchmove : function(obj) {
                    obj.event.preventDefault();
                    
                    c = parseInt(obj.x - x);
                    domArr[1].style.left = c + "px";
                    
                    domArr[0].style.left = (-W + c) + "px";
                    domArr[2].style.left = (W + c) + "px";
                    
                },
                touchend : function(obj) {
                    //year box box_v box_between
                    var C = parseInt((c/W)*100);
                    var self = event.currentTarget;
                    var year = parseInt(self.getAttribute('year'));
                    if(C > 5) { //you
                        domArr[0].style.left = null;
                        domArr[0].style.webkitTransition = 'left 0.3s';
                        domArr[0].className = 'year box box_v box_between centerDom';
                        domArr[1].style.left = null;
                        domArr[1].style.webkitTransition = 'left 0.3s';
                        domArr[1].className = 'year box box_v box_between rightDom';
                        
                        domArr[1].addEventListener("webkitTransitionEnd", function(event) {
                            clear(domArr);
                            renderer(domArr, year - 1);
                        });
                        
                        //
                    }else if(C < -5) { //zuo
                        domArr[2].style.left = null;
                        domArr[2].style.webkitTransition = 'left 0.3s';
                        domArr[2].className = 'year box box_v box_between centerDom';
                        domArr[1].style.left = null;
                        domArr[1].style.webkitTransition = 'left 0.3s';
                        domArr[1].className = 'year box box_v box_between leftDom';
                        
                        domArr[1].addEventListener("webkitTransitionEnd", function(event) {
                            clear(domArr);
                            renderer(domArr, year + 1);
                        });
                    }
                }
            }); 
            
        }
        //年
        function yearone(year, domName) {
            var dom = lazy.create('div','year box box_v box_between '+domName+'', {
                year : year
            });
            var _html = '';
            _html += '<div class="yeartitle box box_between box_i_center"><span>'+year+'</span><i class="nowbtn"></i></div>';
            _html += '<div class="yeardiv box_f1 box box_v">';
            for(var i = 0; i < 12; i++) {
                if(i%3==0)_html += '<div class="month_h box_f1 box box_around">';
                _html += monthone(year, i+1);
                if(i%3==2)_html += '</div>';
            }
            _html += '</div>';
            dom.innerHTML = _html;
            return dom;
        }
        //月份1-12
        function monthone(year,month) {
            var date = new Date();
            date.setFullYear(year, month, 0);
            var len = date.getDate(); 
            date.setFullYear(year, month - 1, 1);
            var week = date.getDay();
            var str = '<div class="moon box box_v box_between" year="'+year+'" month="'+month+'">';
            str += '<div class="moontitle"><span>'+month+'月</span></div>';
            str += '<div class="weekbar box box_around">';
            str += '    <i class="week td"><span class="h3">一</span></i>';
            str += '    <i class="week td"><span class="h3">二</span></i>';
            str += '    <i class="week td"><span class="h3">三</span></i>';
            str += '    <i class="week td"><span class="h3">四</span></i>';
            str += '    <i class="week td"><span class="h3">五</span></i>';
            str += '    <i class="week td"><span class="h3">六</span></i>';
            str += '    <i class="week td"><span class="h3">日</span></i>';
            str += '</div>';
            str += '<div class="moonday box_f1 box box_v box_around">';
            var d = 0;
            var s = (week == 0)?6:week-1;
            for(var i = 0; i < 6; i++) {
                str += '<div class="day_h box box_around">';
                for(var j = 0; j < 7; j++) {
                    if(i == 0 && j < s) {
                        str += '<i class="day td"><span></span></i>';
                    }else if(d < len){
                        d++;
                        if(year == mydate.getFullYear() && month == mydate.getMonth() + 1 && mydate.getDay() == d) {
                            str += '<i class="day td dayvalue now"><span class="h3">'+d+'</span></i>';
                        }else {
                            str += '<i class="day td dayvalue"><span class="h3">'+d+'</span></i>';
                        }
                    }else {
                        str += '<i class="day td"><span></span></i>';
                    }
                    
                }
                str += '</div>';
            }
            str += '</div></div>';
            return str;
        }
    },
    clear : function() {
        
    }
    
}
