lazy.plugins.img = {
	"init" : function(el,data) {
        var count = 0;
        var temp = 0;
        var max = 9;
        var chacha = 0;
	    var tr = lazy.create("div","tr box box_v");
        var tr1 = lazy.create("div","tr1 box");
        tr1.innerHTML = '<span>'+(data.label?data.label:'')+'</span>';
        var pic_line = lazy.create("div","line box");
        var add = lazy.create("div","add box");
        pic_line.appendChild(add);
        if(data.readOnly) add.style.display = 'none';
        tr.appendChild(tr1);
        tr.appendChild(pic_line);
        el.appendChild(tr);
        
        add.onclick = function() {
            //lazy.startPhoto(function(pics, upids) {
               // var pics=["eK79Ga-WY6mrXlox4HINT4aVLaZyOH2HelHFDJzmIt6KCg1SSj9nxxGWzslOZ2ke"]
               // var upids=["u2CfPJb_kNNOzKvnJPXFHLW6AMsi15rou33hIovX-_aSzgSrvqdf9iplMRjL6fO2"]
               var length = el.getElementsByClassName('zu').length;
              // alert(max-length)
               var pics = ['../LazyUI/images/default.png']
               var upids = ['../../LazyUI/images/default.png']
               photo(pics, upids,1)
            //},3);
            
        }
       
        if(data.key&&lazy.getParameter(data.key+'pics')){
            
            setTimeout(function(){
                photo(lazy.getParameter(data.key+'pics'),lazy.getParameter(data.key+'upids'))
                count = lazy.getParameter(data.key+'pics').length;
                if (count == max) {
                    add.style.display = 'none';
                } 
            },300)
           
        }
        function photo(pics, upids, flag){
            //alert(upids.length)
             var addnode = add;
                count = count + pics.length;
                
                if (count <= max) {
                    temp = pics.length;
                } else {
                    temp = pics.length - (count - max);
                }
                count = count - pics.length;
                //alert("temp:"+temp)
                for (var i = 0; i < temp; i++) {
                    var zu = lazy.create("div", "zu zu" + (i + count)
                        + " box");
                    var pic = lazy.create("img", "pic box");
                    pic.src = pics[i];
                    pic.setAttribute('upid', upids[i]);
                    pic.onclick = function(){
                            var src = this.getAttribute("src")
                            var temp = src.replace(/\@.*/g,"");
                            //temp = lazy.getImagePx(temp);
                            previewImage(temp)
                            //lazy.showImage(temp);
                            
                        }
                    var cha = lazy.create("div", "cha", {
                        "index" : chacha
                    });
                    chacha++;
                    cha.onclick = function() {

                        chacha--;
                        var index = this.getAttribute("index") * 1;

                        //pic_line.removeChild(document.getElementsByClassName("zu" + index)[0]);
                        var node = this.parentNode;
                        console.log(node)
                        pic_line.removeChild(node);
                        
                        addnode.style.display = '';
                        count--;
                        //////////// 更新缓存 ///////////
                        var cache1=[];
                        var cache_src1=[];
                        for(var i =0 ; i<el.getElementsByClassName("pic").length ; i++){
                            var obj = el.getElementsByClassName("pic")[i];
                            if(obj.getAttribute('upid')) cache1.push(obj.getAttribute('upid'));
                            if(obj.src) cache_src1.push(obj.src);
                        }
                        lazy.setParameter(data.key+'pics',cache_src1);
                        lazy.setParameter(data.key+'upids',cache1);
                    }

                    zu.appendChild(pic);
                    zu.appendChild(cha);

                    pic_line.insertBefore(zu, addnode);
                }
                count = document.getElementsByClassName("zu").length;
                if (count >= max) {
                    addnode.style.display = 'none';
                    if(flag)lazy.alert2('最多只能传9张图片哦')
                }
                
                //////////// 缓存 ///////////
                var cache=[];
                var cache_src=[];
                for(var i =0 ; i<el.getElementsByClassName("pic").length ; i++){
                	var obj = el.getElementsByClassName("pic")[i];
                	if(obj.getAttribute('upid')) cache.push(obj.getAttribute('upid'));
                	if(obj.src) cache_src.push(obj.src);
                }
                lazy.setParameter(data.key+'pics',cache_src);
                lazy.setParameter(data.key+'upids',cache);
                if(flag)data.addclick(pics,upids)
        }
        function previewImage(url){
             var imgtemp = el.getElementsByTagName("img");
             var urlss = [];
             for(var j=0 ; j<imgtemp.length ; j++){
                 urlss.push(imgtemp[j].src.replace(/\@.*/g,""))
             }
             //alert(urlss)
             lazy.previewImage(url,urlss);
        }
        data.getValue=function(){
            var arr=[];
            var d=el.getElementsByClassName("pic");
            for(var i=0;i<d.length;i++){
                arr.push(d[i].getAttribute("upid"))
            }
            // alert(arr)
            return arr;
        }
        data.clear = function(){
                var pic_line = document.getElementsByClassName("line")[0];
                var length = document.getElementsByClassName("zu").length;
                var delezu = document.getElementsByClassName("zu");
                for (var i = length-1; i >= 0; i--) {
                    pic_line.removeChild(delezu[i]);
                }
                count = 0;
                add.style.display = '';
                lazy.setParameter(data.key+'pics','');
                lazy.setParameter(data.key+'upids','');
                 
        }
        data.readonly = function(bol){
            var addnoder = el.getElementsByClassName("add")[0];
            console.log(addnoder)
            console.log(bol)
            lazy.for(el.getElementsByClassName("cha"),function(obj){
                if(bol){
                    obj.display = 'none';
                    addnoder.style.display='none';
                }else{
                    obj.display = '';
                    addnoder.style.display='';
                }
            })
        }
        
        data.setSrc = function(srcs){
            lazy.upLoad(srcs,function(pics, upids){
                photo(pics, upids)
            })
        }
        data.setPic = function(src,status){
            el.getElementsByClassName("add")[0].style.display = 'none';
            
            for (var i = 0; i < src.length; i++) {
                    var zu = lazy.create("div", "zu zu" + i + " box");
                    var pic = lazy.create("img", "pic box");
                    pic.src = src[i].imgurl;
                    if(src[i].size) pic.setAttribute("size",src[i].size)
                    pic.onclick = function(){
                            var src2 = this.getAttribute("src")
                            var temp = src2.replace(/\@.*/g,"");
                            if(this.getAttribute("size")&& (!status)){
                               // alert(1)
                                lazy.showImage(temp,this.getAttribute("size"));
                            }else{
                                //lazy.showImage(temp);
                               // alert(2)
                                previewImage(temp)
                            }
                            
                        }

                    zu.appendChild(pic);
                   
                    pic_line.appendChild(zu);
                }
        }
        data.download = function(serveId){
           // alert(serveId)
            lazy.downLoad(serveId,function(localId){
                //alert(localId)
                photo(localId,serveId)
            })
        }
        data.re=function(){
            var arr=[];
            var d=el.getElementsByClassName("pic");
            for(var i=0;i<d.length;i++){
                arr.push(d[i].getAttribute("upid"))
            }
            return arr;
        }
        
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
