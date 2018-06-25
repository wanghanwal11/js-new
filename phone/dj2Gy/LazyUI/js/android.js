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
    url=url.replace(/^\/dj2\//,'/dj2Gy/')
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
lazy.setHeader = function(obj,back) {
     var funname = lazy.callBack(back);
    if(obj) {
        var _obj = JSON.parse(JSON.stringify(obj));
        lazy.for(obj.rightbtn?obj.rightbtn:[], function(val, i) {
            if(val.onclick) _obj.rightbtn[i].onclick = lazy.callBack(val.onclick);
        });
        lazy.for(obj.centerbtn?obj.centerbtn:[], function(val, i) {
            if(val.onclick) _obj.centerbtn[i].onclick = lazy.callBack(val.onclick);
        });
        window.urlTo.open(JSON.stringify(_obj),funname)
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
    // window.pic.showPic(url);
    window.image.showPic(url);
}
lazy.logout = function(){
    window.logout.open();
}
lazy.dfsh = function(title,str){
    window.dfshmessage.refresh(str)
}
//支部详情
lazy.zbxq = function(id){
    window.android.openPartyDetail(id)
}
lazy.getGps=function(back){
    var funname = lazy.callBack(back);
    window.loc.open(funname)
}
//选择时间
lazy.time=function(type,back){
    var funname = lazy.callBack(back);
    window.date.open(type,funname);
}
//打开新的webview
lazy.openWebview = function(url,back){
    var funname = lazy.callBack(back);
    window.webview.open(url,funname);
}
//关闭
lazy.closeWebview = function(back){
    window.forceclose.forceClose();
}
//缓存
lazy.setCache = function(obj,back){
    var funname = lazy.callBack(back);
    window.cache.put(obj,funname);
}
lazy.getCache = function(key,back){
    var funname = lazy.callBack(back);
    window.cache.get(key,funname);
}