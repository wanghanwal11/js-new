lazy.plugins.fire_process = {
	"init" : function(el,data) {
	    var arr = data.table;
	    var imagearr = [];
	    var overtimeobj = {};
	    var table = lazy.creat("div","table");
	    var edit = data.edit?data.edit:"true";
	    for(var i=0;i<arr.length;i++){
	        switch(arr[i].type){
	            case "select":
	               selectFun(arr[i],i);
	            break;
	            case "date":
	               dateFun(arr[i],i);
	            break;
	            case "datetime":
                   dateFun(arr[i],i);
                break;
                case "time":
                   dateFun(arr[i],i);
                break;
	            case "input":
	               inputFun(arr[i],i);
	            break;
	            case "radio":
	               radioFun(arr[i],i);
	            break;
	            case "image":
                   imageFun(arr[i],i);
                break;
                case "textarea":
                   textareaFun(arr[i],i);
                break;
                case "overtime":
                    overtimeFun(arr[i],i);
                break;
                case "alarm":
                    alarmFun(arr[i],i);
                break;
	        }
	    }
	    function selectFun(obj,index){
	        var optionlist = obj.option?obj.option:[];
	        var tr = lazy.creat("div","tr");
	        tr.setAttribute("index",index);
	        tr.setAttribute("divtype",obj.type);
	        var _html = ''
	        if(obj.title){
                _html += '<div class="title">'+obj.title+'：</div>';
            }
	        _html += '<select class="select">';
	        var str = obj.placeholder?obj.placeholder:"请选择";
	        _html += '<option value="">'+str+'</option>';
	        for(var i=0;i<optionlist.length;i++){
	            _html += '<option value="'+optionlist[i].value+'">'+optionlist[i].html+'</option>';
	        }
	        _html += '</select>';
	        _html += '<div class="return"><span>请选择</span></div>';
	        if(obj.edit&&obj.edit==true){
	            _html += '<div class="selectinputdiv"><input placeholder="请输入"/></div>';
	        }
	        tr.innerHTML = _html;
	        //事件
            var select =  tr.getElementsByClassName("select")[0];
            var selectdiv =  tr.getElementsByClassName("return")[0];
            select.onchange = function() {
                var options = this.options[this.selectedIndex];
                var ht = options.innerHTML;
                var vl = options.getAttribute("value");
                if(ht=="请选择" && vl=="") {
                    selectdiv.innerHTML = '<span>请选择</span>'
                }else {
                    selectdiv.innerHTML = '<span value="'+vl+'">'+ht+'</span>';
                }
            }
	        table.appendChild(tr)
	    }
	    function textareaFun(obj,index){
	        var tr = lazy.creat("div","tr");
            tr.setAttribute("index",index);
            tr.setAttribute("divtype",obj.type);
            var _html = '';
            if(obj.title){
                _html += '<div class="title">'+obj.title+'：</div>';
            }
            _html += '<div class="textareadiv"><textarea placeholder="请输入"></textarea></div>';
            tr.innerHTML = _html;
            table.appendChild(tr);
	    }
	    function alarmFun(obj,index){
	        var tr = lazy.creat("div","tr");
            tr.setAttribute("index",index);
            tr.setAttribute("divtype",obj.type);
            var _html = '';
            _html  += '<div class="alarmicon"></div>';
            if(obj.title){
                _html += '<div class="alarmtitle">'+obj.title+'</div>';
            }
            tr.innerHTML = _html;
            tr.onclick = obj.onclick
            table.appendChild(tr);
	    }
	    function dateFun(obj,index){
	        var tr = lazy.creat("div","tr");
	        tr.setAttribute("index",index);
            tr.setAttribute("divtype",obj.type);
            var type = obj.type;
            if(type=="date") type=0;
            if(type=="time") type=1;
            if(type=="datetime") type=2;
            var _html = '';
            if(obj.h1) _html += '<div class="h1">'+obj.h1+'</div>';
             if(obj.title){
                _html+='<div class="datetitle">'+obj.title+'：</div>';
                _html+='<div class="date type1">请选择</div>';
            }
            else _html += '<div class="date type2"></div>';
            if(obj.h2) _html += '<div class="h2">'+obj.h2+'</div>';
            tr.innerHTML = _html;
            var date = tr.getElementsByClassName("date")[0];
            date.onclick = function(){
                lazy.getDate(type,function(str){
                    date.innerHTML = str;
                })
            }
            table.appendChild(tr)
	    }
	    function inputFun(obj,index){
	        var tr = lazy.creat("div","tr");
            tr.setAttribute("index",index);
            tr.setAttribute("divtype",obj.type);
            var _html = '';
            if(obj.title){
                _html += '<div class="title">'+obj.title+'：</div>';
            }
            if(obj.edit=="false"){
                _html += '<div class="inputdiv"><input readOnly="true" placeholder="'+obj.value+'"/></div>';
            }else{
                _html += '<div class="inputdiv"><input placeholder="请输入"/></div>';
            }
            tr.innerHTML = _html;
            table.appendChild(tr);
	    }
	    function radioFun(obj,index){
	        var tr = lazy.creat("div","tr");
            tr.setAttribute("index",index);
            tr.setAttribute("divtype",obj.type);
            var _html = '';
            var options = obj.option;
            _html += '<div class="radio ub">';
            _html += '<div class="radiotitle">'+obj.title+'：</div>';
            _html += '<div class="selector">';
            for(var i=0;i<options.length;i++){
                _html += '<label><input type="radio" name="'+index+'" value="'+options[i].html+'"/>'+options[i].value+'</label>';
            }
            _html += '</div>';
            _html += '</div>';
            tr.innerHTML = _html;
            table.appendChild(tr);
	    }
	    function imageFun(obj,index){
	        var tr = lazy.creat("div","tr");
            tr.setAttribute("index",index);
            tr.setAttribute("divtype",obj.type);
            var _html = '';
            _html += '<div class="line"></div>';
            _html += '<div class="imagetitle"><span>您可以现场拍照并作为附件一起提交</span></div>';
            _html += '<div class="upload"></div>';
            _html += '<div class="images"></div>';
            tr.innerHTML = _html;
            var uploaddiv = tr.getElementsByClassName("upload")[0];
            uploaddiv.onclick = function(){
                var url = config.docUpoad;
                lazy.startPhoto(url, function(_obj) {
                     var tmp = {
                            "id" : _obj.rows[0].id,
                            "name" : _obj.rows[0].docname,
                            "path" : _obj.rows[0].path,
                     }
                     imagearr.push(tmp);
                     var _src = _obj.rows[0].path;
                     if(_src.indexOf("http://")==-1){
                         _src = getIP()+_obj.rows[0].path.replace(/\\/g,"/");
                     }
                     tr.getElementsByClassName("images")[0].appendChild(imageone(_src))
                     //imagediv.appendChild(imageone(_src));
                });
            }
            table.appendChild(tr);
	    }
	    function imageone(src){
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
	    function overtimeFun(obj,index){
	        var windowUrl = window.location.href;
            var tmp = windowUrl.substring(0,windowUrl.lastIndexOf("/")+1);
            var url = obj.url.indexOf("http")>=0?obj.url:tmp+obj.url;
	        var tr = lazy.creat("div","tr");
            tr.setAttribute("index",index);
            tr.setAttribute("divtype",obj.type);
            var _html = '';
            if(obj.title){
                _html += '<div class="title">'+obj.title+'：</div>';
            }
            _html += '<div class="overtimediv"><input readOnly="true" placeholder="请选择"/>';
            _html += '</div>';
            tr.innerHTML = _html;
            table.appendChild(tr);
            var overtimediv = tr.getElementsByClassName("overtimediv")[0];
            overtimediv.onclick = function(){
                lazy.openWebview(url,function(){
                    lazy.getCache("overtime",function(obj1){
                        if(obj.setValue) obj.setValue(obj1);
                        if(obj1.h1){
                            overtimeobj = obj1;
                            overtimediv.getElementsByTagName("input")[0].value = obj1.h1;
                        }
                        lazy.clearCache("overtime");
                    })
                })
            }
	    }
	    data.getArray = function(){
    	    var arr = [];
	        var trs = el.getElementsByClassName("tr");
	        for(var i=0;i<trs.length;i++){
	            var type = trs[i].getAttribute("divtype");
	            if(type=="select"){
	                var _span = trs[i].getElementsByClassName("return")[0].getElementsByTagName("span")[0];
	                var _obj = {
	                    "value":_span.innerHTML,
	                    "key":_span.getAttribute("value")
	                }
	                arr.push(_obj);
	            }
	            if(type=="date"||type=="time"||type=="datetime"){
	                var datediv = trs[i].getElementsByClassName("date")[0];
	                arr.push(datediv.innerHTML);
	            }
	            if(type=="input"){
	                var input = trs[i].getElementsByTagName("input")[0];
	                arr.push(input.value)
	            }
	            if(type=="radio"){
	                var radios = trs[i].getElementsByTagName("input");
	                for(var j=0;j<radios.length;j++){
	                    if(radios[j].checked){ 
                            arr.push(radios[j].value); 
                        } 
	                }
	            }
	            if(type=="image"){
	                arr.push(imagearr)
	            }
	            if(type=="textarea"){
	                var textarea = trs[i].getElementsByTagName("textarea")[0];
	                arr.push(textarea.value)
	            }
	            if(type=="overtime"){
	                //var overtimeinput = trs[i].getElementsByTagName("input")[0];
                    arr.push(overtimeobj)
	            }
	        }
	        // alert(JSON.stringify(arr))
	        return arr;
	        
	    }
	    data.setValue = function(str,i){
	        var tr = table.getElementsByClassName("tr")[i];
	        var type = tr.getAttribute("divtype");
	        if(type=="input"){
	            tr.getElementsByTagName("input")[0].value = str;
	        }
	    }
	    el.appendChild(table);
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
