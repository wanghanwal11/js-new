//版本号
var version = "04.01.0301";
//项目名
var project = "vitooa";
//项目中文名
var projectName="OA管理系统";
//域名
var ip = "";
if(document.location.href.indexOf("DDS")!=-1) {
    ip = document.location.origin+"/DDS/"   
}else {
    ip = document.location.origin;
}
//本地打开下面注释
//ip = "http://wang.tunnel.qydev.com/"
//ip = "http://duanshang.tunnel.qydev.com/DDS"
//ip = "http://192.168.0.116:83"
//ip = "http://192.168.0.10:8011/DDS"
//ip ="http://vit5.com"
//ip = "http://192.168.0.27:8080/DDS"
//ip = "http://192.168.0.14:8080/DDS"
//ip = "http://192.168.0.59:8080/DDS"
//ip = "http://192.168.0.203:8080/DDS"
//p="http://wangmingming0921.tunnel.qydev.com/DDS"
//ip="localhost:8080/DDS"
//ip="http://125.64.222.249:9000"
//ip = "http://localhost:8080/DDS"
//ip = "http://192.168.0.35:5000"
//ip = "http://192.168.1.104:5000"
ip = "http://vito.tunnel.qydev.com/xfds"
//////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////
/////////////////////////////////
////////////////////////不用改
//////////////////
//////////
//////
///

function getIP() {
    ip = ip.replace(/\/$/,"");
    return ip;  
}
function getVersion() {
    return version;
}