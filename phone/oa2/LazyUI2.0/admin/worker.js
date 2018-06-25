//importScripts('http://192.168.0.42/Route/LazyUI2.0/admin/Lazy.js');
var ajaxList = [];
var k = -1;
onmessage = function(event) {
    var obj = event.data;
    if(typeof obj == 'object') {
        switch(obj.type) {
            case 'ajaxList' : 
                var data = obj.data || {};
                ajaxList.push({
                    type : data.type,
                    url : data.url,
                    data : data
                });
                if(k === -1) {
                    ajaxListFun();
                }
                break;
            case 'string' :
                log(obj.message);
                break;
            case 'clear' :
                clear();
                break;
        }
    }else {
        log('worker只能是object类型');
    }
    //postMessage('这是按钮');
}
function clear() {
    k = -1;
    ajaxList = [];
}
function ajaxListFun() {
    k = 0;
    one();
    function one() {
        var obj = ajaxList[k];
        var xmlhttp = new XMLHttpRequest();
        if(obj.type == 'POST') {
            
            var arr = obj.url.split("?");
            if(arr[1]){
                arr[1] += '&cache_version='+(new Date().getTime());
            }else {
                arr[1] = 'cache_version='+(new Date().getTime());
            }
            xmlhttp.open("POST",arr[0],true);
            xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xmlhttp.send(arr[1]);
        }else {
            var url = obj.url;
            if(obj.url.indexOf('?')!=-1) {
                url += '&cache_version='+(new Date().getTime());
            }else {
                url += '?cache_version='+(new Date().getTime());
            }
            xmlhttp.open('GET', url, true);
            xmlhttp.send();
        }
        //xmlhttp.open(obj.type || "GET",obj.url+'?cache_version='+(new Date().getTime()),true);
        //xmlhttp.send();
        xmlhttp.onreadystatechange=function() {
            if(xmlhttp.readyState==4 && xmlhttp.status==200) {
                postMessage({type:'ajaxList', message:xmlhttp.responseText, data:obj.data});
                if(k < ajaxList.length-1) {
                    k++;
                    one();
                }else {
                    k = -1;
                    ajaxList = [];
                }
                //postMessage({type:'ajax', message:xmlhttp.responseText, obj:obj});
            }else if(xmlhttp.status==0 || (xmlhttp.status+"").match(/(4|5)\d\d/)){
                log('ajaxList'+obj.url+'队列失败');
                if(k < ajaxList.length-1) {
                    k++;
                    one();
                }else {
                    k = -1;
                    ajaxList = [];
                }
            }
        }
    }
}
function log(obj) {
    postMessage({type:'log', message: obj});
}