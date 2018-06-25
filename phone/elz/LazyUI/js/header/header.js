lazy.plugins.header = {
	 "init" : function(el, data){
	    
	     var status_left = 1;
	     var status_center = 0;
	     var status_right = 0;
	     //var src = data.button[0].src;
	     if(data.on == "right"){
	         status_left = 0;
             status_center = 0;
            status_right = 1;
	     }
	     var leftarr = data.left?data.left:[];
	     var rightarr = data.right?data.right:[];
         var tr = lazy.creat("div","tr ub");
         tr.style.backgroundColor=data.backgroundColor;
         tr.style.backgroundSize="100%";
         tr.style.backgroundImage='url('+(data.backgroundImage)+')';
        
         var trzw = lazy.creat("div","trzw");
         //左
         var td_left = lazy.creat("div","td ub");
         addtd("left", td_left, leftarr, true);
         //中
         var td_center = lazy.creat("div","title ub-f1");
         
         
         if(data.button.length == 1){
             td_center.innerHTML = '<div class="title1"><span>'+(data.button[0].content?data.button[0].content:"")+'</span></div>';
             
         }
         else if(data.button.length == 2){
             var td_middle = lazy.creat("div","middle ub");
             if(status_left==0){
                 var left = lazy.creat("div","common ub-f1");
             left.innerHTML = '<span>'+data.button[0].content+'</span>';
             var right = lazy.creat("div","common choosebgc ub-f1");
             right.innerHTML = '<span>'+data.button[1].content+'</span>';
             }else{
                var left = lazy.creat("div","common choosebgc ub-f1");
             left.innerHTML = '<span>'+data.button[0].content+'</span>';
             var right = lazy.creat("div","common ub-f1");
             right.innerHTML = '<span>'+data.button[1].content+'</span>'; 
             }
             
             td_middle.appendChild(left);
             td_middle.appendChild(right);
             td_center.appendChild(td_middle);
             left.onclick = function(){
                 
                 if(!status_left){
                     status_left = 1;
                     status_right = 0;
                     left.setAttribute("class", "common choosebgc ub-f1"); 
                     right.setAttribute("class", "common ub-f1"); 
                     data.button[0].onclick();
                 }
                 
             }
             right.onclick = function(){
                 if(!status_right){
                     status_right = 1;
                     status_left = 0;
                     left.setAttribute("class", "common ub-f1"); 
                     right.setAttribute("class", "common choosebgc ub-f1"); 
                     data.button[1].onclick();
                 }
                 
             } 
         }
        
         //右
         var td_right = lazy.creat("div","td ub");
         addtd("right", td_right, rightarr);
         //添加
         function addtd(name, tdel, arr, bol) {
             var obj = {"td0":"","td1":""};
             for(var i = 0; i < 2; i++) {
                  obj["td"+i] = lazy.creat("a","td1",{"index":i});
                  if(arr[i]) {
                     
                      if(isimg(arr[i].content)) {
                           obj["td"+i].className = "td1";
                          obj["td"+i].style.backgroundImage = "url("+arr[i].content+")";
                      }else {
                           obj["td"+i].className = "td1 tdb";
                          obj["td"+i].innerHTML = '<span>'+arr[i].content+'</span>';
                      }
                      
                      obj["td"+i].onclick = function() {
                          var n = parseInt(this.getAttribute("index"));
                          arr[n].onclick(name, n, this);
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
        
         tr.appendChild(td_left);
         tr.appendChild(td_center);
         tr.appendChild(td_right);
       
         el.appendChild(tr);
         el.appendChild(trzw);
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
         
        
        
    },
    "edit" : function(parentEl, el, data){
       
    }
}