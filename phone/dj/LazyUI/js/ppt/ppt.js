lazy.plugins.ppt = {
	"init" : function(el,data) {
	    var pages = data.pages;
	    var _html = '';
		_html += '<div class="maxdiv ub">';
		for(var i = 0; i < pages.length; i++) {
		    _html += '  <div class="maxdiv_li maxdiv_lid" index="'+i+'" style="background-image: url('+pages[i].src+');">';
		    if(pages[i].title) {
		       _html += '        <div class="maxdiv_title">'+pages[i].title+'</div>'; 
		    }else {
		       _html += '<div class="dian">';
		       for(var j = 0; j < pages.length; j++) {
		           if(j==i)
		           _html += '<span class="dian1">●</span>';
		           else
		           _html += '<span class="dian2">●</span>';
		       }
		       _html += '</div>'; 
		    }
		    _html += '  </div>';
		}
        _html += '</div>';
		el.innerHTML = _html;
		//点击事件
		var list = el.getElementsByClassName("maxdiv_li");
		for(var i = 0; i < list.length; i++) {
		    if(pages[i].onclick) {
		        list[i].onclick = function() {
                    var n = parseInt(this.getAttribute("index"));
                    pages[n].onclick();
                }
		    }
		    
		}
		//轮播
		if(pages.length>1) {
            var k = -1; 
            var t = null;
            lb();
            function lb() {
                if(t)clearInterval(t);
                t = setInterval(function() {
                    if(k<pages.length-1) {
                        el.getElementsByClassName("maxdiv_li")[0].className = "maxdiv_li maxdiv_lid";
                        k++;
                    }else {
                        el.getElementsByClassName("maxdiv_li")[0].className = "maxdiv_li";
                        k = 0;
                    }
                    el.getElementsByClassName("maxdiv_li")[0].style.marginLeft = -(k*100) + "%";
                    
                },2500);
            }
            //
            lazy.gesture({
                      "el":el,
                      "fx" : function(name) {
                          if(name == "right") {
                             if(k > 0) {
                                 k--;
                                 el.getElementsByClassName("maxdiv_li")[0].className = "maxdiv_li maxdiv_lid";
                                 el.getElementsByClassName("maxdiv_li")[0].style.marginLeft = -(k*100) + "%";
                                 lb()
                             }
                          }else if(name == "left") {
                              if(k<pages.length-1) {
                                  k++;
                                  el.getElementsByClassName("maxdiv_li")[0].className = "maxdiv_li maxdiv_lid";
                                  el.getElementsByClassName("maxdiv_li")[0].style.marginLeft = -(k*100) + "%";
                                  lb()
                              }
                          }
                      }
                   });
        }
		
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
