lazy.plugins.judge = {
    "init" : function(el,data) {
       
        var table = lazy.create("div", "table box box_v");
        
        var icon = lazy.create("div","icon");
        icon.style.backgroundImage = 'url('+data.icon+')'
        var name = lazy.create("div","name");
        name.innerHTML = '<span>'+data.name+'</span>'
        
        var judge = lazy.create("div",'judge box');
        var _html = '';
        _html += '<div>服务质量</div>';
        _html += '<ul>';
        _html += '  <li></li>';
        _html += '  <li></li>';
        _html += '  <li></li>';
        _html += '  <li></li>';
        _html += '  <li></li>';
        _html += '</ul>';
        _html += '<div class="zl"></div>';
        judge.innerHTML = _html;
        
        table.appendChild(icon)
        table.appendChild(name)
        table.appendChild(judge)
       
        var pjcontent = lazy.create("div","pjcontent");
        var pjtextarea = lazy.create("textarea","pjtextarea")
        pjtextarea.setAttribute("placeholder","这次的服务还满意吗？请留下您的宝贵意见吧")
        pjcontent.appendChild(pjtextarea)
        
        var takepicture = lazy.create("div","takepicture")
        takepicture.innerHTML = '<div class="photobutton"></div>';
        pjcontent.appendChild(takepicture)
        
        
        table.appendChild(pjcontent)
        el.appendChild(table);
        
         var lis = el.getElementsByTagName("li");
         var funny = function(i){
             var div = el.getElementsByClassName("zl")[0];
            lis[i].onclick = function(){
                //alert("第" + (i+1) + "个");
                //alert(i)
                for(var j=0 ; j<=i ; j++){
                    lis[j].className = 'light';
                }
                for(var k=(i+1) ; k<=4 ; k++){
                    lis[k].className = '';
                }
                switch(i){
                    case 0:
                        div.innerHTML='非常差';
                        break;
                    case 1:
                        div.innerHTML='差';
                        break;
                    case 2:
                        div.innerHTML='一般';
                        break;
                    case 3:
                        div.innerHTML='好';
                        break;
                    case 4:
                        div.innerHTML='非常好';
                        break;
                }
            }
            
            
         }
         for(var i=0;i<lis.length;i++){
            funny(i);
         }
        //data.add = one;
        
        
       
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
