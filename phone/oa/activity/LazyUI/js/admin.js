!function(){function h(a,b){var c,d,e,f;if(!a["id"]&&!a["type"])return alert("id或者type不存在"),void 0;if(c=a.id,d=document.getElementById(c)){if(g[c]=a,e=d.nextSibling,f=u("div","#"+c,{type:a["type"]}),a.class&&(f.className=a.class),a.style)for(str in a.style)void 0!=f.style[str]&&(f.style[str]=a.style[str]);document.body.removeChild(d),lazy.plugins[a["type"]].init(f,a),document.body.insertBefore(f,e),b&&b()}else alert(c+" 控件不存在")}function i(a){0!=e.length&&JSON.stringify(e)!=JSON.stringify(f)&&lazy.for(e,function(a){if(-1==f.indexOf(a)){g[a]&&delete g[a];var b=document.getElementById(a);b&&document.body.removeChild(b)}}),e=o(f),a()}function j(a,b){function d(){c<a.length?k(a[c],function(){c++,d()}):b()}var c=0;d()}function k(a,c){var e,h,i;a["id"]||(a["id"]=r()),e=a["id"],f.push(e),g[e]?(d=e,c&&c()):(g[e]=a,a["type"]?(h=a["type"]+"TypeCss",x(h,b+"LazyUI/js/"+a["type"]+"/"+a["type"]+".css"),i=a["type"]+"TypeJs",w(i,b+"LazyUI/js/"+a["type"]+"/"+a["type"]+".js",function(){var f,b=u("div","#"+e,{type:a["type"]});if(a.class&&(b.className=a.class),a.style)for(str in a.style)void 0!=b.style[str]&&(b.style[str]=a.style[str]);lazy.plugins[a["type"]].init(b,a),f=document.getElementById(d),document.body.insertBefore(b,f?f.nextSibling:null),d=e,c&&c()})):alert(a["id"]+":类型type不存在!"))}function m(a,b){localStorage.setItem(a,JSON.stringify(b))}function n(a){if(localStorage.getItem(a)){var b=localStorage.getItem(a);return JSON.parse(b)}return null}function o(a){return JSON.parse(JSON.stringify(a))}function p(a,b){for(var c=0;c<a.length;c++)b(a[c],c)}function r(){return"LazyAuto"+q++}function s(a){m("constant",a)}function t(){return n("constant")}function u(a,b,c){var e,d=document.createElement(a);if(b&&(-1!=b.indexOf("#")?d.id=b.replace("#",""):d.className=b.replace(".","")),"a"==a&&d.setAttribute("href","javascript:;"),c)for(e in c)d.setAttribute(e,c[e]);return d}function v(a){var c,d,e,f;if("#"==a[0])try{return document.querySelector(a)}catch(b){return document.getElementById(a.replace(/\#/,""))}else try{return document.querySelectorAll(a)}catch(b){if("."==a[0])return document.getElementsByClassName(a.replace(/\./,""));if(a.match(/\[.*\]/)){for(c=a.replace(/\]/,"=").replace(/\[/,"=").split("="),d=document.getElementsByTagName(c[0]),e=[],f=0;f<d.length;f++)d[f].getAttribute("'"+c[1]+"'")==c[2]&&e.push(d[f]);return e}return document.getElementsByTagName(a)}}function w(a,b,c){var d,e;document.getElementById(a)?c&&c():(d=document.getElementsByTagName("head")[0],e=document.createElement("script"),e.id=a,e.src=b,d.appendChild(e),e.onload=function(){c&&c()},e.onerror=function(){c&&c()})}function x(a,b){var c,d;document.getElementById(a)||(c=document.getElementsByTagName("head")[0],d=document.createElement("link"),d.id=a,d.rel="stylesheet",d.href=b,c.appendChild(d))}function y(a){return a&&"object"==typeof a&&"number"==typeof a.length&&"function"==typeof a.splice&&!a.propertyIsEnumerable("length")}var q,b=v("script[src*=admin]")[0].getAttribute("src").match(/.*(?=LazyUI)/g)[0],c=t(),d=null,e=[],f=[],g={};window.setData=function(a,b){y(a)?(f=[],j(a,function(){i(function(){b&&b()})})):"object"==typeof a&&h(a,b)},window.getData=function(a){return g[a]?g[a]:null},window.start=function(a){var f,g,e=document.documentElement;c||(c={},f=e.clientWidth,c.fontSize=15*(f/320),e.style.fontSize=c.fontSize+"px",g=navigator.userAgent.toLowerCase(),"vitoandroid"==g.match(/vitoandroid/i)?c.browserType="vitoandroid":"vitoios"==g.match(/vitoios/i)?c.browserType="vitoios":"micromessenger"==g.match(/MicroMessenger/i)?c.browserType="weixin":g.match(/(iPhone|iPad|iPod|iOS)/i)?c.browserType="ios":g.match(/android/i)?c.browserType="android":(c.browserType="pc",c.fontSize=18,e.style.fontSize="18px"),s(c)),x("adminTypeCss",b+"LazyUI/css/admin.css"),w("methodTypeJs",b+"LazyUI/js/method.js",function(){lazy.setParameter=m,lazy.getParameter=n,lazy.getDom=v,lazy.url=b,lazy.fontSize=c.fontSize,lazy.loadJs=w,lazy.loadCss=x,lazy.for=p,lazy.getAutoId=r,lazy.creat=u,lazy.plugins={},lazy.isArray=y,lazy.browserType=c.browserType,lazy.setConstant=s,lazy.init?lazy.init(a):a()})},q=0}(window);