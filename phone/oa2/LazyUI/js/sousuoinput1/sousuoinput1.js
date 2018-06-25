lazy.plugins.sousuoinput1 = {
	"init" : function(el,data) {
	     var tr = lazy.creat("div","tr ub");
	     var left = lazy.creat("a","leftbtn");
	     left.onclick = function() {
	         lazy.goBack();
	     }
	     var inputdiv = lazy.creat("div","inputdiv ub-f1");
		 var input = lazy.creat("input","input",{"placeholder":"搜索","type":"search"});
		 inputdiv.appendChild(input);
         var val = "搜索";
		 input.onkeyup = function() {
		     if(val != this.value) {
		         val = this.value;
		         data.select(val);
		     }
		 }
		 input.onsearch=function(){
		     if(val != this.value) {
                 val = this.value;
                 data.select(val);
             }
		 };
		 tr.appendChild(left);
		 tr.appendChild(inputdiv);
		 el.appendChild(tr);
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
