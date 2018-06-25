lazy.plugins.process_xq = {
	"init" : function(el,data) {
	    var pic_ip = lazy.getParameter("ip");
        var table = lazy.create("div","table box box_v");
	    var arr = data.table?data.table:[];
        for(var i = 0; i < arr.length; i++) {
            switchFun(arr[i]);
        }
        el.appendChild(table);
        
        function switchFun(obj, zuindex) {
            if(obj.list) {
                var _list = obj.list.table;
                var _zuindex = lazy.getAutoId();
                if(obj.list.name){
                	labelFun({
                		"text" : obj.list.name
                	}); 
                }
                for(var k = 0; k < _list.length; k++) {
                    var list = _list[k];
                    for(var j = 0; j < list.length; j++) {
                        switchFun(list[j], _zuindex);
                    }
                }
                
            }else {
                if(obj.type){
                switch(obj.type) {
                    case "image" :
                        imageFun(obj, zuindex);
                        break;
                    case "audio" :
                        audioFun(obj, zuindex);
                        break;
                    case "video" :
                        videoFun(obj, zuindex);
                        break;
                    case "file" :
                        fileFun(obj, zuindex);
                        break;
                    case "readpeople" :
                        readpeopleFun(obj, zuindex);
                        break;    
                    case "hide" :
                        break;
                    case "idCard" :
                        idCardFun(obj, zuindex);
                        break;
                    default :
                        textFun(obj, zuindex);
                        break;
                }
                }
            }
        }
        //组
        function zuFun(zuindex) {
            if(zuindex) {
                var zu = table.getElementsByClassName(zuindex)[0];
                if(!zu) {
                    zu = lazy.create("div", "zu " + zuindex);
                    zu.innerHTML = '<div class="zucontent"></div>';
                    table.appendChild(zu);
                }
                return zu.getElementsByClassName("zucontent")[0];
            }else {
                return table;
            }
        }
        //标签
        function labelFun(obj, zuindex) {
            var labeldiv = lazy.create("div","labeldiv box");
            labeldiv.innerHTML = '<div class="box_f1"><span>'+obj.text+'</span></div>';
            zuFun(zuindex).appendChild(labeldiv);
        }
        //文本
        function textFun(obj, zuindex) {
            var tr =  lazy.create("div", "tr");
            tr.innerHTML = '<div class="hh box"><span class="title box">'+obj.title+'</span><span class="text box_f1">'+obj.value+'</span></div>';
            zuFun(zuindex).appendChild(tr);
        }
        //图片
        function imageFun(obj, zuindex) {
            var tr =  lazy.create("div", "tr");
            var arr = obj.value?obj.value:[];
            tr.innerHTML = '<div class="hh"><span class="title">'+obj.title+'</span></div>';
            var imagediv = lazy.create("div", "imagediv");
            for(var i = 0; i < arr.length; i++) {
                var img =  lazy.create("a", "img");
                var path = (getIP() + arr[i]).replace(/\\/g,"/");
                img.style.backgroundImage = "url("+path+")";
                img.setAttribute("src", path);
                img.onclick = function() {
                    var src = this.getAttribute("src");
                    lazy.isAppcan(function() {
                        lazy.showPhoto_appcan([src]);
                    }, function() {
                        lazy.showImage(src);
                    });
                    
                }
                imagediv.appendChild(img);
            }
            tr.appendChild(imagediv);
            if(arr.length > 0)zuFun(zuindex).appendChild(tr);
        }
        //身份证
        function idCardFun(obj, zuindex) {
            var tr =  lazy.create("div", "tr");
            var arr = obj.value?obj.value:[];
            var obj234 = {
                "path":"../LazyUI/images/default.png",
                "remind":"123"
            }
            //arr.push(obj234)
            tr.innerHTML = '<div class="hh"><span class="title">'+obj.title+'</span></div>';
            var idCarddiv = lazy.create("div", "idCarddiv");
            for(var i = 0; i < arr.length; i++) {
                var icondiv = lazy.create("div","kuai");
                //var img =  lazy.creat("a", "idCardImg");
                var img = new Image();
                img.className = "idCardImg";
                /*console.log(arr[i].path)
                var path = getIP() + arr[i].path.replace(/\\/g,"/");
                if(arr[i].path.indexOf("http")>-1) path = arr[i].path
                img.src = path;*/
                //var path = (getIP() + arr[i].path).replace(/\\/g,"/");
                //img.style.backgroundImage = "url("+path+")";
                //img.setAttribute("src", path);
                img.src = pic_ip+arr[i];
                img.onclick = function() {
                    var src = this.getAttribute("src");
                    var imgarr = [];
                    var imgs = el.getElementsByClassName("idCardImg");
                    for(var i=0;i<imgs.length;i++){
                        //imgarr.push(imgs[i].getAttribute("src")!=src)
                        imgarr.push(imgs[i].getAttribute("src").replace(/\@.*/g,""))
                    }
                    //lazy.showImage(src);
                    //lazy.showImage(src,imgarr);
                    //lazy.previewImage(src,imgarr);
                    previewImage(this.src.replace(/\@.*/g,""))
                }
                icondiv.appendChild(img);
                var remind = lazy.create("div","remind");
                console.log(obj.remard[i])
                remind.innerHTML = obj.remard[i];
                icondiv.appendChild(remind);
                idCarddiv.appendChild(icondiv);
            }
            tr.appendChild(idCarddiv);
            if(arr.length > 0)zuFun(zuindex).appendChild(tr);
        }
        //人员
        function readpeopleFun(obj, zuindex) {
            
            var tr =  lazy.create("div", "peopletr box");
            //tr.innerHTML = '<div class="hh"><span class="title">'+obj.title+'</span><span class="text">'+obj.value+'</span></div>';
            var titlediv = lazy.create("div", "titlediv");
            titlediv.innerHTML = '<span class="title">'+obj.title+'</span>';
            var peoplediv = lazy.create("div", "box_f1 peoplediv");
            var bi = -1;
            lazy.for(obj.value, function(obj) {
                bi++;
                var icon = getIcon(obj.icon, obj.h1, bi, obj.mask);
                peoplediv.appendChild(icon);
            });
            
            var jian = lazy.create("div", "jian");
            tr.appendChild(titlediv);
            tr.appendChild(peoplediv);
            //tr.appendChild(jian);
            zuFun(zuindex).appendChild(tr);
            
            
        }
        //返回图片
         function getIcon(path, title, i, mask) {
             var img = new Image();
             img.src = path;
             var icon = lazy.create("div","icon");
             if(mask) {
                 var mask = lazy.create("div","mask");
                 icon.appendChild(mask);
             }
             img.onerror = function() {
                 var icontitle1 = lazy.create("div","icontitle1 bcolor"+parseInt(i%7));
                 icontitle1.innerHTML = '<span>'+title.substring((title.length>2?1:0),3)+'</span>';
                 icon.appendChild(icontitle1);
             }
             img.onload = function() {
                 var iconimg = lazy.create("div","iconimg");
                 iconimg.style.backgroundImage = "url("+path+")";
                 icon.appendChild(iconimg);
             }
             return icon;
         }
        //音频
        function audioFun(obj, zuindex) {
            var tr =  lazy.create("div", "tr");
            var arr = obj.value?obj.value:[];
            tr.innerHTML = '<div class="hh"><span class="title">'+obj.title+'</span></div>';
            var audiodiv = lazy.create("div", "audiodiv");
            var audiosrc =  getIP() + obj.value.replace(/\\/g,"/");
            audiodiv.onclick = function() {
                lazy.isAppcan(function() {
                    lazy.playVideo_appcan(audiosrc);
                },function() {
                    lazy.playSound(audiosrc);
                });
            }
            tr.appendChild(audiodiv);
            if(obj.value)zuFun(zuindex).appendChild(tr);
        }
        //视频
        function videoFun(obj, zuindex) {
            var tr =  lazy.create("div", "tr");
            var arr = obj.value?obj.value:[];
            tr.innerHTML = '<div class="hh"><span class="title">'+obj.title+'</span></div>';
            var videodiv = lazy.create("div", "videodiv");
            var videosrc =  getIP() + obj.value.replace(/\\/g,"/");
            videodiv.onclick = function() {
                lazy.isAppcan(function() {
                    lazy.playVideo_appcan(videosrc);
                },function() {
                    lazy.playVideo(videosrc);
                });
            }
            tr.appendChild(videodiv);
            if(obj.value)zuFun(zuindex).appendChild(tr);
        }
        //文件
        function fileFun(obj, zuindex) {
            var tr =  lazy.create("div", "tr");
            var arr = obj.value?obj.value:[];
            var namearr = obj.name?obj.name:[];
            tr.innerHTML = '<div class="hh"><span class="title">'+obj.title+'</span></div>';
            var filediv = lazy.create("div", "filediv");
            for(var i = 0; i < arr.length; i++) {
                var file =  lazy.create("a", "file box");
                var path = (getIP() + arr[i]).replace(/\\/g,"/");
                if(namearr.length==0) var name = path.substring(path.lastIndexOf("/")+1);
                else var name = namearr[i];
                file.innerHTML = '<div class="icon"></div><div class="box_f1 fileh"><div class="h1 hh"><span>'+name+'</span></div></div>';
                file.setAttribute("src", path);
                file.onclick = function() {
                    var src = this.getAttribute("src");
                    alert(src)
                    if(lazy.getFlieType(src.substring(src.lastIndexOf(".")+1))=="img"){
                        lazy.showImage(src);
                    }else{
                        lazy.openFile(src);
                    }
                }
                filediv.appendChild(file);
            }
            tr.appendChild(filediv);
            if(arr.length > 0)zuFun(zuindex).appendChild(tr);
        }
        function previewImage(url){
             var imgtemp = el.getElementsByTagName("img");
             var urlss = [];
             for(var j=0 ; j<imgtemp.length ; j++){
                 urlss.push(imgtemp[j].src.replace(/\@.*/g,""))
             }
             lazy.previewImage(url,urlss);
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
