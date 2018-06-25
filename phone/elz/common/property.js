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
//ip = "http://192.168.0.127"
// ip = "http://192.168.0.206:8080/DDS"
//ip = "http://192.168.0.206:8080/DDS"
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