/*
 *@override weixin lazy
 */
lazy.nomove = function() {
	window.addEventListener("touchmove",function(event){
		 event.preventDefault();
	 },false);
}
//关闭
lazy.close = function() {
    
}
//拍照
lazy.startPhoto = function(back,count) {
    //lazy.callBack(back);
    wx.chooseImage({
        count: count||3, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
            var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
            var i = 0;
            var arr = [];
            //alert(localIds)
            one();
            function one() {
            	wx.uploadImage({
            	    localId: localIds[i], // 需要上传的图片的本地ID，由chooseImage接口获得
            	    isShowProgressTips: 3, // 默认为1，显示进度提示
            	    success: function (res) {
            	       
            	    	arr.push(res.serverId); // 返回图片的服务器端ID
            	        if(i < localIds.length-1) {
                        	i++;
            	        	one();
                        }else {
                           // alert("arr:"+arr)
                        	back(localIds,arr);
                        }
            	    }
            	});
            }
            //back(localIds);
        }
    });
}

lazy.previewImage = function(url,urlss){
    wx.previewImage({
        current: url, // 当前显示图片的http链接
        urls: urlss // 需要预览的图片http链接列表
    });
}

lazy.upLoad = function(localIds,back){
    one();
    var i = 0;
    function one() {
        wx.uploadImage({
            localId: localIds[i], // 需要上传的图片的本地ID，由chooseImage接口获得
            isShowProgressTips: 0, // 默认为1，显示进度提示
            success: function (res) {
                arr.push(res.serverId); // 返回图片的服务器端ID
                if(i < localIds.length-1) {
                    i++;
                    one();
                }else {
                    back(localIds,arr);
                }
            }
        });
    }
}
lazy.share = function(obj){
    wx.onMenuShareTimeline({
        title: obj.title, // 分享标题
        link: obj.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: obj.img, // 分享图标
        success: function () { 
            // 用户确认分享后执行的回调函数
        	lazy.alert2('分享成功')
        },
        cancel: function () { 
            // 用户取消分享后执行的回调函数
        }
    });
    wx.onMenuShareAppMessage({
        title: obj.title, // 分享标题
        desc: obj.summary, // 分享描述
        link: obj.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: obj.img, // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () { 
        	lazy.alert2('分享成功')
            // 用户确认分享后执行的回调函数
        },
        cancel: function () { 
            // 用户取消分享后执行的回调函数
        }
    });
}
lazy.downLoad = function(serverIds,back){
     //alert(serverIds)
    wx.downloadImage({
        serverId: serverIds[0], // 需要下载的图片的服务器端ID，由uploadImage接口获得
        isShowProgressTips: 1, // 默认为1，显示进度提示
        success: function (res) {
           // alert(JSON.stringify(res))
            var localId = res.localId; // 返回图片下载后的本地ID
            //alert("back:"+c)
            var arr = [];
            arr.push(localId)
            back(arr)
        },
        fail:function(e){
            alert(JSON.stringify(e))
        }
    }); 
   // alert(3)
}

lazy.downLoad = function(serverIds,back){
     //alert(serverIds)
    wx.downloadImage({
        serverId: serverIds[0], // 需要下载的图片的服务器端ID，由uploadImage接口获得
        isShowProgressTips: 1, // 默认为1，显示进度提示
        success: function (res) {
           // alert(JSON.stringify(res))
            var localId = res.localId; // 返回图片下载后的本地ID
            //alert("back:"+c)
            var arr = [];
            arr.push(localId)
            back(arr)
        },
        fail:function(e){
            alert(JSON.stringify(e))
        }
    }); 
   // alert(3)
}

lazy.getGpsWX = function(back){
    wx.getLocation({
        type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: function (res) {
            back({"lat" : res.latitude, "lng" : res.longitude});
        },
         fail:function(e){
            alert(JSON.stringify(e))
        }
    });
}
lazy.startRecord=function(back){
    wx.startRecord();
}
lazy.stopRecord=function(back){
    wx.stopRecord({
        success: function (res) {
                var localId = res.localId;
                wx.uploadVoice({
                    localId: localId, // 需要上传的音频的本地ID，由stopRecord接口获得
                    isShowProgressTips: 1, // 默认为1，显示进度提示
                    success: function (res) {
                        var serverId = res.serverId; // 返回音频的服务器端ID
                        back(serverId,localId)
                    }
                });

        }
    });
}
lazy.playVoice=function(id){
    wx.playVoice({
        localId: id // 需要播放的音频的本地ID，由stopRecord接口获得
    });
}
lazy.stopVoice=function(id){
    wx.stopVoice({
        localId: id // 需要停止的音频的本地ID，由stopRecord接口获得
    });
}
lazy.stopVoiceJt=function(back){
    wx.onVoicePlayEnd({
        success: function (res) {
            var localId = res.localId; // 返回音频的本地ID
            back(localId)
        }
    });
}