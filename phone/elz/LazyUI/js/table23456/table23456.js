lazy.plugins.table23456 = {
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
            html+='<a class="icon" index="0"><span style="background:url('+arr[0].icon+') no-repeat;background-size:100% 100%;"></span><span class="txt">'+arr[0].label+'</span></a>';
            html2+='<a index="1"><span style="background:url('+arr[1].icon+') no-repeat;background-size:100% 100%;"></span><span class="txt">'+arr[1].label+'</span></a>'
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
        }else if(len == 3) {
            var html="";
            var html2="";
            var tr = lazy.creat("div","tr ub table3");
            var left = lazy.creat("div","left");
            var right = lazy.creat("div","right");
            html+='<a index="0"><span class="icon"  style="background:url('+arr[0].icon+') no-repeat;background-size:100% 100%;"></span><span class="txt">'+arr[0].label+'</span></a>';
            html2+='<div class="top"><a index="1"><span style="background:url('+arr[1].icon+') no-repeat;background-size:100% 100%;"></span>'+arr[1].label+'</a></div><div><a index="2"><span style="background:url('+arr[2].icon+') no-repeat;background-size:100% 100%;"></span>'+arr[2].label+'</a></div>'
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
        }else{
            var col = len;
            var row =  parseInt((len-1)/col) + 1;//行数
            for(var i = 0; i < row; i++) {
                tr = lazy.creat("div","ub tr");
                for(var j = 0; j < col; j++) {
                    var n = j + i * col;
                    one(arr[n],tr);
                }
                table.appendChild(tr);
            }
            el.appendChild(table);
            function one(obj, tr) {
                var td;
                if(obj) {
                    if(obj.class) {
                       td = lazy.creat("a","td ub-f1 "+obj.class);
                    }else {
                       td = lazy.creat("a","td ub-f1"); 
                    }
                    var icon = lazy.creat("div","icon");
                    icon.style.backgroundColor = obj.color;
                    icon.style.backgroundImage = "url("+obj.icon+")";
                    var label = lazy.creat("div","label");
                    label.innerHTML = '<span>'+obj.label+'</span>';
                    td.appendChild(icon);
                    td.appendChild(label);
                    if(obj.onclick) {
                        td.onclick = function() {
                            obj.onclick(obj);
                        }
                    }
                }else {
                    td = lazy.creat("div","td ub-f1");
                }
                tr.appendChild(td);
            }
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
