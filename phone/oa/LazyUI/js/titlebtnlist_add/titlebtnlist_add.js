lazy.plugins.titlebtnlist_add = {
	"init" : function(el, data){
         
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
            var td = lazy.creat("div","td ub-f1");
            var _html = '';
            _html += '<div class="h1 slh ub-f1"><span>'+obj.h1+'</span></div>';
            _html += '<div class="h2 slh ub-f1"><span>'+(obj.h2?obj.h2:"")+'</span></div>';
            td.innerHTML = _html;
            tr.appendChild(icon);
            var td1;
            if(obj.add) {
                td1 = lazy.creat("div","td1");
                td1.innerHTML = '<span class="tj">添加</span>';
            }else {
                td1 = lazy.creat("div","td1");
                td1.innerHTML = '<span class="ytj">取消</span>';
            }
            if(obj.add) {
                td1.onclick = function() {
                   obj.add(obj);
                } 
            }else{
                td1.onclick = function() {
                    obj.remove(obj);
                }
            }
            tr.appendChild(td);
            tr.appendChild(td1);
            if(obj.onclick) {
                td.onclick = function() {
                   obj.onclick(obj);
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
                 icontitle1.innerHTML = '<span>'+title.substring(0,2)+'</span>';
                 icon.appendChild(icontitle1);
             }
             img.onload = function() {
                 var iconimg = lazy.creat("div","iconimg bcolor"+parseInt(i%7));
                 iconimg.style.backgroundImage = "url("+path+")";
                 icon.appendChild(iconimg);
             }
             return icon;
         }
    },
    "edit" : function(parentEl, el, data){
        
    }
}