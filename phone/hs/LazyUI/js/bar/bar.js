lazy.plugins.bar = {
	"init" : function(el,data) {
		    if(data.title){
		        var title = lazy.create("div","title");
		        title.innerHTML = '<span>'+(data.title)+'</span>';
		        el.appendChild(title);
		    }
		    lazy.for(data.content,function(arr){
		        var content = lazy.create("div","content");
		        content.style.backgroundImage = "url("+arr.icon+")";
		        content.innerHTML='<span>'+arr.text+'</span>';
		        el.appendChild(content);
		        content.onclick = function(){
		            if(arr.onclick)
		            arr.onclick()
		        }
		    })
		
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
