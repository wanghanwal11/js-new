lazy.plugins.event_image = {
    
	 "init" : function(el, data){
	     var length = data.length?data.length:9;
	     var uploadbol = false;//是否上传中
	     var imgarr = data.img?data.img:[];//图片数组
	     var textarr = data.text?data.text:[];
	     var tishi_hide = (imgarr.length>0)?"hide":"";
	     var addbtn_hide = (imgarr.length>=length)?"hide":"";
	     var nimarr=data.nimarr?data.nimarr:[];
	     var show = data.show?true:false;
         var showtext=true;
         if(data.showtext==false) showtext=false;
	     if(show) {
	         tishi_hide = "hide";
	         addbtn_hide = "hide";
	     }
         var _html = '';
         if(showtext==true){
             _html += '<div class="tishi '+tishi_hide+'"><p>添加图片</p><p>最多添加4张</p></div>';
         }
         _html += '<div class="loading"></div>';
         _html += '<div class="box ub">';
         _html += '    <div class="boxleft ub-f1">';
         _html += '         <div class="addbtn '+addbtn_hide+'"></div>';
         for(var i = 0; i < imgarr.length; i++) {
             var imgid = "";
             if(data.nimarr&&data.nimarr[i]!="") imgid=data.nimarr[i];
             else imgid="img"+lazy.autoIndex();
             _html += '<div id="'+imgid+'" class="imgdiv" src="'+imgarr[i]+'">';
             if(textarr[i]) {
                 _html += '<div class="text hh">'+textarr[i]+'</div>';
             }
             _html += '</div>';
         }
         _html += '    </div>';
         if(showtext==true){
             _html += '    <div class="boxrighttxt">'+(imgarr.length +"/" + length)+'</div>';
         }
         _html += '</div>';
         el.innerHTML = _html;
         
         //处理图片
         var boxleft = el.getElementsByClassName("boxleft")[0];
         var w = 4.8 * lazy.fontSize;
         var loading = el.getElementsByClassName("loading")[0];
         var addbtn = el.getElementsByClassName("addbtn")[0];
         var tishi = el.getElementsByClassName("tishi")[0];
         var boxrighttxt = el.getElementsByClassName("boxrighttxt")[0];
         
         addbtn.onclick = function() {
             if(uploadbol == false && show ==false) {
                 lazy.downList("",["拍照","从相册选择"],function(i){
                    if(i==0) {
                        lazy.startPhoto(function(path,name,type) {
                           upload(path);
                        });
                    }else {
                        lazy.startFile(function(path,name,type) {
                           upload(path);
                        },true);
                    } 
                 });
             }
         }
         //上传
         function upload(path) {
             uploadbol = true;
             //data.addimg(path);
            var url = getIP() + "/oa/docmobile/docupload.ht";
            lazy.upload("filename", path, url, 3, function(percent){
                 loading.style.width = percent+"%";
            }, function(obj){
                loading.style.width = "0%";
                uploadbol = false;
                obj=JSON.parse(obj);
                var newId=obj.rows[0].id;
                nimarr.push(newId);
                data.addimg(path,obj.rows[0].docworkid);
                if(data.tishi){
                    alert("上报成功");
                }
            }, function(){
                uploadbol = false;
                loading.style.width = "0%";
            });
         }
         data.getPath=function(){
             return nimarr;
         }
         //返回数据
         data.getData = function() {
             return imgarr;
         }
         //添加
         data.addimg = function(src,id) {
             uploadbol = false;
             imgarr.push(src);
             //定义界面
             var imgdiv = document.createElement("div");
             imgdiv.className = "imgdiv";
             imgdiv.id = id;
             imgdiv.setAttribute("src",src);
             lazy.newImage(w, w, src, function(img) {
                 imgdiv.appendChild(img);
                 boxleft.appendChild(imgdiv);
             },{
                 "class" : "img"
             });
             imgdivclick(imgdiv);
             imgarrFun();
         }
         //删除
         data.delimg =function(id) {
             var _this = document.getElementById(id);
             var src = _this.getAttribute("src");
             var url=config.oa.delfile+id;
             lazy.URLRequest(url,function(data){
                 _this.parentNode.removeChild(_this);
                 if(imgarr.indexOf(src)!=-1) {
                     n = imgarr.indexOf(src);
                     imgarr.splice(n,1);
                     nimarr.splice(n,1);
                 }
                 imgarrFun();
             });
         }
         //判断长度
         function imgarrFun() {
             if(imgarr.length > 0) {
                 tishi.className = "tishi hide";
             }else {
                 tishi.className = "tishi";
             }
             if(imgarr.length >= length) { 
                addbtn.className = "addbtn hide";
             }else {
                addbtn.className = "addbtn";
             }          
             boxrighttxt.innerHTML = imgarr.length +"/" + length;
         }
         //处理图片事件
         var imgdiv = el.getElementsByClassName("imgdiv");
         for(var i = 0; i < imgdiv.length; i++) {
             var src = imgdiv[i].getAttribute("src");
             lazy.newImage(w, w, src, function(img) {
                 var _i = parseInt(img.getAttribute("i"));
                 imgdiv[_i].appendChild(img);
             },{
                 "class" : "img",
                 "i" : i
             });
             imgdivclick(imgdiv[i]);
         }
         function imgdivclick(_imgdiv) {
             var id = _imgdiv.id;
             if(show) {
                 _imgdiv.onclick = function() {
                     var src=(this.getAttribute("src")).replace(/\\/g,"/");
                     lazy.showPhoto([src]);
                 }
             }else {
                 var selel = lazy.getSelectDom({
                       "style" : {},
                       "data" : [{"html" : ""},{"html" : "查看","value":id},{"html" : "删除","value":id}],
                       "change" : function(_obj) {
                           var name = _obj.html;
                           var _this = document.getElementById(_obj.value);
                           if(name=="查看") {
                               lazy.showPhoto([_this.getAttribute("src")]);
                           }else if(name=="删除"){
                               data.delimg(_obj.value);
                           }
                       }
                  });
                  _imgdiv.appendChild(selel);
             }
         }
    },
    "edit" : function(parentEl, el, data){
        
    }
}