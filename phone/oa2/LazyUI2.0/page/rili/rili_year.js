PAGE_INIT = function(parent) {
    //日期格式ios不能使用-
    setData([{
        type : 'calendar_year',
        //date : '2017/05/03',
        onchange : function(obj) {
            //alert(obj.year+"-"+obj.month);
            config.data['riliRili_year'] = {
                date : obj.year+"/"+obj.month+"/1"
            };
            lazy.goBack();
        }
    }]);
}