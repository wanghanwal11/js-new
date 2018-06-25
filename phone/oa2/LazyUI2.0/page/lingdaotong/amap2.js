PAGE_INIT = function(obj) {
    console.log(obj)
    var tablename = obj.response.tablename,
        orgid = obj.response.orgid||"";
    time = obj.response.time
    type = obj.response.type || "";

    var heatmapData = [{
        "lng" : 116.191031,
        "lat" : 39.988585,
        "count" : 10
    }];

    var org_arr = [];
    var title_arr = [];
    var org_i = 0;
    var org_id = '';
    function init(orgid) {
        org_id = orgid;
        lazy.URLRequestCache(urlConfig.org + 'wktcode=&orgid=' + orgid||"", function(str) {
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

            //网格员热力图单独链接
            if (tablename == "rlt_keeper_trace") {
                lazy.URLRequestCache(urlConfig.wgyrlt + 'tablename=' + tablename + '&time=' + (time||"") + '&orgid=' + orgid||"", function(str) {
                    var data = {};
                    try {
                        data = JSON.parse(str)
                    } catch(e) {
                        lazy.log('后台传递非正确json格式');
                    }
                    if(data.length==0){
                        lazy.alert2('暂无数据');
                        return;
                    }
                    var map = new AMap.Map('container', {
                        resizeEnable : true,
                        zoom : 11,
                        center : [data[0].lng, data[0].lat]
                    });
                    var heatmap;
                    map.plugin(["AMap.Heatmap"], function() {
                        //初始化heatmap对象
                        heatmap = new AMap.Heatmap(map, {
                            radius : 8, //给定半径
                            opacity : [0, 0.8]
                        });
                        //设置数据集：该数据为北京部分“公园”数据
                        heatmap.setDataSet({
                            data : data,
                            max : 100
                        });
                    });

                }, function(e) {
                    lazy.log(e);
                });
            } else {
                //热力图
                lazy.URLRequestCache(urlConfig.rltfx + 'tablename=' + tablename + '&coding=7&time=' + time + '&orgid=' + orgid + ( type ? '&type=0&categoryid=' : ''), function(str) {
                    var data = {};
                    try {
                        data = JSON.parse(str)
                    } catch(e) {
                        lazy.log('后台传递非正确json格式');
                    }
                    var map = new AMap.Map('container', {
                        resizeEnable : true,
                        zoom : 11,
                        center : [data[0].lng, data[0].lat]
                    });
                    var heatmap;
                    map.plugin(["AMap.Heatmap"], function() {
                        //初始化heatmap对象
                        heatmap = new AMap.Heatmap(map, {
                            radius : 8, //给定半径
                            opacity : [0, 0.8]/*
                             ,gradient:{
                             0.5: 'blue',
                             0.65: 'rgb(117,211,248)',
                             0.7: 'rgb(0, 255, 0)',
                             0.9: '#ffea00',
                             1.0: 'red'
                             }*/
                        });
                        //设置数据集：该数据为北京部分“公园”数据
                        heatmap.setDataSet({
                            data : data,
                            max : 100
                        });
                    });

                }, function(e) {
                    lazy.log(e);
                });
            }

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

    //
    document.getElementById("lingdaotong/amap2").innerHTML = '<div id="container"></div>';
    setData([{
        id : 'topNav_0',
        type : 'topNav_0',
        leftOnclick : function() {
            getData('leftNav').show();
        },
        // rightOnclick : function() {
        // lazy.openWin('#lingdaotong/other');
        // },
        titles : [],
        data1 : []
    }, {
        id : 'picker',
        type : 'picker',
        split : [],
        contact : false,
        onclick : function(arr) {
            //alert(JSON.stringify(arr));
        }
    }, {
        id : 'leftNav',
        type : 'leftNav',
        icon : '',
        list : [{
            title : '网格化分析',
            icon : lazy.name + '/images/lingdaotong/wgh.png',
            onclick : function() {
                lazy.openWin('lingdaotong.html#lingdaotong/wghfx/wghfx');
            }
        }, {
            title : '人口分析',
            icon : lazy.name + '/images/lingdaotong/rkfx.png',
            onclick : function() {

                lazy.openWin('lingdaotong.html#lingdaotong/rkfx/rkfx');
            }
        }, {
            title : '事件督办',
            icon : lazy.name + '/images/lingdaotong/wgh.png',
            onclick : function() {
                lazy.openWin('lingdaotong.html#lingdaotong/rkfx/rkfx');
            }
        }]
    }], function() {

        init('');

        // map.setMapStyle('blue_night');

        // lazy.URLRequestCache(urlConfig.rltfx + 'tablename=' + tablename + '&orgid' + orgid, function(str) {
        // var data = {};
        // try {
        // data = JSON.parse(str)
        // } catch(e) {
        // lazy.log('后台传递非正确json格式');
        // }
        // var map = new AMap.Map('container', {
        // resizeEnable : true,
        // zoom : 11,
        // center : [data[0].lng, data[0].lat]
        // });
        // var heatmap;
        // map.plugin(["AMap.Heatmap"], function() {
        // //初始化heatmap对象
        // heatmap = new AMap.Heatmap(map, {
        // radius : 8, //给定半径
        // opacity : [0, 0.8]/*
        // ,gradient:{
        // 0.5: 'blue',
        // 0.65: 'rgb(117,211,248)',
        // 0.7: 'rgb(0, 255, 0)',
        // 0.9: '#ffea00',
        // 1.0: 'red'
        // }*/
        // });
        // //设置数据集：该数据为北京部分“公园”数据
        // heatmap.setDataSet({
        // data : data,
        // max : 100
        // });
        // });
        // }, function(e) {
        // lazy.log(e);
        // });

    });

}