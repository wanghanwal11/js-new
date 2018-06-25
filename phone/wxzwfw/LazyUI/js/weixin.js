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
            one();
            function one() {
            	wx.uploadImage({
            	    localId: localIds[i], // 需要上传的图片的本地ID，由chooseImage接口获得
            	    isShowProgressTips: 1, // 默认为1，显示进度提示
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
            //back(localIds);
        }
    });
}

lazy.getGps = function(back){
    wx.getLocation({
        type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: function (res) {
            back({"lat" : res.latitude, "lng" : res.longitude});
        }
    });
}
