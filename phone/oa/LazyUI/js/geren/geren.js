lazy.plugins.geren = {
	"init" : function(el,data) {
	    //140*140
        var iconhang = lazy.creat("div","iconhang");
        var icon = getIcon(data.icon, data.name);
        var title = lazy.creat("div","title");
        title.innerHTML = '<span>'+data.name+'</span>';
        iconhang.appendChild(icon);
        el.appendChild(iconhang);
        el.appendChild(title);
        var returnPath = [];
        function getIcon(path, title) {
             var img = new Image();
             img.src = path;
             var icon = lazy.creat("div","icon bcolor4");
             img.onerror = function() {
                 icon.innerHTML = '<span>'+title.substring((title.length>2?1:0),3)+'</span>';
             }
             img.onload = function() {
                 icon.style.backgroundImage = "url("+path+")";
             }
             if(data.onclick){
                 icon.onclick = function(){data.onclick()}
             } 
             return icon;
         }
         if(data.update) {
             icon.onclick = function(){
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
                        lazy.upload_appcan('filename', src, config.docUpoad, 3, function() {

                        }, function(obj) {
                             loading.close();
                             var obj = JSON.parse(obj);
                             var tmp = {
                                 "id":obj.rows[0].id,
                                 "path":obj.rows[0].path,
                                 "name":obj.rows[0].docname
                             }
                             returnPath = [tmp.path]
                             data.update(tmp);
                        }, function() {
                            loading.close();
                            lazy.alert2("上传失败");
                        });
                    }
                    //
                },function() {
                    lazy.startPhoto(config.docUpoad, function() {

                    }, function(obj,src) {
                         var tmp = {
                             "id":obj.rows[0].id,
                             "path":obj.rows[0].path,
                             "name":obj.rows[0].docname
                         }
                         returnPath = [tmp.path];
                         data.update(tmp);
                    }, function(e) {
                        lazy.alert2(e);
                    });
                });
             }
         }
         data.returnPath = function(){
             return returnPath;
         }
         data.changeImg = function(src){
             el.getElementsByClassName("icon")[0].style.backgroundImage = "url("+src+")";
         }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
