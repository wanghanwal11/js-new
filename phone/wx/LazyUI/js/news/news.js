lazy.plugins.news = {
	"init" : function(el,data) {
		var _html = '';
		_html += '<div class="title"><span>' + (data.title ? data.title : "") + '</span></div>';
		_html += '<div class="title2">';
		if(data.time){
			_html+='<div class="time"><span>'+(data.time?data.time:"")+'<span></div>';
		}
			_html += '<div class="role"><span>' + (data.role ? data.role : "") + '</span></div><div class="role"><span class="hh">' + (data.username ? data.username : "") + '</span></div>';
		_html += '</div>';
		_html += '<div class="content hh">'+data.content+'</div>';
		_html = _html.replace(/null/g,"");
		el.innerHTML = _html;
	},
	"edit" : function(parentElement,el,data) {
	}
}
