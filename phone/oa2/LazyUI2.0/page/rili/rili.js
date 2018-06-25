PAGE_INIT = function(parent) {
    //日期格式ios不能使用-
    var mydate = new Date();
    if(config.data['riliRili_year']) {
        mydate = new Date(config.data['riliRili_year'].date);
    }
    setData([{
        id : 'calendar_month',
        type : 'calendar_month',
        date : mydate,
        onchangeyear : function(date) {
            lazy.openWin('#rili/rili_year');
        },
        onchange : function(date) {
            alert(date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate());
        },
        onmenu : function(date) {
            getData('actionsheet').show();
             //alert(date.getFullYear()+"/"+(date.getMonth()+1)+"-"+date.getDate());
        },
        plugin : {
                type : 'preview_icon',
                list : [{
                    icon : '123',
                    h1 : '王晗的日志',
                    h2 : '昨天：17：04',
                    html : '',
                    menu : function() {
                        alert();
                    },
                    onclick : function() {
                        alert();
                    }
                },{
                    icon : 'http://vitoyun.cn/file/SYSBOOKDOC/2016/1/70000001763115.png',
                    h1 : '王',
                    h2 : '昨天：17：04',
                    html : '',
                    menu : function() {

                    },
                    onclick : function() {

                    }
                }]
            }
    },{
        id : 'actionsheet',
        type : 'actionsheet',
        list : [{
                    title : '日志',
                    onclick : function(obj) {
                        alert(JSON.stringify(obj));
                    }
                },{
                    title : '申请',
                    onclick : function(obj) {
                        alert(JSON.stringify(obj));
                    }
                },{
                    title : '任务',
                    onclick : function(obj) {
                        alert(JSON.stringify(obj));
                    }
                }]
    }], function() {
        getData('calendar_month').warn(['2017/5/12', '2017/3/2', '2017/3/8', '2017/4/13', '2017/8/9']);
    });
}