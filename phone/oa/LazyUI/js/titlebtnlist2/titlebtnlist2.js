lazy.plugins.titlebtnlist2 = {
	"init" : function(el, data){
         //"icon" : "","h1" : "", "h2" : "批","h3" : "","point" : 1
         el.style.width = document.body.clientWidth+"px";
         var table = lazy.creat("div","table");
         var arr = data.table?data.table:[];
         var bi = -1;//颜色下标
         for(var i = 0; i < arr.length; i++) {
             add(arr[i]); 
         }
         function add(obj) {
            bi++;
            var tr = lazy.creat("a","tr ub");
            var icon = getIcon(obj.icon, obj.h1, bi);
            var td = lazy.creat("a","td ub-f1");
            var _html = '';
            _html += '<div class="td1 ub">';
            _html += '  <div class="h1 slh ub-f1"><span>'+obj.h1+'</span></div><div class="h3"><span>'+(obj.h3?obj.h3:"")+'</span></div>';
            _html += '</div>';
            _html += '<div class="td2 ub">';
            if(obj.point && obj.point>0) {
                _html += '  <div class="h2 slh ub-f1"><span>'+(obj.h2?obj.h2:"")+'</span></div><div class="point"><div class="pointdiv"><span>'+obj.point+'</span></div></div>';
            }else {
                _html += '  <div class="h2 slh ub-f1"><span>'+(obj.h2?obj.h2:"")+'</span></div><div class="point"></div>';  
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
            table.appendChild(tr);
         }
         el.appendChild(table);
         
         data.add = add;
         //返回图片
         function getIcon(path, title, i) {
             var img = new Image();
             img.src = path;
             var icon = lazy.creat("div","icon");
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
         //添加小点
         data.setPoint = function(i,num) {
             var tr = el.getElementsByClassName("tr")[i];
             if(tr) {
                 if(!num || num==0) {
                     tr.getElementsByClassName("point")[0].innerHTML = "";
                  }else {
                     tr.getElementsByClassName("point")[0].innerHTML = '<div class="pointdiv"><span>'+num+'</span></div>';                   
                 }
             }
        }
        //清除方法
        data.clean = function() {
            table.innerHTML = "";
        }
    },
    "edit" : function(parentEl, el, data){
        
    }
}