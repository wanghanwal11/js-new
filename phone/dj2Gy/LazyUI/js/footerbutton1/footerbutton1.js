lazy.plugins.footerbutton1 = {
	"init" : function(el,data) {
	    var footerbutton = lazy.creat("div", "footerbutton1");
	     var btn =  lazy.creat("div", "btn ub");
	     btn.innerHTML = '<div class="left ub-f1" id="tyspan"><span>同意</span></div><div class="right ub-f1" id="jjspan"><span>拒绝</span></div>';
           
	     footerbutton.appendChild(btn);
	    document.body.appendChild(footerbutton);
	    $('#tyspan').on('click',function(){
	    	if(!$(this).hasClass('clk'))
	        data.left()
        })
        $('#jjspan').on('click',function(){
            if(!$(this).hasClass('clk'))
            data.right()
        })
	    
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
