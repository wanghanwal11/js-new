lazy.plugins.newsgy = {
	"init" : function(el,data) {
		var _html = '';
		_html += '<div class="title"><span>' + (data.title ? data.title : "") + '</span></div>';
		if(data.title2){
		    _html += '<div class="title3"><span>' + (data.title2 ? data.title2 : "") + '</span></div>';
		}
		_html += '<div class="title2">';
		if(data.time){
			_html+='<div class="time"><span>'+(data.time?data.time:"")+'<span></div>';
		}
			_html += '<div class="role"><span>' + (data.role ? data.role : "") + '</span></div><div class="role"><span>' + (data.username ? data.username : "") + '</span></div>';
		_html += '</div>';
		if(data.pic){
		    _html += '<div class="pic"><img src='+data.pic+' /></div>';
		}
		var str = data.content?data.content:"";
		//str = str.replace(/\<(.*?)\s.*?\>/g,'<$1>');
		str = str.replace(/\<(.*?)\s.*?\>/g, function(str,str2) {
		    if(str.indexOf("<img")==-1) {
		        return '<'+str2+'>';
		    }else {
		        str = str.replace(/\\/g,"/").replace(/\=\".*?\.\.(.*?)\"/,'="'+getIP()+'$1"');
		        return str;
		    }
		});
		_html += '<div class="content hh">'+str+'</div>';
		el.innerHTML = _html;
	},
	"edit" : function(parentElement,el,data) {
	}
}
