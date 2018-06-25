/*通用方法*/
!function(){
    var LazyB = function() {
        //url
        this.url = document.querySelectorAll('[src*=admin]')[0].getAttribute("src").match(/.*(?=LazyUI)/g)[0];
        //主题
        this.colorCss = 'color_oa.css';
        //预加载资源
        this.before = [this.url+'common/property.js', this.url+'common/config.js'];
        //打开其他页面
        this.openWin = openWinFun;
        //打开子页面
        this.openIframe = openIframeFun;
        //页面返回
        this.goBack = goBackFun;
        //刷新
        this.refresh = refreshFun;
        //调用父级方法
        this.setParentJs = setParentJsFun;
        //调用子级方法
        this.setChildJs = setChildJsFun;
        //打开远程数据请求
        this.URLRequest = URLRequestFun;
        this.POST = POSTFun;
        //添加加载动画
        this.loading = loadingFun;
        //数据缓存
        this.setParameter = setParameterFun;
        this.getParameter = getParameterFun;
        this.var = varFun;
        //获取css样式
        this.getElCssStyle = getElCssStyleFun;
        //日期格式转换
        this.autoFormat = autoFormatFun;
        this.format = formatFun;
        //alert
        this.alert2 = alert2Fun;
        //弹出列表
        this.alertlist = alertlistFun;
        //弹性加载
        this.bounce = bounceFun;
        this.closeBounce = closeBounceFun;
        this.stopBounce = stopBounceFun;
        //
        this.alertyesno = alertyesnoFun;
        //播放声音
        this.playSound = playSoundFun;
        this.closeSound = closeSoundFun;
        //录音
        this.startXtSound = startXtSoundFun;
        //播放视频
        this.playVideo = playVideoFun;
        //视频录制
        this.startVideo = startVideoFun;
        //滑动
        this.gesture = gestureFun;
        //获取字符串长度
        this.getStringByteLength = getStringByteLengthFun;
        //拍照
        this.startPhoto = startPhotoFun;
        //显示图片
        this.showImage = showImageFun;
        //显示文件
        this.openFile = openFileFun;
        //拍照
        this.startFile = startFileFun;
        //获取url参数
        this.response =responseFun;
        //是否是appcan
        this.isAppcan = isAppcanFun;
        //是否为数组
        this.isArray = isArrayFun;
        //文件类型
        this.getFlieType = getFlieTypeFun;
        //获取gps
        //获取gps
        this.getGps = getGpsFun;
        this.getGpsName = getGpsNameFun;
        this.gpsToAmap = gpsToAmapFun;
        this.closeGps = closeGpsFun;
        //关闭页面
        this.close = closeFun;
        this.paizhao = paizhaoFun;
        this.fujian = fujianFun;
        this.sound = soundFun;
        this.Call =  CallFun;
        this.CancelgoBack = CancelgoBackFun;
        //for循环
        this.for = forFun;
        //生成iframe
        this.iframe = iframeFun;
        this.getPerson = getPersonFun;
        //获取图片路径
        this.getImageRem = getImageRemFun;
        this.getImagePx = getImagePxFun;
        //返回首页
        this.goAdmin = goAdminFun;
        //返回登录页
        this.goLogin = goLoginFun;
        this.setHeaderHide = setHeaderHideFun;
        //返回登录信息
        this.personmessage = personmessageFun;
        //***************************************调用apcan 可以直接复制过来
        this.close_appcan = close_appcanFun;
        this.startPhoto_appcan = startPhoto_appcanFun;
        this.showPhoto_appcan = showPhoto_appcanFun;
        this.readerFile_appcan = readerFile_appcanFun;
        this.download_appcan = download_appcanFun;
        this.upload_appcan = upload_appcanFun;
        this.startFile_appcan = startFile_appcanFun;
        this.startXtSound_appcan = startXtSound_appcanFun;
        this.playSound_appcan = playSound_appcanFun;
        this.closeSound_appcan = closeSound_appcanFun;
        this.getGps_appcan = getGps_appcanFun;
        this.getGpsName_appcan = getGpsName_appcanFun;
        this.call_appcan = call_appcanFun;
        this.playVideo_appcan = playVideo_appcanFun;
        this.startVideo_appcan = startVideo_appcanFun
    }
    /*///////////////////////////////////////////////////////////////////
    *   内置方法和变量可以直接使用
    *   fontSize  int     1rem px
    *   url   string  目录的路径点
    *   getAutoId     fun()     获取自增id 
    *   alert1    fun()     打印对象
    *   loadJs    fun(name, url)     加载js
    *   loadCss   fun(name, url, back)     加载css
    *   onclick    function(el,clickback,longclickback)    点击事件,包括点击和长按
    *   
    */
   //返回首页
   function goAdminFun(type){
       switch(type) {
           case "weixin" :   
           break;
           case "ios" :
                lazy.openWin("aj://backFrstItemViewController");
           break;
           case "android" :
                window.main.start()
           break;
           case "pc" :
                 
           break;
        }
   }
   //返回登录信息
   function personmessageFun(back){
       var funname = lazy.getAutoId();
       lazy.isAppcan(function() {
        }, function(type){
            switch(type) {
               case "weixin" :   
               break;
               case "ios" :
                    lazy.openWin("aj://PersonalMessage_?"+funname);
               break;
               case "android" :
                    window.json.get(funname);
               break;
               case "pc" :
                     
               break;
            }
        });
        window[funname] = back;
   }
    //返回登录页
    function goLoginFun() {
        lazy.isAppcan(function() {
            lazy.openWin("../" + lazy.url + "/login.html");
            //lazy.close_appcan();
        }, function(type){
            switch(type) {
               case "weixin" :   
               break;
               case "ios" :
                    lazy.openWin("aj://backLoginViewController");
               break;
               case "android" :
                    window.openLogin.open();
               break;
               case "pc" :
                     
               break;
            }
        });
    }
    function CancelgoBackFun(bol){
        //bol为true返回键默认 为false为改造
        lazy.isAppcan(function() {
            
        },function(type){
            if(bol&&bol==false){
                var funname = lazy.getAutoId();
                switch(type){
                    case "ios":
                    break;
                    case "android":
                        window.backFun.open(funname);
                    break;
                    default:
                    break;
                }
                window[funname] = back;
            }else{
                switch(type){
                    case "ios":
                    break;
                    case "android":
                        window.backFun.close()
                    break;
                    default:
                    break;
                }
            }
        })
    }
    //隐藏头部
    function setHeaderHideFun(){
        lazy.isAppcan(function() {
            //lazy.close_appcan();
        }, function(type){
            switch(type) {
               case "weixin" :   
               break;
               case "ios" :
                    lazy.openWin("aj://hiddenNavigationbar");
               break;
               case "android" :
                    window.hideTopbar.start()
               break;
               case "pc" :
                     
               break;
            }
        });
    }
   //获取图片路径
    function getImageRemFun(path, w, h, num) {
        if(arguments.length > 1) {
            var gz1 = "", gz2 = "";
            if(w) gz1 = parseInt(w * lazy.fontSize) + "w";
            if(h) gz2 += parseInt(h * lazy.fontSize) + "h";
            if(gz1!="" && gz2!="") {
                return path+"@"+gz1+"_"+gz2+(num!=null?"_"+num+"e":"_2e");
            }else {
                return path+"@"+gz1+gz2;
            }
        }else {
            return path+"@10p";
        }
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
    //关闭页面
    function closeFun(){
        try{
            lazy.isAppcan(function() {
                lazy.close_appcan();
            }, function(type){
                switch(type) {
                   case "weixin" :   
                   break;
                   case "ios" :
                        lazy.openWin("AJ://CloseWebView");
                   break;
                   case "android" :
                        window.forceclose.forceClose();
                   break;
                   case "pc" :
                         
                   break;
                }
            });
        }catch(e){}
    }
    function paizhaoFun(type,uploadurl, back) {
        var funname = lazy.getAutoId();
        switch(type){
            case "ios":
                lazy.openWin("aj://takePhotos_?"+uploadurl+"&"+funname);
            break;
            case "android":
                lazy.alertlist([
                    {
                        "title" : "拍照",
                        "onclick" : function() {
                            window.camera.open(uploadurl,funname);
                        }
                    },{
                        "title" : "选择相册",
                        "onclick" : function() {
                            window.gallery.open(uploadurl,funname);
                        }
                    }
                        
                ]);
            break;
            default:
                startPhotoFun(uploadurl, function() {
                }, function(data,src) {
                   back(data);
                }, function(e) {
                    lazy.alert2(e);
                });
            break;
        }
        window[funname] = back;
    }
    function fujianFun(type,uploadurl, back) {
        var funname = lazy.getAutoId();
        switch(type){
            case "ios":
                lazy.openWin("aj://takePhotos_?"+uploadurl+"&"+funname);
            break;
            case "android":
            	window.file.open(uploadurl,funname);
            break;
            default:
            	startFileFun(uploadurl, function() {
                }, function(data, name, size, path) {
                   back(data,size);
                }, function(e) {
                    lazy.alert2(e);
                });
            break;
        }
        window[funname] = back;
    }
    function soundFun(type,uploadurl,back){
    	var funname = lazy.getAutoId();
        switch(type){
            case "ios":
                lazy.openWin("aj://startRecording_?"+uploadurl+"&"+funname);
            break;
            case "android":
            	window.audio.open(uploadurl,funname);
            break;
            default:
            	startXtSoundFun(uploadurl, function() {
                }, function(data) {
                   back(data);
                }, function(e) {
                    lazy.alert2(e);
                });
            break;
        }
        window[funname] = back;
    }
    function getPersonFun(type,back){
        var funname = lazy.getAutoId();
        switch(type){
            case "ios":
                lazy.openWin("aj://presentAllContactsViewController_?"+funname);
            break;
            case "android":
                window.contact.open(funname)
                //window.audio.open(uploadurl,funname);
            break;
            default:
            break;
        }
        window[funname] = back;
    }
    //显示图片
    function showImageFun(type,src) {
        switch(type){
            case "ios":
                lazy.openWin("AJ://viewPicture_?"+src);
            break;
            case "android":
                window.pic.showPic(src)
            break;
            default:
                var showImageDiv = document.getElementById("showImageDiv");
                if(showImageDiv==undefined) {
                    showImageDiv = document.createElement("div");
                    showImageDiv.id = "showImageDiv";
                    showImageDiv.innerHTML = '<div class="showImagekuang"></div><div class="showImageMask"></div>';
                    document.body.appendChild(showImageDiv);
                }
                showImageDiv.style.display = "block";
                var showImagekuang = showImageDiv.getElementsByClassName("showImagekuang")[0];
                var w = document.body.clientWidth;
                newImageFun(w,0,src,function(img) {
                    showImagekuang.innerHTML = '';
                    img.style.top = (document.body.clientHeight - img.height)/2 + "px";
                    showImagekuang.appendChild(img);
                });
                showImageDiv.onclick = function() {
                    showImageDiv.style.display = "none";
                }
            break;
        }
        
    }
    //打开文件
    function openFileFun(type,src) {
        //lazy.openWin(src);
        switch(type){
	        case "ios":
	        break;
	        case "android":
	        	window.download.onDownload(src);
	        break;
	        default:
	        	window.open(src);
	        break;
	    }
    }
    //播放声音
    function playSoundFun(type,path) {
    	switch(type){
    		case "ios":
    			lazy.openWin("AJ://playAVPlayer_?"+path);
    		break;
    		case "android":
                window.download.onDownload(path);
            break;
    		default :
	    		var sound = document.getElementById("audioIdDiv");
		    	if(!sound) {
		    		sound = lazy.creat("audio","#audioIdDiv");
		    		sound.style.display = "none";
		    		document.body.appendChild(sound);
		    	}
		    	closeSoundFun();
		    	sound.src = path;
		    	sound.play();
    		break
    	}
    }
    //播放视频
    function playVideoFun(type,path) {
        switch(type){
            case "ios":
                //lazy.openWin("AJ://playAVPlayer_?"+path);
            break;
            case "android":
                window.download.onDownload(path);
            break;
            default :
                var video = document.getElementById("videoIdDiv");
                if(!video) {
                    video = lazy.creat("video","#videoIdDiv");
                    video.style.width = "0px";
                    video.style.height = "1px";
                    document.body.appendChild(video);
                }
                video.src = path;
                if(video.webkitRequestFullscreen)video.webkitRequestFullScreen();
                video.play();
            break
        }
    }
    //拨打电话
    function CallFun(type,num) {
        switch(type){
            case "ios":
                lazy.openWin("AJ://MakeAPhoneCall?"+num);
            break;
            case "android":
                window.call.start(num)
            break;
            default :
                var video = document.getElementById("videoIdDiv");
                if(!video) {
                    video = lazy.creat("video","#videoIdDiv");
                    video.style.width = "0px";
                    video.style.height = "1px";
                    document.body.appendChild(video);
                }
                video.src = path;
                if(video.webkitRequestFullscreen)video.webkitRequestFullScreen();
                video.play();
            break
        }
    }
    //是否为数组
    function isArrayFun(object){
        return  object && typeof object==='object' && typeof object.length==='number' && typeof object.splice==='function' && !(object.propertyIsEnumerable('length'));
    }
    //是否是appcan
    function isAppcanFun(back, noback) {
        if(lazy.getParameter("browsertype")) {
            if(lazy.getParameter("browsertype") == "appcan") {
               back();
            }else {
                if(noback)noback(lazyWindow.browserType);
            }
        }else {
            if(noback)noback(lazyWindow.browserType);
        }
    }
    //for循环
    function forFun(arr, back) {
        for(var i = 0; i < arr.length; i++) {
            back(arr[i], i);
        }
    }
    //确定取消
    function alertyesnoFun(title, yesFun, noFun) {
        if (window.confirm(title)) {
            if (yesFun) yesFun();
            return true;
        } else {
            if (noFun) noFun();
            return false;
        }
    }
    //获取gps
    function getGpsFun(back,bol) {
        //<script type="text/javascript" src="http://webapi.amap.com/maps?v=1.3&key=a0efffe14f35b048afbd62d95e342d28&plugin=AMap.Geocoder"></script>
        //<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=07591c420d03d958748c20628252d46e"></script>
        //watchPosition
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
        /*
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
                //alert('您的位置：'+r.point.lng+','+r.point.lat);
                if(back) back(r.point);
            }
            else {
                lazy.alert2('定位失败');
            }        
        },{enableHighAccuracy: true});
        */
    }
    function gpsToAmapFun(point, back) {
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
        var geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: "all"
        });        
        geocoder.getAddress([point.lng, point.lat], function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                back(result);
            }
        });
        /*
        var geoc = new BMap.Geocoder();
        geoc.getLocation(baiduPoint, function(rs){
            if(back) back(rs);
        });
        */
    }
    function closeGpsFun() {
        navigator.geolocation.clearWatch();
    }
    //弹出列表
    function alertlistFun(arr,back) {
        //{"title" : "", onclick}
        var mask = lazy.creat("div", "alertlistmask ub ub-ver");
        mask.innerHTML = '<div class="ub-f1"></div><div class="alertlistdiv"><div class="alertlisttr"></div></div><div class="ub-f1"></div>'; 
        var alertlisttr = mask.getElementsByClassName("alertlisttr")[0];
        document.body.appendChild(mask);
        
        mask.onclick = function() {
            document.body.removeChild(mask);
        }
        for(var i =0; i < arr.length; i++) {
            one(arr[i]);
        }
        function one(obj) {
            var tr = lazy.creat("a", "tr");
            tr.innerHTML = '<span>'+obj.title+'</span>';
            tr.onclick = function() {
                if(obj.onclick)obj.onclick(obj);
                if(back) back(obj)
            }
            alertlisttr.appendChild(tr);
        }
    }
    //生成iframe
    function iframeFun(_obj) {
       //obj {"showhide" : "show"}
        var obj = _obj?_obj:{};
        var iframeparent = lazy.creat("div", "iframeparent");
        var iframe = lazy.creat("iframe", "iframe");
        iframeparent.appendChild(iframe);
        iframeparent.src = function(src) {
            if(src) iframe.src = src;
            else return iframe.src;
        }
        if(obj.showhide) {
            if(obj.showhide == "hide") iframeparent.style.left = "100%";
        }
        iframeparent.show = function() {
            iframeparent.style.webkitAnimation = 'iframeshow 0.8s';
            iframeparent.style.left = "0%";
        }
        iframeparent.hide = function() {
            iframeparent.style.webkitAnimation = 'iframehide 0.8s';
            iframeparent.style.left = "100%";
        }
        return iframeparent;
    }
    //文件
    function startFileFun(httpurl, centerfun, success, errorfun) {
        lazy.isAppcan(function() {
            var name = "";
            var type = "";
            //打开文件
            uexFileMgr.cbExplorer = function(opId, dataType, data) {
                if (dataType == 0) {
                    var arr = data.replace(/.*\//, "").split(".");
                    name = arr[0];
                    type = arr[1];
                    var loading = loadingFun("");
                    upload_appcanFun('filename', data, httpurl, 3, function() {
                        
                    }, function(obj) {
                         loading.close();
                         var obj = JSON.parse(obj);
                         if(obj.succeed || obj.isSucceed) {
                            success(obj, data, "", data);
                         }else {
                            if(errorfun) {
                               errorFun(data.message?data.message:"message is null");
                            }else {
                                lazy.alert(data.message?data.message:"message is null");
                            }
                        }
                        
                    }, function() {
                        loading.close();
                        errorFun("上传失败");
                    });
                    
                }
            }
            uexFileMgr.explorer("/sdcard");
        
        }, function() {
            var input = document.getElementById('fileToUpload_file');
            if(!input) {
                input = document.createElement('input');
                input.style.display = 'none';
                input.setAttribute("id","fileToUpload_file");
                input.setAttribute("name","filename");
                input.setAttribute("type","file");
                document.body.appendChild(input);
            }
            input.onchange = function() {
                var file = this.files[0];
                if(file) {
                    var filename = file.name;
                    var filesize = file.size;
                    var loading = loadingFun("");
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
                    if(!httpurl) {
                        success("",filename,filesize, src);
                        loading.close();
                        return;
                    }
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
                        loading.close();
                        if(xmlhttp.readyState==4 && xmlhttp.status==200) {
                             var data = JSON.parse(xmlhttp.responseText);
                             if(data.succeed || data.isSucceed) {
                                success(data,filename,filesize, src);
                             }else {
                                if(errorfun) {
                                   errorfun(data.message?data.message:"message is null");
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

                }else {
                    lazy.alert2('文件不支持');
                }
            }
            input.click();
        });
        
    }
    //获取url参数
    function responseFun(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
        var path = decodeURI(window.location.search);
        var r = path.substr(1).match(reg); 
        if (r != null) return unescape(r[2]); return null; 
    }
    //拍照
    function startPhotoFun(httpurl, centerfun, success, errorfun) {
        var input = document.getElementById('fileToUpload');
        if(!input) {
            input = document.createElement('input');
            input.style.display = 'none';
            input.setAttribute("id","fileToUpload");
            input.setAttribute("name","filename");
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
                    var loading = loadingFun("");
                    if(!httpurl) {
                        success("",src);
                        loading.close();
                        return;
                    }
                    if(lazy.base64) {
                    	photoZipFun(file,function(_data) {
                            var xmlhttp = new XMLHttpRequest();
                            xmlhttp.open("POST",httpurl,true);
                            xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                            xmlhttp.send('data='+_data);
                            xmlhttp.onreadystatechange = function() { 
                                if(xmlhttp.readyState==4 && xmlhttp.status==200) {
                                     var data = JSON.parse(xmlhttp.responseText);
                                     if(data.succeed || data.isSucceed) {
                                    	loading.close();
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
                            
                        },0.5);
                    }else {
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
                                 var data = JSON.parse(xmlhttp.responseText);
                                 if(data.succeed || data.isSucceed) {
                                	loading.close();
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
                        
                    }
                 }
            }else {
                lazy.alert2('文件不支持');
            }
        }
        input.click();
    }
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
    //新图片格式
    function newImageFun(w,h,src,back,obj) {
        var imgdiv = document.createElement("canvas");
        var ctx = imgdiv.getContext("2d");
        var img = new Image();
        img.src = src;
        img.onload = function() {
            if(w!=0&&h==0) {
                 h = img.height*w/img.width;
            }
            imgdiv.width = w;
            imgdiv.height = h;
            imgdiv.setAttribute("src",src);
            imgdiv.style.width = w + "px";
            imgdiv.style.height = h + "px";
            
            ctx.drawImage(this,0,0,w,h);
            back(imgdiv);
        }
        if(obj) {
            for(var str in obj) {
                imgdiv.setAttribute(str,obj[str]);
            }
        }
    }
    //滑动
   function gestureFun(obj) {
       /*
        obj = {"el":"", start:function(){}, end:function(){}, center:function(){}, fx:function(name){}}
        */
       var el = obj.el?obj.el:document.body;
       el.addEventListener("touchstart", touchstartFun, "false");
       el.addEventListener("touchmove", touchmoveFun, "false");
       document.body.addEventListener("touchend", touchendFun, "false");
       var startXY = {"x":0, "y":0};
       var endXY = {"x":0, "y":0};
       function touchstartFun(event) {
           if (event.targetTouches && event.targetTouches.length == 1) {
                var touch = event.targetTouches[0];
                startXY.x = touch.pageX;
                startXY.y = touch.pageY;
                event.preventDefault();
           }
       }
       function touchmoveFun(event) {
           if (event.targetTouches && event.targetTouches.length == 1) {
                var touch = event.targetTouches[0];
                endXY.x = touch.pageX;
                endXY.y = touch.pageY;
                event.preventDefault();
           }
       }
       function touchendFun(event) {
           if(obj.fx) {
                //方向
                var _x = endXY.x - startXY.x;
                var _y = endXY.y - startXY.y;
                var fxlr = "";
                var fxtb = "";
                var fx = "";
                if(_x > 2*lazy.fontSize) {
                    fxlr = "right";
                }else if(_x < -2*lazy.fontSize){
                    fxlr = "left";
                }
                if(_y > 2*lazy.fontSize) {
                    fxtb = "bottom";
                }else if(_y < -2*lazy.fontSize){
                    fxtb = "top";
                }
                if(Math.abs(_x) > Math.abs(_y)) {
                    obj.fx(fxlr);
                }else {
                    obj.fx(fxtb);
                }
            }
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
    //打印
    function alert2Fun(obj) {
        if(typeof obj != "string") {
            obj = JSON.stringify(obj);
        }
        var alert2 = lazy.creat("div","alert2");
        alert2.innerHTML = '<div class="alert2content"><span>'+obj+'</span></div>';
        document.body.appendChild(alert2);
        setTimeout(function() {
            document.body.removeChild(alert2);
        },900);
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
    function varFun(json) {
        if(json!=undefined) {
            setParameterFun('lazyvarlshc', json);
        }else {
            return getParameterFun('lazyvarlshc');
        }
    }
    function closeSoundFun() {
        var sound = document.getElementById("audioIdDiv");
        if(sound) {
            if(sound.paused) {
                sound.pause();
            }
        }
    }
    //录音
    function startXtSoundFun(httpurl, centerfun, success, errorfun) {
        
            var input = document.getElementById('soundToUpload');
            if(!input) {
                input = document.createElement('input');
                input.style.display = 'none';
                input.setAttribute("id","soundToUpload");
                input.setAttribute("name","filename");
                input.setAttribute("accept","audio/*");
                input.setAttribute("capture","microphone");
                input.setAttribute("type","file");
                document.body.appendChild(input);
            }
        
            input.onchange = function() {
                var file = this.files[0];
                if(file) {
                    var filename = file.name;
                    var filesize = file.size;
                    var loading = loadingFun("");
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
                    if(!httpurl) {
                        success("",filename,filesize, src);
                        loading.close();
                        return;
                    }
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
                        loading.close();
                        if(xmlhttp.readyState==4 && xmlhttp.status==200) {
                             var data = JSON.parse(xmlhttp.responseText);
                             if(data.succeed || data.isSucceed) {
                                success(data,filename,filesize, src);
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

                }else {
                    lazy.alert2('文件不支持');
                }
            }
            
        input.click();
            
    }
    //录制视频
    function startVideoFun(httpurl, centerfun, success, errorfun) {
     
        var input = document.getElementById('videoToUpload');
        if(!input) {
            input = document.createElement('input');
            input.style.display = 'none';
            input.setAttribute("id","soundToUpload");
            input.setAttribute("name","filename");
            input.setAttribute("accept","video/*");
            input.setAttribute("capture","camcorder");
            input.setAttribute("type","file");
            document.body.appendChild(input);
        }
        input.onchange = function() {
            var file = this.files[0];
            if(file) {
                var filename = file.name;
                var filesize = file.size;
                var loading = loadingFun("");
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
                if(!httpurl) {
                    success("",filename,filesize, src);
                    loading.close();
                    return;
                }
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
                    loading.close();
                    if(xmlhttp.readyState==4 && xmlhttp.status==200) {
                         var data = JSON.parse(xmlhttp.responseText);
                         if(data.succeed || data.isSucceed) {
                            success(data,filename,filesize, src);
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
            }else {
                lazy.alert2('文件不支持');
            }
        }
        input.click();
    }
    //滚动条
    function bounceFun(obj) {
        closeBounceFun();
        var el = null;
        try {
            //el = window.parent.document.getElementsByClassName("iframeparent")[0];
            el = window.parent.document.getElementsByTagName("iframe")[0];
        }catch(e) {}
        if(el && lazyWindow.browserType=="ios") {
           var bouncebutton = document.getElementById("bouncebutton");
           if(!bouncebutton) {
               bouncebutton = lazy.creat("a", "#bouncebutton");
               bouncebutton.style.width = "100%";
               bouncebutton.style.textAlign = "center";
               bouncebutton.innerHTML = '<span style="padding:0.5rem;">点击加载...</span>';
               setTimeout(function() {
                   document.body.appendChild(bouncebutton);
               }, 1000);
           }
           bouncebutton.onclick = function() {
               document.body.appendChild(bouncebutton);
               if(obj.up)obj.up();
           }
        } else {
            window.onscroll = function() {
                var bodyScrollHeight = document.body.scrollHeight;
                var bodyScrollTop = document.body.scrollTop;
                var bodyHeight = document.body.clientHeight;
                if(bodyScrollHeight == (bodyScrollTop+ bodyHeight) && bodyScrollTop!=0) {
                    try{
                        if(obj.up)obj.up();
                    }catch(e) {
                        
                    }
                }
            }
        }
    }
    function closeBounceFun() {
        var bounceLoading = document.getElementById("bounceLoading");
        if(bounceLoading) {
            document.body.removeChild(bounceLoading);
        }
        var bouncebutton = document.getElementById("bouncebutton");
        if(bouncebutton) {
            document.body.removeChild(bouncebutton);
        }
    }
    function stopBounceFun() {
        closeBounceFun();
        window.onscroll = null;
        setTimeout(function() {
            document.getElementById("bouncebutton").style.display = "none"
        }, 1000);
    }
    //返回
    function goBackFun(){
        window.history.go(-1);
    }
    //刷新
    function refreshFun() {
        window.location.reload();
    }
     //打开子窗口
    function openIframeFun(url) {
        if(document.getElementById("contentIframe")) {
            document.getElementById("contentIframe").src = url;
        }else {
            if(document.getElementById("content") && document.getElementById("footer") && document.getElementById("header")) {

                var content = document.getElementById("content");
                var header = document.getElementById("header");
                var footer = document.getElementById("footer");
                var _y = parseInt(getElStyle(header).height.replace("px",""));
                var _h = parseInt(getElStyle(content).height.replace("px","")) - parseInt(getElStyle(footer).height.replace("px",""));
                var _html = '<iframe src="'+url+'" height="'+_h+'" width="100%" id="contentIframe" seamless></iframe>';
                content.innerHTML = _html;
            }else {
                lazy.alert2("主页面格式不对!");
            }
        }
    }
    function setParentJsFun(str,obj) {
        if(obj)parent[str](obj);
        else parent[str]();
    }
    function setChildJsFun(str) {
        document.getElementById("contentIframe").contentWindow[(str.replace("()",""))]();
    }
    //加载
    function loadingFun(title) {
        var loading = document.getElementById("loading");
        if(loading==undefined) {
            loading = document.createElement("div");
            loading.id = "loading";
            var l = (document.body.clientWidth - lazy.fontSize*5)/2+"px";
            var t = (document.body.clientHeight - lazy.fontSize*5)/2+"px";
            loading.innerHTML = '<div class="loadingkuang" style="left:'+l+';top:'+t+';"><span class="title">'+title+'</span></div>';
            document.body.appendChild(loading);
        }
        var titledom = loading.getElementsByClassName("title")[0];
        if(title) {
            titledom.innerHTML = title;
        }else {
            titledom.innerHTML = "加载中...";
        }
        loading.style.display = "block";
        loading.close = function() {
            titledom.innerHTML = "加载中...";
            loading.style.display = "none";
        }
        loading.setTitle = function(title) {
            titledom.innerHTML = title;
        }
        return loading;
    }
    function getElCssStyleFun(el) {
        if (el) {
            return window.getComputedStyle(el, null);
        } else {
            return false;
        }
    };
    //打开页面
    function openWinFun(url) {
        window.location.href = url;
    }
    //请求数据
    function URLRequestFun(url,successFun,errorFun,bol) {
        if(!bol)var loading = loadingFun("加载中...");
        ajaxFun({
            "url" : url,
            "type" : "GET",
            "success" : function(data) {
                if(!bol)loading.close();
                data=JSON.parse(data);
                if(data.isSucceed) {
                    successFun(data);
                }else {
                    if(data.message == "noLogin") {
                          lazy.goLogin();
                    }else if(errorFun) {
                       errorFun(data.message?data.message:"message is null");
                    }else {
                        alert2Fun(data.message?data.message:"message is null");
                    }
                    //if(errorFun)errorFun(data.message)
                }
            },
            "error" : function(str) {
                if(!bol)loading.close();
                if(errorFun) {
                    errorFun(str);
                }
            }
        });
    }
    function POSTFun(url,successFun,errorFun,bol) {
        if(!bol)var loading = loadingFun("加载中...");
        var xmlhttp;
        if(window.XMLHttpRequest){
          xmlhttp = new XMLHttpRequest();
          var data = url.replace(/.*\?/,"");
          url = url.replace(/\?.*/,"");
          xmlhttp.open("POST",url,true);
          xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
          xmlhttp.send(data);
          xmlhttp.onreadystatechange=function() {
              if(xmlhttp.readyState==4 && xmlhttp.status==200) {
                  if(!bol)loading.close();
                  var data = JSON.parse(xmlhttp.responseText);
                  if(data.isSucceed) {
                        successFun(data);
                    }else {
                        if(data.message == "noLogin") {
                              lazy.goLogin();
                        }else if(errorFun) {
                           errorFun(data.message?data.message:"message is null");
                        }else {
                            alert2Fun(data.message?data.message:"message is null");
                        }
                    }
              }else if(xmlhttp.status==0 || (xmlhttp.status+"").match(/(4|5)\d\d/)){
                 if(!bol)loading.close();
                  if(errorFun) {
                      errorFun("网络异常：" + xmlhttp.status); 
                  }else {
                      alert2Fun("网络异常：" + xmlhttp.status);
                  }
              }
          }
        }
    }
    LazyB.prototype = new LazyA();
    window.lazy = new LazyB();
    /////////////////////////////////////////////appcan 以下去全是appcan
    //录音
    function startXtSound_appcanFun(back) {
        uexAudio.cbRecord =  function(opId,dataType,data) {
            back(data);
        }
        uexAudio.record(2,new Date().getTime());
    }
    //关闭窗口
    function close_appcanFun() {
        uexWindow.close(-1);
    }
    //拍照
    function startPhoto_appcanFun(back) {
        uexCamera.cbOpen = function(opCode, dataType, data){
            back(data);
        }
        uexCamera.open();
    }
    //显示照片
    function showPhoto_appcanFun(arr) {
        uexImageBrowser.open(arr, 0, 1);
    }
    //阅读文件
    function readerFile_appcanFun(path) {
        uexDocumentReader.openDocumentReader(path);
    }
    //打开本地文件
    function startFile_appcanFun(back, imgbol) {
        if(imgbol) {
            uexImageBrowser.cbPick=function (opCode,dataType,data){
                    if(dataType==0){
                        var arr = data.replace(/.*\//, "").split(".");
                        var name = arr[0];
                        var type = arr[1];
                        back(data, name, type);
                    }
                }
            uexImageBrowser.pick();
        }else {
            uexFileMgr.cbExplorer = function(opId, dataType, data) {
                if (dataType == 0) {
                    var arr = data.replace(/.*\//, "").split(".");
                    var name = arr[0];
                    var type = arr[1];
                    back(data, name, type);
                }
            }
            uexFileMgr.explorer("/sdcard");
        }
    }
    //下载
    function download_appcanFun(FilePath,centerFun,endFun,errorFun,_path) {
        var id = parseInt(100000*Math.random());
        var path = "";
        if(_path){
            path = _path;
        }else {
            var h = FilePath.replace(/.*\//,"").split(".");
            var name = new Date().getTime();
            path = "wgt://download/"+name+"."+h[1];
        }
        uexDownloaderMgr.onStatus = function(opId, fileSize, percent, status) {
            switch (status) {
                case 0:
                    centerFun(percent,fileSize);
                break;
                case 1:
                    endFun(fileSize,path);
                break;
                case 2:
                    errorFun("下载失败!");
                break;
            }
        }
        uexDownloaderMgr.cbCreateDownloader = function(opCode, dataType, data) {
            if(data == 0){
                uexDownloaderMgr.download(id, FilePath, path,'0');
            }else{
                errorFun("创建错误!");
            }
        } 
        uexDownloaderMgr.createDownloader(id);
    }
    //上传
    function upload_appcanFun(inputname, fileurl, httpurl, level, centerfun, endfun, errorfun) {
        var id = parseInt(100000*Math.random());
        uexUploaderMgr.onStatus = function(opId, fileSize, percent, serverPath, status){
            switch (status) {
                case 0:
                    centerfun(percent);
                break;
                case 1:
                    uexUploaderMgr.closeUploader(id);
                    endfun(serverPath);
                break;
                case 2:
                    uexUploaderMgr.closeUploader(id);
                    errorfun("上传失败");
                 break;
            }
        }
        uexUploaderMgr.cbCreateUploader = function(id,dataType,data) {
            if(data == 0){
                //alert("创建成功");
                uexUploaderMgr.uploadFile(id, fileurl, inputname, level, 500);
                
            }else{
                //alert("创建失败");
                errorfun("创建失败");
            }
        }
        uexUploaderMgr.createUploader(id,httpurl);
    }
    //播放后台录音
    function playSound_appcanFun(url, backFun, k) {
        uexAudio.onPlayFinished=function(data){
            if(backFun) {
                if(k!=undefined) {
                    backFun(k);
                }else {
                    backFun();
                }
            }
        }
        uexAudio.open(url);
        uexAudio.play(0)
    }
    //关闭录音声音
    function closeSound_appcanFun() {
         uexAudio.stop();
    } 
    //获取gps
    function getGps_appcanFun(back) {
        setTimeout(function() {
            uexLocation.onChange = function(lat, log) {
                var x = lat; var y = log;
                back(x,y); 
            }
            uexLocation.openLocation("wgs84");
        },500);
    }
    function getGpsName_appcanFun(lat, log, back) {
        uexLocation.cbGetAddress = function(opCode, dataType, data) {
            back(data);
        }
        uexLocation.getAddress(lat, log);
    }
    function closeGps_appcanFun() {
        uexLocation.closeLocation();
    }
    //播放视频
    function playVideo_appcanFun(path) {
        uexVideo.open(path);
    }
    //视频录制
    function startVideo_appcanFun(back) {
        uexVideo.cbRecord = function(opId,dataTpye,data) {
            back(data);
        }
        uexVideo.record()
    }
    //打电话
    function call_appcanFun(num) {
         uexCall.dial(num);
    }
    //获取文件类型
    function getFlieTypeFun(houzhui) {
        if (houzhui == "png" || houzhui == "jpg" || houzhui == "jpeg" || houzhui == "gif" || houzhui == "PNG" || houzhui == "JPG" || houzhui == "JPEG" || houzhui == "GIF") {
            return "img";
        } else if (houzhui == "amr" || houzhui == "mp3" || houzhui == "AMR" || houzhui == "MP3") {
            return "mp3";
        } else if (houzhui == "mp4" || houzhui == "MP4") {
            return "mp4";
        } else if(houzhui == "ppt"||houzhui == "PPT"||houzhui == "pot"||houzhui == "POT"||houzhui == "pps"||houzhui == "PPS"){
            return "ppt";
        } else if(houzhui == "doc"||houzhui == "DOC"||houzhui == "dot"||houzhui == "DOT"||houzhui == "docx"||houzhui == "DOCX"||houzhui == "doct"||houzhui == "DOCT"){
            return "doc";
        } else if(houzhui == "xls"||houzhui == "XLS"||houzhui == "xlt"||houzhui == "XLT"){
            return "xls";
        } else if(houzhui == "pdf"||houzhui == "PDF"){
            return "pdf";
        }
         else {
            return "file";
        }
    }
}();