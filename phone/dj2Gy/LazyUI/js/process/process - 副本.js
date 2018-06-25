lazy.plugins.process = {
	"init" : function(el,data) {
        var allvalue = [];//所有数据
        var table = lazy.creat("div","table ub ub-ver");
        var arr = data.table?data.table:[];
        for(var i = 0; i < arr.length; i++) {
            switchFun({
                "obj" : arr[i],
                "index" : i,
                "allvalue" : allvalue,
            });
        }
        el.appendChild(table);
        //获取数据
        data.getArray = function() {
            
            return allvalue;
        }
        //分配
        function switchFun(_json) {
            var obj = _json.obj;
            var index = _json.index;
            var _allvalue = _json.allvalue;
            var zuindex = _json.zuindex;
                
            if(obj.list) {
                //组
                var list = obj.list.table;
                if(obj.list.name) {
                    if(obj.list.add) {
                        list = list[0];
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
                _allvalue[index] = {"value" : [], "bs" : _zuindex};
                for(var j = 0; j < list.length; j++) {
                    switchFun({
                        "obj" : list[j],
                        "zuindex" : _zuindex,
                        "index" : j,
                        "allvalue" : allvalue[index].value
                    });
                }
                if(obj.list.add) {
                    buttonFun(obj.list.name, obj.list.add, _zuindex);
                }
            }else {
                var bs = lazy.getAutoId();
                _allvalue[index] = {"type" : obj.type, "value" : 0, "bs" : bs};
                
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
                    case "image" :
                        imageFun(obj, zuindex, bs);
                        break;
                    case "file" :
                        fileFun(obj, zuindex, bs);
                        break;
                    default :
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
                _html += '<option value="'+optionlist[i].html+'">'+optionlist[i].html+'</option>';
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
                    selectdiv.innerHTML = '<span>'+ht+'</span>';
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
                lazy.startFile( null, function() {
                    
                }, function(data, name, size, path) {
                    filediv.appendChild(fileone(name, size, path));
                }, function() {
                    
                });
            }
            zuFun(zuindex).appendChild(tr);
        }
        function fileone(h1, h2, path) {
            var filekuang = lazy.creat("div","filekuang ub");
            var icon = lazy.creat("div","icon");
            var td = lazy.creat("a","td ub-f1");
            td.innerHTML = '<div class="h1 slh"><span>'+h1+'</span></div><div class="h2 slh"><span>'+(h2/1000)+'kb</span></div>';
            var filecha = lazy.creat("div","filecha");
            filekuang.appendChild(icon);
            filekuang.appendChild(td);
            td.onclick = function() {
                //lazy.openWin(path);
            }
            filekuang.appendChild(filecha);
            filecha.onclick = function() {
                filekuang.parentNode.removeChild(filekuang);
            }
            return filekuang;
        }
        //图片
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
                lazy.startPhoto( null, function() {
                    
                }, function(data,src) {
                    imagediv.appendChild(imageone(src));
                }, function() {
                    
                });
            }
            zuFun(zuindex).appendChild(tr);
        }
        function imageone(src) {
            var imagekuang = lazy.creat("a","imagekuang");
            var imageicon = lazy.creat("div","imageicon");
            imageicon.style.backgroundImage = 'url('+src+')';
            var imagecha = lazy.creat("div","imagecha");
            imagekuang.appendChild(imageicon);
            imageicon.onclick = function() {
                lazy.showImage(src);
            }
            imagekuang.appendChild(imagecha);
            imagecha.onclick = function() {
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
            var tr = lazy.creat("div",bs + " tr");
            var _html = '';
            _html += '<div class="tr_textarea ub">';
            _html += '<div class="title hh"><span>'+(obj.title?obj.title:"")+'</span></div>';
            _html += '<div class="textareadiv ub-f1"><div class="textarea" contenteditable="true"/></div><div class="placeholder">'+(obj.placeholder?obj.placeholder:"")+'</div></div>';
            _html += '</div>';
            tr.innerHTML = _html;
            var textarea = tr.getElementsByClassName("textarea")[0];
            var placeholder = tr.getElementsByClassName("placeholder")[0];
            textarea.onfocus = function() {
                if(this.innerHTML == "") {
                    placeholder.style.display = "none";
                }
            }
            textarea.onblur = function() {
                if(this.innerHTML == "") {
                    placeholder.style.display = "block";
                }
            }
            zuFun(zuindex).appendChild(tr);
        }
        //标签
        function labelFun(obj, zuindex) {
            var labeldiv = lazy.creat("div","labeldiv ub");
            labeldiv.innerHTML = '<div class="ub-f1"><span>'+obj.text+'</span></div>';
            zuFun(zuindex).appendChild(labeldiv);
        }
        //添加按钮
        function buttonFun(title, label, zuindex) {
            var tr = lazy.creat("a","tr");
            tr.innerHTML = '<div class="buttondiv"><span>'+label+'</span></div>';
            var buttondiv = tr.getElementsByClassName("buttondiv")[0];
            buttondiv.onclick = function() {
                var zucontent = tr.parentNode.getElementsByClassName("zucontent")[0];
                //复制
                var newZucontent =  lazy.creat("div", "zucontent");
                var labelhtml = '<div class="labeldiv labeldiv2 ub"><div class="ub-f1"><span>'+title+'</span></div><a class="addbutton"><span>删除</span></a></div>';
                newZucontent.innerHTML = labelhtml + zucontent.innerHTML;
                tr.parentNode.insertBefore(newZucontent, tr);
                //删除按钮
                newZucontent.getElementsByClassName("addbutton")[0].onclick = function() {
                    var pe = this.parentNode.parentNode;
                    pe.parentNode.removeChild(pe);
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
