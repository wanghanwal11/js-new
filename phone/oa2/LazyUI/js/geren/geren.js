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
             returnPath = [path]
             return icon;
         }
         if(data.update) {
             icon.onclick = function(){
                 lazy.startPhoto(config.docUpoad, function(obj) {
                     var tmp = {
                         "id":obj.rows[0].id,
                         "path":obj.rows[0].path,
                         "name":obj.rows[0].docname
                     }
                     returnPath = [tmp.path];
                     var _src = obj.rows[0].path;
                     if(_src.indexOf("http://")==-1){
                         _src = getIP()+obj.rows[0].path.replace(/\\/g,"/");
                     }
                     changeImg(_src)
                },true);
             }
         }
         data.returnPath = function(){
             return returnPath;
         }
         function changeImg(src){
             el.getElementsByClassName("title")[0].innerHTML = "";
             el.getElementsByClassName("icon")[0].innerHTML = "";
             el.getElementsByClassName("icon")[0].style.backgroundImage = "url("+src+")";
         }
//         data.changeImg = function(src){
//         }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
