lazy.openWin = function(url) {
    window.location.href = url;
}
lazy.goBack = function(n) {
    window.history.go(n||-1);
}
lazy.JSONP = function() {
    
}
lazy.GET = function() {
    GP(url, 'GET', back1, back2, num==undefined?0:num);
}
lazy.POST = function(url, back1, back2, num) {
    GP(url, 'POST', back1, back2, num===undefined?0:num);
}

function GP(url, type, back1, back2, num) {
    if(num!=null)loadingFun(num, '加载中...');
    lazy.ajax({
        url : url,
        type : type,
        success : function(str) {
            if(num!=null)closeLoadingFun();
            try {
                var data = JSON.parse(str);
            }catch(e) {
                back2?back2(str):alert2Fun(str);
                return;
            }
            if(data.isSucceed) {
                back1&&back1(data);
            }else {
                if(data.message == "nologin") {
                    lazy.openWin("login.html");
                }else {
                    back2?back2('message:'+data.message):alert2Fun('message:'+data.message);
                }
            }

        },
        error : function(str) {
            if(num!=null)closeLoadingFun();
            back2?back2(str):alert2Fun(str);
        }
    });
}