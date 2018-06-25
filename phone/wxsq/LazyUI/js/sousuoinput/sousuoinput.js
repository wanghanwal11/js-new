lazy.plugins.sousuoinput = {
	"init" : function(el,data) {
	     var tr = lazy.create("div","tr box");
	     var inputdiv = lazy.create("div","inputdiv box_f1");
		 var input = lazy.create("input","input",{"placeholder":"请输入你要查询的关键字","type":"search"});
		 inputdiv.appendChild(input);
		 var sou = lazy.create("div","sou box");
		 sou.innerHTML="搜索";
         var val = "搜索";
		if(lazy.browserType != "ios" && lazy.browserType != "vitoios" ) {
            input.onkeyup = function() {
                 if(val != this.value) {
                     val = this.value;
                     data.select(val);
                 }
             }
        }
       
		 input.onsearch=function(){
		     if(val != this.value) {
                 val = this.value;
                 data.select(val);
             }
		 };
		 /*
		 input.onfocus=function(){
		     if(data.onfocus){
		         data.onfocus();
		     }
		 }*/
		 input.onclick=function(){
             if(data.onfocus){
                 data.onfocus();
             }
         }
         /*
         input.ontouchstart=function(){
             if(data.onfocus){
                 data.onfocus();
             }
         }*/
		 sou.onclick=function(){
              if(val != input.value) {
                 val = input.value;
                 data.select(val);
             }
         }
		 tr.appendChild(inputdiv);
		 tr.appendChild(sou);
		 el.appendChild(tr);
		 if(data.foc){
		     setTimeout(function(){input.focus();},10) 
		 }
		 if(data.re){
		     input.value=data.re;
		 }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
