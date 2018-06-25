lazy.plugins.process2 = {
    "init" : function(el,data) {
        var allvalue = [];//所有数据
        //加班时间
        var overtimearr = [];
        var imagearr = [];//记录添加的图片
        //录音
        var soundobj = {};
        var table = lazy.creat("div","table ub ub-ver");
        var arr = data.table?data.table:[];
        
        //清除方法
        data.clean = function() {
            table.innerHTML = "";
        }
        
        data.setOption = function(arr,i){
            var select = el.getElementsByClassName("table")[0].childNodes[i].getElementsByClassName("select")[0];
            var _html1 = '<option value="">请选择</option>';
            for(var j=0;j<arr.length;j++){
                _html1 += '<option value="'+arr[j].value+'">'+arr[j].html+'</option>';
            }
            select.innerHTML = _html1
        }
        data.setValue = function(str,i){
            var tr = el.getElementsByClassName("tr")[i];
            if(tr.getElementsByClassName("datetimeinput").length>0){
                tr.getElementsByClassName("datetimeinput")[0].innerHTML = str;
            }else if(tr.getElementsByTagName("input").length>0){
                tr.getElementsByTagName("input")[0].value = str;
            }
        }
        data.setVue = function(id,obj){
            alert(obj)
            var tr = el.getElementById(id);
            if(tr){
                alert(1)
                var selectdiv = tr.getElementsByClassName("selectdiv")[0];
                if(selectdiv){
                    alert(2)
                    selectdiv.innerHTML='<span value='+obj.value+'>'+obj.html+'</span>';
                }
            }
        }
        data.setselval=function(str,i){
             var tr = el.getElementsByClassName("tr")[i];
             var selectdiv =  tr.getElementsByClassName("selectdiv")[0];
              selectdiv.innerHTML = '<span value="'+str.vl+'">'+str.ht+'</span>';
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
                    if(type == "datetime" || type == "date" || type == "time" || type == "month"){
                        if(pe.getElementsByClassName("datetimeinput")[0].innerHTML.indexOf("请选择")>-1){
                            arr[i].value = "";
                        }else{
                            // arr[i].value = pe.getElementsByClassName("datetimeinput")[0].innerHTML;
                            arr[i].value = pe.getElementsByClassName("datetimeinput")[0].value;
                        }
                    }else if(type == "input" || type == "number") {
                        arr[i].value = pe.getElementsByTagName("input")[0].value;
                    }else if(type == "textarea") {
                        var value = pe.getElementsByClassName("textarea")[0].value.replace(/\n/g,"<br>");
                        arr[i].value = value;
                    }else if(type == "select") {
                        //处理select兼容
                        
                        
                        if(arr[i].bol=='true'){
                            var _span = pe.getElementsByClassName("inpo")[0];
                            arr[i].value = _span.innerHTML&&_span.innerHTML!=arr[i].placeholder?_span.innerHTML:"";
                            arr[i].returnObj = {"html":_span.innerHTML,"value" : _span.getAttribute("data-value")};
                        }else{
                            var _span = pe.getElementsByClassName("selectdiv")[0].getElementsByTagName("span")[0];
                            arr[i].value = _span.innerHTML&&_span.innerHTML!=arr[i].placeholder?_span.innerHTML:"";
                            arr[i].returnObj = {"html":_span.innerHTML,"value" : _span.getAttribute("value")};
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
                    }else if(type == "mapdownload") {
                        arr[i].value = mapdownloadobj;
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
                    }else if(type=="layer") {
                        //级联
                        arr[i].value = pe.getElementsByTagName("input")[0].value;
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
                    case "month" :
                        dateFun(obj, zuindex, bs);
                        break;
                    case "select" :
                        if(obj.bol=='true'){
                            selectFun(obj, zuindex, bs,true);
                        }else{
                             selectFun(obj, zuindex, bs);
                        }
                        break;
                    case "person" :
                        personFun(obj, zuindex, bs);
                        break;
                    case "layer" : 
                        layerFun(obj, zuindex, bs);
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
                    case "mapdownload" :
                        mapdownloadFun(obj, zuindex, bs);
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
        function insert(obj,ht){
            if(ht=='男'){
                var obj2 = {
                    "title" : "123",
                    "type" : "input",
                    "placeholder" : "请选择333",
                }
                inputFun(obj2,'','',obj)
            }
        }
        
        
        
        //下拉菜单
        function selectFun(obj, zuindex, bs,bol) {
            if(bol&&bol==true){//处理select兼容
                var tr = lazy.creat("div",bs + " tr");
                if(obj.id) tr.id = obj.id;
                var _html = '';
                _html += '<div class="tr_input ub">';
                _html += '<div class="title hh"><span>'+(obj.title?obj.title:"")+'</span></div>';
                _html += '<div class="inputdiv ub-f1">';
                _html += '<input type=text readonly class="inpo"  placeholder='+obj.placeholder+' >';
                _html += '</div></div>';
                tr.innerHTML = _html;
                //事件
                var select1 =  tr.getElementsByClassName("inputdiv")[0];
                var inpo =  tr.getElementsByClassName("inpo")[0];
                for(var i=0;i<obj.option.length;i++){
                    obj.option[i].title=obj.option[i].html
                }
                select1.onclick=function(){
                    lazy.alertlist(obj.option,function(item){
                        var ht = item.html;
                        // if(ht=="请选择") {   待定
                            // inpo.value = ht||'';
                        // }
                        inpo.value = ht || '';
                        inpo.setAttribute('data-value',item.value)
                    })
                }
                zuFun(zuindex).appendChild(tr);
            }else{
                var tr = lazy.creat("div",bs + " tr");
                if(obj.id) tr.id = obj.id;
                if(obj.selectid) tr.id = obj.selectid;
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
                    _html += ' <div class="selectdiv"><span value='+obj.value.value+'>'+obj.value.html+'</span></div>';
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
                    
                    if(obj.flag){
                            insert(tr,ht);
                        }
                }
                zuFun(zuindex).appendChild(tr);
            }
        }
        //文本框
        function inputFun(obj, zuindex, bs,abc) {
            var tr = lazy.creat("div",bs + " tr");
            if(obj.id) tr.id = obj.id;
            var _html = '';
            _html += '<div class="tr_input ub">';
            _html += '<div class="title hh"><span>'+(obj.title?obj.title:"")+'</span></div>';
            var _type = obj.type?obj.type:"text";
            var vl = obj.value?obj.value:"";
            _html += '<div class="inputdiv ub-f1"><input '+(obj.readonly?"readonly":"")+' type="'+_type+'" value="'+vl+'"placeholder="'+(obj.placeholder?obj.placeholder:"")+'"/></div>';
            _html += '</div>';
            tr.innerHTML = _html;
            if(obj.onchange){
                tr.getElementsByTagName("input")[0].onchange = function(val){
                    obj.onchange(val);
                }
            }
            if(obj.setValue){
                tr.getElementsByTagName("input")[0].onblur = function(){
                    obj.setValue(this.value)
                }
                //tr.getElementsByTagName("input")[0].onblur
            }
            if(abc){
                 zuFun(zuindex).insertAfter(tr,abc);
            }else{
                zuFun(zuindex).appendChild(tr);
            }
            
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
                //var tmp = obj.select?obj.select:true;
                var tmp = true;
                if(obj.select==false) tmp = false;
                lazy.startPhoto(obj.httpurl,function(_obj) {
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
                     imagediv.appendChild(imageone(_src,tmp));
                },tmp);
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
                    imagediv.appendChild(imageone(_src,tmp));
                }
            }
            zuFun(zuindex).appendChild(tr);
        }
        function imageone(src,obj) {
            var imagekuang = lazy.creat("a","imagekuang");
            var imageicon = lazy.creat("div","imageicon");
            imageicon.style.backgroundImage = 'url('+src+')';
            var imagecha = lazy.creat("div","imagecha");
            imagecha.setAttribute("obj", JSON.stringify(obj));
            imagekuang.appendChild(imageicon);
            imageicon.onclick = function() {
                lazy.showImage(src);
            }
            imagekuang.appendChild(imagecha);
            imagecha.onclick = function() {
                // var index = parseInt(imagecha.getAttribute("index"));
                var _obj = JSON.parse(this.getAttribute("obj"));
                var index = imagearr.indexOf(_obj);
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
            _html += '<div class="inputdiv ub-f1"><input class="datetimeinput" value="" type="'+type+'" /><div class="datetimeinputdiv"><span></span></div></div>';
            // _html += '<div class="inputdiv ub-f1"><input class="datetimeinput" value="" type="'+type+'" /><div class="datetimeinputdiv"><span>'+(obj.placeholder?obj.placeholder:"")+'</span></div></div>';
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
         function getWeekTime(str){
              var now = new Date(str);      
              var Year = now.getFullYear();
              var Month = now.getMonth() + 1;
              var Day = now.getDate()- now.getDay();
              if(now.getDay()==0)           //星期天表示 0 故当星期天的时候，获取上周开始的时候
              {
                  Day -= 7;
              }
              var beginTime = Year + "-" + Month +"-" + Day;        //格式 Y-m-d
              return beginTime;
        }
        //多行文本框
        function textareaFun(obj, zuindex, bs) {
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
        //级联
        function layerFun(_obj, zuindex, bs) {
            if(!_obj.id) {
                alert("type layer id 不能为空 ");
                return;
            }
            var inputnone = lazy.creat("input","inputnone");
            var layerdiv = lazy.creat("div","layerdiv");
            if(_obj.value) {
                inputnone.value = _obj.value;
                layerdiv.innerHTML = "<span>"+_obj.value.text+"</span>";
            }
            inputnone.style.display = "none";
            var layerMask = document.getElementById(_obj.id);
            if(!layerMask) {
                layerMask = lazy.creat("div","#"+_obj.id);
                layerMask.className = "layerMask";
                layerMask.setAttribute("index",0);
                layerMask.setAttribute("ajax","no");
                el.appendChild(layerMask);
            }
            
            function addChild(arr) {
                for(var i = 0; i < arr.length; i++) {
                    var obj = arr[i];
                    if(obj.pid=="0") {
                        //根目录
                        one(obj, layerMask);
                    }else {
                        var layer_ul_p = document.getElementById("layer_"+obj.pid);
                        if(layer_ul_p) one(obj, layer_ul_p);
                    }
                }
                function one(obj, ul_p) {
                    var index = ul_p.getAttribute("index")*1 + 1;
                    var layer_ul = lazy.creat("div","#layer_"+obj.id);
                    layer_ul.className = "layer_ul";
                    layer_ul.setAttribute("index",index);
                    var layer_li = lazy.creat("div","layer_li");
                    layer_li.setAttribute("obj",JSON.stringify(obj));
                    layer_li.id = obj.id;
                    layer_li.setAttribute("ajax","no");
                    layer_li.className = "layer_li";
                    layer_li.style.paddingLeft = index*0.5+'rem';
                    layer_li.innerHTML = '<span>'+obj.text+'</span>';
                    ul_p.appendChild(layer_li);
                    ul_p.appendChild(layer_ul);
                    layer_li.onclick = function() {
                        var layer_ul = document.getElementById("layer_"+this.id);
                        if(this.getAttribute("ajax") == "no") {
                            //处理url
                            var self = this;
                            var url = _obj.url + "parentid=" + this.id;
                            lazy.URLRequest(url,function(data){
                                self.setAttribute("ajax", "yes");
                                layer_ul.className = "layer_ul show";
                                if(data.rows.length == 0) {
                                    layer_ul.innerHTML = "";
                                    var o = JSON.parse(self.getAttribute("obj"));
                                    if(_obj.url2) {
                                        var url2 = _obj.url2 + "orgpath="+o.path;
                                        lazy.URLRequest(url2,function(data){
                                            //layer_ul
                                            for(var i = 0; i < data.rows.length; i++) {
                                                var layer_li = lazy.creat("div","layer_li");
                                                layer_li.setAttribute("obj",JSON.stringify(data.rows[i]));
                                                layer_li.id = data.rows[i].id;
                                                layer_li.style.paddingLeft = (index*0.5+0.5)+'rem';
                                                layer_li.innerHTML = '<span>'+data.rows[i].text+'</span>';
                                                layer_ul.appendChild(layer_li);
                                                layer_li.onclick = function() {
                                                    inputnone.value = self.getAttribute("obj");
                                                    var oo = JSON.parse(this.getAttribute("obj"));
                                                    layerdiv.innerHTML = "<span>"+oo.name+"</span>";
                                                    layerMask.style.display = "none";
                                                   _obj.back && _obj.back(o, JSON.parse(this.getAttribute("obj")));
                                                
                                                }
                                            }
                                        })
                                    }else {
                                        inputnone.value = self.getAttribute("obj");
                                        layerdiv.innerHTML = "<span>"+o.text+"</span>";
                                        layerMask.style.display = "none";
                                        _obj.back && _obj.back(o);
                                    }
                                }else {
                                    addChild(data.rows);
                                }
                            })
                        }else {
                            var name = layer_ul.className;
                            if(name.indexOf("show")!=-1) layer_ul.className = "layer_ul hide";
                            else layer_ul.className = "layer_ul show";
                        }
                    }
                }
            }
            
            //
            var tr = lazy.creat("div",bs + " tr");
            var _html = '';
            _html += '<a class="tr_input ub tr_layer">';
            _html += '  <div class="slh ub-f1 sprtitle"><span>'+(_obj.title?_obj.title:"")+'</span></div>';  
            _html += '</a>';
            tr.innerHTML = _html;
            var tr_layer = tr.getElementsByClassName("tr_layer")[0];
            tr.appendChild(layerdiv);
            tr.appendChild(inputnone);
            tr.appendChild(layerdiv);
            zuFun(zuindex).appendChild(tr);
            //layerMask事件
            tr_layer.onclick = function() {
                layerMask.style.display = "block";
                if(layerMask.getAttribute("ajax")=="no") {
                    var url = _obj.url + "parentid=0";
                    lazy.URLRequest(url,function(data){
                        layerMask.setAttribute("ajax", "yes");
                        addChild(data.rows);
                    })
                }
            }
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
            _html += '<div class="tr_input ub">';
            _html += '  <div class="slh ub-f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';
            _html += '</div>';
            tr.innerHTML = _html;
            var persondiv = lazy.creat("div","persondiv");
            var addbtn = oneicon(lazy.url + "LazyUI/images/shenpi/jia2.png", "", "addbtn");
            persondiv.appendChild(addbtn);
            tr.appendChild(persondiv);
            addbtn.onclick = function() {
                lazy.getPerson(function(_obj){
                    if(_obj.icon){
                        var path = _obj.icon;
                        if(path.indexOf("http")<0) path = getIP()+_obj.icon;
                    }
                    if(_obj.picture){
                        var path = _obj.picture;
                        if(path.indexOf("http")<0) path = getIP()+_obj.picture;
                    }
                    var tmp = {
                            "h1" : _obj.name,
                            "id" : _obj.userid,
                            "h2" : _obj.orgname,
                            "icon" : path
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
                    var newperson = oneicon(tmp.icon, tmp.h1);
                    newperson.setAttribute("index",(personarr.length - 1));
                    newperson.onclick = function() {
                        this.parentNode.removeChild(this.nextSibling);
                        this.parentNode.removeChild(this);
                        //清除数组
                        var i = parseInt(this.getAttribute("index"));
                        personarr[i] = "";
                    }
                    persondiv.insertBefore(newperson, addbtn);
                    var xline = lazy.creat("div","xline");
                    xline.innerHTML = '<i></i>';
                    persondiv.insertBefore(xline, addbtn);
                });
            }
            zuFun(zuindex).appendChild(tr);
        }
        //加班时间
        //var overtimearr = [];
        function overtimeFun(obj, zuindex, bs) {
            var windowUrl = window.location.href;
            var tmp = windowUrl.substring(0,windowUrl.lastIndexOf("/")+1);
            var url = obj.url.indexOf("http")>=0?obj.url:tmp+obj.url;
            var tr = lazy.creat("div",bs + " tr");
            var _html = '';
            _html += '<a class="tr_input ub tr_overtime">';
            _html += '  <div class="slh ub-f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';  
            _html += '</a>';
            tr.innerHTML = _html;
            var tr_overtime = tr.getElementsByClassName("tr_overtime")[0];
            var overtimediv = lazy.creat("div","overtimediv");
            if(obj.back){
                overtimediv.setAttribute("parentId",obj.id);
                overtimediv.setAttribute("back",obj.back);
            } 
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
            tr_overtime.onclick = function() {
                lazy.openWebview(url,function(){
                    lazy.getCache("overtime",function(obj1){
                        if(obj1.h1){
                            if(obj1.only){
                                overtimearr = [obj1];
                                if(overtimediv.getElementsByClassName("newovertime").length>0){
                                    var newovertime = overtimediv.getElementsByClassName("newovertime")[0];
                                    overtimediv.removeChild(newovertime);
                                }
                            }else{
                                if(overtimearr.indexOf(obj1)==-1) {
                                    overtimearr.push(obj1);
                                }else {
                                    lazy.alert2("列表中已经存在");
                                    return;
                                } 
                            }
                            if(overtimediv.getAttribute("back")){
                                getData(overtimediv.getAttribute("parentId")).setValue(obj1.h1,overtimediv.getAttribute("back"));
                            }
                            var newovertime = lazy.creat("a","newovertime");
                            newovertime.innerHTML = '<div class="h1"><span>'+obj1.h1+'</span></div><div class="h2"><span>'+obj1.h2+'</span></div>';
                            overtimediv.appendChild(newovertime);
                            newovertime.setAttribute("index",(overtimearr.length - 1));
                            newovertime.onclick = function() {
                                newovertime.parentNode.removeChild(newovertime);
                                //清除数组
                                var i = parseInt(newovertime.getAttribute("index"));
                                overtimearr[i] = "";
                            }
                        }
                        lazy.clearCache("overtime");
                    })
                })
            }
            function handler(event) {
              event.preventDefault();
            }
            zuFun(zuindex).appendChild(tr);
        }
        //map
        var mapobj = {};
        function mapFun(obj, zuindex, bs) {
            var windowUrl = window.location.href;
            var tmp = windowUrl.substring(0,windowUrl.lastIndexOf("/")+1);
            var url = obj.url.indexOf("http")>=0?obj.url:tmp+obj.url;
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
            tr_map.onclick = function() {
                lazy.openWebview(url,function(){
                    lazy.getCache("map",function(obj1){
                        mapobj = obj1;
                        mapdiv.innerHTML = '<span>●&nbsp;&nbsp;'+mapobj.address+'</span>';
                        mapdiv.style.paddingBottom = "0.5rem";
                    })
                })
            }
            zuFun(zuindex).appendChild(tr);
        }
        //mapdownload
        var mapdownloadobj = {};
        function mapdownloadFun(obj, zuindex, bs) {
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
            tr_map.onclick = function() {
                lazy.downloadHtml(obj.url)
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
                lazy.startSound(obj.httpurl, function(_obj,path,flag) {
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
                     var f = false;
                     sounddiv.onclick = function() {
                         if(f){
                                sounddiv.innerHTML = '<div class="sound_icon"></div>';
                            }else{
                                sounddiv.innerHTML = '<div class="sound_icon2"></div>';
                            }
                         f = !f;
                         if(flag&&flag=='true'){
                             lazy.playSound(path);
                         }else{
                             lazy.playSound(_src);
                         }
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
                 var f = false;
                 sounddiv.onclick = function() {
                     if(f){
                                sounddiv.innerHTML = '<div class="sound_icon"></div>';
                            }else{
                                sounddiv.innerHTML = '<div class="sound_icon2"></div>';
                            }
                     f = !f;
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
            var videodiv = lazy.creat("div","videodiv");
            var videoDom = lazy.creat("video","videoDom");
            videoDom.setAttribute("controls","controls");
            var videoCha = lazy.creat("div","videoCha");
            videoCha.onclick = function(){
                videoobj = {};
                videodiv.style.display = "none";
            }
            
            videodiv.appendChild(videoDom);
            videodiv.appendChild(videoCha);
            tr.appendChild(videodiv);
            videodiv.style.display = "none";
            
            tr_video.onclick = function() {
                lazy.startVideo(obj.httpurl,function(data) {
                    videodiv.style.display = "block";
                    var _obj = data
                     var _src = _obj.rows[0].path;
                     if(_src.indexOf("http://")==-1){
                         _src = getIP()+_obj.rows[0].path.replace(/\\/g,"/");
                     }
                    videoDom.src = _src;
                    var tmp = {
                            "annexid" : _obj.rows[0].id,
                            "annexname" : _obj.rows[0].docname,
                            "annexpath" : _obj.rows[0].path,
                     }
                    videoobj = _obj;
                });
            }
            videoDom.load();
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
            _html += '  <div class="slh ub-f1 sprtitle slh"><span>'+(obj.title?obj.title:"")+'</span></div>';
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
                lazy.setParameter("iframeBack","people");
                iframe.src(obj.url);
                lazy.var("setProcessPeople"+bs);
                iframe.show();
            }
            window["setProcessPeople"+bs] = function(obj) {
                iframe.hide();
                lazy.setHeader(lazy.getParameter("header"));
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
                lazy.setHeader(lazy.getParameter("header"));
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
        window.iframeBack = function(){
            if(lazy.getParameter("iframeBack")=="people"){
                lazy.setParentJs("setProcessPeople", {});
            }else if(lazy.getParameter("iframeBack")=="overtime"){
                lazy.setParentJs(lazy.var(), {});
            }else{
                lazy.setParentJs("setProcessMap",{})
            }
            lazy.setHeader(lazy.getParameter("header"));
        };
        data.show = function(id) {
            var dom = document.getElementById(id);
            if(dom)dom.style.display = "block";
        }
        data.hide = function(id) {
            var dom = document.getElementById(id);
            if(dom)dom.style.display = "none";
        }
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
