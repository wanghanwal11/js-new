lazy.plugins.process = {
	"init" : function(el,data) {
        var allvalue = [];//所有数据
        //加班时间
        var overtimearr = [];
        var table = lazy.creat("div","table ub ub-ver");
        var arr = data.table?data.table:[];
        for(var i = 0; i < arr.length; i++) {
            switchFun({
                "obj" : arr[i],
                "index" : i
            });
        }
        el.appendChild(table);
        //获取数据
        data.getArray = function() {
            
            tableFun(data.table)
            
            function tableFun(arr, n) {
                for(var i = 0; i < arr.length; i++) {
                    var type = arr[i].type;
                    var pe = table.getElementsByClassName(arr[i].bs)[n?n:0];
                    if(type == "datetime" || type == "date" || type == "time"){
                    	 if(pe.getElementsByClassName("datetimeinput")[0].innerHTML.indexOf("请选择")>-1){
                            arr[i].value = "";
                        }else{
                            arr[i].value = pe.getElementsByClassName("datetimeinput")[0].innerHTML;
                        }
                    }else if(type == "input" || type == "number") {
                        arr[i].value = pe.getElementsByTagName("input")[0].value;
                    }else if(type == "textarea") {
                        arr[i].value = pe.getElementsByClassName("textarea")[0].value;
                    }else if(type == "select") {
                        var _span = pe.getElementsByClassName("inpo")[0].value;
//                        if(_span.innerHTML!=arr[i].placeholder) {
//                            arr[i].value = {"html":_span.innerHTML,"value" : _span.getAttribute("value")};
//                        }else {
//                            arr[i].value = {"html":"","value" : ""};
//                        }
                        arr[i].value = _span;
                        
                    }else if(type == "people") {
                        arr[i].value = [];
                        for(var j = 0; j < peoplearr.length; j++) {
                            if(peoplearr[j]!="")arr[i].value.push(peoplearr[j]);
                        }
                        //arr[i].value = soundobj[arr[i].bs];
                    }else if(type == "overtime") {
                        arr[i].value = [];
                        for(var j = 0; j < overtimearr.length; j++) {
                            if(overtimearr[j]!="")arr[i].value.push(overtimearr[j]);
                        }
                    }else if(type == "image") {
                        arr[i].value = [];
                        for(var j = 0; j < imagearr.length; j++) {
                            if(imagearr[j]!="")arr[i].value.push(imagearr[j]);
                        }
                    }else if(type == "file") {
                        arr[i].value = [];
                        for(var j = 0; j < filearr.length; j++) {
                            if(filearr[j]!="")arr[i].value.push(filearr[j]);
                        }
                    }else if(type == "map") {
                        arr[i].value = mapobj;
                    }else if(type == "sound") {
                        arr[i].value = soundobj[arr[i].bs];
                    }else if(type == "video") {
                        arr[i].value = videoobj;
                    }else if(type == "zu") {
                        //var zucontent = pe.getElementsByClassName("zucontent");
                        var tarr = arr[i].list.table;
                        for(var j = 0; j < tarr.length; j++) {
                            tableFun(tarr[j],j);
                        }
                    }
                }
            }
            return data;
        }
        //分配
        function switchFun(_json) {
            var obj = _json.obj;
            var index = _json.index;
            var zuindex = _json.zuindex;
                
            if(obj.list) {
                //组
                var list = obj.list.table[0];
                obj.type = "zu";
                if(obj.list.name) {
                    if(obj.list.add) {
                        labelFun({
                            "text" : obj.list.name+"(1)"
                        });
                    }else {
                       labelFun({
                            "text" : obj.list.name
                        }); 
                    }
                    
                }
                var _zuindex = lazy.getAutoId();
                obj.bs = _zuindex;
                for(var j = 0; j < list.length; j++) {
                    switchFun({
                        "obj" : list[j],
                        "zuindex" : _zuindex,
                        "index" : j
                    });
                }
                if(obj.list.add) {
                    //buttonFun(obj.list.name, obj.list.add, _zuindex);
                    buttonFun(obj, _zuindex);
                }
            }else {
                var bs = lazy.getAutoId();
                obj.bs = bs;
                switch(obj.type) {
                    case "input" : 
                        inputFun(obj, zuindex, bs);
                        break;
                    case "number" :
                        inputFun(obj, zuindex, bs);
                        break;
                    case "textarea" : 
                        textareaFun(obj, zuindex, bs);
                        break;
                    case "label" :
                        labelFun(obj, zuindex, bs);
                        break;
                    case "date" :
                        dateFun(obj, zuindex, bs);
                        break;
                    case "time" :
                        dateFun(obj, zuindex, bs);
                        break;
                    case "datetime" :
                        dateFun(obj, zuindex, bs);
                        break;
                    case "select" :
                        selectFun(obj, zuindex, bs);
                        break;
                    case "people" :
                        peopleFun(obj, zuindex, bs);
                        break;
                    case "overtime" :
                        overtimeFun(obj, zuindex, bs);
                        break;
                    case "image" :
                        imageFun(obj, zuindex, bs);
                        break;
                    case "file" :
                        fileFun(obj, zuindex, bs);
                        break;
                    case "map" :
                        mapFun(obj, zuindex, bs);
                        break; 
                    case "sound" :
                        soundFun(obj, zuindex, bs);
                        break; 
                    case "video" :
                        videoFun(obj, zuindex, bs);
                        break;
                    case "hide" :
                        break;
                    default :
                        obj.type = "input";
                        inputFun(obj, zuindex, bs);
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
        //下拉菜单
        function selectFun(obj, zuindex, bs) {
            var tr = lazy.creat("div",bs + " tr"+" "+obj.type+"all");
             var vl = obj.value?obj.value:"";
            var _html = '';
            _html += '<div class="tr_input ub">';
            _html += '<div class="title hh"><span>'+(obj.title?obj.title:"")+'</span></div>';
            _html += '<div class="inputdiv ub-f1">';
            _html += '<input type=text readonly class="inpo" value="'+vl+'"placeholder='+obj.placeholder+' >';
           /* _html += '<select class="select">';
            var optionlist = obj.option?obj.option:[];
            var placeholder = obj.placeholder?obj.placeholder:"";
            _html += '<option value="">请选择</option>';
            for(var i = 0; i < optionlist.length; i++) {
                _html += '<option value="'+optionlist[i].value+'">'+optionlist[i].html+'</option>';
            }
            _html += '</select>';
            _html += ' <div class="selectdiv"><span>'+placeholder+'</span></div>';*/
            _html += '</div></div>';
            tr.innerHTML = _html;
            //事件
            var select1 =  tr.getElementsByClassName("inputdiv")[0];
            var inpo =  tr.getElementsByClassName("inpo")[0];
            select1.onclick=function(){
                if(obj.readonly){
                    return;
                }
                lazy.alertlist1(obj.option,function(n){
                    if(n.html=="自定义活动"){
                        obj.sel(n.html)
                    }else if(n.html=="三会一课"||n.html=="主题活动"){
                        inpo.value=n.html
                        obj.sel(n.html)
                        
                    }else{
                        inpo.value=n.html
                    }
                        
                    })
            }
            /*var select =  tr.getElementsByClassName("select")[0];
            var selectdiv =  tr.getElementsByClassName("selectdiv")[0];
            select.onchange = function() {
                var options = this.options[this.selectedIndex];
                var ht = options.innerHTML;
                var vl = options.getAttribute("value");
                if(ht=="请选择" && vl=="") {
                    selectdiv.innerHTML = '<span>'+placeholder+'</span>'
                }else {
                    selectdiv.innerHTML = '<span value="'+vl+'">'+ht+'</span>';
                }
                if(obj.select) obj.select(ht);
            }*/
            //
            zuFun(zuindex).appendChild(tr);
        }
        //文本框
        function inputFun(obj, zuindex, bs) {
            var tr = lazy.creat("div",bs + " tr"+" "+obj.type+"all");
            var _html = '';
            _html += '<div class="tr_input ub">';
            _html += '<div class="title hh"><span>'+(obj.title?obj.title:"")+'</span></div>';
            var _type = obj.type?obj.type:"text";
            var vl = obj.value?obj.value:"";
            _html += '<div class="inputdiv ub-f1"><input  type="'+_type+'" '+obj.readonly+' value="'+vl+'"placeholder="'+(obj.placeholder?obj.placeholder:"")+'"/></div>';
            _html += '</div>';
            tr.innerHTML = _html;
            zuFun(zuindex).appendChild(tr);
        }
        //附件
        var filearr = []; //记录文件路径
        function fileFun(obj, zuindex, bs) {
            var tr = lazy.creat("div",bs + " tr"+" "+obj.type+"all");
            var _html = '';
            _html += '<a class="tr_input ub tr_file">';
            _html += '  <div class="slh ub-f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';  
            _html += '</a>';
            tr.innerHTML = _html;
            var filediv = lazy.creat("div","filediv");
            tr.appendChild(filediv);
            tr.getElementsByClassName("tr_file")[0].onclick = function() {
                //obj.httpurl
                lazy.startFile(obj.httpurl,function(data1,size) {
                    
                    //var data = JSON.parse(data);
                    var tmp = {
                        "annexid" : data1.rows[0].id,
                        "annexname" : data1.rows[0].docname,
                        "annexpath" : data1.rows[0].path,
                    }
                    var _src =data1.rows[0].path;
                    filearr.push(tmp);
                    filediv.appendChild(fileone(data1.rows[0].docname, size?size:0, _src));
                });
            }
            zuFun(zuindex).appendChild(tr);
        }
        function fileone(h1, h2, path) {
            var filekuang = lazy.creat("div","filekuang ub");
            var icon = lazy.creat("div","icon");
            var td = lazy.creat("a","td ub-f1");
            if(h2 > 0) {
                td.innerHTML = '<div class="h1 slh"><span>'+h1+'</span></div><div class="h2 slh"><span>'+(h2/1000)+'kb</span></div>';
            }else {
                td.innerHTML = '<div class="h1 slh"><span>'+h1+'</span></div><div class="h2 slh"><span></span></div>';
            }
            var filecha = lazy.creat("div","filecha");
            filecha.setAttribute("index", filearr.length - 1);
            filekuang.appendChild(icon);
            filekuang.appendChild(td);
            td.onclick = function() {
                lazy.onDownload(path);    
            }
            filekuang.appendChild(filecha);
            filecha.onclick = function() {
                var index = parseInt(filecha.getAttribute("index"));
                filearr.splice(index,1);
                filekuang.parentNode.removeChild(filekuang);
            }
            return filekuang;
        }
        //图片
        var imagearr = [];//记录添加的图片
        function imageFun(obj, zuindex, bs) {
            var tr = lazy.creat("div",bs + " tr"+" "+obj.type+"all");
            var _html = '';
            _html += '<a class="tr_input ub tr_image">';
            _html += '  <div class="slh ub-f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';  
            _html += '</a>';
            tr.innerHTML = _html;
            var imagediv = lazy.creat("div","imagediv");
            tr.appendChild(imagediv);
            tr.getElementsByClassName("tr_image")[0].onclick = function() {
                //obj.httpurl
                lazy.startPhoto(obj.httpurl,function(_obj) {
                    // alert(JSON.stringify(_obj))
                       // var data = JSON.parse(data);
                        var tmp = {
                            "annexid" : _obj.rows[0].id,
                            "annexname" : _obj.rows[0].docname,
                            "annexpath" : _obj.rows[0].path,
                        }
                        imagearr.push(tmp);
                        var _src =lazy.getImagePx(_obj.rows[0].path, 105, 105);
                        imagediv.appendChild(imageone(_src));
                    });
                
                
            }
            zuFun(zuindex).appendChild(tr);
        }
        function imageone(src) {
            var imagekuang = lazy.creat("a","imagekuang");
            var imageicon = lazy.creat("div","imageicon");
            imageicon.style.backgroundImage = 'url('+src+')';
            var imagecha = lazy.creat("div","imagecha");
            imagecha.setAttribute("index", imagearr.length - 1);
            imagekuang.appendChild(imageicon);
            imageicon.onclick = function() {
                lazy.isAppcan(function() {
                    lazy.showPhoto_appcan([src]);
                }, function() {
                    lazy.showImage(src);
                });
            }
            imagekuang.appendChild(imagecha);
            imagecha.onclick = function() {
                var index = parseInt(imagecha.getAttribute("index"));
                imagearr.splice(index,1);
                imagekuang.parentNode.removeChild(imagekuang);
            }
            return imagekuang;
        }
        //时间
        function dateFun(obj, zuindex, bs) {
            var tr = lazy.creat("div",bs + " tr"+" "+obj.type+"all");
            var _html = '';
            _html += '<div class="tr_input ub">';
            _html += '<div class="title hh"><span>'+(obj.title?obj.title:"")+'</span></div>';
            var type = obj.type;
            var str1 = type;
            if(type=="date") type=0;
            if(type=="time") type=1;
            if(type=="datetime") type=2;
            if(type=="month") type=0
            _html += '<div class="inputdiv ub-f1"><div class="datetimeinput" str="'+str1+'" value="" type="'+type+'">'+(obj.placeholder?obj.placeholder:"")+'</div></div>';
            _html += '</div>';
            tr.innerHTML = _html;
            var datetimeinput = tr.getElementsByClassName("datetimeinput")[0];
            if(obj.value){
                 datetimeinput.innerHTML = obj.value;
            }
            datetimeinput.onclick = function(){
                if(obj.readonly){
                    return;
                }
                lazy.time(type,function(str){
                    if(str1=="month"){
                        datetimeinput.innerHTML = str.substring(0,str.lastIndexOf("-"));
                    }else{
                        datetimeinput.innerHTML = str;
                    }
                })
            }
            zuFun(zuindex).appendChild(tr);
        }
        //多行文本框
        function textareaFun(obj, zuindex, bs) {
            // var tr = lazy.creat("div",bs + " tr");
            // var _html = '';
            // _html += '<div class="tr_textarea ub">';
            // _html += '<div class="title hh"><span>'+(obj.title?obj.title:"")+'</span></div>';
            // _html += '<div class="textareadiv ub-f1"><div class="textarea" contenteditable="true"/></div><div class="placeholder">'+(obj.placeholder?obj.placeholder:"")+'</div></div>';
            // _html += '</div>';
            // tr.innerHTML = _html;
            // var textarea = tr.getElementsByClassName("textarea")[0];
            // var placeholder = tr.getElementsByClassName("placeholder")[0];
            // textarea.onfocus = function() {
                // if(this.innerHTML == "") {
                    // placeholder.style.display = "none";
                // }
            // }
            // textarea.onblur = function() {
                // if(this.innerHTML == "") {
                    // placeholder.style.display = "block";
                // }
            // }
            // zuFun(zuindex).appendChild(tr);
            var tr = lazy.creat("div",bs + " tr"+" "+obj.type+"all");
            var _html = '';
            _html += '<div class="tr_input ub">';
            _html += '<div class="title hh"><span>'+(obj.title?obj.title:"")+'</span></div>';
            var _type = obj.type?obj.type:"text";
            var vl = obj.value?obj.value:"";
            _html += '<div class="inputdiv ub-f1"><textarea class="textarea" type="'+_type+'" '+obj.readonly+' placeholder="'+(obj.placeholder?obj.placeholder:"")+'">'+vl+'</textarea></div>';
            _html += '</div>';
            tr.innerHTML = _html;
            zuFun(zuindex).appendChild(tr);
        }
        //标签
        function labelFun(obj, zuindex) {
            var labeldiv;
            if(obj.class) {
                labeldiv = lazy.creat("div","labeldiv " + obj.class);
            }else {
                //labeldiv = lazy.creat("div","labeldiv ub");
                labeldiv = lazy.creat("div","labeldiv");
            }
            //labeldiv.innerHTML = '<div class="ub-f1"><span>'+obj.text+'</span></div>';
            labeldiv.innerHTML = '<span>'+obj.text+'</span>';
            zuFun(zuindex).appendChild(labeldiv);
        }
        //添加按钮
        function buttonFun(obj, zuindex) {
            var title = obj.list.name;
            var label = obj.list.add;
            
            var tr = lazy.creat("a","tr");
            tr.innerHTML = '<div class="buttondiv"><span>'+label+'</span></div>';
            var buttondiv = tr.getElementsByClassName("buttondiv")[0];
            buttondiv.onclick = function() {
                var zucontent = tr.parentNode.getElementsByClassName("zucontent")[0];
                //复制
                var tablearr = obj.list.table;
                tablearr.push(JSON.parse(JSON.stringify(tablearr[0])));
                //
                var newZucontent =  lazy.creat("div", "zucontent");
                var labelhtml = '<div class="labeldiv labeldiv2 ub"><div class="ub-f1"><span>'+title+'</span></div><a class="addbutton"><span>删除</span></a></div>';
                newZucontent.innerHTML = labelhtml + zucontent.innerHTML;
                tr.parentNode.insertBefore(newZucontent, tr);
                //删除按钮
                newZucontent.getElementsByClassName("addbutton")[0].onclick = function() {
                    var pe = newZucontent.parentNode;
                    var list = pe.getElementsByClassName("zucontent");
                    for(var i = 0; i < list.length; i++) {
                        if(list[i] == newZucontent) {
                            tablearr.splice(i,1);
                        }
                    }
                    pe.removeChild(newZucontent);
                    zulabel(zuindex,title);
                }
                //修改小标
                zulabel(zuindex,title);
            }
            zuFun(zuindex).parentNode.appendChild(tr);
        }
        //修改组label标签
        function zulabel(classname, title) {
            var list = table.getElementsByClassName(classname)[0].getElementsByClassName("labeldiv2");
            for(var i = 0; i < list.length; i++) {
                list[i].getElementsByTagName("span")[0].innerHTML = title+'('+(i+2)+')';
            }
        }
        //加班时间
        //var overtimearr = [];
        function overtimeFun(obj, zuindex, bs) {
            var tr = lazy.creat("div",bs + " tr");
            var _html = '';
            _html += '<a class="tr_input ub tr_overtime">';
            _html += '  <div class="slh ub-f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';  
            _html += '</a>';
            tr.innerHTML = _html;
            var tr_overtime = tr.getElementsByClassName("tr_overtime")[0];
            var overtimediv = lazy.creat("div","overtimediv");
            tr.appendChild(overtimediv);
            if(obj.value){
                overtimearr.push(obj.value);
                var newovertime = lazy.creat("a","newovertime");
                newovertime.innerHTML = '<div class="h1"><span>'+obj.value.h1+'</span></div><div class="h2"><span>'+obj.value.h2+'</span></div>';
                overtimediv.appendChild(newovertime);
                newovertime.setAttribute("index",(overtimearr.length - 1));
                newovertime.onclick = function() {
                    newovertime.parentNode.removeChild(newovertime);
                    //清除数组
                    var i = parseInt(newovertime.getAttribute("index"));
                    overtimearr[i] = "";
                }
            }
            //创建反添方法
            var iframe = document.body.getElementsByClassName("overtimeIframe")[0];
            if(!iframe) {
                iframe = lazy.creat("iframe","overtimeIframe");
                document.body.appendChild(iframe);
            }
            //iframe.src = obj.url;
            window["setOvertime"+bs] = function(obj) {
                iframe.style.left = "100%";
                iframe.style.webkitAnimation = "peopleIframe_an1 0.5s";
                if(overtimearr.indexOf(obj)==-1) {
                    overtimearr.push(obj);
                }else {
                    lazy.alert2("列表中已经存在");
                    return;
                }
                var newovertime = lazy.creat("a","newovertime");
                newovertime.innerHTML = '<div class="h1"><span>'+obj.h1+'</span></div><div class="h2"><span>'+obj.h2+'</span></div>';
                overtimediv.appendChild(newovertime);
                newovertime.setAttribute("index",(overtimearr.length - 1));
                newovertime.onclick = function() {
                    newovertime.parentNode.removeChild(newovertime);
                    //清除数组
                    var i = parseInt(newovertime.getAttribute("index"));
                    overtimearr[i] = "";
                }
            }
            tr_overtime.onclick = function() {
                iframe.src = obj.url;
                lazy.var("setOvertime"+bs);
                iframe.style.left = "0";
                iframe.style.webkitAnimation = "peopleIframe_an 0.5s";
            }
            zuFun(zuindex).appendChild(tr);
        }
        //map
        var mapobj = {};
        function mapFun(obj, zuindex, bs) {
            var tr = lazy.creat("div",bs + " tr");
            var _html = '';
            _html += '<a class="tr_input ub tr_map">';
            _html += '  <div class="slh ub-f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';  
            _html += '</a>';
            tr.innerHTML = _html;
            var tr_map = tr.getElementsByClassName("tr_map")[0];
            var mapdiv = lazy.creat("div","mapdiv");
            tr.appendChild(mapdiv);
            //创建反添方法
            var iframe = document.body.getElementsByClassName("mapIframe")[0];
            if(!iframe) {
                iframe = lazy.creat("iframe","mapIframe");
                document.body.appendChild(iframe);
            }
            window.setProcessMap = function(obj) {
                iframe.style.left = "100%";
                iframe.style.webkitAnimation = "peopleIframe_an1 0.5s";
                if(obj.address){
                    mapobj = obj;
                    mapdiv.innerHTML = '<span>●&nbsp;&nbsp;'+mapobj.address+'</span>';
                    mapdiv.style.paddingBottom = "0.5rem";
                }
            }
            tr_map.onclick = function() {
                iframe.src = obj.url;
                iframe.style.left = "0";
                iframe.style.webkitAnimation = "peopleIframe_an 0.5s";
            }
            zuFun(zuindex).appendChild(tr);
        }
        //sound
        var soundobj = {};
        function soundFun(obj, zuindex, bs) {
            var tr = lazy.creat("div",bs + " tr");
            var _html = '';
            _html += '<a class="tr_input ub tr_sound">';
            _html += '  <div class="slh ub-f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';  
            _html += '</a>';
            tr.innerHTML = _html;
            var tr_sound = tr.getElementsByClassName("tr_sound")[0];
            var sounddiv = lazy.creat("a","sounddiv");
            tr.appendChild(sounddiv);
            
            tr_sound.onclick = function() {
                var starttime = new Date().getTime();
                lazy.isAppcan(function() {
                    
                    lazy.startXtSound_appcan(function(path) {
                        var endtime = new Date().getTime();
                        var soundtime = (endtime-starttime)/1000;
                        //obj.soundtime = soundtime;
                        upload(path,soundtime);
                    });
                    //上传
                    function upload(src,time) {
                        var loading = lazy.loading("");
                        lazy.upload_appcan('filename', src, obj.httpurl+"&soundtime="+time, 3, function() {

                        }, function(obj) {
                             loading.close();
                             var obj = JSON.parse(obj);
                             if(obj.succeed || obj.isSucceed) {
                                  soundobj[bs] = obj;
                                  sounddiv.style.padding = "0.5rem";
                                  sounddiv.innerHTML = '<div class="sound_icon"></div>';
                                  sounddiv.onclick = function() {
                                        lazy.playSound_appcan(src);
                                  }
                                 
                             }else {
                                lazy.alert2(data.message?data.message:"message is null");
                            }

                        }, function() {
                            loading.close();
                            lazy.alert2("上传失败");
                        });
                    }
                    
                },function() {
                    lazy.startXtSound(obj.httpurl, function() {
                        
                    }, function(data,filename,filesize, src) {
                        //obj.soundtime = time;
                        soundobj[bs] = data;
                        sounddiv.style.padding = "0.5rem";
                        sounddiv.innerHTML = '<div class="sound_icon"></div>';
                        sounddiv.onclick = function() {
                            lazy.playSound(src);
                        }
                    }, function(e) {
                        lazy.alert2(e);
                    });
                });
                          
            }
            
            zuFun(zuindex).appendChild(tr);
        }
        //视频
        var videoobj = {};
        function videoFun(obj, zuindex, bs) {
            var tr = lazy.creat("div",bs + " tr");
            var _html = '';
            _html += '<a class="tr_input ub tr_video">';
            _html += '  <div class="slh ub-f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';  
            _html += '</a>';
            tr.innerHTML = _html;
            var tr_video = tr.getElementsByClassName("tr_video")[0];
            var videodiv = lazy.creat("a","videodiv");
            var videoDom = lazy.creat("div","videoDom");
            videoDom.style.display = "none";
            videodiv.appendChild(videoDom);
            
            tr.appendChild(videodiv);
            var videosrc = "";
            tr_video.onclick = function() {
                lazy.isAppcan(function() {
                    lazy.startVideo_appcan(function(path) {
                        upload(path);
                    });
                    //上传
                    function upload(src) {
                        var loading = lazy.loading("");
                        lazy.upload_appcan('filename', src, obj.httpurl, 3, function() {

                        }, function(obj) {
                             loading.close();
                             var obj = JSON.parse(obj);
                             if(obj.succeed || obj.isSucceed) {
                                 videosrc = src;
                                 videoobj = obj;
                             }else {
                                lazy.alert2(data.message?data.message:"message is null");
                            }

                        }, function() {
                            loading.close();
                            lazy.alert2("上传失败");
                        });
                    }
                }, function(browserType) {
                    lazy.startVideo(obj.httpurl, function() {
                        
                    },function(data,filename,filesize, src) {
                        videoDom.style.display = "block";
                        videosrc = src;
                        videoobj = data;
                    });
                });
            }
            videoDom.onclick = function() {
                lazy.isAppcan(function() {
                    lazy.playVideo_appcan(videosrc);
                },function() {
                    lazy.playVideo(videosrc);
                });
                
            }
            zuFun(zuindex).appendChild(tr);
        }
        //通讯录
        var peoplearr = [];//兼容之前的 记录添加的人数
        var peopleobj = null;//
        function peopleFun(obj, zuindex, bs) {
            var tr = lazy.creat("div",bs + " tr"+" "+obj.type+"all");
            var _html = '';
            _html += '<div class="tr_input ub">';
            _html += '  <div class="slh ub-f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';
            _html += '</div>';
            tr.innerHTML = _html;
            var peoplediv = lazy.creat("div","peoplediv");
            var addbtn = oneicon(lazy.url + "LazyUI/images/jia2.png", "", "addbtn");
            peoplediv.appendChild(addbtn);
            tr.appendChild(peoplediv);
            //创建反添方法
            var iframe = document.body.getElementsByClassName("peopleIframe")[0];
            if(!iframe) {
                iframe = lazy.creat("iframe","peopleIframe");
                document.body.appendChild(iframe);
            }
            data.setProcessPeople = function(obj) {
                //iframe.style.left = "100%";
                //iframe.style.webkitAnimation = "peopleIframe_an1 0.5s";
                tmpobj = JSON.stringify(obj)
                if(peoplearr.indexOf(tmpobj)==-1) {
                    peoplearr.push(tmpobj);
                }else {
                    lazy.alert2("列表中已经存在");
                    return;
                }
                //
                
                var newpeople = oneicon(obj.icon, obj.h1);
                newpeople.setAttribute("index",(peoplearr.length - 1));
                newpeople.onclick = function() {
                    var pe = this.parentNode;
                    pe.removeChild(this.nextSibling);
                    pe.removeChild(this);
                    //清除数组
                    var i = parseInt(newpeople.getAttribute("index"));
                    peoplearr[i] = "";
                }
                peoplediv.insertBefore(newpeople, addbtn);
                var xline = lazy.creat("div","xline");
                peoplediv.insertBefore(xline, addbtn);
            }
            
            //兼容之前的
            window.setProcessPeople = function(obj) {
                iframe.style.left = "100%";
                iframe.style.webkitAnimation = "peopleIframe_an1 0.5s";
                var objstr = JSON.stringify(obj);
                if(peoplearr.indexOf(objstr)==-1) {
                    peoplearr.push(objstr);
                }else {
                    lazy.alert2("列表中已经存在");
                    return;
                }
                //
                var newpeople = oneicon(obj.icon, obj.h1);
                newpeople.setAttribute("index",(peoplearr.length - 1));
                newpeople.onclick = function() {
                    var pe = this.parentNode;
                    pe.removeChild(this.nextSibling);
                    pe.removeChild(this);
                    //清除数组
                    var i = parseInt(newpeople.getAttribute("index"));
                    peoplearr[i] = "";
                }
                peoplediv.insertBefore(newpeople, addbtn);
                var xline = lazy.creat("div","xline");
                xline.innerHTML = '<i></i>';
                peoplediv.insertBefore(xline, addbtn);
            }
            //
            addbtn.onclick = function() {
            	obj.onclick();
            }
            zuFun(zuindex).appendChild(tr);
        }
        //返回图片
        function oneicon(path, title, classname) {
            var iconli = lazy.creat("div","iconli");
            iconli.appendChild(getIcon(path, title, classname));
            var iconlititle = lazy.creat("div","iconlititle");
            iconlititle.innerHTML = '<span>'+title+'</span>';
            iconli.appendChild(iconlititle);
            return iconli;
        }
        var icon_i = -1;
        function getIcon(path, title, classname) {
             var img = new Image();
             img.src = path;
             var icon = lazy.creat("a","icon");
             icon_i++;
             img.onerror = function() {
                 var icontitle1 = lazy.creat("div","icontitle1 bcolor"+parseInt(icon_i%7));
                 icontitle1.innerHTML = '<span>'+title.substring((title.length>2?1:0),3)+'</span>';
                 icon.appendChild(icontitle1);
             }
             img.onload = function() {
                 var iconimg = lazy.creat("div","iconimg "+(classname?classname:""));
                 iconimg.style.backgroundImage = "url("+path+")";
                 icon.appendChild(iconimg);
             }
            return icon;
        }
        data.display = function() {
            el.style.display="none"
        }
        data.block = function() {
            el.style.display="block"
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
