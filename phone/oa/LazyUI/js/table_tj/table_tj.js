lazy.plugins.table_tj = {
	"init" : function(el,data) {
        var table = lazy.creat("div", "table");
        //标题
        if(data.h) {
            var h = lazy.creat("div", "h");
            one(data.h, function(obj) {
                if(data.onchange)data.onchange(obj);
            });
            el.appendChild(h);
        }
        //
        var arr = data.table?data.table:[[]];
        for(var i = 0; i < arr.length; i++) {
            one(arr[i]);
        }
        el.appendChild(table);
        
        function one(arr, back) {
            var tr = lazy.creat("div", "tr ub");
            for(var i = 0; i < arr.length; i++) {
                var td = lazy.creat("div", "td slh ub-f1");
                td.innerHTML = '<span>'+arr[i]+'</span>';
                tr.appendChild(td);
                if(back&& i==0) {
                    var _arr = data.select?data.select:[];
                    var select = lazy.creat("select", "select");
                    var _html = '';
                    for(var j = 0; j < _arr.length; j++) {
                        _html += '<option value="'+_arr[j].value+'">'+_arr[j].html+'</option>';
                    }
                    select.innerHTML = _html;
                    var textspan = lazy.creat("span", "span");
                    textspan.innerHTML = _arr[0].html+'<span style="font-size: 0.5rem;">▼</span>';
                    td.innerHTML = "";
                    td.appendChild(textspan);
                    
                    //td.appendChild(select);
                    var listarr = [];
                    lazy.for(_arr, function(val) {
                        listarr.push({
                            "title" : val.html,
                            "value" : val.value,
                            "onclick" : function(obj) {
                                textspan.innerHTML = obj.title+'<span style="font-size: 0.5rem;">▼</span>';
                                back({
                                    html:obj.title,
                                    value:obj.value
                                });
                            }
                        })
                    });
                    td.onclick = function() {
                        lazy.alertlist(listarr);
                        /*
                        var alertlistmask = document.getElementsByClassName("alertlistmask")[0];
                        alertlistmask.style.position = "absolute";
                        var h = 3*_arr.length;
                        if(document.body.clientWidth > h* lazy.fontSize) {
                            alertlistmask.style.height = (document.body.clientWidth - 6*lazy.fontSize)  + "px";
                        }else {
                            alertlistmask.style.height = h + "rem";
                        }
                        */
                    }
                    //
                    select.onchange = function() {
                        var options = this.options[this.selectedIndex];
                        textspan.innerHTML = options.text+'<span style="font-size: 0.5rem;">▼</span>';
                        back({
                            html:options.text,
                            value:options.getAttribute("value")
                        });
                    }
                }
            }
            if(back) {
                h.appendChild(tr);
            }else {
                table.appendChild(tr);
            }
            
        }
        data.add = one;
        data.clean = function() {
            table.innerHTML = '';
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
