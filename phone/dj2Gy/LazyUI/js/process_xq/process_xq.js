lazy.plugins.process_xq = {
    "init" : function(el,data) {
        var table = lazy.creat("div","table ub ub-ver");
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
                    default :
                        textFun(obj, zuindex);
                        break;
                }
            }
        }
        //组
        function zuFun(zuindex) {
            if(zuindex) {
                var zu = table.getElementsByClassName(zuindex)[0];
                if(!zu) {
                    zu = lazy.creat("div", "zu " + zuindex);
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
            var labeldiv = lazy.creat("div","labeldiv ub");
            labeldiv.innerHTML = '<div class="ub-f1"><span>'+obj.text+'</span></div>';
            zuFun(zuindex).appendChild(labeldiv);
        }
        //文本
        function textFun(obj, zuindex) {
            var tr =  lazy.creat("div", "tr");
            if(obj.value!=""&&obj.value!="<br/>&nbsp;●&nbsp;"){
                var val = obj.value;
            }else{
                var val = "无";
            }
            tr.innerHTML = '<div class="hh"><span class="title">'+obj.title+'</span><span class="text">'+val+'</span></div>';
            zuFun(zuindex).appendChild(tr);
        }
        //图片
        function imageFun(obj, zuindex) {
            var tr =  lazy.creat("div", "tr");
            var arr = obj.value?obj.value:[];
            tr.innerHTML = '<div class="hh"><span class="title">'+obj.title+'</span></div>';
            var imagediv = lazy.creat("div", "imagediv");
            for(var i = 0; i < arr.length; i++) {
                var img =  lazy.creat("a", "img");
                var path = (getIP() + arr[i]).replace(/\\/g,"/");
                if(arr[i].indexOf("http://")>-1) path = arr[i];
                img.style.backgroundImage = "url("+path+")";
                img.setAttribute("src", path);
                img.onclick = function() {
                    var src = this.getAttribute("src");
                    lazy.showImage(src);
                }
                imagediv.appendChild(img);
            }
            tr.appendChild(imagediv);
            if(arr.length > 0)zuFun(zuindex).appendChild(tr);
        }
        //人员
        function readpeopleFun(obj, zuindex) {
            
            var tr =  lazy.creat("div", "peopletr ub");
            //tr.innerHTML = '<div class="hh"><span class="title">'+obj.title+'</span><span class="text">'+obj.value+'</span></div>';
            var titlediv = lazy.creat("div", "titlediv");
            titlediv.innerHTML = '<span class="title">'+obj.title+'</span>';
            var peoplediv = lazy.creat("div", "ub-f1 peoplediv");
            var bi = -1;
            lazy.for(obj.value, function(obj) {
                bi++;
                var icon = getIcon(obj.icon, obj.h1, bi, obj.mask);
                peoplediv.appendChild(icon);
            });
            
            var jian = lazy.creat("div", "jian");
            tr.appendChild(titlediv);
            tr.appendChild(peoplediv);
            //tr.appendChild(jian);
            zuFun(zuindex).appendChild(tr);
            
            
        }
        //返回图片
         function getIcon(path, title, i, mask) {
             var img = new Image();
             img.src = path;
             var icon = lazy.creat("div","icon");
             if(mask) {
                 var mask = lazy.creat("div","mask");
                 icon.appendChild(mask);
             }
             img.onerror = function() {
                 var icontitle1 = lazy.creat("div","icontitle1 bcolor"+parseInt(i%7));
                 icontitle1.innerHTML = '<span>'+title.substring((title.length>2?1:0),3)+'</span>';
                 icon.appendChild(icontitle1);
             }
             img.onload = function() {
                 var iconimg = lazy.creat("div","iconimg");
                 iconimg.style.backgroundImage = "url("+path+")";
                 icon.appendChild(iconimg);
             }
             return icon;
         }
        //音频
        function audioFun(obj, zuindex) {
            var tr =  lazy.creat("div", "tr");
            var arr = obj.value?obj.value:[];
            tr.innerHTML = '<div class="hh"><span class="title">'+obj.title+'</span></div>';
            var audiodiv = lazy.creat("div", "audiodiv");
            var audiosrc =  getIP() + obj.value.replace(/\\/g,"/");
            if(obj.value.indexOf("http://")>-1) audiosrc = obj.value;
            audiodiv.onclick = function() {
                lazy.playSound(audiosrc,true);
            }
            tr.appendChild(audiodiv);
            if(obj.value)zuFun(zuindex).appendChild(tr);
        }
        //视频
        function videoFun(obj, zuindex) {
            var tr =  lazy.creat("div", "tr");
            var arr = obj.value?obj.value:[];
            tr.innerHTML = '<div class="hh"><span class="title">'+obj.title+'</span></div>';
            var videodiv = lazy.creat("div", "videodiv");
            var videosrc =  getIP() + obj.value.replace(/\\/g,"/");
            if(obj.value.indexOf("http://")>-1) videosrc = obj.value;
            videodiv.onclick = function() {
                lazy.playVideo(videosrc);
            }
            tr.appendChild(videodiv);
            if(obj.value)zuFun(zuindex).appendChild(tr);
        }
        //文件
        function fileFun(obj, zuindex) {
            var tr =  lazy.creat("div", "tr");
            var arr = obj.value?obj.value:[];
            var namearr = obj.name?obj.name:[];
            tr.innerHTML = '<div class="hh"><span class="title">'+obj.title+'</span></div>';
            var filediv = lazy.creat("div", "filediv");
            for(var i = 0; i < arr.length; i++) {
                var file =  lazy.creat("a", "file ub");
                var path = (arr[i]).replace(/\\/g,"/");
                if(arr[i].indexOf("http://")>-1) path = arr[i];
                if(namearr.length==0) var name = path.substring(path.lastIndexOf("/")+1);
                else var name = namearr[i];
                file.innerHTML = '<div class="icon"></div><div class="ub-f1 fileh"><div class="h1 hh"><span>'+name+'</span></div></div>';
                file.setAttribute("src", path);
                file.setAttribute("header",JSON.stringify(obj.header));
                file.onclick = function() {
                    var src = this.getAttribute("src");
                    var header = this.getAttribute("header");
                    var houzhui = src.substring(src.lastIndexOf(".")+1);
                    if(lazy.getFlieType(houzhui)=="img"){
                        lazy.showImage(src);
                    }else{
                        lazy.onDownload(src);
                    }
                }
                filediv.appendChild(file);
            }
            tr.appendChild(filediv);
            if(arr.length > 0)zuFun(zuindex).appendChild(tr);
        }
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
