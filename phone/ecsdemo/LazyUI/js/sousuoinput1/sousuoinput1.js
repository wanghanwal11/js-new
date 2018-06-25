lazy.plugins.sousuoinput1 = {
	"init" : function(el,data) {
	     var tr = lazy.creat("div","tr ub");
	     var inputdiv = lazy.creat("div","inputdiv ub-f1");
		 var input = lazy.creat("input","input",{"placeholder":"搜索","type":"search"});
		 inputdiv.appendChild(input);
         var val = "搜索";
         if(input.onsearch) {
             input.onsearch=function(){
                 if(val != this.value) {
                     val = this.value;
                     data.select(val);
                 }
            };
         }else {
             input.onkeyup = function() {
                 if(val != this.value) {
                     val = this.value;
                     data.select(val);
                 }
             }
         }
		 tr.appendChild(inputdiv);
		 el.appendChild(tr);
		 setTimeout(function(){input.focus();},10)
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
