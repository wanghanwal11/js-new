lazy.plugins.pinglun = {
    "init" : function(el,data) {
        var table = lazy.creat("div", "table pinglunBox");
        var title = lazy.creat("div","allpinglun");
        title.innerHTML+='<span class="titleIcon"></span><span class="titleP">'+data.title+'</span>'
        
        var send = lazy.creat("div", "send");
        var ul = lazy.creat("div", "ul");
        
        send.innerHTML='<input type="text" placeholder="评论" class="input1" /><input type="button" value="发送" class="input2">';
        table.appendChild(title);
        table.appendChild(send);
        table.appendChild(ul);
        if(data.onclick){
            send.getElementsByClassName('input2')[0].onclick = function(){
                lazy.setParameter('content',send.getElementsByClassName('input1')[0].value);
                data.onclick(data);
                send.getElementsByClassName('input1')[0].value='';
            }
        }
        
        var result = data.result?data.result:"dd";
        var arr = data.table?data.table:[];
        for(var i = 0; i < arr.length; i++) {
            one(arr[i]);
        }
        el.appendChild(table);
        function one(obj) {
            var li = lazy.creat("div", "li");
            var touxiang = lazy.creat("div", "touxiang");
            var mingzi = lazy.creat("div", "mingzi");
            if(obj.name==''){
                touxiang.style.display='none';
                li.style.marginTop=0;
                ul.style.marginBottom='0.3rem';
                mingzi.style.lineHeight='1.5rem';
                mingzi.style.paddingLeft='1.3rem';
            }
            var path = obj.icon?obj.icon:"";
            if(path.indexOf("http://")>-1) path = path;
            else path = getIP()+path;
            var icon = getIcon(path, obj.name||'', i);
            touxiang.appendChild(icon);
            var _html ='';
            _html+='<p class="li_p1">'+obj.name+'</p><p class="li_p2">'+obj.date+'</p><p class="li_p3">'+obj.content+'</p>';
            mingzi.innerHTML=_html;
            li.appendChild(touxiang);
            li.appendChild(mingzi);
            ul.appendChild(li);
        }
        
        data.add = one;
        //返回图片
         function getIcon(path, title, i) {
             if(title==''){
                 ul.style.textAlign = 'center';
                 var icon = lazy.creat("div","icon");
                 return icon;
             }
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
                 iconimg.style.backgroundSize='cover';
                 icon.appendChild(iconimg);
             }
             return icon;
         }
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
