lazy.plugins.event_select = {
    
	 "init" : function(el, data){
	     var buttonarr = data.button?data.button:[[]];
	     var arrname = [];
         var _html = '';
         _html += '<div class="h1"><span>'+(data.title?data.title:"")+'</span></div>';
         _html += '<div class="content">';
         for(var i = 0; i < buttonarr.length; i++) {
             _html += '<div class="hang ub">';
             for(var j = 0; j < buttonarr[i].length; j++) {
                 if(buttonarr[i][j]!=""){
                    _html += '<div class="ub-f1 btn" i="'+i+'" j="'+j+'"><div class="ov">'+buttonarr[i][j]+'</div></div>'; 
                 }else {
                    _html += '<div class="ub-f1 btn2"><div class="ov"></div></div>'; 
                 }
             }
             _html += '</div>';
         }
         _html += '</div>';
         el.innerHTML = _html;
         var btnlist = el.getElementsByClassName("btn");
         for(var i = 0; i < btnlist.length; i++) {
             btnlist[i].onclick = function() {
                 var classname = this.className;
                 if(classname.indexOf("btnsel")==-1) {
                     this.className = "ub-f1 btn btnsel";
                 }else {
                     this.className = "ub-f1 btn";
                 }
                 
             }
         }
         //事件
         data.getData = function() {
             arrname = [];
             var btnsellist = el.getElementsByClassName("btnsel");
             for(var i = 0; i < btnsellist.length; i++) {
                 var _i = btnsellist[i].getAttribute("i")*1;
                 var j = btnsellist[i].getAttribute("j")*1;
                 arrname.push({"i" : _i, "j" : j});
             }
             return arrname;
         }
    },
    "edit" : function(parentEl, el, data){
        
    }
}