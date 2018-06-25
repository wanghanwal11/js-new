//出生地
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
            chartid : 'swcsd_chart',
            url : urlConfig.swcsd + 'tablename=rlt_externalpeople_otherprn_migrate&orgid=' + orgid
        }, {
            chartid : 'sncsd_chart',
            url : urlConfig.btnlssmzrksl + 'tablename=rlt_externalpeople_othercty_migrate&type=n&orgid=' + orgid
        }
        , {
            key : 'jyn',
            chartid : 'jynwlrk_chart',
            url : urlConfig.jyn + 'field=wailai&orgid=' + orgid_jyn || ''
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
                    name=[];
                if(!data.data){
                        lazy.for(data||[],function(obj,i) {
                            name.push(obj.orgname);
                            chartdata.push(obj.value);
                            labeldata.push(obj.name);
                        })
                    }else if(data.data&&urls[k].key=='jyn'){
                        name.push(data.data[0].orgname);
                    }
                lazy.for(data.data || [], function(obj, i) {
                    // if()
                    chartdata.push(obj.value);
                    labeldata.push(obj.name);
                });
                getData(urls[k].chartid).renderer([{
                    label:name[0],
                    backgroundColor : color,
                    borderColor : color,
                    fill:false,
                    pointRadius:1,
                    borderWidth : 1,
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
        },{
            id : 'swcsd_chart',
            type : 'chart',
            width : 300,
            class : 'rectdiv',
            title : '省外出生人口数量排序',
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

        }, {
            id : 'sncsd_chart',
            type : 'chart',
            width : 300,
            class : 'rectdiv',
            title : '省内出生人口数量排序',
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
        /*{
            id : 'jynwlrk_chart',
            type : 'chart',
            class : 'rectdiv',
            width : 400,
            title : '近1年外来人口统计',
            chart_type : 'line',
            chart_data : {
                labels : [],
                datasets : []
            },
            chart_options : {}
        },*/
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

