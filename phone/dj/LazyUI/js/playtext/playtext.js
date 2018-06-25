lazy.plugins.playtext = {
	"init" : function(el,data) {
	    if(data.mp3) {
	        lazy.playSound(data.mp3);
	    }
		var title = data.title?(data.title.replace(/(.)/g,'<span class="one">$1</span>')):"";
		var content = data.content?(data.content.replace(/(.)/g,'<span class="one">$1</span>')):"";
		var speed = data.speed?parseInt(data.speed):3000;
		if(title!="") {
		    var titlediv = lazy.creat("div","titlediv hh");
		    titlediv.innerHTML = "<span class=\"h1\">"+title+"</span>";
		    el.appendChild(titlediv);
		}
		var contentdiv = lazy.creat("div","contentdiv hh");
		contentdiv.innerHTML = content;
		el.appendChild(contentdiv);
		//
		var one = el.getElementsByClassName("one");
		var s = speed/(one.length);
		var k = 0;
		var t = setInterval(function() {
		    if(k < one.length) {
		        one[k].style.display = "inline";
		        k++;
		    }else {
		        clearInterval(t);
		        if(data.back)data.back();
		    }
		},s);
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
