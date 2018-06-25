lazy.plugins.tablen= {
	"init" : function(el,data) {
        var i = 0;
	    lazy.for(data.arr, function(obj) {
            one(obj);
        });
        function one(obj) {
            var table = el.getElementsByClassName(obj.smalltypeid)[0], 
                title = (table&&table.getElementsByClassName('title')[0]), 
                tablediv = (table&&table.getElementsByClassName('tablediv')[0]), 
                icon;
            if(!table) {
                table = lazy.creat('div','table '+obj.smalltypeid,{i:i});
                //var label = lazy.creat('div','label ub')
                title = lazy.creat('div','title ub');
                var _html = '<span>'+obj.smalltypename+'</span>';
                _html += '<span class="xian">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;——————————————————————————————————————————</span>';
                title.innerHTML = _html;
                
                //var xian = lazy.creat('div','xian ub-f1')
                tablediv = lazy.creat('div','tablediv ub');
                //label.appendChild(title);
                // label.appendChild(xian);
                table.appendChild(title);
                table.appendChild(tablediv);
                el.appendChild(table);
                i++;
                console.log(i);
            }
            icon  = lazy.creat('div','icon ub ub-ver');
            //var path = "LazyUI/images/shenpi/"+obj.tubiao+".png";
            //var path = "LazyUI/images/shenpi/mdicon-aaa.png";
            var path = "../common/moduleIcon/mdicon-"+obj.tubiao+".png";
            var _i = table.getAttribute('i')*1;
            var _j = tablediv.getElementsByClassName('icon').length;
            var n = parseInt((_i+_j)%6);
            var color = data.randomColor[n];
            //icon.innerHTML = '<i style="background-image:url('+path+'); background-color:'+color+';"></i><span>'+obj.servicename+'</span>';
            icon.innerHTML = '<i style="background-image:url('+path+');"></i><span>'+obj.servicename+'</span>';
            tablediv.appendChild(icon);
            icon.onclick = function() {
                data.onclick({
                    id: obj.id,
                    label: obj.servicename,
                    content: obj.zbcl
                });
            }
            console.log(obj);
        }
	    
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
