//事件列表
PAGE_INIT = function(page) {
    lazy.setParameter("Bgcolor", "#f6bf27");
    setData([{
        id : "panel",
        type : "panel",
        list : []
    },{
        type : 'bounce',
        page : 1,
        rows : 20,
        url : urlConfig.sj,
        success : function(str, page, rows) {
            var data = {};
            try {
                data = JSON.parse(str)
            } catch(e) {
                lazy.log('后台传递非正确json格式');
            }
            console.log(data)
            lazy.for(data.rows, function(item, i) {
                var exceptionid = item.exceptionid;
                getData('panel').add({
                    "flowkey" : item.flowkey,
                    "id" : item.id,
                    "taskid" : item.id,
                    "runid" : item.runId,
                    "state" : item.hasRead,
                    "businessKey" : item.businessKey,
                    "h10" : item.id,
                    "level" : item.businessKey,
                    "exceptionid" : item.exceptionid,
                    "icon": '',
                    "iconFont" : (item.flowkey=='hjzx'?'呼叫中心':'网格化'),
                    //有序号的"h1" : '<div style="min-width:1.5rem;display:inline-block">' + (i + (page - 1) * rows + 1) + ".</div><span>"+item.subject+"</span>",
                    "h1" : '<span>'+item.subject+'</span>',
                    "h3" : '',
                    "h2" : '<span style="padding-top:1rem;color:#ccc">' + (item.createTime && lazy.autoFormat(item.createTime)) + '</span>',
                    //"h4" : '<div style="color: orange;font-size:0.7rem;">' + taskStatus(item.taskStatus) + '</div>',
                    "h4" : '<div style="color: #5fc9f7;font-size:0.7rem;">' +(item.isdb=='0'?'<span>未督办</span>':'<span style="color:rgb(63, 196, 153)">已督办</span>')+'&nbsp;&nbsp;&nbsp;&nbsp;'+taskStatus(item.taskStatus) + '</div>',
                    "onclick" : function(obj) {
                        if (obj.flowkey == 'hjzx') {
                            lazy.setParameter("htype", "待办");
                            lazy.setParameter("hjzx", obj);
                            lazy.openWin("LazyUI2.0/sjxq/hjzxxq.html");
                        } else {
                            var id = obj.id;
                            var tid = obj.taskid;
                            var state = obj.state;
                            lazy.setParameter("rid", obj.businessKey);
                            lazy.setParameter("taskid", id);
                            lazy.setParameter("evtstate", state);
                            lazy.setParameter("level", obj.businessKey);
                            lazy.setParameter("runid", obj.runid);
                            lazy.setParameter("exceptionid", obj.exceptionid);
                            if (state == 2) {
                                lazy.setParameter("mapgps", null);
                                lazy.openWin("wanggehua/shijianshangbao.html");
                            } else {
                                lazy.setParameter("rtype", "待办")
                                //lazy.openWin("wanggehua/shijianxiangqing.html");
                                lazy.openWin("LazyUI2.0/sjxq/sjxq.html");
                            }
                        }

                    }
                })
            })
        },
        error : function(e, page) {
            lazy.log(e);
        }
    }])

    //事件类型
    function taskStatus(i) {
        var h3 = "";
        if (i == "7")
            h3 = '<span style="color:green">已审核</span>';
        else if (i == "6")
            h3 = '<span style="color:#fcc374">待审核</span>';
        else if (i == "5")
            h3 = '<span style="color:#fcc374">待核查</span>';
        else if (i == "4")
            h3 = '<span style="color:#ff9676">处理中</span>';
        else if (i == "3")
            h3 = '<span style="color:#9900cc">待转办</span>';
        else if (i == "2")
            h3 = '<span style="color:#ff6e73">已退回</span>';
        else if (i == "1")
            h3 = '<span style="color:#ff6e73">待分派</span>';
        else if (i == "0")
            h3 = '<span style="color:#fcc374">待立案</span>';
        return h3;
    }

    //随机颜色
    var color = function() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
}