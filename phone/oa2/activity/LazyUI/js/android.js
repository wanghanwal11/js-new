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
