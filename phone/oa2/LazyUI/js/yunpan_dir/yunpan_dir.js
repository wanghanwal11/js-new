lazy.plugins.yunpan_dir = {
	"init" : function(el,data) {
        var arr = data.table?data.table:[];
        var listarr = [];
        var checkboxclassname = "hide";
        //添加头部
        var headerarr = ["多选", "新建文件夹", "上传"];
        var yunpan_header = lazy.creat("div","yunpan_header ub");
        var all_header = lazy.creat("div","all_header");
        var all_headerdiv = lazy.creat("div","all_headerdiv ub");
        //取消和全选
        var quxiao = lazy.creat("a","quxiao");
        quxiao.innerHTML = "<span class='lan'>取消</span>";
        quxiao.onclick = function() {
            data.checkbox();
            all_header.style.display = "none";
            all_footer.style.display = "none";
        }
        var zw = lazy.creat("div","ub-f1");
        var quanxuan = lazy.creat("a","quanxuan");
        quanxuan.onclick = function() {
            data.allcheckbox();
        }
        quanxuan.innerHTML = "<span class='lan'>全选</span>";
        all_headerdiv.appendChild(quxiao);
        all_headerdiv.appendChild(zw);
        all_headerdiv.appendChild(quanxuan);
        all_header.appendChild(all_headerdiv);
        //尾部
        var all_footer = lazy.creat("div","all_footer");
        var all_footerdiv = lazy.creat("div","all_footerdiv ub");
        //删除和移动
        var shanchu = lazy.creat("a","shanchu");
        shanchu.innerHTML = "<span class='hong'>删除</span>";
        shanchu.onclick = function() {
            var list = el.getElementsByClassName("checkbox_click");
            if(list.length == 0) {
                lazy.alert2("请选择文件！");
            }else {
                lazy.alertyesno("确认删除？", function() {
                    var list = el.getElementsByClassName("checkbox_click");
                    var _arr = [];
                    for(var i = 0; i < list.length; i++) {
                        var _k = list[i].getAttribute("index")*1;
                        _arr.push(listarr[_k]);
                    }
                    data.select("删除", _arr);
                }, function() {
                    
                });
            }
        }
        var zw2 = lazy.creat("div","ub-f1");
        var yidong = lazy.creat("a","yidong");
        yidong.onclick = function() {
            var list = el.getElementsByClassName("checkbox_click");
            if(list.length == 0) {
                lazy.alert2("请选择文件！");
            }else {
                var list = el.getElementsByClassName("checkbox_click");
                var _arr = [];
                for(var i = 0; i < list.length; i++) {
                    var _k = list[i].getAttribute("index")*1;
                    _arr.push(listarr[_k]);
                }
                data.select("移动", _arr);
            }
        }
        yidong.innerHTML = "<span class='lan'>移动</span>";
        all_footerdiv.appendChild(shanchu);
        all_footerdiv.appendChild(zw2);
        all_footerdiv.appendChild(yidong);
        all_footer.appendChild(all_footerdiv);
        //
        for(var i = 0; i < headerarr.length; i++) {
            h_one(headerarr[i]);
        }
        function h_one(str) {
            var td = lazy.creat("a","headerbtn ub-f1");
            td.innerHTML = "<span>"+str+"</span>";
            td.onclick = function() {
                if(str == "多选") {
                    data.checkbox();
                    all_header.style.display = "block";
                    all_footer.style.display = "block";
                }else if(str == "新建文件夹") {
                    data.select("新建文件夹", {});
                }else if(str == "上传") {
                    data.select("上传", {});
                }
            }
            yunpan_header.appendChild(td);
        }
        if(data.header) el.appendChild(yunpan_header);
        el.appendChild(all_header);
        el.appendChild(all_footer);
        
        if(!data.header) {
            //添加确定按钮 和新建文件夹
            var queding_footer = lazy.creat("div","queding_footer");
            var queding_footerdiv = lazy.creat("div","queding_footerdiv ub");
            //确定和新建
            var _quxiao = lazy.creat("a","quxiao");
            _quxiao.innerHTML = "<span class='lan'>取消</span>";
            _quxiao.onclick = function() {
                data.select("取消", {});
            }
            var xinjian = lazy.creat("a","xinjian");
           // xinjian.innerHTML = "<span class='lan'>新建文件夹</span>";
            xinjian.onclick = function() {
               // data.select("新建文件夹", {});
            }
            var zw3 = lazy.creat("div","ub-f1");
            var zw4 = lazy.creat("div","ub-f1");
            var queding = lazy.creat("a","queding");
            queding.onclick = function() {
                data.select("移动到当前目录", {});
            }
            queding.innerHTML = "<span class='lan'>移动到当前目录</span>";
            queding_footerdiv.appendChild(_quxiao);
            queding_footerdiv.appendChild(zw3);
            queding_footerdiv.appendChild(xinjian);
            queding_footerdiv.appendChild(zw4);
            queding_footerdiv.appendChild(queding);
            queding_footer.appendChild(queding_footerdiv);
            el.appendChild(queding_footer);
        }
        //
        var table = lazy.creat("div","table");
        var k = 0;
        for(var i = 0; i < arr.length; i++) {
            add(arr[i]);
        }
        el.appendChild(table);
        var zhanwei = lazy.creat("div","zhanwei");
        el.appendChild(zhanwei);
        function add(obj) {
            listarr.push(obj);
            var tr = lazy.creat("div","tr ub");
            var checkbox = lazy.creat("div","checkbox " + checkboxclassname, {
                "index" : k
            });
            k++;
            var type = obj.type?obj.type:"file";
            var icon;
            switch(type) {
                case "img" :
                    icon = lazy.creat("div","icon img"); 
                    icon.style.backgroundImage = 'url('+obj.url+')';
                break;
                case "doc" :
                    icon = lazy.creat("div","icon doc"); 
                break;
                case "audio" :
                    icon = lazy.creat("div","icon audio"); 
                break;
                case "video" :
                    icon = lazy.creat("div","icon video"); 
                break;
                case "other" :
                    icon = lazy.creat("div","icon other"); 
                break;
                case "folder" :
                    //dir
                    switch(obj.h1) {
                        case "我收到的" : 
                            icon = lazy.creat("div","icon wsdd");
                        break;
                        case "共享文件" : 
                            icon = lazy.creat("div","icon gxwj");
                        break;
                        default :
                            icon = lazy.creat("div","icon dir");
                        break;
                    }
                break;
                default :
                    icon = lazy.creat("div","icon doc"); 
                break;
            }
            var td = lazy.creat("a","td ub-f1");
            var _html = '';
            _html += '<div class="h1 slh"><span>'+(obj.h1?obj.h1:"")+'</span></div>';
            _html += '<div class="ub td2"><div class="h2 ub-f1 slh"><span>'+(obj.h2?obj.h2:"")+'</span></div><div class="h3"><span>'+(obj.h3?obj.h3:"")+'</span></div></div>';
            td.innerHTML = _html;
            var btn = lazy.creat("a","btn");
            if(obj.h1 != "我收到的" && obj.h1 != "共享文件") {
                tr.appendChild(checkbox);
            }
            tr.appendChild(icon);
            tr.appendChild(td);
            if(data.header) {
                if(obj.h1 != "我收到的" && obj.h1 != "共享文件" && obj.rights!=false) {
                    tr.appendChild(btn);
                }
            }
            
            btn.onclick = function() {
                if(obj.select && checkboxclassname == "hide") {
                    obj.select("选择", obj);
                }
            }
            td.onclick = function() {
                if(obj.select && checkboxclassname == "hide") {
                    obj.select("列表", obj);
                }
            }
            table.appendChild(tr);
        }
        data.move = function(url) {
            var iframe = document.getElementById("yunpan_iframe");
            if(!iframe) {
                iframe = lazy.creat("iframe", "#yunpan_iframe");
                document.body.appendChild(iframe);
            }
            iframe.src = url;
            iframe.style.left = "0%";
            iframe.style.webkitAnimation = "yunpan_iframe_an 0.5s";
                
        }
        window.moveover = function() {
            var iframe = document.getElementById("yunpan_iframe");
            iframe.style.left = "100%";
            iframe.style.webkitAnimation = "yunpan_iframe_an1 0.5s";
        }
        data.clean = function() {
           table.innerHTML = ""; 
        }
        data.checkbox = function() {
            if(checkboxclassname == "hide") {
                checkboxclassname = "show";
            }else {
                checkboxclassname = "hide";
            }
            var list = el.getElementsByClassName("checkbox");
            for(var i = 0; i < list.length; i++) {
                list[i].className = "checkbox " + checkboxclassname;
                list[i].onclick = function() {
                    var cn = this.className;
                    if(cn.indexOf("checkbox_click")!=-1) {
                        this.className = 'checkbox ' + checkboxclassname;
                    }else {
                        this.className = 'checkbox checkbox_click ' + checkboxclassname;
                    }
                }
            }
        }
        data.allcheckbox = function() {
            var list = el.getElementsByClassName("checkbox");
            for(var i = 0; i < list.length; i++) {
                list[i].className = "checkbox checkbox_click";
            }
        }
        data.add = add;
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
