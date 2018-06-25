//拍照或者从手机相册选择
lazy.chooseImage = function(back,obj) {
       var funname = lazy.callBackFun(back);
       obj=obj||{};
       obj.success=funname;
       obj=JSON.stringify(obj);
       window.eg.chooseImage(obj);
}
//预览图片接口
lazy.previewImage = function(obj) {
      obj=obj||{};
      obj=JSON.stringify(obj);
      window.eg.previewImage(obj)
}
//上传图片接口
lazy.uploadImage = function(obj) {

}
//下载图片接口
lazy.downloadImage = function(obj) {

}
//开始录音接口
lazy.startRecord = function() {

}
//停止录音接口
lazy.stopRecord = function(obj) {

}
//停止录音接口
lazy.stopRecord = function(obj) {

}
//监听录音自动停止接口
lazy.onVoiceRecordEnd = function(obj) {

}
//播放语音接口
lazy.playVoice = function(obj) {

}
//暂停播放接口
lazy.pauseVoice = function(obj) {

}
//停止播放接口
 lazy.stopVoice = function(obj) {

}
//监听语音播放完毕接口
lazy.onVoicePlayEnd = function(obj) {

}
//上传语音接口
lazy.uploadVoice = function(obj) {

}
//下载语音接口
lazy.downloadVoice = function(obj) {

}
//获取网络状态接口
lazy.getNetworkType = function(obj) {

}
//获取地理位置接口
lazy.getLocation = function(obj) {

}
//查看位置接口
lazy.openLocation = function(obj) {

}
//头部样式
lazy.setHeader = function(obj,bol) {
    if(obj) {
        if(bol&&bol==true) lazy.setParameter("header",obj);
        var _obj = JSON.parse(JSON.stringify(obj));
        lazy.for(obj.rightbtn?obj.rightbtn:[], function(val, i) {
            if(val.onclick) _obj.rightbtn[i].onclick = lazy.callBack(val.onclick);
        });
        lazy.for(obj.centerbtn?obj.centerbtn:[], function(val, i) {
            if(val.onclick) _obj.centerbtn[i].onclick = lazy.callBack(val.onclick);
        });
        window.urlTo.open(JSON.stringify(_obj));
    }
}
//头部样式隐藏
lazy.setHeaderHide = function(obj) {
    window.hideTopbar.start()
}