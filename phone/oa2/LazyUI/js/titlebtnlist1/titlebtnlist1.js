lazy.plugins.titlebtnlist1 = {
	"init" : function(el, data){
         //"icon" : "","h1" : "", "h2" : "批","h3" : "","point" : 1
         var table = lazy.creat("div","table");
         var arr = data.table?data.table:[];
         var bi = -1;//颜色下标
         for(var i = 0; i < arr.length; i++) {
             add(arr[i]); 
         }
         function add(obj) {
            bi++;
            var tr = lazy.creat("a","tr ub");
            var path = obj.icon?obj.icon.replace(/\\/g,"/"):"";
            if(obj.icon){
                var icon = getIcon(path, obj.h1, bi,obj.num);
                tr.appendChild(icon);
            }
            var readDiv = lazy.creat("div","read");
            if(obj.isRead&&obj.isRead==1){
                readDiv.innerHTML = '<div class="readdiv"></div>';
            }
            tr.appendChild(readDiv);
            var td = lazy.creat("a","td ub-f1");
            var _html = '';
            // if(obj.isRead==false) _html += '<div class="read ub-f1"></div>'
            _html += '<div class="td1 ub">';
            _html += '  <div class="h1 slh ub-f1"><span>'+obj.h1+'</span></div><div class="h3 ub-f1 "><span>'+(obj.h3?obj.h3:"")+'</span>';
            _html += '</div>';
            _html += '</div>';
            _html += '<div class="td2 ub">';
            if(obj.point && obj.point>0) {
                _html += '  <div class="h2 slh ub-f1"><span>'+(obj.h2?obj.h2:"")+'</span></div><div class="point"><div class="pointdiv"><span>'+obj.point+'</span></div></div>';
            }else {
                _html += '  <div class="h2 slh ub-f1"><span>'+(obj.h2?obj.h2:"")+'</span></div><div class="point"></div>';  
            }
            _html += '</div>';
            td.innerHTML = _html;
            
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
         function getIcon(path, title, i,num) {
             var img = new Image();
             if(path.indexOf("http://")>-1) img.src = path;
             else {
                 img.src = getIP()+path;
                 path = getIP()+path
             }
             var icon = lazy.creat("div","icon");
             if(num){
                 var numDiv = lazy.creat("div","num");
                 numDiv.innerHTML = '<div class="jiao"></div><span>'+num+'</span>';
                 icon.appendChild(numDiv)
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