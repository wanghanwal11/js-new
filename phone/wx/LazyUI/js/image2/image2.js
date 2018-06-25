lazy.plugins.image2 = {
	"init" : function(el,data) {
       
	    var tr = lazy.create("div","tr ub ub-ver");
        var tr1 = lazy.create("div","tr1 box");
        tr1.innerHTML = '<span>'+(data.label?data.label:'')+'</span>';
        var pic_line = lazy.create("div","line box");
        
        lazy.for(data.title,function(obj,i){
            var zu = lazy.create("div", "zu zu" + i + " box");
            var pic = lazy.create('div','pic');
            pic.innerHTML = '<span>'+obj+'</span>';
            pic.onclick = function(){
                
                lazy.startPhoto(function(pics, upids) {
                    //var pics = ['../LazyUI/images/default.png']
                    //var upids = ['../LazyUI/images/default.png']
                    photo(pics, upids)
                },1);
                //photo()
               
            }
            zu.appendChild(pic)
            pic_line.appendChild(zu)
            
            ///获取缓存
            if(data.key){
                if(lazy.getParameter(data.key+' pics'+i)){
                    var temp_pics = [];
                    var temp_upids = [];
                    for(var j = 0 ; j < data.title.length ; j++){
                        temp_pics.push(lazy.getParameter(data.key+' pics'+i))
                        temp_upids.push(lazy.getParameter(data.key+' upids'+i))
                    }
                    photo(temp_pics,temp_upids)
                }
            }
            
            function photo(pics, upids){
                var img = new Image();
                    img.setAttribute("index",i);
                    img.className = "imgdiv";
                    img.src = pics[0];
                   
                    img.setAttribute('pics',pics[0]);
                    img.setAttribute('upids', upids[0]);
                    img.onclick = function(){
                        previewImage(i)
                    }
                zu.appendChild(img)
                var cha = lazy.create("div","cha");
                cha.onclick = function(){
                    pic.style.display = '';
                    var node = this.parentNode;
                    node.removeChild(this);
                    var deleimg = node.getElementsByTagName("img")[0];
                    node.removeChild(deleimg)
                    //设置缓存
                    lazy.setParameter(data.key+' pics'+i,'');
                    lazy.setParameter(data.key+' upids'+i,'');
                }
                zu.appendChild(cha)
                pic.style.display = 'none';
                //设置缓存
                lazy.setParameter(data.key+' pics'+i,img.getAttribute('pics'));
                lazy.setParameter(data.key+' upids'+i,img.getAttribute('upids'));
            }
        })
        
        
        tr.appendChild(tr1);
        tr.appendChild(pic_line);
        el.appendChild(tr);
        function previewImage(i){
             var imgtemp = el.getElementsByTagName("img");
             var urlss = [];
             for(var j=0 ; j<imgtemp.length ; j++){
                 urlss.push(imgtemp[j].src)
             }
             lazy.previewImage(urlss[i],urlss);
        }
        data.getValue=function(){
            var arr=[];
            var d=el.getElementsByClassName("zu");
            for(var i=0;i<data.title.length;i++){
                var dimg = d[i].getElementsByClassName("imgdiv")[0];
                if(dimg){
                    arr.push(dimg.getAttribute("upids"))
                }else{
                    arr.push('')
                }
                
            }
            return arr;
        }
        data.clear = function(){
             var zuzu = el.getElementsByClassName("zu");
             for(var i = 0 ; i< zuzu.length ; i++){
                 zuzu[i].getElementsByClassName("pic")[0].style.display = '';
                 if(zuzu[i].getElementsByClassName("imgdiv")[0])zuzu[i].getElementsByClassName("imgdiv")[0].style.display = 'none';
                 if(zuzu[i].getElementsByClassName("cha")[0])zuzu[i].getElementsByClassName("cha")[0].style.display = 'none';
             }
        }
        data.readonly = function(bol){
            lazy.for(el.getElementsByClassName("cha"),function(obj){
                if(bol){
                    obj.display = 'none';
                }else{
                    obj.display = '';
                }
            })
        }
        
        data.setSrc = function(srcs){
            lazy.upLoad(srcs,function(pics, upids){
                photo(pics, upids)
            })
        }
        data.setPic = function(srcs){
            var zu = el.getElementsByClassName("zu");
            var pic = el.getElementsByClassName("pic");
            lazy.for(srcs,function(obj,i){
                 var img = new Image();
                    img.setAttribute("index",i);
                    img.className = "imgdiv";
                    img.src = obj;
                    img.onclick = function(){
                        previewImage(i)
                        //lazy.showImage(obj);
                    }
                
                zu[i].appendChild(img)
               
                pic[i].style.display = 'none';
                //设置缓存
            })
           
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
