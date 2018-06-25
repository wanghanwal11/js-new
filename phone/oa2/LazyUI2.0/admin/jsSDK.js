lazy.openWin = function(url) {
    window.location.href = url;
}
lazy.goBack = function(n) {
    window.history.go(n === undefined ? -1 : n);
}
lazy.refresh = function() {
    window.location.reload();
}
/*lazy.getYMD2 = function(year, month) {
    var arr = [];
    var date = new Date();
    var y = date.getFullYear();
    if (!year) {
        for (var i = 0; i < 10; i++) {
            arr.push({
                name : y - i,
                value : y - i,
                type : 'year'
            });
        }
    } else if (!month) {
        for (var i = 1; i < 13; i++) {
            arr.push({
                name : i,
                value : year + '-' + (i < 10 ? '0' + i : i),
                type : 'month'
            });
        }
    } else {
        var date = new Date(year, month, 0);
        for (var i = 0; i < date.getDate(); i++) {
            arr.push({
                name : i + 1,
                value : year + '-' + (month < 10 ? '0' + month : month) + '-' + ((i + 1) < 10 ? '0' + (i + 1) : (i + 1)),
                type : 'day'
            });
        }
    }
    return arr;
}*/
lazy.getYMD = function(x,year, month) {
    var arr = [];
    var date = new Date();
    var y = date.getFullYear();
    year = parseInt(year)
    if(x){
       if(x==="true"&&year){
            for (var i = 1; i < 6; i++) {
                arr.unshift({
                    name : year + i,
                    value : year + i,
                    type : 'year'
                });
            }
            for (var i = 0; i < 6; i++) {
                arr.push({
                    name : year - i,
                    value : year - i,
                    type : 'year'
                });
            }
            return arr 
        } 
    }
    
    
    if (!year) {
        for (var i = 0; i < 10; i++) {
            arr.push({
                name : y - i,
                value : y - i,
                type : 'year'
            });
        }
    } else if (!month) {
        for (var i = 1; i < 13; i++) {
            arr.push({
                name : i,
                value : year + '-' + (i < 10 ? '0' + i : i),
                type : 'month'
            });
        }
    } else {
        var date = new Date(year, month, 0);
        for (var i = 0; i < date.getDate(); i++) {
            arr.push({
                name : i + 1,
                value : year + '-' + (month < 10 ? '0' + month : month) + '-' + ((i + 1) < 10 ? '0' + (i + 1) : (i + 1)),
                type : 'day'
            });
        }
    }
    return arr;
}
//加载2131
lazy.loadingFun = function(title, num) {

    var loading = document.getElementById("loading");
    if (loading == undefined) {
        loading = lazy.create("div", "#loading");
        loading.id = "loading";
        var _html = '<div class="loading ub ub-ver"><div class="ub-f1"></div><div class="loadingcondiv">';
        _html += '<div class="loadingtitle lt0"></div>';
        _html += '</div><div class="ub-f1"></div></div>';
        loading.innerHTML = _html;
        document.body.appendChild(loading);
    }
    if (num == 1) {
        loading.getElementsByClassName("loading")[0].style.backgroundColor = "#fff";
        loading.getElementsByClassName("loadingtitle")[0].className = "loadingtitle lt1";
    } else {
        loading.getElementsByClassName("loading")[0].style.backgroundColor = "rgba(0,0,0,0)";
        loading.getElementsByClassName("loadingtitle")[0].className = "loadingtitle lt0";
    }
    loading.getElementsByClassName("loadingtitle")[0].innerHTML = '<span>' + (title == '' ? title : "加载中...") + '</span>';
    loading.close = function() {
        loading.style.display = "none";
    }
    loading.style.display = "block";
    return loading;

};

//loading
lazy.loading = function(title) {
    var loading = document.getElementById('myloading');
    if (!loading) {
        loading = lazy.create('div', '#myloading');
        loading.id = 'myloading';
        document.body.appendChild(loading);
    }
    loading.innerHTML = '<span>' + (title || '加载中...') + '</span>';

    loading.close = function() {
        loading.style.display = 'none';
    }
    loading.style.display = 'block';
    return loading;
}

lazy.JSONP = function() {

}
//ios和android回调函数
lazy.callBackFun = function(back) {
    var funname = lazy.getAutoId();
    window[funname] = back;
    return funname;
}
//弹窗
// lazy.alertFun=function(titile, _obj) {
// //yestitle yesfun notitle nofun
// var obj = _obj ? _obj : {};
// var alertDiv = lazy.creat("div", "alertDiv ub ub-ver");
// var _html = '<div class="ub-f1"></div>';
// _html += '<div class="alertcon">';
// _html += '<div class="alertcontent">';
// _html += '  <div class="alerttitle"><span>' + titile + '</span></div>';
// _html += '  <div class="alertbutton ub">';
// if (obj.notitle) {
// _html += '      <a class="alertbtn nobtn ub-f1"><span>' + (obj.notitle ? obj.notitle : "取消") + '</span></a>';
// _html += '      <div style="width:0.8rem;"></div>';
// }
// _html += '      <a class="alertbtn yesbtn ub-f1"><span>' + (obj.yestitle ? obj.yestitle : "确定") + '</span></a>';
// _html += '  </div>';
// _html += '</div>';
// _html += '</div>';
// _html += '<div class="ub-f1"></div>';
// alertDiv.innerHTML = _html;
// if (obj.close) {
// var closebtn = lazy.creat("a", "closebtn");
// closebtn.onclick = function() {
// document.body.removeChild(alertDiv);
// obj.close();
// }
// alertDiv.getElementsByClassName("alertcontent")[0].appendChild(closebtn);
// }
// document.body.appendChild(alertDiv);
// //事件
// alertDiv.getElementsByClassName("yesbtn")[0].onclick = function() {
// if (obj.yesfun)
// obj.yesfun();
// document.body.removeChild(alertDiv);
// }
// if (obj.notitle) {
// alertDiv.getElementsByClassName("nobtn")[0].onclick = function() {
// if (obj.nofun)
// obj.nofun();
// document.body.removeChild(alertDiv);
// }
// }
// }
// lazy.alert2Fun=function(obj) {
// if ( typeof obj != "string") {
// obj = JSON.stringify(obj);
// }
// var alert2 = lazy.creat("div", "alert2");
// alert2.innerHTML = '<div class="alert2content"><span>' + obj + '</span></div>';
// document.body.appendChild(alert2);
// setTimeout(function() {
// document.body.removeChild(alert2);
// }, 900);
// }

//ajax请求
lazy.URLRequest = function(url, successFun, errorFun, num) {
    if (num != 0) {
        var loading = lazy.loading();
    }
    lazy.ajax({
        url : url,
        type : 'POST',
        success : function(str) {
            loading.close();
            successFun && successFun(str);
        },
        error : function(str) {
            if (num != 0)
                loading.close();
            if (errorFun) {
                errorFun("网络异常：" + xmlhttp.status);
            } else {
                alert2Fun("网络异常：" + xmlhttp.status);
            }
        }
    })
};

//本地缓存请求
lazy.URLRequestCache = function(url, successFun, errorFun, num) {
    var loading = lazy.loadingFun("", 0);
    lazy.ajax({
        url : url,
        type : 'POST',
        cache : true,
        data : {
            url : url,
            filetype : 'js',
            type : 'POST'
        },
        success : function(data) {
            loading.close();
            successFun && successFun(data);
        },
        error : function(e) {
            loading.close();
            errorFun && errorFun(e);
        }
    });
};

//日期格式转换
lazy.autoFormat = function(time) {
    var ttime = new Date(time);
    var nowtime = new Date();
    var self = this;
    if (ttime.getFullYear() != nowtime.getFullYear()) {
        return self.format(time, "yyyy-MM-dd");
    } else if (ttime.getMonth() != nowtime.getMonth()) {
        return self.format(time, "MM-dd");
    }
    if (ttime.getDate() != nowtime.getDate()) {
        return self.format(time, "MM-dd");
    } else {
        return self.format(time, "HH:mm");
    }
}
lazy.format = function(time, format) {
    var t = new Date(time);
    var tf = function(i) {
        return (i < 10 ? "0" : "") + i;
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a) {
        switch (a) {
        case "yyyy":
            return tf(t.getFullYear());
            break;

        case "MM":
            return tf(t.getMonth() + 1);
            break;

        case "mm":
            return tf(t.getMinutes());
            break;

        case "dd":
            return tf(t.getDate());
            break;

        case "HH":
            return tf(t.getHours());
            break;

        case "ss":
            return tf(t.getSeconds());
            break;
        }
    });
}
//数据缓存
lazy.setParameterFun = function(name, json) {
    localStorage.setItem(name, JSON.stringify(json));
}
lazy.getParameterFun = function(name) {
    if (localStorage.getItem(name)) {
        var json = localStorage.getItem(name);
        return JSON.parse(json);
    } else {
        return null;
    }
}

lazy.GET = function() {
    GP(url, 'GET', back1, back2, num == undefined ? 0 : num);
}
lazy.POST = function(url, back1, back2, num) {
    GP(url, 'POST', back1, back2, num === undefined ? 0 : num);
}
lazy.LD = function(url, back1, back2) {
    lazy.ajax({
        url : url,
        type : 'POST',
        success : function(str) {
            try {
                var data = JSON.parse(str);
            } catch(e) {
                back2 && back2(str);
                return;
            }
            back1 && back1(data);
        },
        error : function(str) {
            back2 && back2(str);
        }
    });

}
function GP(url, type, back1, back2, num) {
    //if(num!=null)loadingFun(num, '加载中...');
    lazy.ajax({
        url : url,
        type : type,
        success : function(str) {
            //if(num!=null)closeLoadingFun();
            try {
                var data = JSON.parse(str);
            } catch(e) {
                back2 ? back2(str) : alert2Fun(str);
                return;
            }
            if (data.isSucceed) {
                back1 && back1(data);
            } else {
                if (data.message == "nologin") {
                    lazy.openWin("login.html");
                } else {
                    back2 ? back2('message:' + data.message) : alert2Fun('message:' + data.message);
                }
            }

        },
        error : function(str) {
            //if(num!=null)closeLoadingFun();
            back2 ? back2(str) : alert2Fun(str);
        }
    });
}

//设置头部
lazy.setHeader = function(obj) {
    //alert(lazy.browserType);
}
//弹出框
lazy.alert2 = function(obj) {
    if ( typeof obj != "string") {
        obj = JSON.stringify(obj);
    }
    var alert2 = lazy.create("div", "alert2");
    alert2.innerHTML = '<div class="alert2content"><span>' + obj + '</span></div>';
    document.body.appendChild(alert2);
    setTimeout(function() {
        document.body.removeChild(alert2);
    }, 900);
}

