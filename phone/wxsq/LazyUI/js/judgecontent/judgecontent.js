lazy.plugins.judgecontent = {
    "init" : function(el,data) {
       var count = 0;
        var temp = 0;
        var max = 9;
        var chacha = 0;
        
        var table = lazy.create("div", "table box box_v");
        
        var pjcontent = lazy.create("div","pjcontent");
        var pjtextarea = lazy.create("textarea","pjtextarea")
        pjtextarea.setAttribute("placeholder","这次的服务还满意吗？请留下您的宝贵意见吧")
        pjcontent.appendChild(pjtextarea)
        
        var takepicture = lazy.create("div","takepicture box")
        takepicture.innerHTML = '<div class="photobutton"></div>';
        pjcontent.appendChild(takepicture)
        
        table.appendChild(pjcontent)
        el.appendChild(table);
        
        takepicture.onclick = function(){
            // lazy.startPhoto(function(pics, upids) {
               // var pics=["eK79Ga-WY6mrXlox4HINT4aVLaZyOH2HelHFDJzmIt6KCg1SSj9nxxGWzslOZ2ke"]
               // var upids=["u2CfPJb_kNNOzKvnJPXFHLW6AMsi15rou33hIovX-_aSzgSrvqdf9iplMRjL6fO2"]
               var pics = ['../LazyUI/images/default.png']
               var upids = ['../../LazyUI/images/default.png']
               photo(pics, upids)
            //},9);
        }
        function photo(pics, upids){
            //alert(upids.length)
             var addnode = el.getElementsByClassName("photobutton")[0];
                count = count + pics.length;
                //alert("count:"+count)
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
                    cha.onclick = function(e) {
                        e.stopPropagation()
                        chacha--;
                        var index = this.getAttribute("index") * 1;

                        //pic_line.removeChild(document.getElementsByClassName("zu" + index)[0]);
                        var node = this.parentNode;
                        //console.log(node)
                        
                        takepicture.removeChild(node);
                        
                        addnode.style.display = '';
                        count--;
                       
                    }

                    zu.appendChild(pic);
                    zu.appendChild(cha);
                    takepicture.insertBefore(zu, addnode);
                    
                }
                count = document.getElementsByClassName("zu").length;
                if (count >= max) {
                    addnode.style.display = 'none';
                }
                
        }
        //data.add = one;
        
        
       
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
