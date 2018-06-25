lazy.plugins.calendar_month = {
    
    init : function(el,data) {
        //
        var mydate = (data.date && new Date(data.date)) || new Date();
        var W = document.body.clientWidth;
        var domArr = [];
        var listener_obj = null;
        var c_date = mydate;
        var warnarr = [];
        var Hang = 1;
        //
        var _html = '';
        var zw = lazy.create('div','calendar_month_zw');
        var titlediv = lazy.create('div','titlediv box box_i_center');
        _html += '<div class="monthbtn box box_i_center"><div><span class="titlemonth color">'+(mydate.getMonth()+1)+'</span></div>';
        _html += '<div class="titlespan box box_v box_around"><span class="h1 titleyear">'+mydate.getFullYear()+'</span><span class="h1 color">月</span></div></div>';
        _html += '<div class="box_f1 box box_end"><i class="nowbtn btn"></i><i class="menubtn btn"></i></div>';
        titlediv.innerHTML = _html;
        var titlemonth = titlediv.getElementsByClassName("titlemonth")[0];
        var titleyear = titlediv.getElementsByClassName("titleyear")[0];
        titlediv.getElementsByClassName("nowbtn")[0].onclick = function() {
            if(listener_obj) {
                listener();
            }
            monthall.innerHTML = '';
            var nowdate = new Date();
            monthone(upmonth(nowdate,-2), 0);
            monthone(upmonth(nowdate,-1), 1);
            monthone(upmonth(nowdate,1), 3);
            monthone(upmonth(nowdate,2), 4);
            monthone(nowdate, 2);
            setTitle(nowdate);
            data.warn(warnarr);
            
        }
        titlediv.getElementsByClassName("menubtn")[0].onclick = function() {
            data.onmenu && data.onmenu(c_date);
        }
        titlediv.getElementsByClassName("monthbtn")[0].onclick = function() {
            data.onchangeyear && data.onchangeyear(c_date);
        }
        
        var weekdiv = lazy.create('div','weekdiv box box_around');
        _html = '<i><span class="h2">一</span></i><i><span class="h2">二</span></i><i><span class="h2">三</span></i><i><span class="h2">四</span></i><i><span class="h2">五</span></i><i><span class="h2">六</span></i><i><span class="h2">日</span></i>';
        weekdiv.innerHTML = _html;
        el.appendChild(zw);
        el.appendChild(titlediv);
        el.appendChild(weekdiv);
        var monthall = lazy.create('div','monthall');
        el.appendChild(monthall);
        monthone(upmonth(mydate,-2), 0);
        monthone(upmonth(mydate,-1), 1);
        monthone(upmonth(mydate,1), 3);
        monthone(upmonth(mydate,2), 4);
        monthone(mydate, 2);
        
        var plugin = lazy.create('div','calendar_plugin');
        el.appendChild(plugin);
       // titlediv.innerHTML = mydate.getFullYear()+"/"+(mydate.getMonth()+1);
        function monthone(mydate, num) {
            //
            var thiddate = new Date();
            var newdate = new Date();
            newdate.setFullYear(mydate.getFullYear(), mydate.getMonth() + 1, 0);
            var len = newdate.getDate(); 
            newdate.setFullYear(mydate.getFullYear(), mydate.getMonth(), 1);
            var week = newdate.getDay();
            
            var monthdiv = null;
            if(num == 0 || num == 1) {
                monthdiv = lazy.create('div','monthdiv box box_v leftDom', {
                    datestr : mydate.getFullYear()+'/'+(mydate.getMonth() + 1)+'/1'
                });
            }else if(num == 3 || num == 4){
                monthdiv = lazy.create('div','monthdiv box box_v rightDom', {
                    datestr : mydate.getFullYear()+'/'+(mydate.getMonth() + 1)+'/1'
                });
            }else {
                monthdiv = lazy.create('div','monthdiv box box_v centerDom', {
                    datestr : mydate.getFullYear()+'/'+(mydate.getMonth() + 1)+'/1'
                });
            }
            
            var d = 0, d1 = 0, str = '';
            //计算上个月日期
            var upmydate = upmonth(mydate, -1);
            var upmydate0 = new Date();
            upmydate0.setFullYear(upmydate.getFullYear(), upmydate.getMonth() + 1, 0);
            var d0 = upmydate0.getDate(); 
            //
            var s = (week == 0)?6:week-1;
           //alert(d0+"  "+upmydate0.getMonth());
            d0-=(s-1);
            for(var i = 0; i < 6; i++) {
                str += '<div class="day_h box box_i_center box_around">';
                for(var j = 0; j < 7; j++) {
                    if(i == 0 && j < s) {
                        str += '<i class="day td daynull"><span class="h0">'+d0+'</span></i>';
                        d0++;
                    }else if(d < len){
                        d++;
                        var name = mydate.getFullYear()+"/"+(mydate.getMonth() + 1)+"/"+d;
                        var idname = name.replace(/\//g,'');
                        if(mydate.getFullYear() == thiddate.getFullYear() && mydate.getMonth() == thiddate.getMonth() && thiddate.getDay() == d) {
                            Hang = i + 1;
                            str += '<i hang="'+(i+1)+'" class="day td dayvalue now bgcolor" id="'+idname+'" datestr="'+name+'"><span class="h0">'+d+'</span></i>';
                        }else {
                            str += '<i hang="'+(i+1)+'" class="day td dayvalue" id="'+idname+'" day="'+d+'" datestr="'+name+'"><span class="h0">'+d+'</span></i>';
                        }
                    }else {
                        d1++;
                        str += '<i class="day td daynull"><span class="h0">'+d1+'</span></i>';
                    }
                    
                }
                str += '</div>';
            }
            domArr[num] = monthdiv;
            monthdiv.innerHTML = str;
            addEvent(monthdiv);
            monthall.appendChild(monthdiv);
            var list = monthdiv.getElementsByClassName("dayvalue");
            for(var i = 0; i < list.length; i++) {
                list[i].onclick = function() {
                    Hang = parseInt(this.getAttribute('hang'));
                    el.getElementsByClassName('dayvalue_click')[0] && (el.getElementsByClassName('dayvalue_click')[0].className = "day td dayvalue"); 
                    this.className = "day td dayvalue dayvalue_click";
                    c_date = new Date(this.getAttribute("datestr"));
                    data.onchange && data.onchange(c_date);
                }
            }
        }
        //计算上个月
        function upmonth(date,num) {
            var _date = new Date();
            //跨年
            var c = date.getMonth() + num;
            if(c < 0) {
                _date.setFullYear(date.getFullYear() - 1, 12 + c, 1);
            }else if(c > 11) {
                _date.setFullYear(date.getFullYear() + 1, c - 12, 1);
            }else {
                _date.setFullYear(date.getFullYear(), c, 1);
            }
            return _date;
        }
        //事件
        function addEvent(dom) {
            var x = c = 0;
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
                    var C = parseInt((c/W)*100);
                    var self = event.currentTarget;
                    var datestr = self.getAttribute('datestr');
                    if(C > 1) { //you
                        domArr[1].style.left = null;
                        domArr[1].style.webkitTransition = 'left 0.4s';
                        domArr[1].className = 'monthdiv box box_v centerDom';
                        
                        domArr[2].style.left = null;
                        domArr[2].style.webkitTransition = 'left 0.4s';
                        domArr[2].className = 'monthdiv box box_v rightDom';
                        listener_obj = {
                            dom : domArr[2],
                            num : 4,
                            date : upmonth(new Date(datestr),-3)
                        }
                        setTitle(upmonth(new Date(datestr),-1));
                        domArr[2].addEventListener("webkitTransitionEnd", listener);
                        //
                    }else if(C < -1) { //zuo
                        domArr[3].style.left = null;
                        domArr[3].style.webkitTransition = 'left 0.4s';
                        domArr[3].className = 'monthdiv box box_v centerDom';
                        
                        domArr[2].style.left = null;
                        domArr[2].style.webkitTransition = 'left 0.4s';
                        domArr[2].className = 'monthdiv box box_v leftDom';
                        listener_obj = {
                            dom : domArr[2],
                            num : 0,
                            date : upmonth(new Date(datestr),3)
                        }
                        setTitle(upmonth(new Date(datestr),1));
                        domArr[2].addEventListener("webkitTransitionEnd", listener);
                        
                    }
                }
            }); 
        }
        function listener() {
            listener_obj.dom.removeEventListener("webkitTransitionEnd", listener);
            if(listener_obj)clear(listener_obj.num, listener_obj.date);
        }
        function setTitle(_mydate) {
            titlemonth.innerHTML = _mydate.getMonth()+1;
            titleyear.innerHTML = _mydate.getFullYear();
            
        }
        //移除
        function clear(num, date) {
            //console.log(date.getFullYear() +"  "+ date.getMonth());
            listener_obj = null;
            if(domArr[num])domArr[num].parentNode.removeChild(domArr[num]);
            if(num == 0) {
                domArr.push(0);
                domArr.shift();
                monthone(date, 4);
            }else if(num == 4) {
                domArr.unshift(0);
                domArr.pop();
                monthone(date, 0);
            }
        }
        //添加异常点
        data.warn = function(arr) {
            warnarr = arr;
            lazy.for(arr, function(val) {
                var date = new Date(val);
                var name = date.getFullYear()+""+(date.getMonth() + 1)+""+date.getDate();
                if(document.getElementById(name)) {
                    var warndiv = lazy.create('div','warn');
                    document.getElementById(name).appendChild(warndiv);
                }
            });
           
        }
        //渲染其他控件
        if(data.plugin) {
            setData(data.plugin, function(_el, _obj) {
                var y = 0, c = 0, cg = 0;
                plugin.appendChild(_el);
                lazy.touchEvent({
                    dom : plugin,
                    touchstart : function(obj) {
                        y = obj.y;
                        c = 0;
                        cg = 0;
                        plugin.style.webkitTransition = null;
                    },
                    touchmove : function(obj) {
                        obj.event.preventDefault();
                        //monthall
                        c = parseInt(obj.y - y);
                        cg = c / 18.5* (Hang - 1) * 3;
                        console.log(c +"   " +24 * lazy.fontSize);
                        //Hang
                        if(plugin.className.indexOf("calendar_plugin_a")==-1) {
                            if(c >= 0) c = 0.5 * lazy.fontSize;
                            plugin.style.top = (24 * lazy.fontSize + c) + 'px';
                            //
                            monthall.style.top = (6 * lazy.fontSize + cg) + 'px';
                        }else {
                            if(c <= 0) c = 0;
                            plugin.style.top = (9 * lazy.fontSize + c) + 'px';
                        }
                        
                    },
                    touchend : function(obj) {
                        if(c>-2 && c < 2)return;
                        plugin.style.top = null;
                        monthall.style.top = null;
                        plugin.style.webkitTransition = 'top 0.3s';
                        monthall.style.webkitTransition = 'top 0.3s';
                        if(c < -10) {//上
                            plugin.className = "calendar_plugin calendar_plugin_a";
                            monthall.style.top = (6 - (Hang-1)*3) + 'rem';
                        }else{ //下
                            plugin.className = "calendar_plugin";
                        }
                    }
                });
            });
        }
        
    },
    clear : function() {
        
    }
    
}
