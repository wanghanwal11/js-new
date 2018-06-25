PAGE_INIT = function(page) {
    var index = lazy.getParameter('event_index');
    var leftNav = config.data.leftNav;
    setData([leftNav,{
        id : 'navbar',
        type : 'navbar',
        index : index || 0,
        color : '#414A5A',
        changeColor : '#3fc499',
        list : [{
            title : '事件列表',
            href : '#lingdaotong/event/sjlb'
        },{
            title : '我督办的',
            href : '#lingdaotong/event/wdbd'
        }]
    }]);
    
}