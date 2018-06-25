LazyUI = function(back, LazyP) {
    window.$ = function(a){
            var c,
            d,
            e,
            f;
        if ("#" == a[0])
            try {
                return document.querySelector(a)
            } catch(b) {
                return document.getElementById(a.replace(/\#/, ""))
            }
        else
            try {
                return document.querySelectorAll(a)
            } catch(b) {
                if ("." == a[0])
                    return document.getElementsByClassName(a.replace(/\./, ""));
                if (a.match(/\[.*\]/)) {
                    for ( c = a.replace(/\]/, "=").replace(/\[/, "=").split("="),
                    d = document.getElementsByTagName(c[0]),
                    e = [],
                    f = 0; f < d.length; f++)
                        d[f].getAttribute("'" + c[1] + "'") == c[2] && e.push(d[f]);
                    return e
                }
                return document.getElementsByTagName(a)
            }
        };
    var Lazy = function() {
        this.alert = alertFun;
        this.alert2 = alert2Fun;
        this.alert3 = alert3Fun;
        this.alertCode = alertCodeFun;
        this.ip = ipFun;
        this.loading = loadingFun;
        this.closeLoading = closeLoadingFun;
        this.loading_t = null;
        this.POST = POSTFun;
        this.GET = GETFun;
        this.lbh_GET = LBHGETFun;
        this.mapGET = MAPGETFun;
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
        this.picker2 = pickerFun2;
        this.bounce = bounceFun;
        this.closeBounce = closeBounceFun;
        this.stopBounce = stopBounceFun;
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
        
        //调用微信接口
        this.loadWxJs = loadWxJsFun;
         //拍照
        this.pcstartPhoto = pcstartPhotoFun;
        //显示图片
        this.showImage = showImageFun;
         //数据加载
        this.URLRequest = URLRequestFun;
        
        this.touchEvent2 = touchEvent2Fun;
        
        //获取图片路径
        this.getImagePx = getImagePxFun;
        
        //获取字符串长度
        this.getStringByteLength = getStringByteLengthFun;
        this.clearStr = clearStrFun;
        
        //返回
        this.goback = gobackFun;
        //刷新
        this.isrefresh = isrefreshFun
    }
    function gobackFun(val){
        window.history.go(val);
    }
    function isrefreshFun(){
         var isPageHide = false; 
          window.addEventListener('pageshow', function () { 
            if (isPageHide) { 
              window.location.reload(); 
            } 
          }); 
          window.addEventListener('pagehide', function () { 
            isPageHide = true; 
          }); 
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
    function clearStrFun(str, n) {
        if(n==1) {
           return str = str.replace(/\<([a-z]*?)\s.*?\>/g, function(str,str2) {
                if(str.indexOf("<img")==-1) {
                    return '<'+str2+'>';
                }else {
                    return str;
                }
            }); 
        }else if(n==2) {
            return str = str.replace(/\<([a-z]*?)\s.*?\>/g, function(str,str2) {
                if(str.indexOf("<img")==-1) {
                    return '<'+str2+'>';
                }else {
                    //str = str.replace(/\\/g,"/").replace(/\=\".*?\.\.(.*?)\"/,'="11111111$1"');
                    var w = document.body.clientWidth;
                    str = str.replace(/src\=\"(.*?)\"/,'src="$1@'+w+'w_'+w+'h_0e"');
                    return str;
                }
            }); 
        }else if(n==3) {
           return str = str.replace(/\<([a-z]*?)\s.*?\>/g, function(str,str2) {
                
                
                if(str.indexOf("<img")==-1) {
                    return str.replace(/:(.*?)px;/g,function(s1,s2) {
                        var v = parseInt(s2/lazy.fontSize);
                        return ":"+v+"rem;";
                    });
                }else {
                    return str;
                }
            }); 
        }else {
            return str = str.replace(/\<([a-z]*?)\s.*?\>/g,'<$1>');
        }
    }
    //刷新
    function refreshFun() {
       var u = navigator.userAgent;
       var app = navigator.appVersion;
       var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
       if(isIOS){
           window.location.reload();
       }else{
           var url = window.location.href.split("&random")
           window.location.href=url[0]+"&random="+10000*Math.random();
       }
        
    }
    function initFun (back) {
        document.body.setAttribute("type","body");
        
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
            	
            	lazy.loadJsCss(["http://res.wx.qq.com/open/js/jweixin-1.2.0.js",lazy.url+"LazyUI/js/weixin.js?time="+(new Date().getTime())], function() {
                   commonFun();
                    /*
                    var url = document.location;
                    var ip = "";
                    if (document.location.href.indexOf("DDS") != -1) {
                        ip = document.location.origin + "/DDS/"
                    } else {
                        ip = document.location.origin;
                    }
                    alert("ip: "+ip)
                    alert("url: "+url)
                       lazy.GET(ip + "/wechat/weixinevent/jsapi.ht?url=" + url, function (data) {
                       var wxconfig=data.rows[0];
                     wx.config({
                     
                            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                            appId: wxconfig.appId, // 必填，公众号的唯一标识
                            timestamp: wxconfig.timestamp, // 必填，生成签名的时间戳
                            nonceStr: wxconfig.nonceStr, // 必填，生成签名的随机串
                            signature: wxconfig.signature,// 必填，签名，见附录1
                            jsApiList: ['chooseImage', 'previewImage', 'uploadImage', 'getLocation','startRecord','stopRecord','uploadVoice','playVoice','stopVoice','onVoicePlayEnd'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                        });
                        wx.error(function (res) {
                        	alert(2)
                        	alert(JSON.stringify(res));
                            alert(JSON.stringify(wxconfig));
                        });
                        wx.ready(function () {
                            commonFun();
                        });
                   }, function (e) {

                    }, null);*/
                },['js','js'])
               
            
            break;
            
            default :
                commonFun();
            break;
        }
        function commonFun() {
            lazy.loadJsCss(lazy.url+"common/property.js", function() {
                lazy.loadJsCss(lazy.url+"common/config.js", function() {
                    lazy.loadJsCss(lazy.url+"LazyUI/js/tingyun-rum.js", function() {
                        back&&back();
                   });
               });
            });
        }
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
            var temp =  document.location+'';
            var arr = temp.split("&initid"); 
            //alert("12认证location: "+window.location)
            //alert("14认证: "+(window.location.href+'').split("#")[0])
           //alert(ip + "/wx/wechat/core/jsapi.ht?ghid="+lazy.geturlstr("initid")+"&url="+encodeURIComponent((document.location+'').split("#")[0]))
           var temp = ip + "/wx/wechat/core/jsapi.ht?ghid="+lazy.geturlstr("initid")+"&url="+encodeURIComponent((window.location+'').split("#")[0])
            if(lazy.getParameter("delLazy")){
            	temp = ip + "/wx/wechat/core/jsapi.ht?ghid="+lazy.geturlstr("initid")+"&url="+encodeURIComponent((window.location+'').split("#")[0])
            }else{
            	temp = ip + "/wx/wechat/core/jsapi.ht?ghid="+lazy.geturlstr("initid")+"&url="+encodeURIComponent(window.location)
            }
           lazy.GET(temp , function (data) {
                  //alert(ip + "/wx/wechat/core/jsapi.ht?url=" + url)
                //lazy.GET("http://vito.tunnel.qydev.com/lazy/getWeixin.php?url="+encodeURIComponent(document.location),function(data){
               var wxconfig=data.rows[0];
               wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: wxconfig.appId, // 必填，公众号的唯一标识
                    timestamp: wxconfig.timestamp, // 必填，生成签名的时间戳
                    nonceStr: wxconfig.nonceStr, // 必填，生成签名的随机串
                    signature: wxconfig.signature,// 必填，签名，见附录1
                     jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline','chooseImage', 'previewImage', 'uploadImage','getLocation','startRecord','stopRecord','uploadVoice','playVoice','stopVoice','onVoicePlayEnd','downloadImage','onVoiceRecordEnd','closeWindow'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                
                   });
                wx.error(function (res) {
                    alert(JSON.stringify(res));
                    alert("1:"+JSON.stringify(wxconfig));
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
        //loading.close = closeLoadingFun();
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
                /*switch(error.code){
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
                }*/
            	back({"lat" : '', "lng" : ''});
            });
        }else {
            //lazy.alert2("浏览器定位不支持");
        	back({"lat" : '', "lng" : ''});
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
    function alertFun(titile, _obj) {
        //yestitle yesfun notitle nofun
        var obj = _obj?_obj:{};
        var alertDiv = lazy.create("div","alertDiv box box_v");
        var _html = '<div class="box_f1"></div>';
        _html += '<div class="alertcon">';
        _html += '<div class="alertcontent">';
        _html += '  <div class="alerttitle"><span>'+titile+'</span></div>';
        _html += '  <div class="alertbutton box">';
        if(obj.notitle) {
        _html += '      <a class="alertbtn nobtn box_f1"><span>'+(obj.notitle?obj.notitle:"取消")+'</span></a>'; 
         _html += '      <div style="width:0.8rem;"></div>';   
        }
        _html += '      <a class="alertbtn yesbtn box_f1"><span>'+(obj.yestitle?obj.yestitle:"确定")+'</span></a>';
        _html += '  </div>';
        _html += '</div>';
        _html += '</div>';
        _html += '<div class="box_f1"></div>';
        alertDiv.innerHTML = _html;
        if(obj.close) {
            var closebtn = lazy.create("a","closebtn");
            closebtn.onclick = function() {
                document.body.removeChild(alertDiv);
                obj.close();
            }
            alertDiv.getElementsByClassName("alertcontent")[0].appendChild(closebtn);
        }
        document.body.appendChild(alertDiv);
        //事件
        alertDiv.getElementsByClassName("yesbtn")[0].onclick = function() {
            if(obj.yesfun)obj.yesfun();
            document.body.removeChild(alertDiv);
        }
        if(obj.notitle) {
            alertDiv.getElementsByClassName("nobtn")[0].onclick = function() {
                if(obj.nofun)obj.nofun();
                document.body.removeChild(alertDiv);
            }
        }
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
    function alert3Fun(titile,titile2, _obj,url) {
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
        
       if(obj.close) {
            var closebtn = lazy.create("a","closebtn");
            closebtn.onclick = function() {
                document.body.removeChild(alertDiv);
                //obj.close();
            }
            alertDiv.getElementsByClassName("alertcontent1")[0].appendChild(closebtn);
        }
        
        document.body.appendChild(alertDiv);
         if(url){
            var alertsuccdiv = document.body.getElementsByClassName('alertsucc')[0];
            alertsuccdiv.style.background = 'url('+url+') center no-repeat';
            alertsuccdiv.style.backgroundSize = '5.2rem 5.2rem';
        }
        //事件
        alertDiv.getElementsByClassName("comcirm")[0].onclick = function() {
            if(obj.yesfun)obj.yesfun();
            document.body.removeChild(alertDiv);
        }
        
    }
    function alertCodeFun(url,status,back) {
        //status=0图片加载失败
         //yestitle yesfun notitle nofun
        var alertDiv = lazy.create("div","alertDiv3 box box_v");
        var _html = '<div class="box_f1"></div>';
        _html += '<div class="tanchu">';
        _html += '  <div class="alertcontent1">';
        _html += '      <div class="alertsucc"></div>';
        
        _html += '  </div>';
        _html += '</div>';
        _html += '<div class="box_f1"></div>';
        alertDiv.innerHTML = _html;
        
        document.body.appendChild(alertDiv);
         if(url){
            var alertsuccdiv = document.body.getElementsByClassName('alertsucc')[0];
            alertsuccdiv.style.background = 'url('+url+') center no-repeat';
            alertsuccdiv.style.backgroundSize = '9rem 9rem';
            alertsuccdiv.style.borderRadius = "1rem";
            alertsuccdiv.style.height = "10rem";
        }
        var alertcontent1 = document.body.getElementsByClassName('alertcontent1')[0];
        alertcontent1.style.height="10rem";
        alertcontent1.style.width="10rem";
        alertcontent1.style.padding="0rem";
        
        //事件
        alertDiv.onclick = function() {
           
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
                //alert(_i)
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
                   //alert(_i)
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
        lazy.touchEvent2(items_mask, function(_x,_y) {
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
    
    function pickerFun2(arr, allback) {
        
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
        thisObj.add = function(arr,num){
            var del_child = itemss_div.getElementsByClassName("items");
            var temp = del_child.length-num;
            var length = del_child.length-1;
            while(temp){
                itemss_div.removeChild(del_child[length]);
                length--;
                temp--;
            } 
           
            var el = pickerOne22(arr,num,function(obj,i,_i) {
                
               back_arr[_i] = {
                    obj : obj,
                    i : i
                }
              
                // console.log(_i*1)
                //    console.log(back_arr[_i])
                 //   console.log(back_arr)
                thisObj.onchange&&thisObj.onchange(_i*1,back_arr[_i],back_arr);
               
            })
            itemss_div.appendChild(el);
            
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
    function pickerOne22(arr, i, back) {
        
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
        lazy.touchEvent2(items_mask, function(_x,_y) {
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
    function pickerOne2(arr, i, back) {
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
        lazy.touchEvent2(items_mask, function(_x,_y) {
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
                bounce_loading.innerHTML = '<div class="h3">数据加载中...</div>';
                if(type=='up')document.body.appendChild(bounce_loading);
                else document.body.insertBefore(bounce_loading, document.body.firstChild)
            }
        }
    }
    function stopBounceFun() {
        closeBounceFun();
        window.onscroll = null;
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
    function LBHGETFun(url, back1, back2, num) {
        //'get请求，路径，成功回调，失败回调，加载动画int 默认为1，0 不显示';
       
        LBHGP(url, 'GET', back1, back2, num);
    }
    function LBHGP(url, type, back1, back2, num) {
        
        if(num!=null)loadingFun(num, '加载中...');
        lazy.ajax({
            url : url,
            type : type,
            success : function(str) {
                if(num!=null)closeLoadingFun();
               
                try {
                    var data = JSON.parse(str);
                    }catch(e) {
                   
                    back2?back2(str):alert2Fun(str);
                } 
                    if(data.status.code == 200) {
                        back1&&back1(data);
                    }else {
                        if(data.message == "noLogin") {
                            //lazy.goLogin();
                        }else {
                            back2?back2(data.message):alert2Fun(data.message);
                        }
                    }
                
            },
            error : function(str) {
                alert(url+"  "+str);
                if(num!=null)closeLoadingFun();
                back2?back2(str):alert2Fun(str);
            }
        });
    }
    function MAPGETFun(url, back1, back2, num) {
        //'get请求，路径，成功回调，失败回调，加载动画int 默认为1，0 不显示';
       
        MAPGP(url, 'GET', back1, back2, num);
    }
    function MAPGP(url, type, back1, back2, num) {
        if(num!=null){
            if(num==3){
                loadingFun(num, '');
            }else{
                loadingFun(num, '加载中...');
            }
        }
        lazy.ajax({
            url : url,
            type : type,
            success : function(str) {
                if(num!=null)closeLoadingFun();
                try {
                    var data = JSON.parse(str);
                }catch(e) {
                    //back2?back2(str):alert2Fun(str);
                }
                //console.log(data)
                if(data.status){
                    back1&&back1(data);
                }else{
                    back2?back2(data.info):alert2Fun(data.info);
                }
                    /*if(data.isSucceed) {
                        back1&&back1(data);
                    }else {
                        if(data.message == "noLogin") {
                            //flazy.goLogin();
                        }else {
                            back2?back2('message:'+data.message):alert2Fun('message:'+data.message);
                        }
                    }*/
                
            },
            error : function(str) {
                if(num!=null)closeLoadingFun();
                //back2?back2(str):alert2Fun(str);
            }
        });
    }
    function GETFun(url, back1, back2, num) {
        //'get请求，路径，成功回调，失败回调，加载动画int 默认为1，0 不显示';
        GP(url, 'GET', back1, back2, num);
    }
    function GP(url, type, back1, back2, num) {
        if(num!=null){
            if(num==3){
                loadingFun(num, '');
            }else{
                loadingFun(num, '加载中...');
            }
        }
        lazy.ajax({
            url : url,
            type : type,
            success : function(str) {
            	
                if(num!=null)closeLoadingFun();
                try {
                    var data = JSON.parse(str);
                }catch(e) {
                	
                   // back2?back2(str.message):alert2Fun(str.message);
                }
                
                	 if(data.isSucceed) {
                         back1&&back1(data);
                     }else {
                         if(data.message == "noLogin") {
                             //flazy.goLogin();
                         }else {
                             back2?back2(data.message):alert2Fun(data.message);
                         }
                     }
            	
                   
                
            },
            error : function(str) {
                if(num!=null)closeLoadingFun();
                //back2?back2(str.message):alert2Fun(str.message);
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
        
        var temp = new Date();
        temp.setDate(temp.getDate()-1);
         
        if(temp.getDate() == ttime.getDate()&&temp.getFullYear() == ttime.getFullYear()&&temp.getMonth() == ttime.getMonth()){
           
            return "昨天";
        }else if(ttime.getFullYear() != nowtime.getFullYear()) {
            return formatFun(time, "yyyy-MM-dd");
        }else if(ttime.getMonth() != nowtime.getMonth()) {
            return formatFun(time, "MM-dd");
        }else if(ttime.getDate() != nowtime.getDate()) {
           
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
    function datanull2Fun( _pel,url) {
        var pel = _pel?_pel:document.body;
        console.log(pel)
        var zwsjXT = lazy.create("div", "zwsjXT");
        zwsjXT.innerHTML = '<span>  </span>';
        if(url){
             zwsjXT.style.background = 'url('+url+') no-repeat center';
        }else{
             zwsjXT.style.background = 'url("../LazyUI/images/datanull.png") no-repeat center';
        }
        zwsjXT.style.backgroundSize = '10rem';
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
     //显示图片
    function showImageFun(src,size) {
        var goback_status = true;
        //var showImageDiv = document.getElementById("showImageDiv");
        //if(showImageDiv==undefined) {
            showImageDiv = document.createElement("div");
            showImageDiv.id = "showImageDiv";
            showImageDiv.innerHTML = '<div class="showImagekuang"></div><div class="showImageMask"></div>';
            document.body.appendChild(showImageDiv);
        //}
        showImageDiv.style.display = "block";
        var showImagekuang = showImageDiv.getElementsByClassName("showImagekuang")[0];
        var w = document.body.clientWidth;
        newImageFun(w,0,src,size,function(img) {
            showImagekuang.innerHTML = '';
            var height= img.getElementsByTagName("canvas")[0].height;
            img.style.top = (document.body.clientHeight - height)/2 + "px";
            showImagekuang.appendChild(img);
        });
        showImageDiv.onclick = function() {
            showImageDiv.parentNode.removeChild(showImageDiv)
            //showImageDiv.style.display = "none";
            goback_status = false;
        }
        lazy.setGoBack();
        GoBackEvent = function() {
           if(goback_status){
               showImageDiv.parentNode.removeChild(showImageDiv)
               //showImageDiv.style.display = "none";
           }else{
                window.history.go(-1);
           }
        }
        
    }
    //新图片格式
    function newImageFun(w,h,src,size,back,obj) {
        var imgcanvas = document.createElement("canvas");
        var ctx = imgcanvas.getContext("2d");
        var img = new Image();
        img.src = src;
        img.onload = function() {
            if(w!=0&&h==0) {
                 h = img.height*w/img.width;
                 if(h > document.body.clientHeight-1) h=document.body.clientHeight-100;
            }
            imgcanvas.width = w;
            imgcanvas.height = h;
            imgcanvas.setAttribute("src",src);
            imgcanvas.style.width = w + "px";
            imgcanvas.style.height = h + "px";
            
            ctx.drawImage(this,0,0,w,h);
            
            var imgdiv = lazy.create("div","imgdiv");
            imgdiv.appendChild(imgcanvas)
            if(size){
               
                var sizediv = lazy.create("div","sizediv");
                sizediv.innerHTML = '<span>'+picSize(size)+'</span>';
                imgdiv.appendChild(sizediv);
            }
            
            back(imgdiv);
        }
        if(obj) {
            for(var str in obj) {
                imgdiv.setAttribute(str,obj[str]);
            }
        }
    }
    function picSize(size){
        var s = size;
        if(s<1024){
            return s+'b';
        }else{
            s = s/1024;
            if(s<1024){
                return s.toFixed(2)+'k';
            }
        }
    }
    
    //数据加载
    function URLRequestFun(url,successFun,errorFun,num) {
        if(num!=0) {
            var loading = loadingFun(num, '加载中...');;
        }
        var xmlhttp;
        if(window.XMLHttpRequest){
          xmlhttp = new XMLHttpRequest();
          xmlhttp.open("GET",url,true);
          xmlhttp.send();
          xmlhttp.onreadystatechange=function() {
              if(xmlhttp.readyState==4 && xmlhttp.status==200) {
                  if(num!=0)  closeLoadingFun()
                  var data = JSON.parse(xmlhttp.responseText);
                  if(data.isSucceed) {
                        successFun(data);
                    }else {
                        /*if(data.message == "noLogin") {
                              lazy.goLogin();
                        }else */if(errorFun) {
                           errorFun(data.message?data.message:"message is null");
                        }else {
                            alert2Fun(data.message?data.message:"message is null");
                        }
                    }
              }else if(xmlhttp.status==0 || (xmlhttp.status+"").match(/(4|5)\d\d/)){
                  if(num!=0) closeLoadingFun()
                  if(errorFun) {
                      errorFun("网络异常：" + xmlhttp.status); 
                  }else {
                      alert2Fun("网络异常：" + xmlhttp.status);
                  }
              }
          }
        }
    }
    function touchEvent2Fun(dom, back1, back2, back3) {
        dom.addEventListener('touchstart', function(event) {
            back1&&back1(event.touches[0].clientX,event.touches[0].clientY);
        },false);
        dom.addEventListener('touchmove', function(event) {
            event.preventDefault();
            back2&&back2(event.touches[0].clientX,event.touches[0].clientY);
        },false);
        dom.addEventListener('touchend', function(event) {
            back3&&back3(event.changedTouches[0].clientX,event.changedTouches[0].clientY);
        },false);
    }
    function getImagePxFun(path, w, h, num) {
        if(arguments.length > 1) {
            var gz1 = "", gz2 = "";
            if(w) gz1 = w + "w";
            if(h) gz2 += h + "h";
            if(gz1!="" && gz2!="") {
                return path+"@"+gz1+"_"+gz2+(num!=null?"_"+num+"e":"_2e");
            }else {
                return path+"@"+gz1+gz2;
            }
        }else {
            return path+"@10p";
        }
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
    
    //拍照
    function photoZipFun(file,back,level) {
        if(window.FileReader) {  
            var fr = new FileReader();  
            fr.onloadend = function(e) {
                var img = document.createElement('img');
                img.src = e.target.result;
                img.onload = function() {
                    var canvas = document.createElement('canvas');
                    canvas.width = img.naturalWidth;
                    canvas.height = img.naturalHeight;
                    var ctx = canvas.getContext("2d").drawImage(img, 0, 0);
                    var _level = level?level:0.5;
                    var newImageData = canvas.toDataURL(file.type, file.size<800000?1:_level);
                    back(newImageData);
                }
            };  
            fr.readAsDataURL(file);
        }  
    }
    function pcstartPhotoFun(httpurl, centerfun, success, errorfun) {
        var input = document.getElementById('fileToUpload');
        if(!input) {
            input = document.createElement('input');
            input.style.display = 'none';
            input.setAttribute("id","fileToUpload");
            input.setAttribute("name","file");
            input.setAttribute("type","file");
            input.setAttribute("accept","image/*");
            //input.setAttribute("capture","camera");
            document.body.appendChild(input);
        }
        input.onchange = function() {
            var file = this.files[0];
            if(file) {
                if(file.type!="image/jpeg" && file.type!="application/x-jpg" && file.type!="image/png" && file.type!="application/x-png" && file.type!="image/gif") {
                    lazy.alert2('不是正确的图片');
                }else {
                    
                    var temp = file.type.split("/");
                    var temp_type = temp[temp.length-1]
                    httpurl += "&fileType="+temp_type;
                    var src = '';
                    try{
                        if (window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1) { 
                            src = window.webkitURL.createObjectURL(file); 
                        }else { 
                            src = window.URL.createObjectURL(file); 
                        }
                    }catch(e) {
                        src = null;
                    }
                    
                    var loading = loadingFun(0, '上传中...');
                    if(!httpurl) {
                        success("",src);
                         closeLoadingFun()
                        //loading.close();
                        return;
                    }
                    if(lazy.base64) {
                        photoZipFun(file,function(_data) {
                            console.log(_data)
                            var xmlhttp = new XMLHttpRequest();
                            xmlhttp.open("POST",httpurl,true);
                            xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                            //document.getElementById("inputt").value = _data;
                            xmlhttp.send('data='+encodeURIComponent(_data));
                            xmlhttp.onreadystatechange = function() { 
                                if(xmlhttp.readyState==4 && xmlhttp.status==200) {
                                    console.log(xmlhttp.responseText)
                                     var data = JSON.parse(xmlhttp.responseText);
                                     if(data.succeed || data.isSucceed) {
                                        //loading.close();
                                         closeLoadingFun()
                                        success(data,src);
                                     }else {
                                        if(errorfun) {
                                           errorFun(data.message?data.message:"message is null");
                                        }else {
                                            lazy.alert(data.message?data.message:"message is null");
                                        }
                                    }
                                }
                            }
                            xmlhttp.upload.addEventListener("progress", function(evt) {
                                var percentComplete = Math.round(evt.loaded * 100 / evt.total);
                                centerfun(percentComplete.toString());
                            }, false);
                            
                        },file.size>2000000?0.2:0.5);
                    }else {
                         console.log("开始");
                        var path = this.value;
                        var xmlhttp = new XMLHttpRequest();
                        if(xmlhttp.overrideMimeType){  
                           xmlhttp.overrideMimeType("text/xml");  
                        }
                        xmlhttp.open("POST",httpurl,true);
                        var fd = new FormData();
                        fd.append("file", file);
                        xmlhttp.send(fd);
                        xmlhttp.onreadystatechange = function() {
                            if(xmlhttp.readyState==4 && xmlhttp.status==200) {
                                //alert(21)
                                 //alert(xmlhttp.responseText)
                                 var data = JSON.parse(xmlhttp.responseText);
                                 if(data.succeed || data.isSucceed) {
                                    //loading.close();
                                    closeLoadingFun()
                                    success(data,src);
                                 }else {
                                     
                                    if(errorfun) {
                                         closeLoadingFun()
                                       errorFun(data.message?data.message:"message is null");
                                    }else {
                                        lazy.alert(data.message?data.message:"message is null");
                                    }
                                }
                            }else{
                            }
                        }
                        xmlhttp.upload.addEventListener("progress", function(evt) {
                             console.log(2);
                            var percentComplete = Math.round(evt.loaded * 100 / evt.total);
                            centerfun(percentComplete.toString());
                        }, false);
                        
                    }
                 }
            }else {
                lazy.alert2('文件不支持');
            }
        }
        input.click();
    }
    //-----------------------------这是分隔符----------------------------------
    Lazy.prototype = LazyP;
    window.lazy = new Lazy();
    //lazy.setFontSize();
    initFun(back);
}