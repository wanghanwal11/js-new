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
		var colorarr = data.color;
		//child处理
		var setChild = function(pel,arr,childIndex) {
		    var more = false;
		    var hidearr = [];
			for(var i = 0; i < arr.length; i++) {
			    if(arr[i].show&&arr[i].show=="false"){
			        more = true;
			        hidearr.push(arr[i])
			    }else{
    				addone(pel,arr[i],childIndex)
			    }
			}
			if(more){
                var div = document.createElement("div");
                div.className = "more clickdiv";
                var iconhtml = '<div class="icon1"></div>';
                div.innerHTML = '<div class="tiao" style="padding-left:'+childIndex+'rem;">'+iconhtml+'<div class="title">更多</div></div>';
                pel.appendChild(div);
                div.onclick = function(){
                    var clickdivs = pel.childNodes;
                    for(var s=0;s<clickdivs.length;s++){
                        clickdivs[s].style.display = "inline"
                    }
                    this.style.display = "none";
                }
                for(var i=0;i<hidearr.length;i++){
                    addone(pel,hidearr[i],childIndex)
                }
			}
		}
		function addone(pel,obj,childIndex){
		    var div = document.createElement("div");
            var id = (obj.id?obj.id:alert('id为空'));
            div.id = "id_"+id;
            div.className = "clickdiv";
            if(obj.show&&obj.show=="false") div.style.display = "none";
            div.setAttribute("index",childIndex);
            var classNme = "class_"+id;
            var iconhtml = '<div class="icon1"></div>';
            if(obj.image) {
                iconhtml = '<div class="touxiang" src="'+obj.image+'"></div>';
            }
            var gou = '<div class="icon"></div>';
            if(obj.checkbox&&(obj.checkbox == "false")) gou = '';
            div.innerHTML = '<div class="tiao" style="padding-left:'+childIndex+'rem;">'+iconhtml+'<div class="title">'+(obj.name?obj.name:"")+'</div>'+gou+'</div><div class="child '+classNme+' child_hide"></div>';
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
            if(obj.child) {
                if(obj.child.length>0) {
                    var n = childIndex + 1;
                    setChild(newPel,obj.child,n);
                }
            }else {
                obj.child = [];
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
