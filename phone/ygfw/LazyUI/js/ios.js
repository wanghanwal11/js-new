/*
 *@override ios lazy
 */
//上传录音
lazy.startSound = function(uploadurl,back) {
    var funname = lazy.callBack(back);
    lazy.openWin("aj://startRecording_?"+uploadurl.replace(/&/g,"-*-")+"&"+funname);
}
//播放声音
var soundbol = 0;//无声音播放
var soundpath = "";
lazy.playSound = function(path,mp3bol) {
    if(soundpath!=path){//点击不同声音
        soundbol = 1;
        soundpath= path;
        if(mp3bol) lazy.openWin("aj://playNewAVPlayer_?"+path);
        else lazy.openWin("aj://playAVPlayer_?"+path);
    }else{
        if(soundbol==0){//点击同一个声音播放
            soundbol = 1;
            if(mp3bol) lazy.openWin("aj://playNewAVPlayer_?"+path);
            else lazy.openWin("aj://playAVPlayer_?"+path);
        }else{//同一个声音暂停
            soundbol = 0;
            lazy.openWin("aj://stopAVPlayer");
        }
    }
}
lazy.closeSound = function() {
    lazy.openWin("aj://stopAVPlayer");
}
//拍照
lazy.startPhoto = function(uploadurl,back) {
    var funname = lazy.callBack(back);
    lazy.openWin("aj://takePhotos_?"+uploadurl.replace(/&/g,"-*-")+"&"+funname);
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
    lazy.openWin("aj://takePhotos_?"+uploadurl.replace(/&/g,"-*-")+"&"+funname);
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
//打电话
lazy.Call=function(num){
    lazy.openWin("AJ://MakeAPhoneCall_?"+num);
}
//取消返回键
lazy.CancelgoBack=function(bol){
}
//返回首页
lazy.goAdmin=function(){
    lazy.openWin("aj://backFrstItemViewController");
}
//获取个人信息
lazy.getPerson=function(back){
    var funname = lazy.callBack(back);
    lazy.openWin("aj://presentAllContactsViewController_?"+funname);
}
//打开文件
lazy.openFile=function(){
}
//打开录像
lazy.playVideo=function(){
}
//定位
lazy.getGps=function(back){
    var funname = lazy.callBack(back);
    lazy.openWin("aj://initializeLocationService_?"+funname);
}
//返回登录信息
lazy.personmessage = function(back) {
    var funname = lazy.callBack(back);
    lazy.openWin("aj://PersonalMessage_?"+funname)
}
//获取时间
lazy.getDate=function(type,back){
    var funname = lazy.callBack(back);
    lazy.openWin("aj://datePicker_?"+type+"&"+funname)
}