lazy.plugins.list123 = {
	"init" : function(el,data) {
	    //标题
	    if(data.title){
	         var title = lazy.creat("div","title ub");
            var _html = '<div class="title_icon" style="background-image:url('+data.icon+')"></div><div class="title_title"><span>'+data.title+'</span></div>';
            _html += '<div class="ub-f1"></div>';
            title.innerHTML = _html;
            el.appendChild(title);
	    }
	    //
        var arr = data.table;//长度 2,3,4,5,6
        var len = arr.length;
        var table = lazy.creat("div","table");
        el.appendChild(table);
         if(len == 2) {
            var html="";
            var html2="";
            var tr = lazy.creat("div","tr ub table2");
            var left = lazy.creat("div","left");
            var right = lazy.creat("div","right");
            html+='<a class="icon ub" index="0"><span class="bg" style="background:url('+arr[0].icon+') no-repeat;background-size:100% 100%;"></span><div class="txt slh"><span>'+arr[0].label+'</span><span class="slh span1">'+arr[0].txt+'</span></div></a>';
            html2+='<a class="ub" index="1"><span class="bg" style="background:url('+arr[1].icon+') no-repeat;background-size:100% 100%;"></span><div class="txt slh"><span>'+arr[1].label+'</span><span class="slh span1">'+arr[1].txt+'</span></div></a>'
            left.innerHTML=html;
            right.innerHTML=html2;
            tr.appendChild(left);
            tr.appendChild(right);
            table.appendChild(tr);
            var a=tr.getElementsByTagName("a");
            for(var i=0;i<a.length;i++){
                a[i].onclick=function(){
                    var num=this.getAttribute("index")
                    arr[num].onclick();
                }
            }
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
