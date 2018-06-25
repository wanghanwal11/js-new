lazy.plugins.calendar_year = {
    
    init : function(el,data) {
        //
        var mydate = (data.date && new Date(data.date)) || new Date();
        var W = document.body.clientWidth;
        var domArr = [];
        var listener_obj = null;
        //
        renderer(mydate.getFullYear(), 0);
        renderer(mydate.getFullYear(), 1);
        renderer(mydate.getFullYear(), 2);
        renderer(mydate.getFullYear(), 3);
        renderer(mydate.getFullYear(), 4);
        //渲染
        function renderer(year, num) {
            switch(num) {
                case 0 :
                    domArr[0] = yearone(year - 2, 'leftDom');
                    break;
                case 1 :
                    domArr[1] = yearone(year - 1, 'leftDom');
                    break;
                case 2 :
                    domArr[2] = yearone(year, 'centerDom');
                    break;
                case 3 :
                    domArr[3] = yearone(year + 1, 'rightDom');
                    break;
                case 4 :
                    domArr[4] = yearone(year + 2, 'rightDom');
                    break;
                default :
                    return;
                    break;
            }
            addEvent(domArr[num]) 
            el.appendChild(domArr[num]);
        }
        //移除
        function clear(num, year) {
            listener_obj = null;
            if(domArr[num])domArr[num].parentNode.removeChild(domArr[num]);
            if(num == 0) {
                domArr.push(0);
                domArr.shift();
                renderer(year, 4);
            }else if(num == 4) {
                domArr.unshift(0);
                domArr.pop();
                renderer(year, 0);
            }
        }
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
                el.innerHTML = '';
                renderer(mydate.getFullYear(), 0);
                renderer(mydate.getFullYear(), 1);
                renderer(mydate.getFullYear(), 2);
                renderer(mydate.getFullYear(), 3);
                renderer(mydate.getFullYear(), 4);
            }
            lazy.touchEvent({
                dom : dom,
                touchstart : function(obj) {
                    
                    if(listener_obj) {
                        listener();
                    }
                    
                    x = obj.x;
                    c = 0;
                    domArr[0].style.webkitTransition = '';
                    domArr[1].style.webkitTransition = '';
                    domArr[2].style.webkitTransition = '';
                    domArr[3].style.webkitTransition = '';
                    domArr[4].style.webkitTransition = '';
                },
                touchmove : function(obj) {
                    obj.event.preventDefault();
                    
                    c = parseInt(obj.x - x);
                    domArr[1].style.left = (-W + c) + "px";
                    domArr[2].style.left = c + "px";
                    domArr[3].style.left = (W + c) + "px";
                },
                touchend : function(obj) {
                    //year box box_v box_between
                    var C = parseInt((c/W)*100);
                    var self = event.currentTarget;
                    var year = parseInt(self.getAttribute('year'));
                    if(C > 1) { //you
                        
                        domArr[1].style.left = null;
                        domArr[1].style.webkitTransition = 'left 0.4s';
                        domArr[1].className = 'year box box_v box_between centerDom';
                        
                        domArr[2].style.left = null;
                        domArr[2].style.webkitTransition = 'left 0.4s';
                        domArr[2].className = 'year box box_v box_between rightDom';
                        
                        listener_obj = {
                            dom : domArr[2],
                            num : 4,
                            year : year - 1
                        }
                        domArr[2].addEventListener("webkitTransitionEnd", listener);
                        
                        
                        //
                    }else if(C < -1) { //zuo
                        
                        domArr[3].style.left = null;
                        domArr[3].style.webkitTransition = 'left 0.4s';
                        domArr[3].className = 'year box box_v box_between centerDom';
                        
                        domArr[2].style.left = null;
                        domArr[2].style.webkitTransition = 'left 0.4s';
                        domArr[2].className = 'year box box_v box_between leftDom';
                        
                        
                        listener_obj = {
                            dom : domArr[2],
                            num : 0,
                            year : year + 1
                        }
                        domArr[2].addEventListener("webkitTransitionEnd", listener);
                        
                    }
                }
            }); 
            
        }
        
        function listener() {
            listener_obj.dom.removeEventListener("webkitTransitionEnd", listener);
            if(listener_obj)clear(listener_obj.num, listener_obj.year);
        }
        //年
        function yearone(year, domName) {
            var dom = lazy.create('div','year box box_v box_between '+domName+'', {
                year : year
            });
            var _html = '';
            _html += '<div class="yeartitle box box_between box_i_center color"><span>'+year+'</span><i class="nowbtn"></i></div>';
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
            str += '<div class="moontitle color"><span>'+month+'月</span></div>';
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
