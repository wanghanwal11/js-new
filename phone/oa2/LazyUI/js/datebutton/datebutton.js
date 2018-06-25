lazy.plugins.datebutton = {
	"init" : function(el,data) {
        var yuearr = ["", "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
        var tr = lazy.creat("div", "tr ub");
        var title = lazy.creat("div", "ub-f1 slh title");
        title.innerHTML = '<span>'+yuearr[(new Date().getMonth() + 1)]+'　'+lazy.format(new Date().getTime(), 'yyyy-MM-dd')+'</span>';
        tr.appendChild(title);
        /*
        var btn = lazy.creat("div", "btn");
        btn.innerHTML = '<span>选择月份</span>';
        tr.appendChild(btn);
        */
        if(data.url) {
            var qt = lazy.creat("div", "qt");
            qt.innerHTML = '<span>他人</span>';
            tr.appendChild(qt);
            var iframe = document.body.getElementsByClassName("qtIframe")[0];
            if(!iframe) {
                iframe = lazy.creat("iframe","qtIframe");
                document.body.appendChild(iframe);
            }
            iframe.src = data.url;
            window.setDatebutton = function(obj) {
                iframe.style.left = "100%";
                iframe.style.webkitAnimation = "qtIframe_an1 0.5s";
                
            }
            qt.onclick = function() {
                iframe.style.left = "0";
                iframe.style.webkitAnimation = "qtIframe_an 0.5s";
            }
        }
        el.appendChild(tr);
        var input = lazy.creat("input", "input");
        input.type = "date";
        input.onclick = function() {
            this.style.opacity = 1;
        }
        input.onblur = function() {
            this.style.opacity = 0;
        }
        input.onchange = function() {
            this.style.opacity = 0;
            if(this.value != "") {
                title.innerHTML = '<span>'+yuearr[(new Date(this.value.replace(/-/g, "/")).getMonth() + 1)]+'　'+this.value+'</span>';
                data.onclick(this.value);
            }
        }
        tr.appendChild(input);
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
