/*
 * 物品列表
 */
lazy.plugins.wuping_dy = {
	"init" : function(el,data) {
		var _html = '';
		var readonly = '';
		window.inputdatafun = function(_this) {
			lazy.getInputDate(function(str) {
				_this.value = str;
			});
		}
		if(data.name){
                    _html += '<div class="hang ub"  style="margin-left:1rem;line-height:3rem;font-size:0.9rem;font-weight:600">'+data.name+'</div>';
                }
        if((data.edit!=undefined)&&(data.edit==false)) {
             readonly = 'readonly="true"';
        }  
        
		if(data.placeholder) {
			var inputtype = data.inputtype?data.inputtype:[];
			var titlelist = data.title?data.title:[];
			var text = data.text?data.text:[];
			for(var i = 0; i < data.placeholder.length; i++) {
				var _type = inputtype[i]?inputtype[i]:"text";
				var title = titlelist[i]?titlelist[i]:"";
				var _text = text[i]?text[i]:"";
				
				
				if(_type=="nochangetext"){
                        _html += '<div class="hang ub"><div class="title" style="margin-left:1rem">'+title+'</div><div class="h1 sel ub-f1" index="'+i+'"  style="min-height:2rem">'+_text+'</div></div>';
                    }
                else if(_type instanceof Array) {
					_html += '<div class="hang ub"><div class="title">'+title+'</div><input class="h1 sel" index="'+i+'" '+readonly+' placeholder="'+data.placeholder[i]+'" value="'+_text+'"></input></div>';
				}else{
					if(_type=="date") {
						_html += '<div class="hang ub"><div class="title">'+title+'</div><input value="'+_text+'" class="h1" '+readonly+' placeholder="'+data.placeholder[i]+'" onclick="inputdatafun(this)" type="text"/></div>'
					}else if(_type=="textarea") {
						_html += '<div class="hang ub"><div class="title">'+title+'</div><textarea class="h1" '+readonly+' placeholder="'+data.placeholder[i]+'" rows="3">'+_text+'</textarea></div>'
					}else if(_type=="image"){
                        _html += '<div class="hang ub"><div class="title">'+title+'</div><div class="icon" src="'+data.placeholder[i]+'"></div><input class="h1" '+readonly+' value="" style="display:none"></input></div>'
                    }else if(_type=="div") {
                        _html += '<div class="hang ub"><div class="title">'+title+'</div><div class="h1 hh ub-f1">'+_text+'</div></div>'
                    }
                    // else if(_type=="nochangetext"){
                        // _html += '<div class="hang"><div class="title">'+title+'</div><div class="h1 sel" index="'+i+'" placeholder="'+data.placeholder[i]+'" value="'+_text+'"></div></div>';
                    // }
                    else {
						//
						if(_type=="number") {
							_html += '<div class="hang ub"><div class="title">'+title+'</div><input '+readonly+' value="'+_text+'" class="h1" onfocus="this.type=\'number\'" onblur="this.type=\'text\'" placeholder="'+data.placeholder[i]+'" type="text"/></div>'
						}else {
							_html += '<div class="hang ub"><div class="title">'+title+'</div><input '+readonly+' value="'+_text+'" class="h1" placeholder="'+data.placeholder[i]+'" type="'+_type+'"/></div>'
						}
					}
				}
				
			}
			
		}else {
			return;
		}
		el.innerHTML = _html;
		//处理头像
		if(el.getElementsByClassName("icon").length>0) {
			var icon = el.getElementsByClassName("icon")[0];
			//lazy.txImage(3.5*lazy.fontSize,icon.getAttribute("src"),icon,true);
			lazy.yuanImg(icon.getAttribute("src"),3.5*lazy.fontSize,"",function(img){icon.appendChild(img);});
		}
		//
	/*	if (el.getElementsByClassName("sel").length > 0) {
			var list = el.getElementsByClassName("sel");
			//处理数据
			for (var i = 0; i < list.length; i++) {
				var n = list[i].getAttribute("index");
				lazy.setSelectOne(list[i].parentNode, list[i], data.inputtype[n], function(_json){
					_json.returnel.value = _json.value;
					_json.returnel.setAttribute("key", _json.key);
				});
			}
		}*/
		//
		data.getdata = function() {
			var arr = []
			if(document.getElementsByClassName("h1")) {
				var list = document.getElementsByClassName("h1");
				for(var i = 0; i < list.length; i++) {
					arr.push(list[i].value);
				}
			}
			return arr;
		}
		
		
		
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
