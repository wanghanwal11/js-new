lazy.plugins.wenjian = {
	"init" : function(el,data) {
	    var table = lazy.create("div", "table");
	    lazy.for(data.table?data.table:[], function(val) {
	        one(val);
	    });
	    el.appendChild(table);
	    function one(obj) {
	        var tr = lazy.create("div", "tr box box_v");
	        var _html = '';
	        if(obj.src){
	            _html += ' <div class="icon"><div class="tt slh box_f1"><img class="img" src='+obj.src+' /><span>'+obj.name+'</span></div><span class="right"></span></div>';
	        }
	        if(obj.title){
                _html += ' <div class="icon"><span class="txt">'+obj.title+'&nbsp;&nbsp;</span><span>'+obj.name+'</span></div>';
            }
            //_html +='<a href="'+obj.fileurl+'" download="'+obj.name+'">下载图片</a>';
	        tr.innerHTML=_html;
	        table.appendChild(tr);
	        tr.onclick=function(){
	            //lazy.onDownload(obj.fileurl);
	            if(obj.onclick) obj.onclick(obj)
	        }
	        /*var tr = lazy.create("a", "tr box box_v");
	        tr.setAttribute("href",obj.fileurl)
	        tr.setAttribute("download",obj.name)
            var _html = '';
            if(obj.src){
                _html += ' <div class="icon"><div class="tt slh box_f1"><img class="img" src='+obj.src+' /><span>'+obj.name+'</span></div><span class="right"></span></div>';
            }
            if(obj.title){
                _html += ' <div class="icon"><span class="txt">'+obj.title+'&nbsp;&nbsp;</span><span>'+obj.name+'</span></div>';
            }
            //_html +='<a href="'+obj.fileurl+'" download="'+obj.name+'">下载图片</a>';
            tr.innerHTML=_html;
            table.appendChild(tr);
            tr.onclick=function(){
                if(obj.onclick) obj.onclick(obj)
                //lazy.onDownload(obj.fileurl);
            }*/
	    }
	    var title = lazy.create("div");
        el.insertBefore(title,table);
	    function addtitle(obj){
	        for(var i=0;i<obj.length;i++){
	            var t = lazy.create("div", "title");
                t.innerHTML="<span>"+obj[i].title+"</span>";
                title.appendChild(t);
	        }
	    }
	    data.addtitle=addtitle;
	    data.add = one;
	    data.clean = function() {
	        table.innerHTML = '';
	        title.innerHTML = '';
	    }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
