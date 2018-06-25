lazy.plugins.fujianlist = {
	 "init" : function(el, data){
	     var arr = data.path?data.path:[];
	     var returnids=[];
	     var ids=data.ids?data.ids:[];
	     var filesid=data.filesid?data.filesid:[];
         var _html = '';
         _html += '<div class="h1">　附件';
         if(data.upload){
             _html+='<div class="right" style="float:right">添加　</div>';
         }
         _html+='</div>';
         for(var i = 0; i < arr.length; i++) {
             var name=arr[i].substring(arr[i].lastIndexOf("/")+1);
             var pathobj = lazy.getFilename(arr[i]);
             _html += '<div class="hang ub">';
             _html += '<div class="showbtn icon '+lazy.getFlieType(pathobj.after)+'" path="'+arr[i]+'"></div>';
             _html += '<div class="showbtn ub-f1 slh" path="'+arr[i]+'" id="'+ids[i]+'">'+name+'</div>';
             if(filesid.length==arr.length){
                 _html += '<div class="del" path="'+arr[i]+'" id="'+filesid[i]+'"><span>删除</span></div>';
             }else{
                 _html += '<div class="del" path="'+arr[i]+'" ><span>删除</span></div>';
             }
             if(ids.length==arr.length) returnids.push(ids[i]);
             _html += '</div>';
         }
         el.innerHTML = _html;
         //事件
         //上传
         if(data.upload){
             var upload= el.getElementsByClassName("right")[0];
             upload.onclick=data.upload;
         }
         var hanglist = el.getElementsByClassName("hang");
         var showbtn = el.getElementsByClassName("showbtn");
         
         for(var i = 0; i < showbtn.length; i++) {
            showbtn[i].onclick = function() {
                showbtnclick(this);
            }
         }
         var dellist = el.getElementsByClassName("del");
         for(var i = 0; i < dellist.length; i++) {
             dellist[i].onclick = function() {
                dellistclick(this);
            }
         }
         //显示和点击事件
         function showbtnclick(_this) {
            var path = _this.getAttribute("path");
            var pathobj = lazy.getFilename(path);
            if(lazy.getFlieType(pathobj.after) == "img") {
                lazy.showPhoto([path]);
            }
            if(data.see){
                if(lazy.getFlieType(pathobj.after) != "img"){
                var downbol=false;
                
                var _name=lazy.siblings(_this)[1].getAttribute("id");
                //_url = encodeURI(_url);
                 if(downbol) {
                        alert("有文件正在下载！");
                    }else {
                        //var _div = document.getElementById(_json.id);
                        lazy.fileBol('/sdcard'+_name,function(){
                          downbol = false;
                          lazy.readerFile('/sdcard'+_name);
                       
                          
                          },function(){
                             downbol = true;
                             lazy.download(path,function(bfb){
                           // _div.innerHTML = "<span style='color:#006400;'>　"+bfb+"%</span>";
                            
                            },function(size,path){
                                downbol = false;
                              //  _div.innerHTML = "<span style='color:#006400;'>　下载完成</span>";
                                lazy.readerFile('/sdcard'+_name);
                                //lazy.refresh();
                                //alert("下载完成: /sdcard"+_name);
                            },function(){
                                downbol = false;
                              //  _div.innerHTML = "<span style='color:#f20;'>　下载失败</span>";
                            },'/sdcard'+_name);
                          })
                    }
                }
            }
         }
         function dellistclick(_this) {
            lazy.alertyesno("确定删除？", function() {
                if(_this.getAttribute("id")){
                    var id=_this.getAttribute("id")
                    var url=config.oa.delfile+id;
                     lazy.URLRequest(url,function(data){
                        var path = _this.getAttribute("path");
                        if(arr.indexOf(path)!=-1) {
                            var n = arr.indexOf(path);
                            arr.splice(n,1);
                            returnids.splice(n,1);
                            _this.parentNode.parentNode.removeChild(_this.parentNode);
                        }
                     });
                }else{
                    var path = _this.getAttribute("path");
                    if(arr.indexOf(path)!=-1) {
                        var n = arr.indexOf(path);
                        arr.splice(n,1);
                        _this.parentNode.parentNode.removeChild(_this.parentNode);
                    } 
                }
            });
         }
         //添加一条
         data.addPath = function(_path,id,fileid) {
             arr.push(_path);
             if(fileid) returnids.push(fileid);
             var pathobj = lazy.getFilename(_path);
             var name=_path.substring(_path.lastIndexOf("/")+1);
             var div = document.createElement("div");
             div.className = 'hang ub';
             var _html = '';
             _html += '<div class="showbtn icon '+lazy.getFlieType(pathobj.after)+'" path="'+_path+'"></div>';
             _html += '<div class="showbtn ub-f1 slh" path="'+_path+'" id='+fileid+'>'+name+'</div>';
             if(id){
                 _html += '<div class="del" id="'+id+'" path="'+_path+'"><span>删除</span></div>';
             }else{
                 _html += '<div class="del" path="'+_path+'"><span>删除</span></div>';
             }
             div.innerHTML = _html;
             el.appendChild(div);
             //事件
             var showbtn = div.getElementsByClassName("showbtn");
             for(var i = 0; i < showbtn.length; i++) {
                showbtn[i].onclick = function() {
                    showbtnclick(this);
                }
             }
             var dellist = div.getElementsByClassName("del");
             for(var i = 0; i < dellist.length; i++) {
                 dellist[i].onclick = function() {
                    dellistclick(this);
                }
             }
             //
         }
         //返回文件id
         data.returnIds=function(){
             return returnids;
         }
         var yjid = el.getElementsByClassName("slh");
         data.retid=function(){
             var arr=[];
             for(var i=0;i<yjid.length;i++){
                 arr.push(yjid[i].id)
             }
             return arr;
         }
    },
    "edit" : function(parentEl, el, data){
        
    }
}