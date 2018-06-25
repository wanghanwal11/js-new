//儿童人口
PAGE_INIT = function(parent) {
    var org_arr = [];
    var title_arr = [];
    var org_i = 0;
    var color = config.data.chartColor;
    var org_id = '';
    var leftNav = config.data.leftNav;
    var orgid_jyn = 10000001700017;

    function init(orgid) {
        org_id = orgid;
        lazy.URLRequestCache(urlConfig.org + 'wktcode=&orgid=' + orgid || '', function(str) {
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
            showChart(orgid || '');
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
            chartid : 'szetnlfb_chart',
            url : urlConfig.szetnlfb + 'tablename=rlt_children_age&stage=0-12&orgid=' + orgid
        }, {
            chartid : 'hjetnlfb_chart',
            url : urlConfig.hjetnlfb + 'tablename=rlt_r_hujichildren_age&stage=0-12&orgid=' + orgid
        }, {
            chartid : 'gqyszetrk_chart',
            url : urlConfig.gqyszetrk + 'tablename=rlt_children_lowerpeople&stage=0-12&orgid=' + orgid
        }, {
            chartid : 'szetxbbl_chart',
            url : urlConfig.szetxbbl + 'tablename=rlt_children_gender&stage=0-12&orgid=' + orgid
        }
        , {
            key : 'jyn',
            chartid : 'jynetrk_chart',
            url : urlConfig.jyn + 'field=children&orgid=' + orgid_jyn || ''
        }
        ];
        var k = 0;
        function one() {
            lazy.URLRequestCache(urls[k].url, function(str) {
                var data = {};
                try {
                    data = JSON.parse(str)
                } catch(e) {
                    lazy.log('后台传递非正确json格式');
                }
                var chartdata = [],
                    labeldata = [],
                    name = [];
                if (urls[k].key && urls[k].key == 'jyn') {
                    lazy.for(data.data, function(item, i) {
                        chartdata.push(item.value);
                        labeldata.push(item.name);
                        name.push(item.orgname);
                    })
                } else {
                    lazy.for(data.data || [], function(obj, i) {
                        chartdata.push(obj.value);
                        labeldata.push(obj.name);
                    })
                }
                getData(urls[k].chartid).renderer([{
                    label : name[0],
                    backgroundColor : color,
                    borderColor : color,
                    borderWidth : 1,
                    fill : false,
                    pointRadius : 1,
                    data : chartdata
                }], labeldata);

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
            id : 'rltfx',
            type : 'icontitlelist',
            list : [{
                icon : lazy.name + '/images/lingdaotong/rlt.png',
                title : '热力图分析',
                onclick : function() {
                    lazy.openWin('#lingdaotong/amap?tablename=rlt_children_hot&stage=0-12&orgid=' + org_id);
                }
            }]
        }, {
            id : 'szetnlfb_chart',
            type : 'chart',
            class : 'rectdiv',
            width : 600,
            title : '实住儿童年龄分布',
            chart_type : 'line',
            chart_data : {
                labels : [],
                datasets : []
            },
            chart_options : {
                legend : {
                    display : false
                }
            }
        }, {
            id : 'hjetnlfb_chart',
            type : 'chart',
            class : 'rectdiv',
            width : 600,
            title : '户籍儿童年龄分布',
            chart_type : 'line',
            chart_data : {
                labels : [],
                datasets : []
            },
            chart_options : {
                legend : {
                    display : false
                }
            }
        }, {
            id : 'gqyszetrk_chart',
            type : 'chart',
            class : 'rectdiv',
            width : 600,
            title : '各区域实住儿童人口',
            chart_type : 'bar',
            chart_data : {
                labels : [],
                datasets : []
            },
            chart_options : {
                legend : {
                    display : false
                }
            }
        }, {
            id : 'szetxbbl_chart',
            type : 'chart',
            class : 'rectdiv',
            width : 600,
            title : '实住儿童性别比例',
            chart_type : 'doughnut',
            chart_data : {
                labels : [],
                datasets : [{
                    data : [],
                    backgroundColor : [],
                    hoverBackgroundColor : []
                }]
            },
            chart_options : {

            }
        }, 
        /*{
            id : 'jynetrk_chart',
            type : 'chart',
            class : 'rectdiv',
            width : 400,
            title : '近1年儿童人口统计',
            chart_type : 'line',
            chart_data : {
                labels : [],
                datasets : []
            },
            chart_options : {}
        }, */
        {
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

