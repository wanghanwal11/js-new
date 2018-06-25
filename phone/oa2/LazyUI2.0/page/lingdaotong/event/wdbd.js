//我督办的
PAGE_INIT = function(page) {
    setData([{
        id : "panel2",
        type : "panel",
        list : []
    }, {
        type : 'bounce',
        page : 1,
        rows : 20,
        url : urlConfig.db,
        success : function(str, page, rows) {
            var data = {};
            try {
                data = JSON.parse(str)
            } catch(e) {
                lazy.log('后台传递非正确json格式');
            }
            console.log(data)
            lazy.for(data.rows, function(item, i) {
                getData('panel2').add({
                    "flowkey" : item.flowkey,
                    "icon": '',
                    "iconFont" : (item.flowkey=='hjzx'?'呼叫中心':'网格化'),
                    "id" : item.id,
                    "businessKey": item.businesskey,
                    "state" : item.hasRead,
                    "taskid" : item.taskid,
                    "h10" : item.id,
                    //有序号的"h1" : '<div style="width:1.5rem;display:inline-block">' + (i + (page - 1) * rows + 1) + ".</div>" + item.subject,
                    "h1" : '<span>'+item.subject+'</span>',
                    "h3" : '',
                    "h2" : '<span style="padding-top:1rem;color:#ccc">' + (item.createtime && lazy.autoFormat(item.createtime)) + '</span>',
                    "h4" : '<div style="color:#5fc9f7;font-size:0.7rem;">' + taskStatus(item.taskStatus) + '</div>',
                    "onclick" : function(obj) {
                        //alert(obj.flowkey)
                        if (obj.flowkey == 'hjzx') {
                            lazy.setParameter("htype", "待办");
                            lazy.setParameter("hjzx", obj);
                            lazy.openWin("LazyUI2.0/sjxq/hjzxxq.html?flag=true");
                        } else {
                        var id = obj.taskid;
                        var state = obj.state;
                        lazy.setParameter("rid", obj.businessKey);
                        lazy.setParameter("taskid", id);
                        lazy.setParameter("level", obj.businessKey);
                        lazy.setParameter("evtstate", state);
                        lazy.setParameter("runid", obj.runid);
                        if (state == 2) {
                            lazy.setParameter("mapgps", null);
                            lazy.openWin("wanggehua/shijianshangbao.html");
                        } else {
                            lazy.setParameter("rtype", "待办")                       
                            lazy.openWin("LazyUI2.0/sjxq/sjxq.html?flag=true");
                        }
                        }
                    }
                })
            })
        },
        error : function(e, page) {
            lazy.log(e);
        }
    }]);

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

}