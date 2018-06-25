lazy.plugins.headertoolbar = {
	 "init" : function(el, data){
         var zw = lazy.creat("div","headertoolbar_zw");
	     var leftarr = data.left?data.left:[];
	     var rightarr = data.right?data.right:[];
         var tr = lazy.creat("div","tr ub");
         document.body.appendChild(zw);
         if(data.backgroundColor) {
             tr.style.backgroundColor = data.backgroundColor;
         }
         if(data.color) {
             tr.style.color = data.color;
         }
         if(data.border) {
             tr.style.border = data.border;
         }
         //左
         var td_left = lazy.creat("div","td ub");
         addtd("left", td_left, leftarr, true);
         //
         var td_center = lazy.creat("div","ub-f1 ctd slh");
         td_center.innerHTML = '<span>'+(data.title?data.title:"")+'</span>';
         //右
         var td_right = lazy.creat("div","td ub");
         addtd("right", td_right, rightarr);
         //添加
         function addtd(name, tdel, arr, bol) {
             var obj = {"td0":"","td1":""};
             for(var i = 0; i < 2; i++) {
                  obj["td"+i] = lazy.creat("a","td1",{"index":i,"length":arr.length});
                  if(arr[i]) {
                      obj["td"+i].className = "td1 tdb";
                      if(isimg(arr[i])) {
                          obj["td"+i].style.backgroundImage = "url("+arr[i]+")";
                      }else {
                          obj["td"+i].innerHTML = '<span>'+arr[i]+'</span>';
                      }
                      if(data.select) {
                          obj["td"+i].onclick = function() {
                              var n = parseInt(this.getAttribute("index"));
                              var length = parseInt(this.getAttribute("length"));
                              data.select(name, n,length);
                          }
                      }
                  }
             }
             if(bol) {
                 tdel.appendChild(obj["td0"]);
                 tdel.appendChild(obj["td1"]);
             }else {
                 tdel.appendChild(obj["td1"]);
                 tdel.appendChild(obj["td0"]);
             }
             
         }
         function isimg(url) {
             if(url.match(/png|jpg|gif/)) {
                 return true
             }else {
                 return false;
             }
         }  
         //
         tr.appendChild(td_left);
         tr.appendChild(td_center);
         tr.appendChild(td_right);
         el.appendChild(tr);
         //显示和关闭按钮
         data.show = function(fx, n) {
             var _td = td_right;
             if(fx=="left") {
                 _td = td_left;
             }
             if(_td.getElementsByClassName("td1")) {
                 var list = _td.getElementsByClassName("td1");
                 for(var i = 0; i < list.length; i++) {
                    var index = parseInt(list[i].getAttribute("index"));
                    if(parseInt(n) == index) {
                        _td.getElementsByClassName("td1")[i].style.display = "block";
                        return;
                    }
                 }
             }
         }
         data.hide = function(fx, n) {
             var _td = td_right;
             if(fx=="left") {
                 _td = td_left;
             }
             if(_td.getElementsByClassName("td1")) {
                 var list = _td.getElementsByClassName("td1");
                 for(var i = 0; i < list.length; i++) {
                    var index = parseInt(list[i].getAttribute("index"));
                    if(parseInt(n) == index) {
                        _td.getElementsByClassName("td1")[i].style.display = "none";
                        return;
                    }
                 }
             }
         }
         data.setTitle = function(title) {
             td_center.innerHTML = '<span>'+title+'</span>';
         }
    },
    "edit" : function(parentEl, el, data){
       
    }
}