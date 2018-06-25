PAGE_INIT = function(page) {

    setData([{
        type:'test',
        list:[{
            "icon":'http://weui.io/images/icon_tabbar.png',
            "title":'微信',
            "href":'javascript:;'
            },{
            "icon":'https://weui.io/images/icon_tabbar.png',
            "title":'通讯录',
            "href":'javascript:;'
            },{
            "icon":'https://weui.io/images/icon_tabbar.png',
            "title":'发现',
            "href":'javascript:;'
            },{
            "icon":'LazyUI2.0/images/loading/loading0.gif',
            "title":'我',
            "href":'javascript:;'
            }]
    },{
        id : 'picker',
        type : 'picker',
        list : [],
        split : [],
        contact : false
    }, {
        type : 'searchbar',
        search : function() {

        }
    },{
        type:'leftNav',
        list:[]
    },{
        id : "panel",
        type : 'panel',
        list : [{
            "icon" : '',
            "iconFont" : '呼叫中心'
        }, {
            "icon" : '',
            "iconFont" : '网格化'
            // "iconFont" : (item.flowkey=='hjzx'?'呼叫中心':'网格化'),
        }, {
            "icon" : 'LazyUI2.0/images/loading/1.gif',
            "iconFont" : '呼叫中心'
            // "iconFont" : (item.flowkey=='hjzx'?'呼叫中心':'网格化'),
        }, {
            "icon" : '',
            "iconFont" : '呼叫中心'
        }, {
            "icon" : '',
            "iconFont" : '呼叫中心'
            // "iconFont" : (item.flowkey=='hjzx'?'呼叫中心':'网格化'),
        }, {
            "icon" : 'LazyUI2.0/images/loading/1.gif',
            "iconFont" : '呼叫中心'
            // "iconFont" : (item.flowkey=='hjzx'?'呼叫中心':'网格化'),
        }]
    }])

}