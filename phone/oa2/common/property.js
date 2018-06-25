//域名
var ip = "";
if(document.location.href.indexOf("DDS")!=-1) {
    ip = document.location.origin+"/DDS/"   
}else {
    ip = document.location.origin;
}
//本地打开下面注释
//ip = "http://192.168.0.49:8080/DDS";
// ip = "http://vito.tunnel.qydev.com/ceshi";
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