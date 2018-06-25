/*通用方法*/
!function(){
    var Lazy = function() {
        //初始化方法 自动执行
        this.init = initFun;
        //点击事件 可以 长按
        this.onclick = onclickFun;
        //alert
        this.alert = alertFun;
        this.alert2 = alert2Fun;
        //返回登录页
        this.goLogin = goLoginFun;
        //弹出列表
        this.alertlist = alertlistFun;
        //暂无数据
        this.datanull = datanullFun;
        //数据加载
        this.URLRequest = URLRequestFun;
        //调用父级方法
        this.setParentJs = setParentJsFun;
        this.setChildJs = setChildJsFun;
        //页面返回
        this.goBack = goBackFun;
        //刷新
        this.refresh = refreshFun;
        //关闭
        this.close = closeFun;
        //播放声音
        this.playSound = playSoundFun;
        this.closeSound = closeSoundFun;
        //播放视频
        this.playVideo = playVideoFun;
        //拍照
        this.startPhoto = startPhotoFun;
        //显示图片
        this.showImage = showImageFun;
        //日期控件
        this.dateTime = dateTimeFun;
        //日期格式转换
        this.autoFormat = autoFormatFun;
        this.format = formatFun;
        //打开其他页面
        this.openWin = openWinFun;
        this.openWin1 = openWinFun;
        //添加加载动画
        this.loading = loadingFun;
        //弹性分页加载
        this.bounce = bounceFun;
        this.closeBounce = closeBounceFun;
        this.stopBounce = stopBounceFun;
        //弧形icon
        this.arcIcon = arcIconFun;
        //获取字符串长度
        this.getStringByteLength = getStringByteLengthFun;
        //清空字符串
        this.clearStr = clearStrFun;
        //名字截取
        this.substringName = substringNameFun;
        //生成iframe
        this.iframe = iframeFun;
        //获取表情
        this.getFace = getFaceFun;
        //ios和android回调函数
        this.callBack = callBackFun;
        //获取gps
        this.getGps = getGpsFun;
        this.getGpsName = getGpsNameFun;
        this.gpsToAmap = gpsToAmapFun;
        this.closeGps = closeGpsFun;
        //获取url参数
        this.geturlstr = responseFun;
        this.response = responseFun;
    }
     /*///////////////////////////////////////////////////////////////////
    *   内置方法和变量可以直接使用
    *   fontSize  int     1rem px
    *   url   string  目录的路径点
    *   browserType string 浏览器类型
    *   isArray  fun(obj)   是否为数组
    *   getAutoId     fun()     获取自增id 
    *   for fun(arr, back<val,i>, true) for循环  最后一个参数用来
    *   getDom  fun(name) dom对象选择
    *   setParameter    fun(name,obj) 设置缓存
    *   getParameter    fun() dom对象选择
    *   loadJs    fun(name, url, back)     加载js
    *   loadCss   fun(name, url)     加载css
    *   setConstant function(null) 清除缓存
    */
   //
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
    //
    function initFun (back) {
        document.body.setAttribute("type","body");
        window.$ = lazy.getDom;
        
        switch(lazy.browserType) {
            case "vitoios" :
                lazy.loadJs("iosType", lazy.url+"LazyUI/js/ios.js", function() {
                    commonFun();
                });
            break;
            case "vitoandroid" :
                lazy.loadJs("androidType", lazy.url+"LazyUI/js/android.js", function() {
                    commonFun();
                });
            break;
            case "weixin" :
                lazy.loadJs("weixinType", lazy.url+"LazyUI/js/weixin.js", function() {
                    commonFun();
                });
            break;
            default :
                commonFun();
            break;
        }
        function commonFun() {
            lazy.loadJs("propertyType", lazy.url+"common/property.js", function() {
                lazy.loadJs("propertyConfig", lazy.url+"common/config.js", function() {
                    if(back)back();
                });
            });
        }
        
    }
    //打开页面
    function openWinFun(url) {
        window.location.href = url;
    }
    //返回
    function goBackFun(){
        window.history.go(-1);
    }
    //刷新
    function refreshFun() {
        window.location.reload();
    }
    //关闭事件
    function closeFun() {
        
    }
    //返回登录页
    function goLoginFun() {
        lazy.openWin("../" + lazy.url + "/login.html");
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
            if(sound.pause) {
                sound.pause();
            }
        }
    }
    //播放视频
    function playVideoFun(path) {
        closeVideoFun();
        var video = document.getElementById("videoIdDiv");
        if(!video) {
            video = lazy.creat("video","#videoIdDiv");
            video.style.width = "0px";
            video.style.height = "1px";
            document.body.appendChild(video);
        }
        video.src = path;
        if(video.webkitRequestFullscreen)video.webkitRequestFullScreen();
        video.load();
        video.play();
        document.addEventListener("webkitfullscreenchange", function(e) {
          video.pause();
        });
        return video.duration?video.duration:"";
    }
    function closeVideoFun() {
        var video = document.getElementById("videoIdDiv");
        if(video) {
            video.pause();
        }
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
    //获取表情
    function getFaceFun(str) {
        var json = {
            '_bq0_' : '<img class="faceimg" src="'+lazy.url+'LazyUI/images/face/0.png" alt=""/>',
            '_bq1_' : '<img class="faceimg" src="'+lazy.url+'LazyUI/images/face/1.png" alt=""/>',
            '_bq2_' : '<img class="faceimg" src="'+lazy.url+'LazyUI/images/face/2.png" alt=""/>',
            '_bq3_' : '<img class="faceimg" src="'+lazy.url+'LazyUI/images/face/3.png" alt=""/>',
            '_bq4_' : '<img class="faceimg" src="'+lazy.url+'LazyUI/images/face/4.png" alt=""/>',
            '_bq5_' : '<img class="faceimg" src="'+lazy.url+'LazyUI/images/face/5.png" alt=""/>',
            '_bq6_' : '<img class="faceimg" src="'+lazy.url+'LazyUI/images/face/6.png" alt=""/>',
            '_bq7_' : '<img class="faceimg" src="'+lazy.url+'LazyUI/images/face/7.png" alt=""/>'
        }
        return str.replace(/_bq\d+_/g, function(s,s1) {
            if(json[s]) return json[s];
            else return s;
        });
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
    //加载
    function loadingFun(title, num) {
        var loading = document.getElementById("loading");
        if(loading==undefined) {
            loading = lazy.creat("div", "#loading");
            loading.id = "loading";
            var _html = '<div class="loading ub ub-ver"><div class="ub-f1"></div><div class="loadingcondiv">';
            _html += '<div class="loadingtitle lt0"></div>';
            _html += '</div><div class="ub-f1"></div></div>';
            loading.innerHTML = _html;
            document.body.appendChild(loading);
        }
        if(num == 1) {
            loading.getElementsByClassName("loading")[0].style.backgroundColor = "#fff";
            loading.getElementsByClassName("loadingtitle")[0].className = "loadingtitle lt1";
        } else {
            loading.getElementsByClassName("loading")[0].style.backgroundColor = "rgba(0,0,0,0)";
            loading.getElementsByClassName("loadingtitle")[0].className = "loadingtitle lt0";
        }
        loading.getElementsByClassName("loadingtitle")[0].innerHTML = '<span>'+(title?title:"加载中...")+'</span>';
        loading.close = function() {
            loading.style.display = "none";
        }
        loading.style.display = "block";
        return loading;
    }
    //数据加载
    function URLRequestFun(url,successFun,errorFun,num) {
        if(num!=0) {
            var loading = loadingFun("", num);
        }
        var xmlhttp;
        if(window.XMLHttpRequest){
          xmlhttp = new XMLHttpRequest();
          xmlhttp.open("GET",url,true);
          xmlhttp.send();
          xmlhttp.onreadystatechange=function() {
              if(xmlhttp.readyState==4 && xmlhttp.status==200) {
                  if(num!=0)  loading.close();
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
                  if(num!=0) loading.close();
                  if(errorFun) {
                      errorFun("网络异常：" + xmlhttp.status); 
                  }else {
                      alert2Fun("网络异常：" + xmlhttp.status);
                  }
              }
          }
        }
    }
    //调用父级方法
    function setParentJsFun(str,obj) {
        str = str.replace("()","");
        if(obj)parent[str](obj);
        else parent[str]();
    }
    function setChildJsFun(str, obj, idclass) {
        var el;
        str = str.replace("()","");
        try {
            if(idclass) {
                if(idclass.indexOf("#")!=-1) {
                    el = document.getElementById(idclass.replace("#",""));
                }else {
                    el = document.body.getElementsByClassName(idclass.replace(".",""))[0];
                } 
            }else {
                el = document.body.getElementsByTagName("iframe")[0];
            }
            el.contentWindow[(str.replace("()",""))](obj);
        }catch(e) {
            
        }
    }
    //日期控件
    function dateTimeFun(type, back) {
        
        var _n = 21;
        var nowdate = new Date();
        var year = nowdate.getFullYear();
        var month = nowdate.getMonth() + 1;
        var day = new Date(year, month, 0).getDate();
        var thisday = nowdate.getDate();
        var obj = {
            "year" : year,
            "month" : month,
            "day" : day
        }
        //
        var dateInputMask = document.getElementById("dateInputMask"), dateInput;
        if(!dateInputMask) {
            dateInputMask = lazy.creat("div","#dateInputMask");
            var _html = '';
            _html += '<div class="date ub">';
            _html += '</div>';
            dateInputMask.innerHTML = _html;
            document.body.appendChild(dateInputMask);
        }
        
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
    //ios和android回调函数
    function callBackFun(back) {
        var funname = lazy.getAutoId();
        window[funname] = back;
        return funname;
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
                        closeBounceFun();
                        var bounceLoading = lazy.creat("a", "#bounceLoading");
                        bounceLoading.innerHTML = '<span style="padding:0.5rem;">加载中...</span>';
                        document.body.appendChild(bounceLoading);
                        if(obj.up)obj.up();
                    }catch(e) {
                        
                    }
                }
            }
        }
    }
    function stopBounceFun() {
        closeBounceFun();
        window.onscroll = null;
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
    //弹窗
    function alertFun(titile, _obj) {
        //yestitle yesfun notitle nofun
        var obj = _obj?_obj:{};
        var alertDiv = lazy.creat("div","alertDiv ub ub-ver");
        var _html = '<div class="ub-f1"></div>';
        _html += '<div class="alertcon">';
        _html += '<div class="alertcontent">';
        _html += '  <div class="alerttitle"><span>'+titile+'</span></div>';
        _html += '  <div class="alertbutton ub">';
        if(obj.notitle) {
        _html += '      <a class="alertbtn nobtn ub-f1"><span>'+(obj.notitle?obj.notitle:"取消")+'</span></a>'; 
         _html += '      <div style="width:0.8rem;"></div>';   
        }
        _html += '      <a class="alertbtn yesbtn ub-f1"><span>'+(obj.yestitle?obj.yestitle:"确定")+'</span></a>';
        _html += '  </div>';
        _html += '</div>';
        _html += '</div>';
        _html += '<div class="ub-f1"></div>';
        alertDiv.innerHTML = _html;
        if(obj.close) {
            var closebtn = lazy.creat("a","closebtn");
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
    //暂无数据
    function datanullFun(_title, _pel) {
        //var zwsjXT = document.getElementById("zwsjXT");
        var pel = _pel?_pel:document.body;
        var title = _title?_title:"暂无数据!";
        var zwsjXT = lazy.creat("div", "zwsjXT");
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
    // 清除字符串
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
                    str = str.replace(/\\/g,"/").replace(/\=\".*?\.\.(.*?)\"/,'="'+getIP()+'$1"');
                    return str;
                }
            }); 
        }else {
            return str = str.replace(/\<([a-z]*?)\s.*?\>/g,'<$1>');
        }
    }
    //弧形icon
    function arcIconFun(path, width, name, i) {
         var img = new Image();
         img.src = path;
         var icon = lazy.creat("div","icon");
         img.onerror = function() {
             var iconimg;
             if(name) {
                 if(i) iconimg = lazy.creat("div","iconimg bcolor"+parseInt(i%7));
                 else iconimg = lazy.creat("div","iconimg bcolor"+parseInt(7 * Math.random()));
                 iconimg.innerHTML = '<span>'+substringNameFun(name)+'</span>';
                 iconimg.style.lineHeight = width;
             } else {
                 iconimg = lazy.creat("div","iconimg morenpeople");
             }
             iconimgStyle(iconimg);
             icon.appendChild(iconimg);
         }
         img.onload = function() {
             var iconimg = lazy.creat("div","iconimg");
             iconimgStyle(iconimg);
             iconimg.style.backgroundImage = "url("+path+")";
             icon.appendChild(iconimg);
         }
         function iconimgStyle(iconimg) {
             iconimg.style.width = width;
             iconimg.style.height = width;
             iconimg.style.borderRadius = width;
             iconimg.style.backgroundSize = "100% 100%";
         }
         return icon;
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
    //名字截取
    function substringNameFun(name) {
        if(name.match(/[^\u4E00-\u9FA5]/)) {
            return name.substring(0,2);
        }else {
            if(name.length < 3) {
                return name;
            }else if(name.length == 3) {
                return name.substring(1,3);
            }else if (name.length == 4){
                return name.substring(2,4);
            }else {
                return name.substring(0,2);
            }
        }
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
    window.lazy = new Lazy();
}();