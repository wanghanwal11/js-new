!function(){function f(a,b){var c=getData(a),d=document.getElementById(a);h(c,function(){b&&b()},d)}function g(a,b){function f(){if(0==d.length)c>e?h(a[e],function(){e++,f()}):(d=k(j(a)),b());else if(c>e)if(void 0!=d[e]&&void 0!=a[e])if(j(d[e])==j(a[e]))e++,f();else{var g=document.body.childNodes[e];h(a[e],function(){e++,f()},g)}else void 0!=d[e]&&void 0==a[e]?(document.body.removeChild(document.body.childNodes[e]),e++,f()):void 0==d[e]&&void 0!=a[e]&&h(a[e],function(){e++,f()});else d=k(j(a)),b()}var c=a.length>=d.length?a.length:d.length,e=0;f()}function h(a,c,d){var f,g;a["id"]||(a["id"]=lazy.getAutoId()),e[a["id"]]=a,a["type"]?(f=a["type"]+"TypeCss",n(f,b+"LazyUI/js/"+a["type"]+"/"+a["type"]+".css"),g=a["type"]+"TypeJs",m(g,b+"LazyUI/js/"+a["type"]+"/"+a["type"]+".js",function(){var b=document.createElement("div");if(b.id=a["id"],b.setAttribute("type",a["type"]),a.style)for(str in a.style)void 0!=b.style[str]&&(b.style[str]=a.style[str]);lazy.plugins[a["type"]].init(b,a),document.body.insertBefore(b,d),d&&document.body.removeChild(d),c&&c()})):alert(a["id"]+":类型type不存在!")}function j(a){return JSON.stringify(a)}function k(a){return JSON.parse(a)}function l(a){var c,d,e,f;if("#"==a[0])try{return document.querySelector(a)}catch(b){return document.getElementById(a.replace(/\#/,""))}else try{return document.querySelectorAll(a)}catch(b){if("."==a[0])return document.getElementsByClassName(a.replace(/\./,""));if(a.match(/\[.*\]/)){for(c=a.replace(/\]/,"=").replace(/\[/,"=").split("="),d=document.getElementsByTagName(c[0]),e=[],f=0;f<d.length;f++)d[f].getAttribute("'"+c[1]+"'")==c[2]&&e.push(d[f]);return e}return document.getElementsByTagName(a)}}function m(a,b,c){var d,e;document.getElementById(a)?c&&c():(d=document.getElementsByTagName("head")[0],e=document.createElement("script"),e.id=a,e.src=b,d.appendChild(e),e.onload=function(){c&&c()},e.onerror=function(){c&&c()})}function n(a,b){var c,d;document.getElementById(a)||(c=document.getElementsByTagName("head")[0],d=document.createElement("link"),d.id=a,d.rel="stylesheet",d.href=b,c.appendChild(d))}var b=l("script[src*=admin]")[0].getAttribute("src").match(/.*(?=LazyUI)/g)[0],c=20,d=[],e={};window.lazyWindow={browserType:"",startConfig:{}},window.setData=function(a,b){"string"==typeof a?f(a):"object"==typeof a&&g(a,function(){b&&b()})},window.getData=function(a){return e[a]?e[a]:null},window.start=function(a,d){var e,f,g,h;d&&(lazyWindow.startConfig=d),e=navigator.userAgent.toLowerCase(),lazyWindow.browserType=/MicroMessenger/i.test(e)?"weixin":/android/i.test(e)?"android":/(iPhone|iPad|iPod|iOS)/i.test(e)?"ios":/(Win32|Win64)/i.test(navigator.platform)?"pc":"pc",f=document.documentElement,g="orientationchange"in window?"orientationchange":"resize",h=function(){var a=f.clientWidth;a&&(c=18*(a/320),f.style.fontSize=c+"px","pc"==lazyWindow.browserType&&(f.style.fontSize="22px"))},document.addEventListener&&(window.addEventListener(g,h,!1),document.addEventListener("DOMContentLoaded",h,!1),n("adminTypeCss",b+"LazyUI/css/admin.css"),m("adminMethodTypeJs",b+"LazyUI/js/adminMethod.js",function(){m("methodTypeJs",b+"LazyUI/js/method.js",function(){n("colorTypeCss",b+"LazyUI/css/"+(lazy.colorCss?lazy.colorCss:"color_weixin.css")),lazy.fontSize=c,lazy.url=b,lazy.loadJs=m,lazy.loadCss=n,lazy.groups={},lazy.plugins={},window._$=l,lazy.platformInit(function(){document.body.setAttribute("ontouchstart","ontouchstart"),a()})})}))}}(window);