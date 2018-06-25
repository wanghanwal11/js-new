lazy.plugins.event_form = {
	"init" : function(el,data) {
		var arr = data.table?data.table:[];
		for(var i = 0; i < arr.length; i++) {
		    add(arr[i]);
		}
		function add(obj) {
		    var table = lazy.creat("div","table");
		    if(obj.title) {
		        var title = lazy.creat("div","title");
		        title.innerHTML = '<span>'+obj.title+'</span>';
		        table.appendChild(title);
		    }
		    var inputdiv = lazy.creat("div","input");
		    var input = lazy.creat("input","valinput",{"type":"text","value":obj.value?obj.value:"","placeholder":obj.placeholder?obj.placeholder:""});
		    if(obj.onclick){
		        input.onclick=function(){
		            obj.onclick();
		        }
		    }
		    inputdiv.appendChild(input);
		    switch(obj.type) {
		        case "input" :
                break;
		        case "password" :
		          input.setAttribute("type","password")
		        break;
		        case "date" :
		          inputdiv.className = "input dateinput";
		          input.setAttribute("readonly","readonly");
                  inputdiv.onclick = function() {
                      lazy.getInputDate(function(_obj) {
                          input.value = _obj.year+"-"+_obj.month+"-"+_obj.day;
                      });
                  }
                break;
                case "time" :
                  inputdiv.className = "input dateinput";
                  input.setAttribute("readonly","readonly");
                  inputdiv.onclick = function() {
                      lazy.getInputTime(function(_obj) {
                          input.value = _obj.hour+":"+_obj.minute;
                      });
                  }
                break;
                case "datetime" :
                  inputdiv.className = "input dateinput";
                  input.setAttribute("readonly","readonly");
                  inputdiv.onclick = function() {
                      var str = "";
                      lazy.getInputDate(function(_obj) {
                          str = _obj.year+"-"+_obj.month+"-"+_obj.day;
                          lazy.getInputTime(function(_obj) {
                             str += _obj.hour+":"+_obj.minute;
                             input.value = " "+str;
                          });
                      });
                  }
                break;
		        case "textarea" :
                  inputdiv.innerHTML = '<textarea class="valinput" '+(obj.edit?"readonly":" ")+' >'+(obj.value?obj.value:" ")+'</textarea>';
                break;
                case "select" :
                  inputdiv.className = "input selectinput";
                  input.setAttribute("readonly","readonly");
                  var sel = lazy.getSelectDom({
                      "data" : obj.data,
                      "change" : function(obj) {
                          input.value = obj.html;
                          inputdiv.id=obj.value;
                      },"style" : {
                          "width" : "100%",
                          "fontSize" : "1.2rem"
                      }
                  });
                  inputdiv.appendChild(sel);
                break;
                default :
                    alert("event_form tabel 类型");
                break;
		    }
		    table.appendChild(inputdiv);
		    el.appendChild(table);
		}
		data.getValue = function() {
		    var arr = [];
		    var valinput = document.getElementsByClassName("valinput");
		    for(var i = 0; i < valinput.length; i++) {
		        arr.push(valinput[i].value);
		    }
		    return arr;
		}
		data.getselid= function() {
            var arr = [];
            var selectinput = document.getElementsByClassName("selectinput");
            for(var i = 0; i < selectinput.length; i++) {
                arr.push(selectinput[i].id);
            }
            return arr;
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
