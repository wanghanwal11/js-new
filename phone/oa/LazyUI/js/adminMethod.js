/*适配器*/
//lazyWindow
//browserType 浏览器类型 默认为空
//startConfig   start初始化的配置数据 {"jsApiList" : "微信所需api接口数组,此参数没有 则类型不为weixin"}
!function(){
    window.LazyA = function() {
        this.autoId = 0;
        this.debug = false;
        this.winName = window.location.href.replace(/.*\//,"").replace(".html","");
        this.weixinJs = 'http://res.wx.qq.com/open/js/jweixin-1.0.0.js';
        this.weixinCodeUrl = 'http://yiqijiangyou.6655.la/html5work/php/wx_code.php';
    }
    LazyA.prototype = {
        "platformInit" : platformInitFun, 
        "getAutoId" : getAutoIdFun,
        "alert1" : alert1Fun,
        "onclick" : onclickFun,
        "creat" :  creatFun
    }
    //各个平台初始化
    function platformInitFun(back) {
        document.body.setAttribute("winname",lazy.winName);
        document.body.setAttribute("type","body");
        /*
        if(!lazyWindow.startConfig.jsApiList)lazyWindow.browserType = ''; //如果不存在参数当成不是微信
        if(lazyWindow.browserType == 'weixin') {
            var debug = this.debug;
            var weixinCodeUrl = this.weixinCodeUrl;
            //if(lazyWindow.browserType)
            lazy.loadJs('weixinJs',this.weixinJs,function() {
                lazy.URLRequest(weixinCodeUrl+"?url="+(window.location.href),function(data) {
                    var data = JSON.parse(data);
                    wx.config({
                        debug: debug, 
                        appId: data.appId, // 必填，公众号的唯一标识
                        timestamp: data.timestamp, // 必填，生成签名的时间戳
                        nonceStr: data.nonceStr, // 必填，生成签名的随机串
                        signature: data.signature,// 必填，签名，见附录1
                        jsApiList: lazyWindow.startConfig.jsApiList
                    });
                    wx.ready(function(){
                        back();
                    });
                },function(str) {
                    alert(str);
                });
            });
        }else {
            beforeFun(function() {
                if(lazy.response("browsertype")) {
                    lazy.setParameter("browsertype", lazy.response("browsertype"));
                }
                back();
            })
        }
        */
       beforeFun(function() {
            if(lazy.response("browsertype")) {
                lazy.setParameter("browsertype", lazy.response("browsertype"));
            }
            if(lazy.response("mark")) {
                lazy.setParameter("mark", lazy.response("mark"));
            }
            back();
        })
    }
    //数据请求
    window.ajaxFun = function(_obj) {
        var obj = {
            "url" : '',
            "type" : 'GET',
            "success" : function() {},
            "error" : function() {}
        }
        for(var str in obj) {
            if(_obj[str]) obj[str] = _obj[str];
        }
        var xmlhttp;
        if(window.XMLHttpRequest){
          xmlhttp=new XMLHttpRequest();
		  if(xmlhttp.overrideMimeType){  
			   xmlhttp.overrideMimeType("text/xml");  
		  }
          xmlhttp.open(obj['type'],obj['url'],true);
          xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
          xmlhttp.send();
          xmlhttp.onreadystatechange=function() {
              if(xmlhttp.readyState==4 && xmlhttp.status==200) {
                obj['success'](xmlhttp.responseText);
              }else if(xmlhttp.readyState==4 && xmlhttp.status==404){
                obj['error']("网络异常！");
              }
          }
        }
    }
    LazyA.prototype.ajax = ajaxFun;
    //预先加载
    function beforeFun(back) {
        var arr = lazy.before;
        var k = 0;
        one(arr[k]);
        function one(path) {
            var hz = path.replace(/.*\./g,"");
            if(hz == 'js') {
               lazy.loadJs('before_js'+k,path,function() {
                   if(k < arr.length - 1) {
                      one(arr[++k]);
                   }else {
                      back();
                   }
                }); 
            }else {
                lazy.loadCss('before_css'+k,path);
                if(k < arr.length - 1) {
                  one(arr[++k]);
                }else {
                  back();
                }
            }
        }
        //alert(lazy.loadJs)
    }
    //创建先的dom对象
    function creatFun(eltype,classname,obj) {
        var div = document.createElement(eltype);
        if(classname.indexOf("#")!=-1) {
            div.id = classname.replace("#","");
        }else {
            div.className = classname.replace(".","");
        }
        if(eltype=="a") {
            div.setAttribute("href", "javascript:;");
        }
        if(obj) {
            for(var str in obj) {
                div.setAttribute(str, obj[str]);
            }
        }
        return div;
    }
    //自定义id
    function getAutoIdFun() {
        return "LazyAuto" + this.autoId++;
    }
    //打印alert
    function alert1Fun(obj) {
        alert(JSON.stringify(obj));
    }
    //点击事件
    var lTapTimer;
    function onclickFun(el,clickback,longclickback) {
        el.addEventListener('touchstart', handleGestureStart, false);
        var startTx,startTy,endTx,endTy;
        function handleGestureStart(event) {
            if(event.touches && event.touches.length > 1) {
                return;
            }
            if(longclickback) {
                if(lTapTimer) {
                    clearTimeout(lTapTimer);
                    lTapTimer = null;
                }
                lTapTimer = setTimeout(function(){
                    el.removeEventListener('touchend', handleGestureEnd, false);
                    el.removeEventListener('touchmove', handleGestureMove, false);
                    longclickback();
                },1000);
                el.addEventListener('touchmove', handleGestureMove, false);
            }
            startTx = event.touches[0].clientX;
            startTy = event.touches[0].clientY;
            el.addEventListener('touchend', handleGestureEnd, false);
            event.preventDefault();
            //el.addEventListener('touchcancel', handleGestureEnd, false);
        }
        function handleGestureMove(event) {
            endTx = event.touches[0].clientX,
            endTy = event.touches[0].clientY;
            if(lTapTimer && (Math.abs(endTx - startTx) > 6 || Math.abs(endTy - startTy) > 6)) {
                el.removeEventListener('touchend', handleGestureEnd, false);
                el.removeEventListener('touchmove', handleGestureMove, false);
                clearTimeout(lTapTimer);
                lTapTimer = null;            
            }
        }
        function handleGestureEnd(event) {
            el.removeEventListener('touchend', handleGestureEnd, false);
            if(lTapTimer) {
                el.removeEventListener('touchmove', handleGestureMove, false);
                clearTimeout(lTapTimer);
                lTapTimer = null;
            }
            endTx = event.changedTouches[0].clientX,
            endTy = event.changedTouches[0].clientY;
            if(Math.abs(startTx - endTx) < 6 && Math.abs(startTy - endTy) < 6 ) {
                if(clickback)clickback();
            }
        }
    }
    
   
 
}();