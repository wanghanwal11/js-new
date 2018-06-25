/*通用方法*/
!function(){
    var LazyB = function() {
        //url
        this.url = document.querySelectorAll('[src*=admin]')[0].getAttribute("src").match(/.*(?=LazyUI)/g)[0];
        //主题
        this.colorCss = 'color_dj.css';
        //预加载资源
        this.before = [this.url+'common/property.js', this.url+'common/config.js'];
        //打开其他页面
        this.openWin = openWinFun;
        this.openParentWin = openParentWinFun;
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
        //添加加载动画
        this.loading = loadingFun;
        //数据缓存
        this.setParameter = setParameterFun;
        this.getParameter = getParameterFun;
        this.var = varFun;
        //获取css样式
        this.getElCssStyle = getElCssStyleFun;
        //日期格式转换
        this.format = formatFun;
        //alert
        this.alert2 = alert2Fun;
        //添加加载动画
        this.loading = loadingFun;
        //弹出列表
        this.alertlist = alertlistFun;
        //弹性加载
        this.bounce = bounceFun;
        this.closeBounce = closeBounceFun;
        //
        this.alertyesno = alertyesnoFun;
        //播放声音
        this.playSound = playSoundFun;
        this.closeSound = closeSoundFun;
        //录音
        this.startXtSound = startXtSoundFun;
        //播放视频
        this.playVideo = playVideoFun;
        //滑动
        this.gesture = gestureFun;
         this.huanChong=huanChongFun; 
        //清除动画
        this.clearHuanChong=clearHuanChongFun; 
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
        //获取gps
        //获取兄弟元素 
        this.siblings = siblingsFun;
        //浏览器类型
        this.browserType = lazyWindow.browserType;
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
         //获取兄弟元素
    function siblingsFun(elm) {
        var a = [];
        var p = elm.parentNode.children;
        for(var i =0,pl= p.length;i<pl;i++) {
            if(p[i] !== elm) a.push(p[i]);
        }
        return a;
    }
    //动画 
    function huanChongFun(a, b, time, type, centerFun, backFun) {
            a = parseInt(a);
            b = parseInt(b);
            var zheng = true;
            if (a < b) {
                zheng = true;
            } else if (a > b) {
                zheng = false;
            } else {
                return;
            }
            var t;
            var pl = 30;
            var cs = Math.ceil(time / pl);
            var an = (b - a) * 2 / cs - 1;
            var d = (an - 1) / (cs - 1);
            if (type == "yunsu") {
                var vv = Math.abs(a - b) / cs;
                t = setInterval(function() {
                    if (zheng) {
                        a += vv;
                    } else {
                        a -= vv;
                    }
                    if (zheng && Math.ceil(a) >= b) {
                        a = b;
                        clearInterval(t);
                        if (backFun) {
                            backFun(Math.ceil(a));
                        }
                    }
                    if (!zheng && Math.ceil(a) <= b) {
                        a = b;
                        clearInterval(t);
                        if (backFun) {
                            backFun(Math.ceil(a));
                        }
                    }
                    centerFun(Math.ceil(a));
                }, pl);
                return t;
            } else {
                if (type == "jiansu") {
                    var ak = an;
                } else {
                    var ak = 1;
                }
                t = setInterval(function() {
                    a += ak;
                    if (type == "jiansu") {
                        ak -= d;
                    } else {
                        ak += d;
                    }
                    if (zheng && Math.ceil(a) >= b) {
                        a = b;
                        clearInterval(t);
                        if (backFun) {
                            backFun(Math.ceil(a));
                        }
                    }
                    if (!zheng && Math.ceil(a) <= b) {
                        a = b;
                        clearInterval(t);
                        if (backFun) {
                            backFun(Math.ceil(a));
                        }
                    }
                    centerFun(Math.ceil(a));
                }, pl);
                return t;
            }
    }
    function clearHuanChongFun(t) {
        clearInterval(t);
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
    //弹出列表
    function alertlistFun(arr) {
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
                if(obj.onclick)obj.onclick();
            }
            alertlisttr.appendChild(tr);
        }
    }
    //文件
    function startFileFun(httpurl, centerfun, success, errorfun) {
        lazy.isAppcan(function() {
            var name = "";
            var type = "";
            var loading = loadingFun("");
            //打开文件
            uexFileMgr.cbExplorer = function(opId, dataType, data) {
                if (dataType == 0) {
                    var arr = data.replace(/.*\//, "").split(".");
                    name = arr[0];
                    type = arr[1];
                    
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
        });
        
    }
    //获取url参数
    function responseFun(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
        var r = window.location.search.substr(1).match(reg); 
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
    //显示图片
    function showImageFun(src) {
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
        
    }
    //打开文件
    function openFileFun(src) {
        //lazy.openWin(src);
        window.open(src);
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
    //播放声音
    function playSoundFun(path) {
        var sound = document.getElementById("audioIdDiv");
        if(!sound) {
            sound = lazy.creat("audio","#audioIdDiv");
            sound.style.display = "none";
            document.body.appendChild(sound);
        }
        closeSoundFun();
        sound.src = path;
        sound.play();
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
    //播放视频
    function playVideoFun(path) {
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
    }
    //滚动条
    function bounceFun(obj) {
        
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
    function closeBounceFun() {
        
    }
    //返回
    function goBackFun(){
        window.history.go(-1);
    }
    //刷新
    function refreshFun() {
        window.location.reload();
    }
    //加载
    function loadingFun(title) {
        var loading = document.getElementById("loading");
        if(loading==undefined) {
            loading = document.createElement("div");
            loading.id = "loading";
            var l = (document.body.clientWidth - lazy.fontSize*5)/2+"px";
            var t = (document.body.clientHeight - lazy.fontSize*5)/2+"px";
            loading.innerHTML = '<div class="loadingkuang" style="left:'+l+';top:'+t+';"><span>'+title+'</span></div>';
            document.body.appendChild(loading);
        }
        loading.style.display = "block";
        loading.close = function() {
            loading.style.display = "none";
        }
        return loading;
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
            loading.innerHTML = '<div class="loadingkuang" style="left:'+l+';top:'+t+';"><span>'+title+'</span></div>';
            document.body.appendChild(loading);
        }
        loading.style.display = "block";
        loading.close = function() {
            loading.style.display = "none";
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
    function openParentWinFun(url) {
        window.location.href = url;
    }
    //请求数据
    function URLRequestFun(url,successFun,errorFun,bol) {
        if(!bol)var loading = loadingFun("加载中...");
        if(responseFun("key")) {
            if(url.indexOf("?")!=-1) {
                url+= ("&key="+responseFun("key"));
            }else {
                url+= ("?key="+responseFun("key"));
            }
        }
        ajaxFun({
            "url" : url,
            "type" : "GET",
            "success" : function(data) {
                if(!bol)loading.close();
                data=JSON.parse(data);
                if(data.isSucceed) {
                    successFun(data);
                }else {
                    if(errorFun)errorFun(data.message)
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
    LazyB.prototype = new LazyA();
    window.lazy = new LazyB();
    /////////////////////////////////////////////appcan 以下去全是appcan
    //录音
    function startXtSound_appcanFun(back) {
        uexAudio.cbRecord =  function(opId,dataType,data) {
            back(data);
        }
        uexAudio.record(2);
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
        uexLocationSpc.onChange = function(lat,log) {
            var x = lat; var y = log;
            back(x,y); 
        }
        uexLocationSpc.openLocation();
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
}();