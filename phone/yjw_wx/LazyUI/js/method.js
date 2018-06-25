LazyUI = function(back, LazyP) {
    var Lazy = function() {
        this.alert2 = alert2Fun;
        this.alert3 = alert3Fun;
        this.ip = ipFun;
        this.loading = loadingFun;
        this.closeLoading = closeLoadingFun;
        this.loading_t = null;
        this.POST = POSTFun;
        this.GET = GETFun;
        this.JSONP = JSONPFun;
        this.getGps = getGpsFun;
        this.getGpsName = getGpsNameFun;
        this.gpsToAmap = gpsToAmapFun;
        this.closeGps = closeGpsFun;
        //获取url参数
        this.geturlstr = responseFun;
        this.response = responseFun;
        this.openWin = openWinFun;
        this.sync = syncFun;
        this.androidActionSheet = androidActionSheetFun;
        this.iosActionSheet = iosActionSheetFun;
        this.picker = pickerFun;
        this.pickerDate = pickerDateFun;
        this.pickerTime = pickerTimeFun;
        this.pickerDateTime = pickerDateTimeFun;
        
        this.bounce = bounceFun;
        this.closeBounce = closeBounceFun;
        this.init = initFun;
        
        this.setParameter = setParameterFun;
        this.getParameter = getParameterFun;
        //刷新
        this.refresh = refreshFun;
        this.callBack = callBackFun;
        
        //日期格式转换
        this.autoFormat = autoFormatFun;
        this.format = formatFun;
        //暂无数据
        this.datanull = datanullFun;
        this.datanull2 = datanull2Fun;
        
        //获取字符串长度
        this.getStringByteLength = getStringByteLengthFun;
        
        //调用微信接口
        this.loadWxJs = loadWxJsFun;
    }
    function ipFun() {
        //获取url中的ip部分
        if(document.location.href.indexOf("DDS")!=-1) {
            return document.location.origin+"/DDS/"   
        }else {
            return document.location.origin;
        }
    }
    function responseFun(name) {
        if(name){
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var path = decodeURI(window.location.search);
            var r = path.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }else{
            return window.location;
        }
    }
    //刷新
    function refreshFun() {
        window.location.reload();
    }
    function initFun (back) {
        switch(lazy.browserType) {
            case "vitoios" :
                lazy.loadJsCss(lazy.url+"LazyUI/js/ios.js", function() {
                    commonFun();
                });
            break;
            case "vitoandroid" :
                lazy.loadJsCss(lazy.url+"LazyUI/js/android.js", function() {
                    commonFun();
                });
            break;
            
            case "weixin" :
                lazy.loadJsCss(["http://res.wx.qq.com/open/js/jweixin-1.0.0.js",lazy.url+"LazyUI/js/weixin.js"], function() {
                   //alert(456)
                	commonFun();
                	/*
                	var url = document.location;
                    var ip = "";
                    if (document.location.href.indexOf("DDS") != -1) {
                        ip = document.location.origin + "/DDS/"
                    } else {
                        ip = document.location.origin;
                    }
                    
                       lazy.GET(ip + "/wechat/weixinevent/jsapi.ht?url=" + url, function (data) {
                       var wxconfig=data.rows[0];
                     wx.config({
                            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                            appId: wxconfig.appId, // 必填，公众号的唯一标识
                            timestamp: wxconfig.timestamp, // 必填，生成签名的时间戳
                            nonceStr: wxconfig.nonceStr, // 必填，生成签名的随机串
                            signature: wxconfig.signature,// 必填，签名，见附录1
                            jsApiList: ['chooseImage', 'previewImage', 'uploadImage', 'getLocation','startRecord','stopRecord','uploadVoice','playVoice','stopVoice','onVoicePlayEnd'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                        });
                        wx.error(function (res) {
                            //alert(JSON.stringify(wxconfig));
                        });
                        wx.ready(function () {
                            commonFun();
                        });
                   }, function (e) {

                    }, null);
                    */
                },['js','js'])
            break;
            
            default :
                commonFun();
            break;
        }
        function commonFun() {
            lazy.loadJsCss(lazy.url+"common/property.js", function() {
                lazy.loadJsCss(lazy.url+"common/config.js", function() {
                    back&&back();
               });
            });
        }
    }
    function openWinFun(url) {
        window.location.href = url;
    }
    function loadingFun(_num, title, time) {
        //_num, title, time__num显示加载loding动画! 0-3不覆盖,a-c全覆盖__title标题___time显示时间'
        var loading = document.getElementById("loading");
        closeLoadingFun();
        loading = lazy.create("div", "box box_center box_i_center");
        loading.id = "loading";
        var num = (_num===undefined?0:_num)+'';
        var _html = '<div class="loadingtitle hidebgdiv lt_'+num+' '+(title?"showtitle":"hidetitle")+'">'+(title||"")+'</div>';
        if(num.match(/\D/)) {
            loading.style.backgroundColor = "#fff";
        }else {
            loading.style.backgroundColor = "none";
            _html = '<div class="loadingtitle showbgdiv lt_'+num+' '+(title?"showtitle":"hidetitle")+'">'+(title||"")+'</div>';
        }
        loading.innerHTML = _html;
        document.body.appendChild(loading);
        if(time) {
            this.loading_t = setTimeout(function() {
                closeLoadingFun();
            },time);
        }
    }
    function closeLoadingFun() {
        //'关闭加载loding动画!';
        if(this.loading_t)clearTimeout(this.loading_t)&&(this.loading_t=null);
        var loading = document.getElementById("loading");
        if(loading)document.body.removeChild(loading);
    }
    function syncFun(time, before, after) {
        //'同步前同步后';
        before&&before();
        var start = new Date();
        while(new Date() - start < 1000) {}
        after&&after();
    }
    function getGpsFun(back,bol) {
        //'获取gps， 第二个参数是否持续获取，默认不填';
        //<script type="text/javascript" src="http://webapi.amap.com/maps?v=1.3&key=a0efffe14f35b048afbd62d95e342d28&plugin=AMap.Geocoder"></script>
        if (navigator.geolocation){
            navigator.geolocation[bol?"watchPosition":"getCurrentPosition"](function(position) {
                if(back)back({"lat" : position.coords.latitude, "lng" : position.coords.longitude});
            },function(error) {
                switch(error.code){
                    case error.PERMISSION_DENIED:
                      lazy.alert2("用户不允许地理定位");
                      break;
                    case error.POSITION_UNAVAILABLE:
                      lazy.alert2("无法获取当前位置");
                      break;
                    case error.TIMEOUT:
                      lazy.alert2("操作超时");
                      break;
                    case error.UNKNOWN_ERROR:
                      lazy.alert2("获取gps未知错误");
                      break;
                } 
            });
        }else {
            lazy.alert2("浏览器定位不支持");
        }
    }
    function gpsToAmapFun(point, back) {
        //'gps转高德坐标系，必须引入高德的javascript';
        //
        if(lazy.browserType == "vitoandroid") {
            back(point);
            return;
        }
        //lat lng
        var lnglat = new AMap.LngLat(point.lng,point.lat);
        AMap.convertFrom(lnglat,'gps',function(status,result) {
            if(status == "complete") {
                var arr = (result.locations+"").split(",");
                back({"lat" : arr[1], "lng" : arr[0]});
            }else {
                lazy.alert2("转amap失败");
            }
        });
    }
    function getGpsNameFun(point, back) {
        //'高德坐标系获取实际位置，必须引入高德的javascript';
        //
        var geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: "all"
        });        
        geocoder.getAddress([point.lng, point.lat], function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                back(result);
            }
        });
    }
    function closeGpsFun() {
        navigator.geolocation.clearWatch();
    }
    function alert2Fun(str,obj) {
        //'str,obj   obj={direction:方向start center end , time: 整数不是毫秒数默认2， 2s , back : 回调函数}';
        obj||(obj = {});
        var _obj = {
            time : obj.time||2,
            direction : obj.direction||'center',
            back : obj.back
        }
        var alert2 = document.getElementById("alert2");
        if(alert2)document.body.removeChild(alert2);
        alert2 = lazy.create("div", 'box box_center box_i_'+_obj.direction);
        alert2.id = "alert2";
        alert2.innerHTML = '<div class="alert2title hh" style="-webkit-animation: alert2title_'+_obj.direction+' '+_obj.time+'s ease;">'+(typeof str == 'object'?JSON.stringify(str):str)+'</div>';
        document.body.appendChild(alert2);
        alert2.addEventListener("webkitAnimationEnd", function(){
            try {
                if(alert2)document.body.removeChild(alert2);
                _obj.back&&_obj.back();
            }catch(e) {}
        }, false); 
    }
    
    function alert3Fun(titile,titile2, _obj) {
        //yestitle yesfun notitle nofun
       var obj = _obj?_obj:{};
       var alertDiv = lazy.create("div","alertDiv3 box box_v");
       var _html = '<div class="box_f1"></div>';
       _html += '<div class="tanchu">';
       _html += '<div class="alertcontent1">';
       _html += '  <div class="alertsucc"></div>';
       _html += '  <div class="alerttip"><span style="font-size:0.9rem;">'+titile+'</span></div>';
        _html += '  <div class="alerttip2"><span class="span2">'+titile2+'</span></div>';
       _html += '  <div class="alertbutton box">';
       _html += '      <a class="alertbtn1 comcirm box_f1"><span>'+(obj.yestitle?obj.yestitle:"知道了")+'</span></a>';
       _html += '  </div>';
       _html += '</div>';
       _html += '</div>';
       _html += '<div class="box_f1"></div>';
       alertDiv.innerHTML = _html;
       
       document.body.appendChild(alertDiv);
       //事件
       alertDiv.getElementsByClassName("comcirm")[0].onclick = function() {
           if(obj.yesfun)obj.yesfun();
           document.body.removeChild(alertDiv);
       }
       
   }
    
    function pickerFun(arr, allback) {
        var thisObj = {};
        var back_arr = [];
        var picker = document.body.getElementsByClassName("picker")[0];
        if(picker)document.body.removeChild(picker);
        picker = lazy.create("div", 'picker mask box box_center box_i_end');
        var itemss = lazy.create("div", 'itemss');
        var itemhead = lazy.create("div", 'itemhead box box_between');
        var qx = lazy.create("div", 'qx');
        qx.innerHTML = '取消';
        var qd = lazy.create("div", 'qd');
        qd.innerHTML = '确定';
        itemhead.appendChild(qx);
        itemhead.appendChild(qd);
        itemss.appendChild(itemhead);
        var itemss_div = lazy.create("div", 'itemss_div box');
        itemss.appendChild(itemss_div);
        /////////
        lazy.for(arr, function(_arr,_i) {
            var el = pickerOne(_arr, _i, function(obj,i,_i) {
                back_arr[_i] = {
                    obj : obj,
                    i : i
                }
                thisObj.onchange&&thisObj.onchange(_i*1,back_arr[_i],back_arr);
            })
            itemss_div.appendChild(el);
        });
        thisObj.renderer = function(i, arr) {
            var items = itemss_div.getElementsByClassName("items")[i];
            if(items) {
                var el = pickerOne(arr, i, function(obj,i,_i) {
                    back_arr[_i] = {
                        obj : obj,
                        i : i
                    }
                    thisObj.onchange&&thisObj.onchange(_i*1,back_arr[_i],back_arr);
                })
                itemss_div.insertBefore(el, items);
                itemss_div.removeChild(items);
            }
        }
        //////////////////
        picker.appendChild(itemss);
        document.body.appendChild(picker);
        setTimeout(function () {
            picker.className = 'picker mask box box_center box_i_end mask_toggle';
            itemss.className = 'itemss itemss_toggle';
        },1);
        picker.onclick = function(event) {
            var name = event.target.className;
            if(name == 'qx' || name == 'qd' || name.indexOf('picker')!=-1) {
                (name == 'qd')&&allback&&allback(back_arr);
                picker.className = 'picker mask box box_i_end box_i_end';
                itemss.className = 'itemss';
                picker.addEventListener("webkitTransitionEnd", function(){
                    try{document.body.removeChild(picker);}catch(e){}
                }, false);
            }
            //alert(event.currentTarget);
        }
        return thisObj;
    }
    function pickerDateFun(back) {
        var picker = pickerFun(picker_date(),function(arr) {
            back(arr[0].obj.title+'-'+arr[1].obj.title+'-'+arr[2].obj.title);
        });
        picker.onchange = function(ii, obj, arr) {
            if(ii!=2) {
                var y = arr[0].obj.title;
                var m = arr[1].obj.title;
                var d = arr[2].obj.title;
                var len = new Date(y,m,0).getDate(0);
                var arr = [];
                for(var i = 0; i < len; i++) {
                    arr[i] = {title : (i+1)<10?'0'+(i+1):(i+1)};
                }
                picker.renderer(2,arr);
            }
        }
    }
    function pickerTimeFun(back) {
        pickerFun(picker_time(),function(arr) {
            back(arr[0].obj.title+':'+arr[1].obj.title);
        });
    }
    function picker_date() {
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth();
        var mc = m - 6;
        var d = date.getDate();
        var arr = [[],[],[]];
        var len = new Date(y,m+1,0).getDate(0);
        var dc = d - Math.ceil(len/2);
        
        for(var i = 0; i < len; i++) {
            if(i < 21) {
                var _y = y - 10;
                arr[0][i] = {title : _y+i};
            }
            if(i < 12) {
                var _m = mc + i;
                if(_m < 0)_m = 12 + _m;
                if(_m > 11)_m -= 12;
                arr[1][i] = {title : (_m+1)<10?'0'+(_m+1):(_m+1)};
            }
            var _d = dc + i;
            if(_d < 0)_d = len + _d;
            if(_d > len-1)_d -= len;
            arr[2][i] = {title : (_d+1)<10?'0'+(_d+1):(_d+1)};
        }
        return arr;
    }
    function picker_time() {
        var arr = [[],[]];
        for(var i = 0; i < 60; i++) {
            arr[1][i] = {title : i<10?'0'+i:i};
            if(i < 24) {
                arr[0][i] = {title : i<10?'0'+i:i};
            }
        }
        return arr;
    }
    function pickerDateTimeFun(back) {
        var arr = picker_date().concat(picker_time());
        var picker = pickerFun(arr,function(arr) {
            back(arr[0].obj.title+'-'+arr[1].obj.title+'-'+arr[2].obj.title+' '+arr[3].obj.title+':'+arr[4].obj.title);
        });
        picker.onchange = function(ii, obj, arr) {
            if(ii==0 || ii==1) {
                var y = arr[0].obj.title;
                var m = arr[1].obj.title;
                var d = arr[2].obj.title;
                var len = new Date(y,m,0).getDate(0);
                var arr = [];
                for(var i = 0; i < len; i++) {
                    arr[i] = {title : (i+1)<10?'0'+(i+1):(i+1)};
                }
                picker.renderer(2,arr);
            }
        }
    }
    function pickerOne(arr, i, back) {
        var items= lazy.create("div", 'items');
        var items_mask= lazy.create("div", 'items_mask');
        var items_div = lazy.create("div", 'items_div');
        lazy.for(arr, function(obj) {
            one(obj);
        });
        items.appendChild(items_mask);
        function one(obj) {
            var item = lazy.create("div", 'item slh');
            item.innerHTML = obj.title;
            items_div.appendChild(item);
        }
        items.appendChild(items_div);
        var nn = 7, y = 0, ty = 0, n = arr.length,
            z = Math.ceil((n-1)/2), nz = Math.ceil((nn-1)/2), 
            h = 2.5, cty = 0,xb = 0;
        cty = ty = (nz - z)*h;
        xb = nz - ty/h;
        back&&back(arr[xb],xb,i);
        items_div.style.transform = 'translate3d(0,'+ty+'rem,0)';
        lazy.touchEvent(items_mask, function(_x,_y) {
            y = _y/lazy.fontSize;
            items_div.style.webkitTransition = null;
        }, function(_x,_y) {
            items_div.style.transform = 'translate3d(0,'+(ty+_y/lazy.fontSize-y)+'rem,0)';
        }, function(_x,_y) {
            items_div.style.webkitTransition = 'transform 0.3s';
            ty += _y/lazy.fontSize - y;
            ty = parseInt(ty / 2.5) * 2.5;
            if(n <= nn) {
                var _h1 = cty - (n-z-1)*h;
                var _h2 = cty + z*h;
                if(ty < _h1) ty = _h1;
                else if(ty > _h2) ty = _h2;
            }else {
                if(ty < -(n-nz-1)*h) ty = -(n-nz-1)*h;
                else if(ty > nz*h) ty = nz*h;
            }
            xb = nz - ty/h;
            back&&back(arr[xb],xb,i);
            items_div.style.transform = 'translate3d(0,'+ty+'rem,0)';
        });
        return items;
    }
    function androidActionSheetFun(arr, back) {
        //'弹出式菜单android(arr)  arr=[{"title":标题, onclick:""},{"title":标题,onclick:""}';
        actionSheetFun(arr,back, 'android');
    }
    function iosActionSheetFun(arr, back) {
        //'弹出式菜单android(arr)  arr=[{"title":标题, onclick:""},{"title":标题,onclick:""}';
        actionSheetFun(arr,back, 'ios');
    }
    function actionSheetFun(arr,back, type) {
        var actionSheet = document.body.getElementsByClassName("actionSheet")[0];
        if(actionSheet)document.body.removeChild(actionSheet);
        if(type=='ios')actionSheet = lazy.create("div", 'actionSheet mask box box_center box_i_end');
        else actionSheet = lazy.create("div", 'actionSheet box box_center box_i_center');
        var items = lazy.create("div", 'items_'+type);
        lazy.for(arr, function(obj,i) {
            one(obj,i);
        });
        function one(obj,i) {
            var item = lazy.create("a", 'item slh');
            item.innerHTML = obj.title;
            item.onclick = function() {
               back&&back(obj,i);
            }
            items.appendChild(item);
        }
        actionSheet.appendChild(items);
        document.body.appendChild(actionSheet);
        setTimeout(function () {
            if(type=='ios')actionSheet.className = 'actionSheet mask box box_center box_i_end mask_toggle';
            else actionSheet.className = 'actionSheet mask box box_center box_i_center mask_toggle';
            items.className = 'items_'+type+' items_'+type+'_toggle';
        },1);
        actionSheet.onclick = function() {
            if(type=='ios')actionSheet.className = 'actionSheet mask box box_center box_i_end';
            else actionSheet.className = 'actionSheet mask box box_center box_i_center';
            items.className = "items_"+type;
            items.addEventListener("webkitTransitionEnd", function(){
                try{document.body.removeChild(actionSheet);}catch(e){}
            }, false);
        }
    }
    function bounceFun(_obj) {
        var obj = _obj||{};
        var bounce_loading = null;
        obj.up&&(lazy.scrolls.bounce_up = function(H,T,h) {
            if(H == T + h) {loading('up');obj.up(H);}
        });
        obj.down&&(lazy.scrolls.bounce_down = function(H,T,h) {
            if(T==0) {loading('down');obj.down(H);}
        });
        function loading(type) {
            if(obj.loading !== false) {
                closeBounceFun();
                bounce_loading = lazy.create('div','#bounce_loading');
                bounce_loading.innerHTML = '<div class=""h3>数据加载中...</div>';
                if(type=='up')document.body.appendChild(bounce_loading);
                else document.body.insertBefore(bounce_loading, document.body.firstChild)
            }
        }
    }
    function closeBounceFun() {
        var bounce_loading = document.getElementById('bounce_loading');
        if(bounce_loading) document.body.removeChild(bounce_loading);
    }
    function JSONPFun(url, back1, back2, num) {
        //'jsonp请求，路径, 成功回调，加载动画int 默认为1，0 不显示';
        if(num!=null)loadingFun(num===undefined?0:num, '加载中...');
        lazy.ajax({
            url : url,
            dataType : 'jsonp',
            success : function(data) {
                if(num)closeLoadingFun();
                if(data.isSucceed) {
                    back1&&back1(data);
                }else {
                    back2?back2('message:'+data.message):alert2Fun('message:'+data.message);
                }
            },
            error : function(str) {
                if(num!=null)loadingFun(num, '加载中...');
                back2&&back2(str);
            }
        });
    }
    function POSTFun(url, back1, back2, num) {
        //'post请求，路径，成功回调，失败回调，加载动画int 默认为1，0 不显示';
        GP(url, 'POST', back1, back2, num===undefined?0:num);
    }
    function GETFun(url, back1, back2, num) {
        //'get请求，路径，成功回调，失败回调，加载动画int 默认为1，0 不显示';
        GP(url, 'GET', back1, back2, num);
    }
    function GP(url, type, back1, back2, num) {
        if(num!=null)loadingFun(num, '加载中...');
        lazy.ajax({
            url : url,
            type : type,
            success : function(str) {
                if(num!=null)closeLoadingFun();
                
                try {
                    var data = JSON.parse(str);
                    
                    if(data.isSucceed) {
                        back1&&back1(data);
                    }else {
                        if(data.message == "noLogin") {
                            //lazy.goLogin();
                        }else {
                            back2?back2('message:'+data.message):alert2Fun('message:'+data.message);
                        }
                    }
                }catch(e) {
                    back2?back2(str):alert2Fun(str);
                }
            },
            error : function(str) {
                if(num!=null)closeLoadingFun();
                back2?back2(str):alert2Fun(str);
            }
        });
    }
    function setParameterFun(name, json) {
        localStorage.setItem(name, JSON.stringify(json));
    }
    function getParameterFun(name) {
        if (localStorage.getItem(name)) {
            var json = localStorage.getItem(name);
            return JSON.parse(json);
        } else {
            return null;
        }
    }
    //ios和android回调函数
    function callBackFun(back) {
        var funname = lazy.getAutoId();
        window[funname] = back;
        return funname;
    }
    //日期格式转换
    function autoFormatFun(time) {
        var ttime = new Date(time);
        var nowtime = new Date();
        if(ttime.getFullYear() != nowtime.getFullYear()) {
            return formatFun(time, "yyyy-MM-dd");
        }else if(ttime.getMonth() != nowtime.getMonth()) {
            return formatFun(time, "MM-dd");
        } if(ttime.getDate() != nowtime.getDate()) {
            return formatFun(time, "MM-dd");
        }else {
            return formatFun(time, "HH:mm");
        }
    }
    function formatFun(time, format) {
        var t = new Date(time);
        var tf = function(i) {
            return (i < 10 ? "0" :"") + i;
        };
        return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a) {
            switch (a) {
              case "yyyy":
                return tf(t.getFullYear());
                break;
    
              case "MM":
                return tf(t.getMonth() + 1);
                break;
    
              case "mm":
                return tf(t.getMinutes());
                break;
    
              case "dd":
                return tf(t.getDate());
                break;
    
              case "HH":
                return tf(t.getHours());
                break;
    
              case "ss":
                return tf(t.getSeconds());
                break;
            }
        }); 
    }
    
    //暂无数据
    function datanullFun(_title, _pel) {
        var pel = _pel?_pel:document.body;
        var title = _title?_title:"暂无数据!";
        var zwsjXT = lazy.create("div", "zwsjXT");
        zwsjXT.innerHTML = '<span>'+title+'</span>';
        pel.appendChild(zwsjXT);
        var obj = {
            "el" : zwsjXT,
            "close" : function() {
                pel.removeChild(zwsjXT);
            }
        }
        return obj;
    }
    function datanull2Fun( _pel) {
        var pel = _pel?_pel:document.body;
        console.log(pel)
        var zwsjXT = lazy.create("div", "zwsjXT");
        zwsjXT.innerHTML = '<span>  </span>';
        zwsjXT.style.background = 'url("../LazyUI/images/datanull.png") no-repeat center';
        zwsjXT.style.backgroundSize = '8rem';
        zwsjXT.style.height = '20rem';
        zwsjXT.style.margin = "0 auto";
        pel.appendChild(zwsjXT);
        var obj = {
            "el" : zwsjXT,
            "close" : function() {
                pel.removeChild(zwsjXT);
            }
        }
        return obj;
    }
    //获取字符串长度
    function getStringByteLengthFun (val) {
        var Zhlength = 0;
        var Enlength = 0;
        for (var i = 0; i < val.length; i++) {
            if (val.substring(i, i + 1).match(/[^\x00-\xff]/gi) != null) Zhlength += 1; else Enlength += 1;
        }
        return Zhlength * 2 + Enlength;
    }
    function loadWxJsFun(back){
    	/*
        lazy.loadJsCss(["http://res.wx.qq.com/open/js/jweixin-1.0.0.js",lazy.url+"LazyUI/js/weixin.js"], function() {
            */
            var url = document.location;
            var ip = "";
            
            if (document.location.href.indexOf("DDS") != -1) {
                ip = document.location.origin + "/DDS/"
            } else {
                ip = document.location.origin;
            }
               lazy.GET(ip + "/wechat/weixinevent/jsapi.ht?url=" + url, function (data) {
            	   
            	  // alert(1)
                 //lazy.GET("http://vito.tunnel.qydev.com/lazy/getWeixin.php?url="+encodeURI(document.location),function(data){
               var wxconfig=data.rows[0];
             wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: wxconfig.appId, // 必填，公众号的唯一标识
                    timestamp: wxconfig.timestamp, // 必填，生成签名的时间戳
                    nonceStr: wxconfig.nonceStr, // 必填，生成签名的随机串
                    signature: wxconfig.signature,// 必填，签名，见附录1
                    jsApiList: ['chooseImage', 'previewImage', 'uploadImage','getLocation','startRecord','stopRecord','uploadVoice','playVoice','stopVoice','onVoicePlayEnd'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });
                wx.error(function (res) {
                    alert(JSON.stringify(res));
                    alert(JSON.stringify(wxconfig));
                });
                wx.ready(function () {
                	commonFun()
                	
                });
                back()
           }, function (e) {
                alert(e)
            }, null);
        //})
    }
    
    //-----------------------------这是分隔符----------------------------------
    Lazy.prototype = LazyP;
    window.lazy = new Lazy();
    //lazy.setFontSize();
    initFun(back);
}