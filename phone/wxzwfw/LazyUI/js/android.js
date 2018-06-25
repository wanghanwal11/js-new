/*
 *@override android lazy
 */
//关闭
lazy.close = function() {
    window.forceclose.forceClose();
}
//拍照
lazy.startPhoto = function(uploadurl,back) {
    var funname = lazy.callBack(back);
    lazy.alertlist([
                    {
                        "title" : "拍照",
                        "onclick" : function() {
                            window.camera.open(uploadurl,funname);
                        }
                    },{
                        "title" : "选择相册",
                        "onclick" : function() {
                            window.pic.open(uploadurl,funname);
                        }
                    }
                        
                ]);
}
//返回
lazy.goBack1 = function(back) {
    window.close.onClose()
}
//分享
lazy.share = function(str,back) {
    str=JSON.stringify(str);
    var funname = lazy.callBack(back);
    window.share.open(str,funname)

}
//打开新窗口
lazy.openWin1 = function(url) {
    window.intent.start(url)
}
//返回登录页
lazy.goLogin = function() {
    window.openLogin.open();
}
//扫一扫
lazy.saoyisao = function(back) {
    var funname = lazy.callBack(back);
    window.openQr.open(funname);

}
//返回登录信息
lazy.personmessage = function(back) {
    var funname = lazy.callBack(back);
    window.json.get(funname)
}

//打开之部报到
lazy.openOrg = function(back) {
    var funname = lazy.callBack(back);
    window.openOrg.open(funname);
}
//上传文件
lazy.startFile=function(url,back){
    var funname = lazy.callBack(back);
    window.file.open(url,funname);
}

//下载打开
lazy.onDownload=function(url){
    window.download.onDownload(url);
}
//头部样式
lazy.setHeader = function(obj) {
    if(obj) {
        var _obj = JSON.parse(JSON.stringify(obj));
        lazy.for(obj.rightbtn?obj.rightbtn:[], function(val, i) {
            if(val.onclick) _obj.rightbtn[i].onclick = lazy.callBack(val.onclick);
        });
        lazy.for(obj.centerbtn?obj.centerbtn:[], function(val, i) {
            if(val.onclick) _obj.centerbtn[i].onclick = lazy.callBack(val.onclick);
        });
        window.urlTo.open(JSON.stringify(_obj))
    }
}
//头部样式隐藏
lazy.setHeaderHide = function(obj) {
    window.hideTopbar.start()
}
//播放声音
lazy.playSound = function(path) {
    window.voice.onRequest(path);
}
lazy.closeSound = function() {
    window.pauseVoice.start(); 
    
}
//禁止头部切换
lazy.setHeaderStop = function() {
    window.titleItems.enable();
}
//查看图片
lazy.showImage=function(url){
    window.pic.showPic(url)
}