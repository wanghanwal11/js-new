//少数民族
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
            chartid : 'gqyssmzrk_chart',
            url : urlConfig.gqyssmzrk + 'tablename=rlt_minority_lowerpeople&nation=%E5%85%A8%E9%83%A8&orgid=' + orgid
        }, {
            key : 'ssmz',
            chartid : 'btnlssmzrksl_chart',
            url : urlConfig.btnlssmzrksl + 'tablename=rlt_minority_age&nation=%E5%85%A8%E9%83%A8&orgid=' + orgid
        }, {
            chartid : 'ssmzwhcdbl_chart',
            url : urlConfig.ssmzwhcdbl + 'tablename=rlt_minority_edu&nation=全部&orgid=' + orgid
        }, {
            chartid : 'ssmzrspm_chart',
            url : urlConfig.ssmzrspm + 'tablename=rlt_minority_number&orgid=' + orgid
        }
        , {
         key : 'jyn',
         chartid : 'jynssmz_chart',
         url : urlConfig.jyn + 'field=national&orgid=' + orgid_jyn || ''
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
                if (!data.data) {
                    name.push(data[0].orgname || '');
                    lazy.for(data || [], function(obj, i) {
                        chartdata.push(obj.value);
                        labeldata.push(obj.name);
                    })
                }else if(data.data&&urls[k].key=='jyn') {
                    name.push(data.data[0].orgname || '');
                }
                
                lazy.for(data.data || [], function(obj, i) {
                    chartdata.push(obj.value);
                    labeldata.push(obj.name);
                });
                if (urls[k].key && urls[k].key == 'ssmz') {
                    var arr = [];
                    lazy.for(chartdata, function(item, i) {
                        arr.push({
                            y : chartdata[i]
                        })
                    })
                    lazy.for(labeldata, function(item, i) {
                        arr[i].x = item;
                    })
                    //console.log(arr);
                    getData(urls[k].chartid).renderer([{
                        label : name[0],
                        backgroundColor : color,
                        borderColor : color,
                        fill : false,
                        pointRadius : 1,
                        borderWidth : 1,
                        data : arr
                    }]);
                } else {

                    getData(urls[k].chartid).renderer([{
                        label : name[0],
                        backgroundColor : color,
                        borderColor : color,
                        fill : false,
                        pointRadius : 1,
                        borderWidth : 1,
                        data : chartdata
                    }], labeldata);
                }
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

                    lazy.openWin('#lingdaotong/amap?tablename=rlt_minority_hot&nation=%E5%85%A8%E9%83%A8&orgid=' + org_id);
                }
            }]
        }, {
            id : 'gqyssmzrk_chart',
            type : 'chart',
            class : 'rectdiv',
            width : 600,
            title : '各区域少数民族人口',
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
            id : 'btnlssmzrksl_chart',
            type : 'chart',
            class : 'rectdiv',
            width : 600,
            title : '不同年龄少数民族人口数量',
            chart_type : 'line',
            chart_data : {
                labels : [],
                datasets : []
            },
            chart_options : {
                legend : {
                    display : false
                },
                scales : {
                    xAxes : [{
                        type : 'linear',
                        position : 'bottom'
                         
                    }]
                }
            }
        }, {
            id : 'ssmzwhcdbl_chart',
            type : 'chart',
            class : 'rectdiv',
            width : 600,
            title : '少数民族文化程度比例',
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
                legend : {
                    display : false
                }
            }
        }, {
            id : 'ssmzrspm_chart',
            type : 'chart',
            width : 300,
            class : 'rectdiv',
            title : '少数民族人数排名',
            chart_type : 'horizontalBar',
            chart_data : {
                labels : [],
                datasets : [{
                    data : [],
                    backgroundColor : [],
                    borderColor : [],
                    borderWidth : 1
                }]
            },
            chart_options : {
                legend : {
                    display : false
                }
            }

        },
        /*人口统计先不做，注释*/
         /*{
         id : 'jynssmz_chart',
         type : 'chart',
         class : 'rectdiv',
         width : 400,
         title : '近1年少数民族人口统计',
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

