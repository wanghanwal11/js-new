lazy.plugins.bannervideo = {
	"init" : function(el,data) {
	    var video = data.video?data.video:"";
	    el.style.backgroundImage = "url("+data.src+")";
		var btndiv = lazy.creat("div","btndiv");
		el.appendChild(btndiv);
		el.onclick = function() {
            lazy.playVideo(video);
		    if(video!="") {
		        lazy.playVideo(video);
		    }
		}
		function setvideo(obj) {
		    el.style.backgroundImage = "url("+obj.src+")";
		    video = obj.video;
		}
		data.setvideo = setvideo;
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
