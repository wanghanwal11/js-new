lazy.plugins.group3 = {
    
    "init" : function(_el, data){
        var childobj = {};//子对象集合
        var headerlist = data.header;
        var footerlist = data.footer;
        var header = lazy.creat("div","#header");
        var content = lazy.creat("div","#content");
        var footer = lazy.creat("div","#footer");
        _el.appendChild(header);
        _el.appendChild(content);
        _el.appendChild(footer);
        document.body.appendChild(_el);
        setdata(header,headerlist,function(){
            setdata(footer,footerlist,function(){
                if(!lazy.loadPageBol) {
                    lazy.loadPageBol = true;
                    lazy.openIframe(lazy.winName+"_content.html");
                    var s = lazy.getElStyle("#content");
                }
                window.onorientationchange = window.onresize = function() {
                    lazy.changeIframe();
                }
            });
        });
        //
        function getData(id) {
            if(childobj[id])
            return childobj[id];
        }
        data.getData = getData;
        //
        function setdata(pel,arr,back) {
            var k = 0;
            setdataone(arr[k]);
            function setdataone(json) {
                if(k<arr.length) {
                    if(!json["id"]) json["id"] = lazy.getAutoId();
                    childobj[json["id"]] = json;//存储子集
                    if(json["type"]) {
                        var typecssname = json["type"]+'TypeCss';
                        lazy.loadCss(typecssname,lazy.url+'LazyUI/js/'+json["type"]+'/'+json["type"]+'.css');
                        var typejsname = json["type"]+'TypeJs';
                        lazy.loadJs(typejsname,lazy.url+'LazyUI/js/'+json["type"]+'/'+json["type"]+'.js',function() {
                            var el = document.createElement('div');
                            el.id = json["id"];
                            el.setAttribute("type",json["type"]);
                            if(json.style) {
                                for(str in json.style) {
                                    if(el.style[str]!=undefined)el.style[str] = json.style[str];
                                }
                            }
                            lazy.plugins[json["type"]].init(el,json);
                            pel.appendChild(el);
                            //
                            k++;
                            setdataone(arr[k]);
                        });
                    }else {
                        alert(json["id"]+':类型type不存在!');
                    }
                }else {
                    back();
                }
            }
        }
        
    },
    "edit" : function(parentEl, el, data){
        
    }
	
}