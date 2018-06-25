/*
 * 可折叠菜单
 */
lazy.plugins.collapsible = {
	"init" : function(el,data) {
		var idarr = [];
		var returndataArr = [];
		data.returndata = [];
		var getReturndata = function() {
			returndataArr = [];
			var list = el.getElementsByClassName("icon_checked");
			for(var i = 0; i < list.length; i++) {
				var obj={"id":list[i].parentNode.parentNode.id.replace("id_",""),
						"name":list[i].parentNode.getElementsByClassName("title")[0].innerHTML
					}				
				returndataArr.push(obj);
			}
			data.returndata = returndataArr;
		}
		var imgw = lazy.fontSize * 1.8;
		//child处理
		var setChild = function(pel,arr,childIndex) {
			for(var i = 0; i < arr.length; i++) {
				var div = document.createElement("div");
				var id = (arr[i].id?arr[i].id:alert('id为空'));
				div.id = "id_"+id;
				div.className = "clickdiv";
				div.setAttribute("index",childIndex);
				var classNme = "class_"+id;
				var iconhtml = '<div class="icon1"></div>';
				if(arr[i].image) {
					iconhtml = '<div class="touxiang" src="'+arr[i].image+'"></div>';
				}
				var gou = '<div class="icon"></div>';
				if(arr[i].checkbox&&(arr[i].checkbox == "false")) gou = '';
				div.innerHTML = '<div class="tiao" style="padding-left:'+childIndex+'rem;">'+iconhtml+'<div class="title">'+(arr[i].name?arr[i].name:"")+'</div>'+gou+'</div><div class="child '+classNme+' child_hide"></div>';
				pel.appendChild(div);
				//处理头像
				if(div.getElementsByClassName("touxiang")[0]) {
					var touxiang = div.getElementsByClassName("touxiang")[0];
					//lazy.txImage(imgw,touxiang.getAttribute("src"),touxiang,false); 
					var img=new Image();
					img.src=touxiang.getAttribute("src");
					img.className="img";
					img.width=imgw;
					img.height=imgw;
					touxiang.appendChild(img);
				}
				//
				var titleel = div.getElementsByClassName("title")[0];
				titleel.onclick = function() {
					var _this = this.parentNode.parentNode;
					if(this.parentNode.getElementsByClassName("icon1")[0])
					var icon1 = this.parentNode.getElementsByClassName("icon1")[0];
					
					if(data.select)data.select(_this.id.replace("id_",""),_this.getAttribute("index"),this.innerHTML);
					if(_this.getElementsByClassName("child")[0]) {
						var childel = _this.getElementsByClassName("child")[0];
						var _className = childel.className;
						if(_className.indexOf(" child_hide")!=-1) {
							if(icon1)icon1.className = "icon1 icon1_checked";
							childel.className = _className.replace(" child_hide","");
							//处理新数据
						}else {
							childel.className += " child_hide";
							if(icon1)icon1.className = "icon1";
						}
					}else {
						
					}
				}
				if(div.getElementsByClassName("icon")[0]) {
					var iconel = div.getElementsByClassName("icon")[0];
					iconel.onclick = function(){
						if(this.className.indexOf("icon_checked") != -1) {
							this.className = "icon";
						}else {
							this.className = "icon icon_checked";
						}
						getReturndata();
					}
					
				}
				var newPel = pel.getElementsByClassName(classNme)[0];
				if(arr[i].child) {
					if(arr[i].child.length>0) {
						var n = childIndex + 1;
						setChild(newPel,arr[i].child,n);
					}
				}else {
					arr[i].child = [];
				}
			}
		}
		//
		setChild(el,data.child,1);
		//获取新数据
		data.newchild = function(id,n,arr) {
			if(idarr.indexOf(id)==-1) {
				idarr.push(id);
				var divel = document.getElementById("id_"+id).getElementsByClassName("child")[0];
				setChild(divel,arr,parseInt(n)+1);
			}
		}
		//
		
	},
	"edit" : function(parentElement,el,data)  {
		
	}
}
