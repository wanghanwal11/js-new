lazy.plugins.process = {
    "init" : function(el,data) {
        /*关联证照库需要的若干参数*/
        var serviceId = lazy.getParameter("workid");
        var initid = lazy.getParameter("initid");
        var openid = lazy.getParameter("openid");
        var personinfo = lazy.getParameter("userinfo");
        var username = '';
        var idcard = ''
        if(personinfo) {
            username = personinfo.username;
            idcard = personinfo.idcard;
        }
        //var pic_ip = lazy.getParameter("ip")?lazy.getParameter("ip"):'';
         var pic_ip = lazy.getParameter("serverurl")?lazy.getParameter("serverurl"):'';
         //alert(pic_ip)
        /////////////////////
        var allvalue = [];//所有数据
        //加班时间
        var overtimearr = [];
        var ress="";//录音
        var imagearr = [];//记录添加的图片
        var idCardarr = [];
        //录音
        var localres = "";
        var soundobj = {};
        var table = lazy.create("div","table box box_v");
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
                        
                        
                    }else if(type="click"){
                        console.log(pe)
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
                        break;
                    case "click" :
                        clickFun(obj, zuindex, bs);
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
                    zu = lazy.create("div", "zu " + zuindex);
                    zu.innerHTML = '<div class="zucontent"></div>';
                    table.appendChild(zu);
                }
                return zu.getElementsByClassName("zucontent")[0];
            }else {
                return table;
            }
        }
        //点击事件
        function clickFun(obj, zuindex, bs) {
            var tr = lazy.create("div",bs + " tr click");
            var _html = '';
            _html += '<div class="tr_input box">';
            _html += '<div class="title hh"><span>'+(obj.title?obj.title:"")+'</span></div>';
             var vl = obj.value?obj.value:"";
            _html += '<div class="inputdiv box_f1"><input type="text" disabled readonly="readonly" value="'+vl+'"placeholder="'+(obj.placeholder?obj.placeholder:"")+'"/></div>';
            _html += '</div>';
            tr.innerHTML = _html;
            tr.onclick = function(){
                if(obj.onclick)obj.onclick()
                
            }
            zuFun(zuindex).appendChild(tr);
        }
        //下拉菜单
        function selectFun(obj, zuindex, bs) {
            var tr = lazy.create("div",bs + " tr");
            var _html = '';
            _html += '<div class="tr_input box">';
            _html += '<div class="title hh"><span>'+(obj.title?obj.title:"")+'</span></div>';
            _html += '<div class="inputdiv box_f1">';
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
                    setCache()
                }else {
                    selectdiv.innerHTML = '<span value="'+vl+'">'+ht+'</span>';
                    setCache()
                }
                if(obj.select) obj.select(ht,vl);
            }
            //
            zuFun(zuindex).appendChild(tr);
        }
        //文本框
        function inputFun(obj, zuindex, bs) {
            var tr = lazy.create("div",bs + " tr");
            var _html = '';
            _html += '<div class="tr_input box">';
            _html += '<div class="title hh"><span>'+(obj.title?obj.title:"")+'</span></div>';
            var _type = obj.type?obj.type:"text";
            var vl = obj.value?obj.value:"";
            _html += '<div class="inputdiv box_f1"><input type="'+_type+'" value="'+vl+'"placeholder="'+(obj.placeholder?obj.placeholder:"")+'"/></div>';
            _html += '</div>';
            tr.innerHTML = _html;
            zuFun(zuindex).appendChild(tr);
            tr.getElementsByTagName("input")[0].oninput = function(){
                setCache()
            }
        }
        //附件
        var filearr = []; //记录文件路径
        function fileFun(obj, zuindex, bs) {
            var tr = lazy.create("div",bs + " tr");
            var _html = '';
            _html += '<a class="tr_input box tr_file">';
            _html += '  <div class="slh box_f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';  
            _html += '</a>';
            tr.innerHTML = _html;
            var filediv = lazy.create("div","filediv");
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
            var filekuang = lazy.create("div","filekuang box");
            var icon = lazy.create("div","icon");
            var td = lazy.create("a","td box_f1");
            if(h2 > 0) {
                td.innerHTML = '<div class="h1 slh"><span>'+h1+'</span></div><div class="h2 slh"><span>'+(h2/1000)+'kb</span></div>';
            }else {
                td.innerHTML = '<div class="h1 slh"><span>'+h1+'</span></div><div class="h2 slh"><span></span></div>';
            }
            var filecha = lazy.create("div","filecha");
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
            var tr = lazy.create("div",bs + " tr");
            var _html = '';
            _html += '<a class="tr_input box tr_image">';
            _html += '  <div class="slh box_f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';  
            _html += '</a>';
            tr.innerHTML = _html;
            var imagediv = lazy.create("div","imagediv");
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
            var imagekuang = lazy.create("a","imagekuang");
            var imageicon = lazy.create("div","imageicon");
            imageicon.style.backgroundImage = 'url('+src+')';
            var imagecha = lazy.create("div","imagecha");
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
        //var idCardarr = [];
        function idCardFun(obj,zuindex,bs){
            console.log(obj)
            var tr = lazy.create("div",bs + " tr");
            var _html = '';
            _html += '<a class="tr_input box tr_idCard">';
            _html += '  <div class="slh box_f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';  
            _html += '</a>';
            tr.innerHTML = _html;
            var idCarddiv = lazy.create("div","idCarddiv");
            var remardarr = obj.remard;
            var remardpiny = obj.remardpiny;
            var annexid = obj.annexid;
            for(var i = 0;i<remardarr.length;i++){
                //初始化idCardarr
                var temp = {
                    'index':i,
                    'src':''
                }
                idCardarr.push(temp);
                var kuang = lazy.create("div","kuangdiv");
                kuang.setAttribute("index",i);
                kuang.setAttribute("remind",remardarr[i]);
                kuang.setAttribute("remardpiny",remardpiny[i]);
                kuang.setAttribute("annexid",annexid[i]);
                //kuang.innerHTML = remardarr[i];
                kuang.innerHTML = "<div class='remind'>"+remardarr[i]+"</div>";
                if(remardarr.length>3){
                    kuang.innerHTML += "<div>"+remardarr[i]+"</div>";
                }
                kuang.onclick = function(){
                    var index = this.getAttribute("index");
                    var remind = this.getAttribute("remind");
                    var remardpiny = this.getAttribute("remardpiny");
                    var annexid = this.getAttribute("annexid");
                    getIdCard(index,remind,remardpiny,this,annexid);
                    //alert(icondiv)
                    //kuang.appendChild(icondiv)
                }
                idCarddiv.appendChild(kuang)
               
                if(obj.value){
                    //idCardarr=[];
                    if(typeof(obj.value[i]) == 'string'){
                        //alert(1)
                        //后台传回的基础上处理
                        
                        var _src = '';
                        if(obj.value[i].indexOf("http://")==-1){    
                             _src = pic_ip+obj.value[i];
                         }else{
                             _src = obj.value[i];
                         }
                         var tmp = {
                          "index":i,
                          "id" : '',
                          "remardpiny":remardpiny[i],
                          "src":_src,
                             "annexid" : annexid[i],
                            //"annexname" : _obj.rows[0].docname,
                           "annexname" : remardarr[i],
                             "annexpath" : _src,
                             "isZZ":0,
                        }  
                        idCardarr[i] = tmp;
                        console.log(idCardarr)
                        
                        restoreIdCard(i,_src,kuang)
                    }else if(typeof(obj.value[i])=='object'){
                        //alert(2)
                        //alert(JSON.stringify(obj.value[i]))
                        idCardarr[i] = obj.value[i];
                        if(obj.value[i].src) restoreIdCard(i,obj.value[i].src,kuang)
                    } //restoreIdCard(i,obj.value[i],kuang)
                }
            }
            tr.appendChild(idCarddiv);
            zuFun(zuindex).appendChild(tr);
            //console.log(obj.value)
            
        }
        /*保存草稿后恢复图片*/
        function restoreIdCard(i,_obj,kuang){
            /*for(var n=0;n<idCardarr.length;n++){
                if(idCardarr[n].index==i){
                    idCardarr[n]=_obj
                }
            }*/
            //console.log(idCardarr)
            //if(idCardarr.indexOf(_obj)==-1) idCardarr.push(_obj);
           //alert(i)
            if(kuang.getElementsByClassName("kuangimage").length>0){
                kuang.getElementsByClassName("kuangimage")[0].src = _obj.src;
            }else{
                var image = new Image();
                image.setAttribute("index",_obj.index);
                image.className = "kuangimage";
                image.src = _obj;
                image.onclick=function(event){
                    event.stopPropagation();
                    //lazy.showImage(tmp.src.replace(/\@.*/g,""))
                    
                    previewImage(image.src)
                }
                kuang.appendChild(image)
                var cha = lazy.create("div", "cha");
                    cha.onclick = function(event){
                       event.stopPropagation();
                        var pNode = this.parentNode;
                        var deleimg = pNode.getElementsByTagName("img")[0];
                        var index = deleimg.getAttribute('index');
                        //alert(index)
                        pNode.removeChild(deleimg)
                        pNode.removeChild(this)
                        idCardarr[i].src='';
                        idCardarr[index].annexpath='';
                        setCache()
                    }
                    kuang.appendChild(cha)
            }
              
            
        }
        function getIdCard(i,str,remardpiny,kuang,annexid){
            /*微信*/
             lazy.startPhoto(function(pics, upids) {
                 //alert(upids)
                 //alert(pics[0])
                 // alert(upids[0])
                //var pics = ['../LazyUI/images/default.png']
                //var upids = ['../../LazyUI/images/default.png']
                var tmp = {
                    "index":i,
                    "id" : upids[0],
                    "src" : pics[0],
                    "annexid" : upids[0],
                    "annexname" : str,
                    "remardpiny":remardpiny,
                    "annexpath" : '',
                }
               /*pc*/
              /*关联证照库需要的若干参数*/
                /*var serviceId = lazy.getParameter("workid");
                var initid = lazy.getParameter("initid");
                var openid = lazy.getParameter("openid");
                var personinfo = lazy.getParameter("userinfo");
                var username = '';
                var idcard = ''
                if(personinfo) {
                    username = personinfo.username;
                    idcard = personinfo.idcard;
                }*/
                /*var url = getIP()+ "/wechat/weixinevent/weixinuploadslpt.ht?serviceId="+serviceId;
                    url += "&initid="+initid+"&openid="+openid+"&licholdercard="+idcard;
                    url += "&licholder="+username+"&pinyin="+remardpiny+"&lictypename="+str;
                    url += "&lictypeid="+annexid;
                  
                   var url =  "http://vito.tunnel.qydev.com/xfwq2/oa/docmobile/docupload.ht?serviceId="+serviceId;
                    url += "&initid="+initid+"&openid="+openid+"&licholdercard="+idcard;
                    url += "&licholder="+username+"&pinyin="+remardpiny+"&lictypename="+str;
                    url += "&lictypeid="+annexid;
                  
                /////////////////////
                lazy.pcstartPhoto(url,'', function(_obj,src) {
                    var tmpurl = _obj.rows[0].path.substring(1,_obj.rows[0].path.length) 
                    
                     var _src = pic_ip+tmpurl;
                     var tmp = {
                          "index":i,
                          "id" : _obj.rows[0].id,
                          "remardpiny":remardpiny,
                          "src":_src,
                             "annexid" : _obj.rows[0].id,
                           "annexname" : str,
                             "annexpath" : _obj.rows[0].path,
                             "isZZ":0,
                     }*/
                     
                     /*测试用数据*/
                    /* var tmp = {
                          "index":i,
                          "id" : '',
                          "remardpiny":remardpiny,
                          "src":'../LazyUI/images/default.png',
                            "annexid" : '',
                            //"annexname" : _obj.rows[0].docname,
                           "annexname" : str,
                            "annexpath" : '',
                            "isZZ":0,//1为证照库返回不可以修改  0自己上传的可以修改
                     }*/
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
                	image.onclick=function(event){
                	    event.stopPropagation();
                	   // alert(2)
                	     //var st = tmp.src.replace(/\\/g, "/")
                	    
                	    previewImage(tmp.src)
                	}
                	kuang.appendChild(image)
                	var cha = lazy.create("div", "cha");
                	cha.onclick = function(event){
                	   event.stopPropagation();
                	    var pNode = this.parentNode;
                	    var deleimg = pNode.getElementsByTagName("img")[0];
                	     var index = deleimg.getAttribute('index');
                        pNode.removeChild(deleimg)
                        pNode.removeChild(this)
                        idCardarr[index].src='';
                        idCardarr[index].annexpath='';
                	    setCache()
                	}
                	kuang.appendChild(cha)
                }
                setCache()
                //return icondiv
            },1)
        }
        //时间
        function dateFun(obj, zuindex, bs) {
            var tr = lazy.create("div",bs + " tr");
            var _html = '';
            _html += '<div class="tr_input box">';
            _html += '<div class="title hh"><span>'+(obj.title?obj.title:"")+'</span></div>';
            var type = (obj.type=="datetime")?"datetime-local":obj.type;
            var vl = obj.value?obj.value:"";
            _html += '<div class="inputdiv box_f1"><input class="datetimeinput" value="'+vl+'" type="'+type+'" /><div class="datetimeinputdiv"><span>'+(obj.placeholder?obj.placeholder:"")+'</span></div></div>';
            _html += '</div>';
            tr.innerHTML = _html;
            var datetimeinput = tr.getElementsByClassName("datetimeinput")[0];
            var datetimeinputdiv = tr.getElementsByClassName("datetimeinputdiv")[0];
            if(vl){
                datetimeinput.style.opacity = 1;
                datetimeinputdiv.style.display = "none";
            }
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
                setCache();
            }
            zuFun(zuindex).appendChild(tr);
        }
        //多行文本框
        function textareaFun(obj, zuindex, bs) {
            // var tr = lazy.create("div",bs + " tr");
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
            var tr = lazy.create("div",bs + " tr");
            var _html = '';
            _html += '<div class="tr_input box">';
            _html += '<div class="title hh"><span>'+(obj.title?obj.title:"")+'</span></div>';
            var _type = obj.type?obj.type:"text";
            var _value = obj.value?obj.value:"";
            _html += '<div class="inputdiv box_f1"><textarea class="textarea" value="'+(obj.value?obj.value:"")+'" type="'+_type+'" placeholder="'+(obj.placeholder?obj.placeholder:"")+'">'+_value+'</textarea></div>';
            _html += '</div>';
            tr.innerHTML = _html;
            zuFun(zuindex).appendChild(tr);
            tr.getElementsByTagName("textarea")[0].onchange = function(){
                setCache()
            }
        }
        //标签
        function labelFun(obj, zuindex) {
            var labeldiv;
            if(obj.class) {
                labeldiv = lazy.create("div","labeldiv " + obj.class);
            }else {
                //labeldiv = lazy.create("div","labeldiv ub");
                labeldiv = lazy.create("div","labeldiv");
            }
            //labeldiv.innerHTML = '<div class="ub-f1"><span>'+obj.text+'</span></div>';
            labeldiv.innerHTML = '<span>'+obj.text+'</span>';
            zuFun(zuindex).appendChild(labeldiv);
        }
        //添加按钮
        function buttonFun(obj, zuindex) {
            var title = obj.list.name;
            var label = obj.list.add;
            
            var tr = lazy.create("a","tr");
            tr.innerHTML = '<div class="buttondiv"><span>'+label+'</span></div>';
            var buttondiv = tr.getElementsByClassName("buttondiv")[0];
            buttondiv.onclick = function() {
                var zucontent = tr.parentNode.getElementsByClassName("zucontent")[0];
                //复制
                var tablearr = obj.list.table;
                tablearr.push(JSON.parse(JSON.stringify(tablearr[0])));
                //
                var newZucontent =  lazy.create("div", "zucontent");
                var labelhtml = '<div class="labeldiv labeldiv2 box"><div class="box_f1"><span>'+title+'</span></div><a class="addbutton"><span>删除</span></a></div>';
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
            var tr = lazy.create("div",bs + " tr");
            var _html = '';
            _html += '<a class="tr_input box tr_person">';
            _html += '  <div class="slh box_f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';  
            _html += '</a>';
            tr.innerHTML = _html;
            var tr_person = tr.getElementsByClassName("tr_person")[0];
            var persondiv = lazy.create("div","persondiv");
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
                    var newperson = lazy.create("a","newperson");
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
            var tr = lazy.create("div",bs + " tr");
            var _html = '';
            _html += '<a class="tr_input box tr_overtime">';
            _html += '  <div class="slh box_f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';  
            _html += '</a>';
            tr.innerHTML = _html;
            var tr_overtime = tr.getElementsByClassName("tr_overtime")[0];
            var overtimediv = lazy.create("div","overtimediv");
            tr.appendChild(overtimediv);
            if(obj.value){
                overtimearr.push(obj.value);
                var newovertime = lazy.create("a","newovertime");
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
                iframe = lazy.create("iframe","overtimeIframe");
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
                    var newovertime = lazy.create("a","newovertime");
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
            var tr = lazy.create("div",bs + " tr");
            var _html = '';
            _html += '<a class="tr_input box tr_map">';
            _html += '  <input class="slh box_f1 sprtitle gpss" placeholder='+(obj.title?obj.title:"")+'></input>';
            _html += '  <div class="gps"></div>';
            _html += '</a>';
            tr.innerHTML = _html;
            var sprtitle = tr.getElementsByClassName("sprtitle")[0];
            var gps = tr.getElementsByClassName("gps")[0];
            var mapdiv = lazy.create("div","mapdiv");
            tr.appendChild(mapdiv);
            //创建反添方法
           /* var iframe = document.body.getElementsByClassName("mapIframe")[0];
            if(!iframe) {
                iframe = lazy.create("iframe","mapIframe");
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
            }*/
            obj.add=function(address){
                sprtitle.value =address;
                sprtitle.readOnly = true;
                //mapdiv.style.paddingBottom = "0.5rem";
            }
            gps.onclick = function() {
                obj.onclick()
            }
            zuFun(zuindex).appendChild(tr);
        }
        //sound
        function soundFun(obj, zuindex, bs) {
            
            var tr = lazy.create("div",bs + " tr");
            var _html = '';
            _html += '<div class="tr_input box tr_sound">';
            _html += '  <div class="slh box_f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';
            _html += '</div>';
            tr.innerHTML = _html;
            var sprtitle = tr.getElementsByClassName("sprtitle")[0];
            var sounddiv = lazy.create("div","sounddiv");
            var luyin = lazy.create("a","luyin");
            sprtitle.appendChild(luyin)
            tr.appendChild(sounddiv)
            zuFun(zuindex).appendChild(tr);
            var pdd = lazy.create("div","pdd");
            var t = null;
            lazy.touchEvent2(luyin, function(){
                if(t)clearInterval(t);
                luyin.className="luyin luyin1";
                document.body.appendChild(pdd);
                lazy.startRecord();
                
                wx.onVoiceRecordEnd({
                   
                    // 录音时间超过一分钟没有停止的时候会执行 complete 回调
                   
                    complete: function (res) {
                         if(t)clearInterval(t);
                        pdd.remove();
                                 
                        var localId = res.localId; 
                        
                        //var timeout=setTimeout("lazy.alert2('录音不能超过一分钟哦')",500)
                        wx.uploadVoice({
                            localId: localId, // 需要上传的音频的本地ID，由stopRecord接口获得
                            isShowProgressTips: 1, // 默认为1，显示进度提示
                            success: function (res) {
                                lazy.alert2('录音不能超过一分钟哦')
                                var serverId = res.serverId; // 返回音频的服务器端ID
                                //back(serverId,localId)
                                ress=serverId;
                                localres = localId;
                                if(el.getElementsByClassName('bofang').length == 0)
                                add(localId)
                            }
                        });
                    }
                });
            },function(){
                 
            },function() {
                if(t)clearInterval(t);
                 pdd.remove();
                 /*
                lazy.stopRecord(function (res1,res2) {
                    ress=res1;
                    localres = res2;
                    add(res2)
                })*/
               t = setInterval(function() {
                    wx.stopRecord({success: function (res) {
                        if(t)clearInterval(t);
                        //shangchuan
                        var localId = res.localId;
						
                        wx.uploadVoice({
                            localId: localId, // 需要上传的音频的本地ID，由stopRecord接口获得
                            isShowProgressTips: 1, // 默认为1，显示进度提示
                            success: function (res) {
								
                                var serverId = res.serverId; // 返回音频的服务器端ID
                                //back(serverId,localId)
                                ress=serverId;
                                localres = localId;
								if(el.getElementsByClassName('bofang').length == 0)
                                add(localId)
                            }
                        });
                    }});
                },500);
            })
            function add(id){
                luyin.style.display="none";
				
                var bofang = lazy.create("div","bofang");
                var del = lazy.create("div","del");
                sprtitle.appendChild(del)
                sprtitle.appendChild(bofang)
			  
                var states=true;
                bofang.onclick=function(){
                    if(states){
                        bofang.className="bofang bofang1";
                        lazy.playVoice(id);
                        states=false
                    }else{
                        bofang.className="bofang";
                        lazy.stopVoice(id);
                        states=true
                    }
                }
                del.onclick=function(){
                    luyin.style.display="block";
                    bofang.remove()
						del.remove()
                }
                lazy.stopVoiceJt(function () {
                    bofang.className="bofang";
                    states=true
                })
            }
        }
        //视频
        var videoobj = {};
        function videoFun(obj, zuindex, bs) {
            var tr = lazy.create("div",bs + " tr");
            var _html = '';
            _html += '<a class="tr_input box tr_video">';
            _html += '  <div class="slh box_f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';  
            _html += '</a>';
            tr.innerHTML = _html;
            var tr_video = tr.getElementsByClassName("tr_video")[0];
            var videodiv = lazy.create("a","videodiv");
            var videoDom = lazy.create("div","videoDom");
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
            var tr = lazy.create("div",bs + " tr");
            var _html = '';
            _html += '<div class="tr_input box">';
            _html += '  <div class="slh box_f1 sprtitle"><span>'+(obj.title?obj.title:"")+'</span></div>';
            _html += '</div>';
            tr.innerHTML = _html;
            var peoplediv = lazy.create("div","peoplediv");
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
                    var xline = lazy.create("div","xline");
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
                    var xline = lazy.create("div","xline");
                    xline.innerHTML = '<i></i>';
                    peoplediv.insertBefore(xline, addbtn);
                }
            }
            /*
            var iframe = document.body.getElementsByClassName("peopleIframe")[0];
            if(!iframe) {
                iframe = lazy.create("iframe","peopleIframe");
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
                var xline = lazy.create("div","xline");
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
                var xline = lazy.create("div","xline");
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
            var iconli = lazy.create("div","iconli");
            iconli.appendChild(getIcon(path, title, classname));
            var iconlititle = lazy.create("div","iconlititle");
            iconlititle.innerHTML = '<span>'+title+'</span>';
            iconli.appendChild(iconlititle);
            return iconli;
        }
        var icon_i = -1;
        function getIcon(path, title, classname) {
             var img = new Image();
             img.src = path;
             var icon = lazy.create("a","icon");
             icon_i++;
             img.onerror = function() {
                 var icontitle1 = lazy.create("div","icontitle1 bcolor"+parseInt(icon_i%7));
                 icontitle1.innerHTML = '<span>'+title.substring((title.length>2?1:0),3)+'</span>';
                 icon.appendChild(icontitle1);
             }
             img.onload = function() {
                 var iconimg = lazy.create("div","iconimg "+(classname?classname:""));
                 iconimg.style.backgroundImage = "url("+path+")";
                 icon.appendChild(iconimg);
             }
            return icon;
        }
        //设置缓存
        function setCache(){
            var page = lazy.getParameter("page");
            var allvalue = data.getArray();
            var obj = lazy.getParameter("save"+page)?lazy.getParameter("save"+page):{};
            obj[serviceId] = allvalue;
            console.log(obj[serviceId])
            console.log(obj)
            console.log(serviceId)
            lazy.setParameter("save"+page,obj);
        }
        function setIdCard(i,str,remardpiny,kuang,src,annexid,id){
                //var pics = ['../LazyUI/images/default.png']
                //var upids = ['../../LazyUI/images/default.png']
                //src = '../LazyUI/images/default.png';
                var tmp = {
                    "index":i,
                    "id" : id,
                    "src" : src,
                    "annexid" : annexid,
                    "annexname" : str,
                    "remardpiny":remardpiny,
                    "isZZ":1,
                    "annexpath" : src,
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
                    image.onclick=function(event){
                        event.stopPropagation();
                       
                        //lazy.showImage(tmp.src.replace(/\@.*/g,""))
                        previewImage(tmp.src)
                    }
                    kuang.appendChild(image)
                    var cha = lazy.create("div", "cha");
                    cha.onclick = function(event){
                       event.stopPropagation();
                        var pNode = this.parentNode;
                        var deleimg = pNode.getElementsByTagName("img")[0];
                        var index = deleimg.getAttribute("index")
                         var index = deleimg.getAttribute('index');
                        pNode.removeChild(deleimg)
                        pNode.removeChild(this)
                        idCardarr[index].src='';
                        idCardarr[index].annexpath='';
                        setCache()
                    }
                    kuang.appendChild(cha)
                   
                }
                //return icondiv
            
        }
        data.re=function(){
            return ress;
        }
        data.gps=function(){
            
            return el.getElementsByClassName("gpss")[0].value;
        }
        data.addgps=function(address){
                el.getElementsByClassName("gpss")[0].value =address;
                el.getElementsByClassName("gpss")[0].readOnly = true;
                //mapdiv.style.paddingBottom = "0.5rem";
        }
        
        data.addly = function(src){
            var sprtitle = el.getElementsByClassName('luyin')[0].parentNode
            el.getElementsByClassName('luyin')[0].style.display="none";
            var bofang = lazy.create("div","bofang");
            //bofang.innerHTML = '<audio autoplay="autoplay" id="audio"></audio>';
            sprtitle.appendChild(bofang);
            
            var states=true;
            bofang.onclick=function(){
                //var audio = el.getElementsByTagName("audio")[0];
                
                if(states){
                    bofang.className="bofang bofang1";
                    lazy.playVoice(src);
                    
                    //audio.src=src;
                    states=false
                }else{
                    bofang.className="bofang";
                    //audio.src='';
                    lazy.stopVoice(src);
                    states=true
                }
            }
            lazy.stopVoiceJt(function () {
                bofang.className="bofang";
                states=true
            })
                
              
        }
        data.soundId = function(){
            return localres;
        }
        data.getResserveTime = function(){
            var val = el.getElementsByClassName("click")[0].getElementsByTagName("input")[0].value;
            return val;
        }
        function previewImage(url){
            
             var imgtemp = el.getElementsByTagName("img");
             var urlss = [];
             for(var j=0 ; j<imgtemp.length ; j++){
                 urlss.push(imgtemp[j].src)
             }
             lazy.previewImage(url,urlss);
        }
        data.setIdimages = function(data,ip){
            for(var i=0 ; i<data.length ; i++){
                var kuangdiv = el.getElementsByClassName("kuangdiv");
                for(var j=0 ; j<kuangdiv.length ; j++){
                    var remardpiny = kuangdiv[j].getAttribute("remardpiny");
                    var remind = kuangdiv[j].getAttribute("remind");
                    if(data[i].pinyin == remardpiny){
                        //console.log(getIP()+data[i].src)
                        var src = ip+data[i].src;
                        var annexid = data[i].annexid;
                        var id = data[i].id;
                        //src='../LazyUI/images/default.png';
                        setIdCard(j,remind,remardpiny,kuangdiv[j],src,annexid,id);
                    }
                }
            }
        }
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
