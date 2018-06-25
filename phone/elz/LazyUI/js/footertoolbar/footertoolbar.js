lazy.plugins.footertoolbar = {
    
	 "init" : function(el, data){
	     var n = data.n?data.n:0;//当前点击
         var arr = data.name?data.name:[];
         var iconarr = data.icon?data.icon:[];
         var pointarr = data.point?data.point:[];
         var _html = '';
         for(var i = 0; i < arr.length; i++) {
             var src = "";
             var srcname = "";
             if(iconarr[i]) {
                src = lazy.url+'LazyUI/js/footertoolbar/images/'+iconarr[i]+'.png';
                srcname = lazy.url+'LazyUI/js/footertoolbar/images/'+iconarr[i];
             }
             var pointname = "dian dianhide";
             var pointvalue = pointarr[i]?pointarr[i]:"";
             if(pointvalue!="") {
                 pointname = "dian";
                 pointvalue = pointValueFun(pointarr[i]);
            }
            if(i==n) {
                if(src!="") {
                    src = srcname+"1.png";
                }
                _html += '<div class="lie lieclick ub-f1" i="'+i+'" value="'+arr[i]+'">';
            }else {
                _html += '<div class="lie ub-f1" i="'+i+'" value="'+arr[i]+'">';
            }
             _html += '<div class="lieover"><div class="'+pointname+'"><span>'+pointvalue+'</span></div>';
             _html += '  <div class="icon" srcname="'+srcname+'" style="background-image:url('+src+')"></div>';
             _html += '  <div class="title"><span>'+arr[i]+'</span></div>';
             _html += '</div></div>';
         }
         el.innerHTML = _html;
         //处理事件
         if(data.select) {
             var lie = el.getElementsByClassName("lie");
             var icon = el.getElementsByClassName("icon");
             for(var i = 0; i < lie.length; i++) {
                 lie[i].onclick = function() {
                     var i = parseInt(this.getAttribute("i"));
                     if(i != n) {
                         var srcnameN = icon[n].getAttribute("srcname");
                         var srcnameI = icon[i].getAttribute("srcname");
                         lie[n].className = "lie ub-f1";
                         icon[n].style.backgroundImage = "url("+srcnameN+".png)";
                         
                         lie[i].className = "lie lieclick ub-f1";
                         icon[i].style.backgroundImage = "url("+srcnameI+"1.png)";
                         
                         var name = this.getAttribute("value");
                         data.select(name, i);
                         n = i;
                     }
                     
                 }
             }
         }
         //
         data.setPoint = function(i,n) {
             var dian = el.getElementsByClassName("dian")[i];
             if(n!=0){
                 dian.className = "dian";
                 dian.innerHTML = '<span>'+pointValueFun(n)+'</span>';
             }else{
                 dian.className="dian dianhide"
             }
         }
         //计算数据
         function pointValueFun(n) {
             var n = parseInt(n);
             var str = "";
             if(n>0) {
                 str = n;
             }else if(n<10 && n>0){
                 str = "9+"
             }
             return str;
         }
    },
    "edit" : function(parentEl, el, data){
        
    }
}