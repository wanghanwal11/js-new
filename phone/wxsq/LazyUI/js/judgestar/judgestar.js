lazy.plugins.judgestar = {
    "init" : function(el,data) {
        var table = lazy.create("div", "table");
        var level = 5;
        el.appendChild(table);
        
        var judge = lazy.create("div",'judge box');
        var _html = '';
        _html += '<div class="title">'+data.title+'</div>';
        _html += '<ul>';
        _html += '  <li class="star"></li>';
        _html += '  <li class="star"></li>';
        _html += '  <li class="star"></li>';
        _html += '  <li class="star"></li>';
        _html += '  <li class="star"></li>';
        _html += '</ul>';
        _html += '<div class="zl">'+data.content[4]+'</div>';
        judge.innerHTML = _html;
        table.appendChild(judge)
         
        var lis = el.getElementsByTagName("li");
        for(var i=0;i<lis.length;i++){
             
           lis[i].style.backgroundImage = 'url('+data.yes+')';
         }
        var funny = function(i){
            var div = el.getElementsByClassName("zl")[0];
            
            lis[i].onclick = function(){
                level = i+1;
                for(var j=0 ; j<=i ; j++){
                    lis[j].style.backgroundImage = 'url('+data.yes+')';
                }
                for(var k=(i+1) ; k<=4 ; k++){
                    //lis[k].className = 'no';
                    lis[k].style.backgroundImage = 'url('+data.no+')';
                }
                div.innerHTML=data.content[i];
                
            }
            
         }
         for(var i=0;i<lis.length;i++){
             //alert(i)
            funny(i);
         }
         data.getLevel = function(){
             return level;
         }
         data.changeLevel = function(val){
             var li = el.getElementsByTagName("li");
             for(var j=0 ; j<val ; j++){
                    lis[j].style.backgroundImage = 'url('+data.yes+')';
                }
                for(var k=val ; k<=4 ; k++){
                    //lis[k].className = 'no';
                    lis[k].style.backgroundImage = 'url('+data.no+')';
                }
                var div = el.getElementsByClassName("zl")[0];
                div.innerHTML=data.content[(val-1)];
                level = val;
         }
        
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
