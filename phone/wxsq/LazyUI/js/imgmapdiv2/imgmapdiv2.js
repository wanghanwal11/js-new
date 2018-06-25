lazy.plugins.imgmapdiv2 = {
	"init" : function(el,data) {
	  var banner = lazy.create("div","banner2")
	  banner.style.backgroundImage = "url("+data.src+")";
	  el.appendChild(banner)
      var label = lazy.create("div","label");
      label.innerHTML = '<div class="text"><span>已结束</span></div>';
      if(data.label){
          el.appendChild(label)
      }
      
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
