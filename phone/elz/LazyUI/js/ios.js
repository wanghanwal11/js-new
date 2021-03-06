/*
 *@override ios lazy
 */
//播放声音
lazy.playSound = function(path) {
    lazy.openWin("aj://playAVPlayer_?"+path);
}
lazy.closeSound = function() {
    lazy.openWin("aj://stopAVPlayer");
    
}
//拍照
lazy.startPhoto = function(uploadurl,back) {
    var funname = lazy.callBack(back);
    lazy.openWin("aj://takePhotos_?"+uploadurl+"&"+funname);
}
//分享
lazy.share = function(str,back) {
    str=encodeURI(JSON.stringify(str));
    var funname = lazy.callBack(back);
    lazy.openWin("aj://showShareWeChatList_?"+str+"&"+funname);
}
//返回
lazy.goBack1 = function(back) {
      lazy.openWin("aj://backMainViewController")
}
lazy.close = function(){
    lazy.openWin("aj://CloseWebView")
}
//打开新窗口
lazy.openWin1 = function(url) {
    lazy.openWin("aj://presentNewWebView_?"+url)
}
//扫一扫
lazy.saoyisao = function(back) {
    var funname = lazy.callBack(back);
    lazy.openWin("aj://presentScanView_?"+funname)
}
//返回登录信息
lazy.personmessage = function(back) {
    var funname = lazy.callBack(back);
    lazy.openWin("aj://PersonalMessage_?"+funname)
}
//返回登录页
lazy.goLogin = function() {
    lazy.openWin("aj://backLoginViewController")
}
//下载打开
lazy.onDownload=function(url){
    lazy.openWin("aj://presentNewWebView_?"+url)
}
//上传文件
lazy.startFile=function(uploadurl,back){
    var funname = lazy.callBack(back);
    lazy.openWin("aj://takePhotos_?"+uploadurl+"&"+funname);
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
        lazy.openWin("aj://typeOfNavigationBarWithUrl_?"+JSON.stringify(_obj));
    }
}
//头部样式隐藏
lazy.setHeaderHide = function(obj) {
    lazy.openWin("aj://hiddenNavigationbar");
}
//禁止头部切换
lazy.setHeaderStop = function() {
    lazy.openWin("aj://onSegmentControl");
}
//查看图片
lazy.showImage=function(url){
    lazy.openWin("aj://viewPicture_?"+url);
}

