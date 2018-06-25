lazy.plugins.commentlist = {
    "init" : function(el, data){
         //"icon" : "","h1" : "", "h2" : "批","h3" : "","point" : 1
         if(data.title) {
             var title = lazy.creat("div","title");
             title.innerHTML = '<span>'+data.title+'</span>';
             el.appendChild(title);
         }
         var table = lazy.creat("div","table");
         var arr = data.table?data.table:[];
         var bi = -1;//颜色下标
         for(var i = 0; i < arr.length; i++) {
             add(arr[i]); 
         }
         function add(obj) {
            bi++;
            var tr = lazy.creat("a","tr ub");
            var icon = getIcon(obj.icon, obj.h1, bi, obj.mark);
            var td = lazy.creat("a","td ub-ver ub ub-f1");
            var _html = '';
            _html += '<div class="td1 ub">';
            _html += '  <div class="h1 slh ub-f1"><span>'+obj.h1+'</span></div><div class="h3"><span>'+(obj.h3?obj.h3:"")+'</span></div>';
            _html += '</div>';
            _html += '<div class="td2">';
            if(obj.h2) {
                _html += '<div class="h2 hh"><span>'+obj.h2+'</span></div>';
            }
            _html += '</div>';
            td.innerHTML = _html;
            tr.appendChild(icon);
            tr.appendChild(td);
            if(obj.onclick) {
                tr.onclick = function() {
                    //this.getElementsByClassName("point")[0].innerHTML = "";
                    var list = el.getElementsByClassName("tr");
                    for(var i = 0; i < list.length; i++) {
                        if(this == list[i]) {
                            obj.onclick(obj, i);
                            return;
                        }
                    }
                }
            }
            //image
            if(obj.image && obj.image.length > 0) {
                var imagediv = lazy.creat("div", "imagediv");
                lazy.for(obj.image, function(val) {
                    var img =  lazy.creat("a", "img");
                    var path = (getIP() + val).replace(/\\/g,"/");
                    if(val.indexOf("http://")>-1) path = val;
                    img.style.backgroundImage = "url("+path+")";
                    img.setAttribute("src", path);
                    img.onclick = function() {
                        var src = this.getAttribute("src");
                        lazy.isAppcan(function() {
                            lazy.showPhoto_appcan([src]);
                        }, function(type) {
                            lazy.showImage(type,src);
                        });
                        
                    }
                    imagediv.appendChild(img);
                });
                td.appendChild(imagediv);
            }
            //file
            if(obj.file && obj.file.length > 0) {
                var filediv = lazy.creat("div", "filediv");
                lazy.for(obj.file, function(val) {
                    var file =  lazy.creat("a", "file ub");
                    if(val.name){
                        var name = val.name;
                        var path = getIP() + val.url.replace(/\\/g,"/");
                    }else{
                        var path = (getIP() + val).replace(/\\/g,"/");
                        var name = path.substring(path.lastIndexOf("/")+1);
                    }
                    if(val.url.indexOf("http://")>-1) path = val.url;
                    file.innerHTML = '<div class="icon"></div><div class="ub-f1 fileh"><div class="h1 hh"><span>'+name+'</span></div></div>';
                    file.setAttribute("src", path);
                    file.onclick = function() {
                        var src = this.getAttribute("src");
                        if(lazy.getFlieType(src.substring(src.lastIndexOf(".")+1))=="img"){
                            lazy.isAppcan(function() {
                                lazy.showPhoto_appcan([src]);
                            }, function(type) {
                                lazy.showImage(type,src);
                            });
                        }else{
                            var dsrc = '/sdcard/'+src.replace(/.*\//g,"");
                            lazy.isAppcan(function() {
                                lazy.download_appcan(src,function(bfb){
                                    //lazy.alert2(bfb);
                                },function(){
                                    lazy.alert2('附件下载完成：');
                                    lazy.readerFile_appcan(dsrc);
                                },function(){
                                    
                                },dsrc);
                                
                            }, function(type) {
                                lazy.openFile(type,src);
                            });
                        }
                    }
                    filediv.appendChild(file);
                });
                td.appendChild(filediv);
            }
            table.appendChild(tr);
         }
         el.appendChild(table);
         
         data.add = add;
         //返回图片
         function getIcon(path, title, i, mark) {
             var img = new Image();
             img.src = path;
             var icon = lazy.creat("div","icon");
             if(mark){
                 var markdiv = lazy.creat("div","markdiv");
                 icon.appendChild(markdiv);
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
        //清除方法
        data.clean = function() {
            table.innerHTML = "";
        }
    },
    "edit" : function(parentEl, el, data){
        
    }
}