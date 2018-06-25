PAGE_INIT = function(page) {
    var benid='';
    var fuid="";
    setData([{
        type : 'button',
        label : '打开相机',
        onclick : function() {
            lazy.chooseImage(function(res){
                //alert(res)
                //alert(JSON.stringify(res));
               /* var img = lazy.create('img','img',{
                    src : res.localIds,
                    style : {
                        width : '50px',
                        height : '50px'
                    }
                });
                var text = lazy.create('textarea','textarea',{
                    style : {
                        width : '300px',
                        height : '300px'
                    }
                });
                page.dom.appendChild(img);*/
                /*
                page.dom.appendChild(text);
                text.value = img.src;
                */
                //alert(img.src);
               benid=res.localIds;
            },{
                  count: 2,
                  sourceType: ['camera']
            })
           //parent.dom.innerHTML='<img src="a.png">'
        }
    },{
        type : 'button',
        label : '打开相册',
        onclick : function() {
            lazy.chooseImage(function(res){
               benid=res.localIds;
            },{
                count: 9,
                sourceType: ['album']
            })
           //parent.dom.innerHTML='<img src="a.png">'
        }
    },{
        type : 'button',
        label : '打开相机，相册',
        onclick : function() {
            lazy.chooseImage(function(res){
               benid=res.localIds;
            },{
                 count: 1,
                 sourceType: ['album', 'camera']
            })
           //parent.dom.innerHTML='<img src="a.png">'
        }
    },{
        type : 'button',
        label : '上传',
        onclick : function() {
            lazy.uploadImage(function(res){
                fuid=res.serverId;
            },{
                localId:benid
            })
           //parent.dom.innerHTML='<img src="a.png">'
        }
    },{
        type : 'button',
        label : '下载',
        onclick : function() {
            lazy.downloadImage(function(res){
                alert(JSON.stringify(res.localId))
            },{
                serverId:fuid
            })
           //parent.dom.innerHTML='<img src="a.png">'
        }
    },{
        type : 'button',
        label : '本地显示',
        onclick : function() {
            lazy.getLocalImgData(function(res){
                parent.dom.innerHTML='<img src='+res.localData+'>'
            },{
                localId:benid
            })
           //parent.dom.innerHTML='<img src="a.png">'
        }
    },{
        type : 'button',
        label : '预览图片',
        onclick : function() {
            lazy.previewImage({
                current: 'http://192.168.0.20:8080/static/img/t3.bef0363.jpg', // 当前显示图片的http链接
                urls: ['http://192.168.0.20:8080/static/img/t1.ae04e50.jpg','http://192.168.0.20:8080/static/img/t3.bef0363.jpg'] // 需要预览的图片http链接列表
            })
           //parent.dom.innerHTML='<img src="a.png">'
        }
    }]);
}