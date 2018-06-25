/**
 * 取得实际位置
 * 调用方式：geoFactory.getGeo();
 */
define(['jquery','app'], function ($,app) {

    app.factory('geoFactory', ['$http','$q', function($http,$q) {
       
       function getGeo(){

                var def = $q.defer();

                var options = {
                      enableHighAccuracy: true,
                }

                navigator.geolocation.getCurrentPosition(function(position){
                  var pc = position.coords,
                      lat = pc.latitude,
                      lng = pc.longitude;

                  $http.jsonp('http://api.map.baidu.com/geoconv/v1/?coords='+lng+','+lat+'&from=1&to=5&ak=A226e59f9ee3bbbe0fcc35878b45787b&callback=JSON_CALLBACK').success(
                       function(data){
                           $http.jsonp('http://api.map.baidu.com/geocoder/v2/?ak=A226e59f9ee3bbbe0fcc35878b45787b&callback=?&location='+data.result[0].y+','+data.result[0].x+'&output=json&pois=0&callback=JSON_CALLBACK').success(function(result) {
                                  def.resolve(result);
                             })
                       }     
                  )
                  },function(error){
                  switch(error.code)
                  {
                  case error.PERMISSION_DENIED:
                    alert("请打开定位功能！")
                    break;
                  case error.POSITION_UNAVAILABLE:
                    alert("不支持定位服务！")
                    break;
                  case error.TIMEOUT:
                    alert("请求超时！")
                    break;
                  case error.UNKNOWN_ERROR:
                    alert("未知异常！")
                    break;
                  }
                },options)

              return def.promise;
       }
      

      return {

        getGeo : getGeo

      }

  }])
    app.factory('startphone', ['$http','$q', function($http,$q) {

        function startphone(){
            var  input = $('<input type="file" accept="video/*;capture=camcorder">');
            $('body').append(input);
            var demo_h5_upload_ops = {
                init:function(){
                    this.eventBind();
                },
                eventBind:function(){
                    var that = this;
                    $("#upload").change(function(){
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            that.compress(this.result);
                        };
                        reader.readAsDataURL(this.files[0]);
                    });
                },
                compress : function (res) {
                    var that = this;
                    var img = new Image(),
                        maxH = 300;

                    img.onload = function () {
                        var cvs = document.createElement('canvas'),
                            ctx = cvs.getContext('2d');

                        if(img.height > maxH) {
                            img.width *= maxH / img.height;
                            img.height = maxH;
                        }
                        cvs.width = img.width;
                        cvs.height = img.height;

                        ctx.clearRect(0, 0, cvs.width, cvs.height);
                        ctx.drawImage(img, 0, 0, img.width, img.height);
                        var dataUrl = cvs.toDataURL('image/jpeg', 1);
                        $(".img_wrap").attr("src",dataUrl);
                        $(".img_wrap").show();
                        // 上传略
                        that.upload( dataUrl );
                    };

                    img.src = res;
                },
                upload:function( image_data ){
                    //$('body').append($('<img src='+image_data+'>'));
                    /*这里写上次方法,图片流是base64_encode的*/
                }
            };


            $(document).ready( function(){
                demo_h5_upload_ops.init();
            } );

        }
        return {
            startphone : startphone

        }

    }])
})
