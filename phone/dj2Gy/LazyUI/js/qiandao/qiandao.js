var myapp=angular.module('myapp',[])
myapp.controller("qiandao",function($scope,httpService,zhezhao,getIP){
    httpService.getHttpService(getIP.getIP()+'/party/DJ_MemberScore/getDaily.ht',function(data){
        $scope.bool=!data.rows[0].sign;
        $scope.count=data.rows[0].count;
    },function(data){
    })
    $scope.title=new Date().toLocaleDateString();
    $scope.tan=function(){
        httpService.getHttpService(getIP.getIP()+'/party/DJ_Sign/sign.ht',function(data){
            zhezhao.show("../LazyUI/js/qiandao/qdcg.png")
            $scope.bool = !$scope.bool;
            $scope.count++;
        },function(data){
        })

        }

})
myapp.service("zhezhao",function(){
   this.show=function(url){
       var zhezhao=$('<div class="zhezhao"></div>').appendTo($('body')).on("click",function(){
           this.remove()
       })
       var hei=$('<div class="zhezhao1"></div>').appendTo(zhezhao)
       var div=$('<div class="img"><img src='+url+'></div>').appendTo(zhezhao)
   }
})
myapp.service("getIP",function(){
    this.getIP=function(ip1){
        var ip = "";
        if(document.location.href.indexOf("DDS")!=-1) {
            ip = document.location.origin+"/DDS/"
        }else {
            ip = document.location.origin;
        }
        if(ip1){
            ip=ip1
        }
        ip = ip.replace(/\/$/,"");
        return ip;
    }
})
myapp.service("httpService",function($http){
    this.getHttpService=function(url,back1,back2){
        $http({
            url:url,
            method:'GET'
        }).success(function(data,header,config,status){
            if(data.isSucceed) {
                back1(data);
            }else {
                if(data.message == "noLogin") {
                   // lazy.goLogin();
                }else if(back2) {
                    back2(data.message?data.message:"message is null");
                }
            }
        }).error(function(data,header,config,status){

        });
    }
})
