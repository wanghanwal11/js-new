lazy.plugins.process = {
    "init" : function(el,data) {
        var allvalue = [];//所有数据
        //加班时间
        var overtimearr = [];
        var imagearr = [];//记录添加的图片
        //录音
        var soundobj = {};
        var table = lazy.creat("div","table ub ub-ver");
        var arr = data.table?data.table:[];
        data.setOption = function(arr,i){
            var select = el.getElementsByClassName("table")[0].childNodes[i].getElementsByClassName("select")[0];
            var _html1 = '<option value="">请选择</option>';
            for(var j=0;j<arr.length;j++){
                _html1 += '<option value="'+arr[j].value+'">'+arr[j].html+'</option>';
            }
            select.innerHTML = _html1
        }
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
                        if(pe.getElementsByTagName("input")[0].value!=""){
                            var t = pe.getElementsByTagName("input")[0].value.replace(/[A-Za-z]/g," ");
                            if(type=="datetime") var time = lazy.format(new Date(t),"yyyy-MM-dd HH:mm:ss");
                            if(type=="date") var time = lazy.format(new Date(t),"yyyy-MM-dd");
                            if(type=="time") var time = lazy.format(new Date(t),"HH:ss:mm");
                            if(time.indexOf("NaN")>-1) time = t;
                            arr[i].value = time;
                        }else{
                            arr[i].value = "";
                        }
                    }else if(type == "input" || type == "number") {
                        arr[i].value = pe.getElementsByTagName("input")[0].value;
                    }else if(type == "textarea") {
                        var value = pe.getElementsByClassName("textarea")[0].value.replace(/\n/g,"<br>");
                        arr[i].value = value;
                    }else if(type == "select") {
                        var _span = pe.getElementsByClassName("selectdiv")[0].getElementsByTagName("span")[0];
//                        if(_span.innerHTML!=arr[i].placeholder) {
//                            arr[i].value = {"html":_span.innerHTML,"value" : _span.getAttribute("value")};
//                        }else {
//                            arr[i].value = {"html":"","value" : ""};
//                        }
                       arr[i].value = _span.innerHTML&&_span.innerHTML!=arr[i].placeholder?_span.innerHTML:"";
                       if(_span.innerHTML!=arr[i].placeholder) {
                           //arr[i].value = {"html":_span.innerHTML,"value" : _span.getAttribute("value")};
                           arr[i].returnObj = {"html":_span.innerHTML,"value" : _span.getAttribute("value")};
                       }else{
                           arr[i].returnObj = {"html":"","value" : ""};
                       }
                        
                    }else if(type == "people") {
                        arr[i].value = [];
                        if(peopleobj) {
                            if(peopleobj[arr[i].bs]) {
                                var _peoplearr = peopleobj[arr[i].bs];
                                for(var j = 0; j < _peoplearr.length; j++) {
                                    if(_peoplearr[j]!="")arr[i].value.push(JSON.parse(_peoplearr[j]));
                                }
                            }else {
                                arr[i].value = '';
                            }
                            
                        }else {
                            for(var j = 0; j < peoplearr.length; j++) {
                                if(peoplearr[j]!="")arr[i].value.push(JSON.parse(peoplearr[j]));
                            }
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
                    }else if(type=="person"){
                        arr[i].value = [];
                        for(var j = 0; j < personarr.length; j++) {
                            if(personarr[j]!="")arr[i].value.push(personarr[j]);
                        }
                    }else if(type=="idCard"){
                        arr[i].value = idCardarr;
                        // for(var j = 0;j < idCardarr.length; j++){
//                             
                        // }
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
                    case "person" :
                        personFun(obj, zuindex, bs);
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
                    case "idCard" :
                        idCardFun(obj, zuindex, bs);
                        break
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
            // if(obj.value){
                // _html += '<option value='+obj.value.value+'>'+obj.value.html+'</option>';
            // }else{
                _html += '<option value="">请选择</option>';
            // }
            for(var i = 0; i < optionlist.length; i++) {
                _html += '<option value="'+optionlist[i].value+'" obj="'+JSON.stringify(obj)+'">'+optionlist[i].html+'</option>';
            }
            _html += '</select>';
            if(obj.value){
                _html += ' <div class="selectdiv"><span value='+obj.value+'>'+obj.value+'</span></div>';
            }else{
                _html += ' <div class="selectdiv"><span>'+placeholder+'</span></div>';
            }
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
                if(obj.select) obj.select(ht,vl);
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
            var vl = obj.value?obj.value:"";
            _html += '<div class="inputdiv ub-f1"><input type="'+_type+'" value="'+vl+'"placeholder="'+(obj.placeholder?obj.placeholder:"")+'"/></div>';
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
                lazy.startFile(obj.httpurl, function(_obj,size) {
                     var tmp = {
                            "annexid" : _obj.rows[0].id,
                            "annexname" : _obj.rows[0].docname,
                            "annexpath" : _obj.rows[0].path,
                     }
                     var _src = getIP()+_obj.rows[0].path.replace(/\\/g,"/");
                     if(_obj.rows[0].path.indexOf("http://")>-1) _src = _obj.rows[0].path;
                     filearr.push(tmp);
                     filediv.appendChild(fileone(_obj.rows[0].docname, size?size:0, _src));
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
                var houzhui = path.substring(path.lastIndexOf(".")+1);
                if(lazy.getFlieType(houzhui)=="img"){
                    lazy.showImage(path)
                }else{
                    lazy.openFile(path);
                }
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
                lazy.startPhoto(obj.httpurl, function(_obj) {
                     var tmp = {
                            "annexid" : _obj.rows[0].id,
                            "annexname" : _obj.rows[0].docname,
                            "annexpath" : _obj.rows[0].path,
                     }
                     imagearr.push(tmp);
                     var _src = _obj.rows[0].path;
                     if(_src.indexOf("http://")==-1){
                         _src = getIP()+_obj.rows[0].path.replace(/\\/g,"/");
                     }
                     imagediv.appendChild(imageone(_src));
                });
            }
            if(obj.value&&obj.value.length>0){
                for(var i=0;i<obj.value.length;i++){
                    var _src = obj.value[i].path;
                     if(_src.indexOf("http://")==-1){
                         _src = getIP()+obj.value[i].path.replace(/\\/g,"/");
                     }
                    var tmp = {
                            "annexid" : obj.value[i].fileid,
                            "annexname" : _src,
                            "annexpath" : _src,
                     }
                    imagearr.push(tmp);
                    imagediv.appendChild(imageone(_src));
                }
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
                lazy.showImage(src);
            }
            imagekuang.appendChild(imagecha);
            imagecha.onclick = function() {
                var index = parseInt(imagecha.getAttribute("index"));
                imagearr.splice(index,1);
                imagekuang.parentNode.removeChild(imagekuang);
            }
            return imagekuang;
        }
        //身份证
        var idCardarr = [];
        function idCardFun(obj,zuindex,bs){
            var tr = lazy.creat("div",bs + " tr");
            var _html = '';
            _html += '<a class="tr_input ub tr_idCard">';
            _html += '  <div class="slh ub-f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';  
            _html += '</a>';
            tr.innerHTML = _html;
            var idCarddiv = lazy.creat("div","idCarddiv");
            var remardarr = obj.remard;
            for(var i = 0;i<remardarr.length;i++){
                var kuang = lazy.creat("div","kuangdiv");
                kuang.setAttribute("index",i);
                kuang.setAttribute("remind",remardarr[i]);
                //kuang.innerHTML = remardarr[i];
                kuang.innerHTML = "<div>"+remardarr[i].substring(0,3)+"</div>";
                if(remardarr.length>3){
                    kuang.innerHTML += "<div>"+remardarr[i].substring(3)+"</div>";
                }
                kuang.onclick = function(){
                    var index = this.getAttribute("index");
                    var remind = this.getAttribute("remind");
                    getIdCard(index,remind,this);
                    //alert(icondiv)
                    //kuang.appendChild(icondiv)
                }
                idCarddiv.appendChild(kuang)
            }
            tr.appendChild(idCarddiv);
            zuFun(zuindex).appendChild(tr);
        }
        function getIdCard(i,str,kuang){
            lazy.startPhoto(function(pics, upids) {
                //var icondiv = lazy.creat("div","idcardimg");
                //icondiv.setAttribute("index",i);
                var tmp = {
                    "index":i,
                    "id" : upids[0],
                    "src" : pics[0],
                    "annexid" : upids[0],
                    "annexname" : str,
                    //"annexpath" : _obj.rows[0].path,
                }
                for(var n=0;n<idCardarr.length;n++){
                	if(idCardarr[n].index==i){
                		idCardarr[n]=tmp
                	}
                }
                if(idCardarr.indexOf(tmp)==-1) idCardarr.push(tmp);
                if(kuang.getElementsByClassName("kuangimage").length>0){
                	kuang.getElementsByClassName("kuangimage")[0].src = tmp.src;
                }else{
                	var image = new Image();
                	image.setAttribute("index",i);
                	image.className = "kuangimage";
                	image.src = tmp.src;
                	kuang.appendChild(image)
                }
                //return icondiv
            },1)
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
                var sss = this.value.replace("T"," ");
                //alert(sss)
                var date = lazy.format(new Date(sss),"yyyy-MM-dd HH:mm:ss");
                //alert(date)
                var val = date;
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
            var _value = obj.value?obj.value:"";
            _html += '<div class="inputdiv ub-f1"><textarea class="textarea" value="'+(obj.value?obj.value:"")+'" type="'+_type+'" placeholder="'+(obj.placeholder?obj.placeholder:"")+'">'+_value+'</textarea></div>';
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
        var personarr = [];//原生通讯录
        function  personFun(obj,zuindex,bs){
            var tr = lazy.creat("div",bs + " tr");
            var _html = '';
            _html += '<a class="tr_input ub tr_person">';
            _html += '  <div class="slh ub-f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';  
            _html += '</a>';
            tr.innerHTML = _html;
            var tr_person = tr.getElementsByClassName("tr_person")[0];
            var persondiv = lazy.creat("div","persondiv");
            tr.appendChild(persondiv);
            tr_person.onclick = function() {
                lazy.getPerson(function(_obj){
                    var tmp = {
                            "h1" : _obj.name,
                            "id" : _obj.userid,
                            "h2" : _obj.orgname
                    }
                    if(_obj.only){
                        personarr = [tmp];
                        if(persondiv.getElementsByClassName("newperson").length>0){
                            var newperson = persondiv.getElementsByClassName("newperson")[0];
                            persondiv.removeChild(newperson);
                        }
                    }else{
                        if(personarr.indexOf(tmp)==-1) {
                            personarr.push(tmp);
                        }else {
                            lazy.alert2("列表中已经存在");
                            return;
                        }
                    }
                    var newperson = lazy.creat("a","newperson");
                    newperson.innerHTML = '<div class="h1"><span>'+tmp.h1+'</span></div><div class="h2"><span>'+tmp.h2+'</span></div>';
                    persondiv.appendChild(newperson);
                    newperson.setAttribute("index",(personarr.length - 1));
                    newperson.onclick = function() {
                        newperson.parentNode.removeChild(newperson);
                        //清除数组
                        var i = parseInt(newperson.getAttribute("index"));
                        personarr[i] = "";
                    }
                });
            }
            zuFun(zuindex).appendChild(tr);
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
                window.removeEventListener("touchmove", handler, false);
                iframe.style.left = "100%";
                iframe.style.webkitAnimation = "peopleIframe_an1 0.5s";
                if(obj.h1){
                    if(obj.only){
                        overtimearr = [obj];
                        if(overtimediv.getElementsByClassName("newovertime").length>0){
                            var newovertime = overtimediv.getElementsByClassName("newovertime")[0];
                            overtimediv.removeChild(newovertime);
                        }
                    }else{
                        if(overtimearr.indexOf(obj)==-1) {
                            overtimearr.push(obj);
                        }else {
                            lazy.alert2("列表中已经存在");
                            return;
                        }
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
            }
            tr_overtime.onclick = function() {
                window.addEventListener("touchmove", handler, false);
                iframe.src = obj.url;
                lazy.var("setOvertime"+bs);
                iframe.style.left = "0";
                iframe.style.webkitAnimation = "peopleIframe_an 0.5s";
            }
            function handler(event) {
              event.preventDefault();
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
                lazy.startSound(obj.httpurl, function(_obj) {
                     var tmp = {
                            "annexid" : _obj.rows[0].id,
                            "annexname" : _obj.rows[0].docname,
                            "annexpath" : _obj.rows[0].path,
                     }
                     var _src = getIP()+_obj.rows[0].path.replace(/\\/g,"/");
                     if(_obj.rows[0].path.indexOf("http://")>-1) _src = _obj.rows[0].path;
                     soundobj[bs] = _obj;
                     sounddiv.style.padding = "0.5rem";
                     sounddiv.innerHTML = '<div class="sound_icon"></div>';
                     sounddiv.onclick = function() {
                         lazy.playSound(_src);
                     }
                });
            }
            if(obj.value&&obj.value.length>0){
                 var _src = obj.value[0].path;
                 if(_src.indexOf("http://")==-1){
                     _src = getIP()+obj.value[0].path.replace(/\\/g,"/");
                 }
                 var _data = {
                     "rows" : [
                        {
                            "id" : obj.value[0].fileid
                        }
                     ]
                 }
                 soundobj[bs] = _data;
                 sounddiv.style.padding = "0.5rem";
                 sounddiv.innerHTML = '<div class="sound_icon"></div>';
                 sounddiv.onclick = function() {
                     lazy.playSound(_src);
                 }
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
                lazy.startVideo(obj.httpurl, function() {
                    
                },function(data,filename,filesize, src) {
                    videoDom.style.display = "block";
                    videosrc = src;
                    var _obj = data
                    var tmp = {
                            "annexid" : _obj.rows[0].id,
                            "annexname" : _obj.rows[0].docname,
                            "annexpath" : _obj.rows[0].path,
                     }
                    videoobj = _obj;
                });
            }
            videoDom.onclick = function() {
                lazy.playVideo(videosrc);
            }
            zuFun(zuindex).appendChild(tr);
        }
        //通讯录
        var peoplearr = [];//兼容之前的 记录添加的人数
        var peoplearrid = [];
        var peopleobj = null;//
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
            var iframe = lazy.iframe({"showhide": "hide"});
            iframe.style.height = "100%";
            iframe.style.zIndex = "999";
            document.body.appendChild(iframe);
            addbtn.onclick = function() {
                iframe.src(obj.url);
                lazy.var("setProcessPeople"+bs);
                iframe.show();
            }
            window["setProcessPeople"+bs] = function(obj) {
                iframe.hide();
                if(obj.h1){
                    var objstr = JSON.stringify(obj);
                    if(!peopleobj)peopleobj = {};
                    if(!peopleobj[bs])peopleobj[bs] = [];
                    if(peopleobj[bs].indexOf(objstr)==-1) {
                        peopleobj[bs].push(objstr);
                    }else {
                        lazy.alert2("列表中已经存在");
                        return;
                    }
                    //
                    var newpeople = oneicon(obj.icon, obj.h1);
                    newpeople.setAttribute("index",(peopleobj[bs].length - 1));
                    newpeople.onclick = function() {
                        var pe = this.parentNode;
                        pe.removeChild(this.nextSibling);
                        pe.removeChild(this);
                        //清除数组
                        var i = parseInt(newpeople.getAttribute("index"));
                        peopleobj[bs][i] = "";
                    }
                    peoplediv.insertBefore(newpeople, addbtn);
                    var xline = lazy.creat("div","xline");
                    xline.innerHTML = '<i></i>';
                    peoplediv.insertBefore(xline, addbtn);
                }
                }
            //兼容之前的
            window.setProcessPeople = function(obj) {
                if(!obj.Iframe){
                    iframe.hide();
                }
                if(obj.h1){
                    //alert(objstr);
                    if(obj.id) {
                    	obj.id = obj.id+"";
                    	if(peoplearrid.indexOf(obj.id)==-1) {
                    		if(obj.icon)obj.icon = (obj.icon.indexOf("http")==-1?getIP()+obj.icon.replace(/\\/g,"/"):obj.icon);
                    		peoplearrid.push(obj.id);
                    		peoplearr.push(JSON.stringify(obj));
                        }else {
                            lazy.alert2("列表中已经存在");
                            return;
                        }
                    	
                    }else {
                    	var objstr = JSON.stringify(obj);
                    	if(peoplearr.indexOf(objstr)==-1) {
                    		
                            peoplearr.push(objstr);
                        }else {
                            lazy.alert2("列表中已经存在");
                            return;
                        }
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
                        if(peoplearrid.length>0) peoplearrid[i] = "";
                        peoplearr[i] = "";
                    }
                    peoplediv.insertBefore(newpeople, addbtn);
                    var xline = lazy.creat("div","xline");
                    xline.innerHTML = '<i></i>';
                    peoplediv.insertBefore(xline, addbtn);
                }
            }
            /*
            var iframe = document.body.getElementsByClassName("peopleIframe")[0];
            if(!iframe) {
                iframe = lazy.creat("iframe","peopleIframe");
                document.body.appendChild(iframe);
            }
            window["setProcessPeople"+bs] = function(obj) {
                //
                iframe.style.left = "100%";
                iframe.style.webkitAnimation = "peopleIframe_an1 0.5s";
                var objstr = JSON.stringify(obj);
                if(!peopleobj)peopleobj = {};
                if(!peopleobj[bs])peopleobj[bs] = [];
                if(peopleobj[bs].indexOf(objstr)==-1) {
                    peopleobj[bs].push(objstr);
                }else {
                    lazy.alert2("列表中已经存在");
                    return;
                }
                //
                var newpeople = oneicon(obj.icon, obj.h1);
                newpeople.setAttribute("index",(peopleobj[bs].length - 1));
                newpeople.onclick = function() {
                    var pe = this.parentNode;
                    pe.removeChild(this.nextSibling);
                    pe.removeChild(this);
                    //清除数组
                    var i = parseInt(newpeople.getAttribute("index"));
                    peopleobj[bs][i] = "";
                }
                peoplediv.insertBefore(newpeople, addbtn);
                var xline = lazy.creat("div","xline");
                xline.innerHTML = '<i></i>';
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
                iframe.src = obj.url;
                lazy.var("setProcessPeople"+bs);
                iframe.style.left = "0";
                iframe.style.webkitAnimation = "peopleIframe_an 0.5s";
            }
            */
            zuFun(zuindex).appendChild(tr);
            
            //people end
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
