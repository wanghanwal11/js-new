lazy.plugins.process = {
	"init" : function(el,data) {
        var allvalue = [];//所有数据
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
                    if(type == "datetime"){
                        arr[i].value = (pe.getElementsByTagName("input")[0].value+":00").replace("T"," ");
                    }else if(type == "input" || type == "number" || type == "date" || type == "time") {
                        arr[i].value = pe.getElementsByTagName("input")[0].value;
                    }else if(type == "textarea") {
                        arr[i].value = pe.getElementsByClassName("textarea")[0].value;
                    }else if(type == "select") {
                        var _span = pe.getElementsByClassName("selectdiv")[0].getElementsByTagName("span")[0];
//                        if(_span.innerHTML!=arr[i].placeholder) {
//                            arr[i].value = {"html":_span.innerHTML,"value" : _span.getAttribute("value")};
//                        }else {
//                            arr[i].value = {"html":"","value" : ""};
//                        }
                        arr[i].value = _span.innerHTML?_span.innerHTML:"";
                        
                    }else if(type == "people") {
                        arr[i].value = [];
                        for(var j = 0; j < peoplearr.length; j++) {
                            if(peoplearr[j]!="")arr[i].value.push(peoplearr[j]);
                        }
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
            var tr = lazy.creat("div",bs + " tr");
            var _html = '';
            _html += '<div class="tr_input ub">';
            _html += '<div class="title hh"><span>'+(obj.title?obj.title:"")+'</span></div>';
            _html += '<div class="inputdiv ub-f1">';
            _html += '<select class="select">';
            var optionlist = obj.option?obj.option:[];
            var placeholder = obj.placeholder?obj.placeholder:"";
            _html += '<option value="">请选择</option>';
            for(var i = 0; i < optionlist.length; i++) {
                _html += '<option value="'+optionlist[i].value+'">'+optionlist[i].html+'</option>';
            }
            _html += '</select>';
            _html += ' <div class="selectdiv"><span>'+placeholder+'</span></div>';
            _html += '</div></div>';
            tr.innerHTML = _html;
            //事件
            var select =  tr.getElementsByClassName("select")[0];
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
                
            }
            //
            zuFun(zuindex).appendChild(tr);
        }
        //文本框
        function inputFun(obj, zuindex, bs) {
            var tr = lazy.creat("div",bs + " tr");
            var _html = '';
            _html += '<div class="tr_input ub">';
            _html += '<div class="title hh"><span>'+(obj.title?obj.title:"")+'</span></div>';
            var _type = obj.type?obj.type:"text";
            _html += '<div class="inputdiv ub-f1"><input type="'+_type+'" placeholder="'+(obj.placeholder?obj.placeholder:"")+'"/></div>';
            _html += '</div>';
            tr.innerHTML = _html;
            zuFun(zuindex).appendChild(tr);
        }
        //附件
        var filearr = []; //记录文件路径
        function fileFun(obj, zuindex, bs) {
            var tr = lazy.creat("div",bs + " tr");
            var _html = '';
            _html += '<a class="tr_input ub tr_file">';
            _html += '  <div class="slh ub-f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';  
            _html += '</a>';
            tr.innerHTML = _html;
            var filediv = lazy.creat("div","filediv");
            tr.appendChild(filediv);
            tr.getElementsByClassName("tr_file")[0].onclick = function() {
                //obj.httpurl
                lazy.startFile(obj.httpurl, function() {
                    
                }, function(data, name, size, path) {
                    //var data = JSON.parse(data);
                    var tmp = {
                        "annexid" : data.rows[0].id,
                        "annexname" : data.rows[0].docname,
                        "annexpath" : data.rows[0].path,
                    }
                    filearr.push(tmp);
                    filediv.appendChild(fileone(name, size, path));
                }, function(e) {
                    lazy.alert2(e);
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
                lazy.isAppcan(function() {
                    lazy.readerFile_appcan(path);
                }, function() {
                    lazy.openFile(path);
                });     
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
            var tr = lazy.creat("div",bs + " tr");
            var _html = '';
            _html += '<a class="tr_input ub tr_image">';
            _html += '  <div class="slh ub-f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';  
            _html += '</a>';
            tr.innerHTML = _html;
            var imagediv = lazy.creat("div","imagediv");
            tr.appendChild(imagediv);
            tr.getElementsByClassName("tr_image")[0].onclick = function() {
                //obj.httpurl
                lazy.isAppcan(function() {
                    lazy.alertlist([
                        {
                            "title" : "拍照",
                            "onclick" : function() {
                                lazy.startPhoto_appcan(function(src) {
                                    upload(src);
                                });
                            }
                        },{
                            "title" : "选择相册",
                            "onclick" : function() {
                                lazy.startFile_appcan(function(src) {
                                    upload(src);
                                }, true);
                            }
                        }
                            
                    ]);
                    //上传
                    function upload(src) {
                        var loading = lazy.loading("");
                        lazy.upload_appcan('filename', src, obj.httpurl, 3, function() {

                        }, function(obj) {
                             loading.close();
                             var obj = JSON.parse(obj);
                             if(obj.succeed || obj.isSucceed) {
                                 var tmp = {
                                        "annexid" : obj.rows[0].id,
                                        "annexname" : obj.rows[0].docname,
                                        "annexpath" : obj.rows[0].path,
                                    }
                                    imagearr.push(tmp);
                                    var _src = getIP() + obj.rows[0].path.replace(/\\/g,"/");
                                 imagediv.appendChild(imageone(_src));
                             }else {
                                lazy.alert2(data.message?data.message:"message is null");
                            }

                        }, function() {
                            loading.close();
                            lazy.alert2("上传失败");
                        });
                    }
                    //
                },function() {
                    lazy.startPhoto(obj.httpurl, function() {

                    }, function(data,src) {
                       // var data = JSON.parse(data);
                        var tmp = {
                            "annexid" : data.rows[0].id,
                            "annexname" : data.rows[0].docname,
                            "annexpath" : data.rows[0].path,
                        }
                        imagearr.push(tmp);
                        imagediv.appendChild(imageone(src));
                    }, function(e) {
                        lazy.alert2(e);
                    });
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
            var tr = lazy.creat("div",bs + " tr");
            var _html = '';
            _html += '<div class="tr_input ub">';
            _html += '<div class="title hh"><span>'+(obj.title?obj.title:"")+'</span></div>';
            var type = (obj.type=="datetime")?"datetime-local":obj.type;
            _html += '<div class="inputdiv ub-f1"><input class="datetimeinput" value="" type="'+type+'" /><div class="datetimeinputdiv"><span>'+(obj.placeholder?obj.placeholder:"")+'</span></div></div>';
            _html += '</div>';
            tr.innerHTML = _html;
            var datetimeinput = tr.getElementsByClassName("datetimeinput")[0];
            var datetimeinputdiv = tr.getElementsByClassName("datetimeinputdiv")[0];
            datetimeinput.onfocus = function() {
                this.style.opacity = 1;
                datetimeinputdiv.style.display = "none";
            }
            datetimeinput.onchange = function() {
                var val = this.value;
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
            var tr = lazy.creat("div",bs + " tr");
            var _html = '';
            _html += '<div class="tr_input ub">';
            _html += '<div class="title hh"><span>'+(obj.title?obj.title:"")+'</span></div>';
            var _type = obj.type?obj.type:"text";
            _html += '<div class="inputdiv ub-f1"><textarea class="textarea" type="'+_type+'" placeholder="'+(obj.placeholder?obj.placeholder:"")+'"></textarea></div>';
            _html += '</div>';
            tr.innerHTML = _html;
            zuFun(zuindex).appendChild(tr);
        }
        //标签
        function labelFun(obj, zuindex) {
            var labeldiv = lazy.creat("div","labeldiv ub");
            labeldiv.innerHTML = '<div class="ub-f1"><span>'+obj.text+'</span></div>';
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
        var overtimearr = [];
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
                mapobj = obj;
                mapdiv.innerHTML = '<span>●&nbsp;&nbsp;'+mapobj.address+'</span>';
                mapdiv.style.paddingBottom = "0.5rem";
            }
            tr_map.onclick = function() {
                iframe.src = obj.url;
                iframe.style.left = "0";
                iframe.style.webkitAnimation = "peopleIframe_an 0.5s";
            }
            zuFun(zuindex).appendChild(tr);
        }
        //通讯录
        var peoplearr = [];//记录添加的人数
        function peopleFun(obj, zuindex, bs) {
            var tr = lazy.creat("div",bs + " tr");
            var _html = '';
            _html += '<div class="tr_input ub">';
            _html += '  <div class="slh ub-f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';
            _html += '</div>';
            tr.innerHTML = _html;
            var peoplediv = lazy.creat("div","peoplediv");
            var addbtn = oneicon(lazy.url + "LazyUI/images/shenpi/jia2.png", "", "addbtn");
            peoplediv.appendChild(addbtn);
            tr.appendChild(peoplediv);
            //创建反添方法
            var iframe = document.body.getElementsByClassName("peopleIframe")[0];
            if(!iframe) {
                iframe = lazy.creat("iframe","peopleIframe");
                document.body.appendChild(iframe);
            }
            iframe.src = obj.url;
            window.setProcessPeople = function(obj) {
                
                iframe.style.left = "100%";
                iframe.style.webkitAnimation = "peopleIframe_an1 0.5s";
                if(peoplearr.indexOf(obj)==-1) {
                    peoplearr.push(obj);
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
                iframe.style.left = "0";
                iframe.style.webkitAnimation = "peopleIframe_an 0.5s";
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
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
