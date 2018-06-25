lazy.plugins.group = {
	"init" : function(el,data) {
	    var table = data.table;
	   // var _html = '<div class="groupDom">';
	   var groupDom = lazy.creat("div","groupDom box box_hh");
	    for(var i=0;i<table.length;i++){
	        var icondiv = lazy.creat("div","icondiv");
	        icondiv.setAttribute("i",i);
	        var deldiv = lazy.creat("div","deldiv");
	        deldiv.setAttribute("id",table[i].id);
	        deldiv.onclick = function(){
	            data.del(this.getAttribute("id"));
	        }
	        icondiv.appendChild(deldiv);
	        var icon = getIcon(table[i].icon,table[i].label,i);
	        icondiv.appendChild(icon);
	        
	        var labeldiv = lazy.creat("div","label slh");
	        labeldiv.innerHTML = table[i].label;
	        icondiv.appendChild(labeldiv);
	        
	        groupDom.appendChild(icondiv);
	    }
	    var jiadiv = lazy.creat("div","jia icondiv");
	    var icon = getIcon(lazy.url+"LazyUI/js/group/jia.png");
	    icon.onclick = function(){
	        delHide();
            data.add();
        }
        jiadiv.appendChild(icon);
        var labeldiv = lazy.creat("div","label");
        labeldiv.innerHTML = " ";
        jiadiv.appendChild(labeldiv);
        groupDom.appendChild(jiadiv);
        
        var jiandiv = lazy.creat("div","jian icondiv");
        var icon = getIcon(lazy.url+"LazyUI/js/group/jian.png");
        icon.onclick = function(){
            data.showdel();
            delShow();
        }
        jiandiv.appendChild(icon);
        var labeldiv = lazy.creat("div","label");
        labeldiv.innerHTML = " ";
        jiandiv.appendChild(labeldiv);
        groupDom.appendChild(jiandiv);
        
	    el.appendChild(groupDom)
	    //返回图片
         function getIcon(path, title, i) {
             var img = new Image();
             img.src = path;
             var icon = lazy.creat("div","icon");
             img.onerror = function() {
                 var icontitle1 = lazy.creat("div","icontitle1 bcolor"+parseInt(i%7));
                 if(title)icontitle1.innerHTML = '<span>'+title.substring((title.length>2?1:0),3)+'</span>';
                 icon.appendChild(icontitle1);
             }
             img.onload = function() {
                 var iconimg = lazy.creat("div","iconimg");
                 iconimg.style.backgroundImage = "url("+path+")";
                 icon.appendChild(iconimg);
             }
             return icon;
         }
         data.delOne = function(id){
             document.getElementById(id).parentNode.parentNode.removeChild(document.getElementById(id).parentNode)
         }
         data.addOne = function(obj){
             //delHide();
             var i = el.getElementsByClassName("icondiv").length+1;
             var icondiv = lazy.creat("div","icondiv");
             icondiv.setAttribute("i",i);
             var deldiv = lazy.creat("div","deldiv");
             deldiv.setAttribute("id",obj.id);
             deldiv.onclick = function(){
                data.del(this.getAttribute("id"));
             }
             icondiv.appendChild(deldiv);
             var icon = getIcon(obj.icon,obj.label,i);
             icondiv.appendChild(icon);
            
             var labeldiv = lazy.creat("div","label slh");
             labeldiv.innerHTML = obj.label;
             icondiv.appendChild(labeldiv);
            
             var last = el.getElementsByClassName("icondiv")[el.getElementsByClassName("icondiv").length-3];
             insertAfter(icondiv,last);
             //groupDom.appendChild(icondiv);
         }
         function delShow(){
             var deldivs = el.getElementsByClassName("deldiv");
             for(var i=0;i<deldivs.length;i++){
                 deldivs[i].style.display = 'block'
             }
         } 
         function delHide(){
             var deldivs = el.getElementsByClassName("deldiv");
             for(var i=0;i<deldivs.length;i++){
                 deldivs[i].style.display = 'none'
             }
         }
         data.delHide = function(){
             delHide();
         }
         function insertAfter(newElement, targetElement){ 
            var parent = targetElement.parentNode; 
            if (parent.lastChild == targetElement) { 
                // 如果最后的节点是目标元素，则直接添加。因为默认是最后 
                parent.appendChild(newElement); 
            } 
            else { 
                parent.insertBefore(newElement, targetElement.nextSibling); 
                //如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面 
            } 
         } 
	   // _html += '</div>';
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
