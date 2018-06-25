//网格员
PAGE_INIT = function(parent) {
    var color = config.data.chartColor;
    var leftNav = config.data.leftNav;
    var org_arr = [];
    var title_arr = [];
    var org_i = 0;
    var data_i = 0;
    var org_id = '';
    var dateObj = {
        year : 0,
        month : 0,
        day : 0
    };
    var mytime = '';
    var mytime2 = '';
    var timelength = -1;

    chartInit(function() {
        setData([{
            id : 'topNav_0',
            type : 'topNav_0',
            leftOnclick : function() {
                getData('leftNav').show();
            },
            rightOnclick : function() {
                lazy.openWin('#lingdaotong/wghfx/other');
            },
            titles : [],
        }, leftNav, {
            id : 'picker',
            type : 'picker',
            list : [],
            split : [],
            contact : false
        }, {
            id : 'topNav_01',
            type : 'topNav_0',
            style : {
                top : "3rem",
                padding : "0 1rem"
            },
            index : 0,
            titles : ['年'],
        }, {
            id : 'picker2',
            type : 'picker',
            list : [],
            split : [],
            contact : false,

        }, leftNav, {
            id : 'rltfx',
            type : 'icontitlelist',
            list : [{
                icon : lazy.name + '/images/lingdaotong/rlt.png',
                title : '热力图分析',
                onclick : function() {
                    lazy.openWin('#lingdaotong/amap2?tablename=rlt_dispute_report_reworkoverdue_hot&coding=7&time=' + (mytime || config.data.time) + '&orgid=' + org_id||'');
                }
            }]
        }, {
            id : 'gqyyqfglfx_chart',
            type : 'chart',
            class : 'rectdiv',
            width : 400,
            title : '各区域逾期返工量分析',
            chart_type : 'bar',
            chart_data : {
                labels : [],
                datasets : []
            },
            chart_options : {

            }
        }, {
            id : 'yqfgllxfx_chart',
            type : 'chart',
            class : 'rectdiv',
            width : 500,
            title : '逾期返工量类型分析',
            chart_type : 'bar',
            chart_data : {
                labels : [],
                datasets : []
            },
            chart_options : {

            }
        }, {
            id : 'j15ryqfgltj_chart',
            type : 'chart',
            class : 'rectdiv',
            width : 400,
            title : '近15日逾期返工量统计',
            chart_type : 'line',
            chart_data : {
                labels : [],
                datasets : []
            },
            chart_options : {}
        },{
            type : 'autoHeight',
            height : '1rem'
        }], function() {
            lazy.URLRequestCache(urlConfig.sjcx_sjyqfg + 'tablename=rlt_dispute_report_reworkoverdue_hot', function(str) {
                var data = {};
                try {
                    data = JSON.parse(str)
                } catch(e) {
                    lazy.log('后台传递非正确json格式');
                }
                mytime = data.date;
                var arr = data.date.split('-');
                dateObj.year = arr[0];
                dateObj.month = arr[1];
                dateObj.day = arr[2];
                init(config.data.userAreaId);
            })
        });

    });

   function YMD(ymd) {
        getData('picker2').list = [ymd];
        getData('picker2').renderer();
        getData('picker2').show();
    }
     function setTitle_ymd(title) {
        getData('topNav_01').setTitles(title);
    }
    //初始化
    function init(orgid) {
        setTitle_ymd([dateObj.year + '年', (dateObj.month.length >= 2 ? dateObj.month : '0' + dateObj.month) + '月', (dateObj.day >= 10||dateObj.day.length==2  ? dateObj.day : '0' + dateObj.day) + '日'])
        //设置年月日
        getData('topNav_01').onclick = function(i) {
            if (i == 0) {
                YMD(lazy.getYMD('true',dateObj.year));
            } else if (i == 1) {
                YMD(lazy.getYMD(dateObj.year));
            } else if (i == 2) {
                YMD(lazy.getYMD(dateObj.year, dateObj.month))
            }
        }
        //下拉选择年月日时发请求
        getData('picker2').onclick = function(obj) {
            
            obj = obj[0];
            dateObj[obj.type] = obj.name;
            console.log(dateObj.day)
            if (obj.type == 'year') {
                setTitle_ymd([dateObj.year + '年', '月'])
            } else if (obj.type == 'month') {
                setTitle_ymd([dateObj.year + '年', (dateObj.month >= 10 ? dateObj.month : '0' + dateObj.month) + '月', '日'])

            } else if (obj.type == 'day') {
                setTitle_ymd([dateObj.year+'年', (dateObj.month>=10||dateObj.month.length==2?dateObj.month:'0'+dateObj.month)+'月', (dateObj.day>=10?dateObj.day:'0'+dateObj.day)+'日'])
            }
            mytime2 = obj.value;
            showChart(orgid||'', obj.value || '')
        }
        org_id = orgid;

        lazy.URLRequestCache(urlConfig.org + 'wktcode=&orgid=' + orgid||'', function(str) {
            var data = {};
            try {
                data = JSON.parse(str)
            } catch(e) {
                lazy.log('后台传递非正确json格式');
            }
            var datalist = data.second;
            if (org_i == 0)
                datalist = data.first;
            title_arr[org_i] = '全部';

            org_arr[org_i] = [];
            lazy.for(datalist, function(org_obj) {
                org_arr[org_i].push({
                    name : org_obj.orgname,
                    orgid : org_obj.orgid,
                })
            });
            //渲染图表和数据
            showChart(orgid||'', mytime2 || mytime);
            //渲染弹出菜单
            var topNav = getData('topNav_0');
            topNav.setTitles(title_arr);

            topNav.onclick = function(i) {
                org_i = i + 1;
                showPicker(org_arr[i], function(obj) {
                    var _orgid = obj.orgid;
                    title_arr[i] = obj.name;
                    title_arr.length = i + 2;
                    init(_orgid);
                    showChart(_orgid||'', mytime);
                });
            }
            //
        }, function(e) {
            lazy.log(e);
        });

    }

    //显示下拉列表
    function showPicker(list, back) {
        var picker = getData('picker');
        picker.list = [list];
        // getData('picker').split = [];
        picker.onclick = function(obj) {
            back(obj[0]);
        }
        picker.renderer();
        picker.show();
    }

    //显示视图
    function showChart(orgid, time) {
        switch (time.toString().length) {
        case 4:
            timelength = 5;
            getData('j15ryqfgltj_chart').setTitles('近5年逾期返工量统计');
            break;
        case 7:
            timelength = 12;
            getData('j15ryqfgltj_chart').setTitles('近12月逾期返工量统计');
            break;
        case 10:
            timelength = 15;
            getData('j15ryqfgltj_chart').setTitles('近15日逾期返工量统计');
            break;
        }
        //time = time || mytime;
        var urls = [{
            chartid : 'gqyyqfglfx_chart',
            url : urlConfig.gqyyqfglfx + 'tablename=rlt_dispute_report_reworkoverdue_count&orgid=' + orgid + '&time=' + time
        }, {
            chartid : 'yqfgllxfx_chart',
            url : urlConfig.yqfgllxfx + 'tablename=rlt_dispute_report_reworkoverdue_type&orgid=' + orgid + '&time=' + time
        }, {
            chartid : 'j15ryqfgltj_chart',
            url : urlConfig.j15ryqfgltj + 'tablename=rlt_dispute_report_reworkoverdue_count&orgid=' + orgid + '&time=' + time + '&timelength=' + timelength + '&timetype=0'
        }];
        var k = 0;
        function one() {
            lazy.URLRequestCache(urls[k].url, function(str) {
                var data = {};
                try {
                    data = JSON.parse(str)
                } catch(e) {
                    lazy.log('后台传递非正确json格式');
                }
                var chartdatalist = [],
                    xlist = [],
                    namelist = [],
                    valuelist = [];
                lazy.for(data.data || [], function(mobj, i) {
                    xlist.push(mobj.xaxis);
                    lazy.for(mobj.dataArr || [], function(obj, j) {
                        if (i == 1)
                            namelist.push(obj.name);
                        if (!valuelist[j])
                            valuelist[j] = [];
                        valuelist[j][i] = obj.value;
                    })
                });
                if(time.length==7){
                    // namelist.reverse();
                    console.log(namelist)
                }
                lazy.for(namelist, function(obj, i) {
                    chartdatalist.push({
                        label : namelist[i],
                        backgroundColor : color[i],
                        borderColor : color[i],
                        borderWidth : 1,
                        pointRadius : 1,
                        fill : false,
                        data : valuelist[i]
                    });
                });
                getData(urls[k].chartid).renderer(chartdatalist, xlist);

                if (k < urls.length - 1) {
                    k++;
                    one();
                }
            }, function(e) {
                if (k < urls.length - 1) {
                    k++;
                    one();
                }
                lazy.log(e);
            });
        }

        one();
    }

    function chartInit(callback) {
        if (document.getElementById('ChartClassJs') === null) {
            lazy.loadJs({
                id : 'ChartClassJs',
                path : lazy.name + '/plugins/chart/ChartClass.js',
                onload : function() {
                    callback();
                }
            });
        } else {
            callback();
        }
    }

}