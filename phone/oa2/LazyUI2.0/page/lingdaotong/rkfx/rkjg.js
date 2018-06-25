//人口分析
PAGE_INIT = function(parent) {
    var org_arr = [];
    var title_arr = [];
    var org_i = 0;
    var color = config.data.chartColor;
    var org_id = '';
    var leftNav = config.data.leftNav;

    function init(orgid) {
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
            showChart(orgid||'');
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
                    showChart(_orgid);
                });
            }
            //
        }, function(e) {
            lazy.log(e);
        });
    }

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

    function showChart(orgid) {
        var urls = [{
            key : 'moreline',
            chartid : 'wl5n_chart',
            url : urlConfig.wl5n_rkjg + 'tablename=rlt_spindle1_future5&timelength=5&timetype=1&limit=6&time=2017&orgid=' + orgid
        }, {
            chartid : 'btnljdrkbl_chart',
            url : urlConfig.btnl_rkjg + 'tablename=rlt_spindle1_agestage&orgid=' + orgid
        }, {
            key : 'two',
            chartid : 'rknlfb_chart',
            url : urlConfig.rknlfb + 'tablename=rlt_spindle1_tree&orgid=' + orgid
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
                
                if (urls[k].key && urls[k].key == 'moreline') {
                    var chartdatalist = [];
                    lazy.worker({
                        type : 'map',
                        data : data.data,
                        k,k
                    }, function(str) {
                        lazy.for(str.namelist, function(obj, i) {
                            chartdatalist.push({
                                label : str.namelist[i],
                                backgroundColor : color[i],
                                borderColor : color[i],
                                borderWidth : 1,
                                pointRadius : 1,
                                fill : false,
                                data : str.valuelist[i]
                            });
                        })
                      getData(urls[str.k].chartid).renderer(chartdatalist, str.xlist);
                      jia();
                    });
                    
                } else if (urls[k].key && urls[k].key == 'two') {
                    var chartdatalist = [];
                    lazy.worker({
                        type : 'map',
                        data : data.data,
                        k,k,
                        two:true
                    }, function(str) {
                        lazy.for(str.namelist, function(obj, i) {
                            chartdatalist.push({
                                label : str.namelist[i],
                                backgroundColor : color[i],
                                borderColor : color[i],
                                borderWidth : 1,
                                pointRadius : 1,
                                fill : false,
                                data : str.valuelist[i]
                            });
                        })
                      getData(urls[str.k].chartid).renderer(chartdatalist, str.xlist);
                      jia();
                    });
                    
                }else {
                    var chartdata = [],
                        labeldata = [];
                    lazy.for(data.data || [], function(obj, i) {
                        chartdata.push(obj.value);
                        labeldata.push(obj.name);
                    })
                    getData(urls[k].chartid).renderer([{
                        backgroundColor : color,
                        borderColor : color,
                        borderWidth : 1,
                        data : chartdata
                    }], labeldata);
                    jia();
                }
            }, function(e) {
                jia();
                lazy.log(e);
            });
            function jia() {
                if (k < urls.length - 1) {
                    k++;
                    one();
                }
            }
        }

        one();
    }

    chartInit(function() {
        setData([{
            id : 'topNav_0',
            type : 'topNav_0',
            leftOnclick : function() {
                getData('leftNav').show();
            },
            rightOnclick : function() {
                lazy.openWin('#lingdaotong/rkfx/other');
            },
            titles : []
        }, leftNav, {
            id : 'picker',
            type : 'picker',
            list : [],
            split : [],
            contact : false
        }, {
            id : 'rknlfb_chart',
            type : 'chart',
            class : 'rectdiv',
            width : 130,
            title : '人口年龄分布',
            chart_type : 'horizontalBar',
            chart_data : {
                labels : [],
                datasets : []
            },
            chart_options : {
                    scales: {
                        xAxes: [{
                            stacked: true,
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }}
        },{
            id : 'wl5n_chart',
            type : 'chart',
            class : 'rectdiv',
            width : 400,
            title : '未来5年社会负担系数变化趋势',
            chart_type : 'line',
            chart_data : {
                labels : [],
                datasets : []
            },
            chart_options : {}
        }, {
            id : 'btnljdrkbl_chart',
            type : 'chart',
            class : 'rectdiv',
            width : 600,
            title : '不同年龄阶段人口比例',
            chart_type : 'doughnut',
            chart_data : {
                labels : [],
                datasets : []
            },
            chart_options : {

            }
        }, {
            type : 'autoHeight',
            height : '1rem'
        }], function() {
            init(config.data.userAreaId);
        });
    });
    //chartInit
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

