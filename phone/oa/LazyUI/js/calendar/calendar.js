lazy.plugins.calendar = {
	"init" : function(el,data) {
        el.className = "ub ub-ver";
        var arr = [];
        var xqarr0 = ["日", "一", "二", "三", "四", "五", "六"];
        var byobj;    //本月时间的初始化数据
        var quandate = data.date?new Date(data.date.replace(/-/g, "/")):new Date();  //quan天
        var trdb = lazy.creat("div", "datebutton ub");
        el.appendChild(trdb);
        var table = lazy.creat("div","table");
        el.appendChild(table);
        //生成数据
        var _content = data.content?data.content:[];
        //
        var dbobj = datebutton(trdb, function(val) {
            quandate = new Date(val);
            add(val, _content);
        }); 
        add(lazy.format(quandate.getTime(), 'yyyy-MM-dd'), _content);
        //外部数据填入
        function add(date,content) {
            //if(data.onchange)data.onchange(date);
            byobj = timechange(date);
            init();
            //显示今天
            var classname = "td"+quandate.getFullYear()+(quandate.getMonth()+1)+quandate.getDate();
            var td = el.getElementsByClassName(classname)[0];
            if(td) {
                td.getElementsByClassName("yang")[0].getElementsByTagName("span")[0].className = "green";
                td.getElementsByClassName("quan")[0].className = "quan quanclick";
            }
            //
            for(var i = 0; i < content.length; i++) {
                if(content[i].event_time) {
                    //alert(content[i].event_time)
                    var d = new Date(content[i].event_time);
                    var classname = "td"+d.getFullYear()+(d.getMonth()+1)+d.getDate();
                    var td = el.getElementsByClassName(classname)[0];
                    if(td) {
                        //state
                        var str = (""+content[i].state).substring(0,1);
                        if(str.indexOf("迟")!=-1) {
                            str = '<span class="red">'+str+'</span>';
                        }else if(str.indexOf("旷")!=-1) {
                            str = '<span class="red">'+str+'</span>';
                        }else if(str.indexOf("早")!=-1) {
                            str = '<span class="red">'+str+'</span>';
                        }else if(str.indexOf("忘")!=-1) {
                            str = '<span class="red">'+str+'</span>';
                        }else {
                            str = '';
                        }
                        td.getElementsByClassName("state")[0].innerHTML = '<span>'+str+'</span>';
                    }
                }
            }
        }
        data.add = add;
        //月份
        function datebutton(tr, back) {
            dbobj = {};
            var yuearr = ["", "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
            var title = lazy.creat("div", "ub-f1 slh title");
            title.innerHTML = '<span>'+yuearr[(quandate.getMonth() + 1)]+'　'+lazy.format(quandate.getTime(), 'yyyy-MM-dd')+'</span>';
            tr.appendChild(title);
            if(data.url) {
                var btn = lazy.creat("div", "btn");
                btn.innerHTML = '<span>统计</span>';
                btn.onclick = function() {
                    lazy.openWin(data.url+"?"+"date="+lazy.format(quandate.getTime(), 'yyyy-MM-dd'));
                }
            }
            tr.appendChild(btn);
            var input = lazy.creat("input", "input");
            input.type = "date";
            input.onclick = function() {
                this.style.opacity = 1;
            }
            input.onblur = function() {
                this.style.opacity = 0;
            }
            input.onchange = function() {
                this.style.opacity = 0;
                if(this.value != "") {
                    title.innerHTML = '<span>'+yuearr[(new Date(this.value.replace(/-/g, "/")).getMonth() + 1)]+'　'+this.value+'</span>';
                    if(back)back(this.value);
                    if(data.onchange)data.onchange(this.value+" 0:0:0");
                }
            }
            tr.appendChild(input);
            dbobj.setDate = function(str) {
                title.innerHTML = '<span>'+yuearr[(new Date(str.replace(/-/g, "/")).getMonth() + 1)]+'　'+str+'</span>';
            }
            return dbobj;
        }
        //
        function init() {
            table.innerHTML = '';
            //生成星期
            var xqtr = lazy.creat("div","tr ub");;
            for(var i = 0; i < 7; i++) {
                var td = lazy.creat("div","td ub-f1 xqtd");
                td.innerHTML = '<span>'+xqarr0[i]+'</span>';
                xqtr.appendChild(td);
            }
            table.appendChild(xqtr);
            //
            var tr;
            for(var i = 0; i < 35; i++) {
                var arrobj = {
                    "yang" : (i - byobj.xqj + 1)
                };
                if(i%7==0) {
                    tr = lazy.creat("div","tr ub");
                    table.appendChild(tr);
                }
                tr.appendChild(one(arrobj));
            }
        }
        function one(obj) {
            var classname = "td"+byobj.date.getFullYear() + (byobj.date.getMonth()+1)+obj.yang;
            var td = lazy.creat("div","td ub-f1 "+classname);
            if(obj.yang >0 && obj.yang <= byobj.ys) {
                var _html = '';
                _html += '<div class="quan"></div>';
                _html += '<div class="yang"><span>'+obj.yang+'</span></div>';
                //_html += '<div class="yin"><span>'+obj.yin+'</span></div>';
                _html += '<div class="state"><span></span></div>';
                td.innerHTML = _html;

                td.onclick = function() {
                    var quanclick = el.getElementsByClassName("quanclick")[0];
                    if(quanclick) {
                         quanclick.className = "quan";
                    }
                    var quan = td.getElementsByClassName("quan")[0];
                    if(quan) {
                         quan.className = "quan quanclick";
                    }
                    var datastr = byobj.date.getFullYear() + "-" + (byobj.date.getMonth()+1) + "-" + obj.yang;
                    quandate = new Date(datastr);
                    dbobj.setDate(datastr);
                    if(data.onchange)data.onchange(datastr+" 0:0:0");
                }
            }
            return td;
        }
        //时间
        function timechange(date) {
            var newdate;
            if(date) {
                newdate = new Date(date);
            }else {
                newdate = new Date();
            }
            //月数
            var ys = new Date(newdate.getFullYear(), (newdate.getMonth()+1), 0).getDate();
            //星期
            var xqj = new Date(newdate.getFullYear(), newdate.getMonth(), 1).getDay();
            //下标
            return {"ys":ys, "xqj": xqj, "date": newdate};
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
