lazy.plugins.headpicture = {
     "init" : function(el, data){
        var photourl = '';
        
        var tr = lazy.create("div","tr box");
        var label = lazy.create("div","label box_f1");
        label.innerHTML ='<span>'+data.label+'</span>';
        
        var icon = lazy.create("div","icon box");
        icon.style.backgroundImage = 'url('+data.icon+')';
        photourl = data.icon;
        icon.onclick = function(){
            lazy.previewImage(photourl,photourl)
        }
        
        var right =lazy.create("div","right box");
        right.onclick =function(){
            lazy.startPhoto(function(pics, upids) {
               // var pics=["eK79Ga-WY6mrXlox4HINT4aVLaZyOH2HelHFDJzmIt6KCg1SSj9nxxGWzslOZ2ke"]
               // var upids=["u2CfPJb_kNNOzKvnJPXFHLW6AMsi15rou33hIovX-_aSzgSrvqdf9iplMRjL6fO2"]
               //var pics = ['../LazyUI/images/default.png']
               //var upids = ['../../LazyUI/images/default.png']
               icon.style.backgroundImage = 'url('+pics[0]+')';
               photourl=upids[0]
               
            },1);
        }
        
        tr.appendChild(label)
        tr.appendChild(icon)
        tr.appendChild(right)
        
        el.appendChild(tr)
        //data.add = one;
        
        data.getValue = function(){
            return photourl;
        }
        
    },
    "edit" : function(parentEl, el, data){
       
    }
}