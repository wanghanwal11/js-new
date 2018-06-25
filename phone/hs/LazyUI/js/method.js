LazyUI = function(back, LazyP) {
    var Lazy = function() {
        this.hh = "sss";
        this.alert2 = alert2Fun;
        this.alert3 = alert3Fun;
        this.ip = ipFun;
        this.loading = loadingFun;
        this.closeLoading = closeLoadingFun;
        this.POST = POSTFun;
        this.GET = GETFun;
        this.JSONP = JSONPFun;
        this.ajax = ajaxFun;
        this.getGps = getGpsFun;
        this.getGpsName = getGpsNameFun;
        this.gpsToAmap = gpsToAmapFun;
        this.closeGps = closeGpsFun;
        this.format = formatFun;
        this.openWin = openWinFun;
        this.init = initFun;
        this.callBack = callBackFun;
        //数据缓存
        this.setParameter = setParameterFun;
        this.getParameter = getParameterFun;
        
        this.goBack = goBackFun;
        
        this.swipe = swipeFun;
    }
    function swipeFun(obj){
        
    }
    
    //
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
            
            default :
                commonFun();
            break;
        }
        function commonFun() {
            lazy.loadJsCss(lazy.url+"common/property.js", function() {
                lazy.loadJsCss(lazy.url+"common/config.js", function() {
                    if(back)back();
                });
            });
        }
        
    }
    function ipFun() {
        this.help = '获取url中的ip部分';
        if(document.location.href.indexOf("DDS")!=-1) {
            return document.location.origin+"/DDS/"   
        }else {
            return document.location.origin;
        }
    }
    function loadingFun(_num, title) {
        this.help = '显示加载loding动画! 0-9不覆盖,a-z全覆盖';
        var loading = document.getElementById("loading");
        if(loading==undefined) {
            loading = lazy.create("div", "#loading");
            loading.id = "loading";
            var _html = '<div class="loading ub ub-ver"><div class="ub-f1"></div><div class="loadingcondiv">';
            _html += '<div class="loadingtitle lt"></div>';
            _html += '</div><div class="ub-f1"></div></div>';
            loading.innerHTML = _html;
            document.body.appendChild(loading);
        }else {
            loading.style.display = 'block';
        }
        var num = (_num || 0) + '';
        var loadingtitle = loading.getElementsByClassName('loadingtitle')[0];
        var classname = '';
        if(num.match(/\D/)) {
            //字母覆盖
            loading.style.backgroundColor = "#fff";
            classname = 'loadingtitle zm';
        }else {
            loading.style.backgroundColor = "none";
            classname = 'loadingtitle sz';
        }
        if(title) {
            loadingtitle.className = classname + ' lt_'+num+' title';
            loadingtitle.innerHTML = title;
        }else {
            loadingtitle.className = classname + ' lt_'+num+' notitle';
            loadingtitle.innerHTML = '';
        }
    }
    function closeLoadingFun() {
        this.help = '关闭加载loding动画!';
        var loading = document.getElementById("loading");
        if(loading)loading.style.display = 'none';
    }
    function getGpsFun(back,bol) {
        this.help = '获取gps， 第二个参数是否持续获取，默认不填';
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
        this.help = 'gps转高德坐标系，必须引入高德的javascript';
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
        this.help = '高德坐标系获取实际位置，必须引入高德的javascript';
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
    function alert2Fun(str) {
        alert(str);
    }
    function alert3Fun(obj){
        if(typeof obj != "string") {
            obj = JSON.stringify(obj);
        }
        var alert2 = lazy.create("div","alert2");
        alert2.innerHTML = '<div class="alert2content"><span>'+obj+'</span></div>';
        document.body.appendChild(alert2);
        setTimeout(function() {
            document.body.removeChild(alert2);
        },900);
    }
    function JSONPFun(url, back1, back2, num) {
        this.help = 'jsonp请求，路径, 成功回调，加载动画int 默认为1，0 不显示';
        if(num!=null)loadingFun(num===undefined?0:num, '加载中...');
        ajaxFun({
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
        this.help = 'post请求，路径，成功回调，失败回调，加载动画int 默认为1，0 不显示';
        GP(url, 'POST', back1, back2, num===undefined?0:num);
    }
    function GETFun(url, back1, back2, num) {
        this.help = 'get请求，路径，成功回调，失败回调，加载动画int 默认为1，0 不显示';
        GP(url, 'GET', back1, back2, num==undefined?0:num);
    }
    function GP(url, type, back1, back2, num) {
        if(num!=null)loadingFun(num, '加载中...');
        ajaxFun({
            url : url,
            type : type,
            success : function(str) {
                if(num!=null)closeLoadingFun();
                try {
                    var data = JSON.parse(str);
                    if(data.isSucceed) {
                        back1(data)//&&back1(data);
                    }else {
                        if(data.message == "noLogin") {
                            //lazy.goLogin();
                        }else {
                            back2?back2('message:'+data.message):alert3Fun('message:'+data.message);
                        }
                    }
                }catch(e) {
                    back2?back2(str):alert3Fun(str);
                }
            },
            error : function(str) {
                if(num!=null)closeLoadingFun();
                back2?back2(str):alert2Fun(str);
            }
        });
    }
    function ajaxFun(obj) {
        this.help = 'ajax请求';
        obj = {
            url : obj.url || '',
            type : obj.type || 'GET',
            dataType : obj.dataType || '', //目前只有jsonp
            error : obj.error || function(str) {},
            success : obj.success || function(str) {}
        }
        if(obj.dataType == 'jsonp') {
            var name = lazy.getAutoId();
            window[name] = function(obj) {
                back1&&back1(obj);
            }
            var f = (obj.url.indexOf('?')==-1?'?':'&');
            lazy.loadJsCss(obj.url+f+'jsoncallback='+name, function() {},'js');
        }else {
            xmlhttp = new XMLHttpRequest();
            if(obj.type == 'POST') {
                var data = obj.url.replace(/.*?\?/,"");
                var url = obj.url.replace(/\?.*/,"");
                xmlhttp.open("POST",url,true);
                xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                xmlhttp.send(data);
            }else {
                xmlhttp.open('GET', obj.url, true);
                xmlhttp.send();
            }
            xmlhttp.onreadystatechange=function() {
              if(xmlhttp.readyState==4 && xmlhttp.status==200) {
                  obj.success(xmlhttp.responseText);
              }else if(xmlhttp.status==0 || (xmlhttp.status+"").match(/(4|5)\d\d/)){
                  obj.error(xmlhttp.status);
              }
            }
        }
        
    }
    function formatFun(time, format) {
        this.help = '时间转换';
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
    //打开页面
    function openWinFun(url) {
        this.help = '打开页面';
        window.location.href = url;
    }
    //ios和android回调函数
    function callBackFun(back) {
        var funname = lazy.getAutoId();
        window[funname] = back;
        return funname;
    }
    //数据缓存
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
    //返回
    //返回
    function goBackFun(){
        window.history.go(-1);
    }
    
     
    //-----------------------------这是分隔符----------------------------------
    Lazy.prototype = LazyP;
    window.lazy = new Lazy();
    //lazy.setFontSize();
    initFun(back)
}