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
            lazy.URLRequestCache(urlConfig.org + 'wktcode=&orgid=' + orgid, function(str){
                var data = {};
                try{data = JSON.parse(str)}catch(e){lazy.log('后台传递非正确json格式');}
                var datalist = data.second;
                if(org_i == 0) datalist = data.first;
                title_arr[org_i] = '全部';
                
                org_arr[org_i] = [];
                lazy.for(datalist, function(org_obj) {
                    org_arr[org_i].push({
                        name : org_obj.orgname,
                        orgid : org_obj.orgid,
                    })
                });
                //渲染图表和数据
                showChart(orgid);
                //渲染弹出菜单
                var topNav = getData('topNav_0');
                topNav.setTitles(title_arr);
                
                topNav.onclick = function(i) {
                    org_i = i + 1;
                    showPicker(org_arr[i], function(obj) {
                        var _orgid = obj.orgid;
                        title_arr[i] = obj.name;
                        title_arr.length = i+2;
                        init(_orgid);
                    });
                }
                //
            },function(e) {
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
            var urls = [
                     {
                        chartid: 'gqyrk_chart',
                        url:urlConfig.gqyrk + 'tablename=rlt_idensity_lowerpeople&orgid=' + orgid
                     },{
                        chartid: 'gqyldrk_rkfx_chart',
                        url:urlConfig.gqyldrk_rkfx + 'tablename=rlt_idensity_lowerflowpeople&orgid=' + orgid
                     },{
                        chartid: 'btnljdrkbl_chart',
                        url:urlConfig.btnljdrkbl + 'tablename=rlt_idensity_agestage&orgid=' + orgid
                     }
            ];
            var k = 0;
            function one() {
                lazy.URLRequestCache(urls[k].url, function(str){
                    var data = {};
                    try{data = JSON.parse(str)}catch(e){lazy.log('后台传递非正确json格式');}
                    //console.log(data)
                    var chartdata = [],labeldata = [];
                    lazy.for(data.data||[],function(obj,i) {
                        chartdata.push(obj.value);
                        labeldata.push(obj.name);
                    })
                    getData(urls[k].chartid).renderer([{ 
                            backgroundColor : color,
                            borderColor : color,
                            borderWidth : 1,
                            data : chartdata
                        }],labeldata);
                   if(k < urls.length-1) {
                       k++;
                       one();
                   }
                },function(e) {
                    if(k < urls.length-1) {
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
            }, 
            leftNav,
            {
                id : 'picker',
                type : 'picker',
                list : [],
                split : [],
                contact : false
            },{
                id:'rltfx',
                type : 'icontitlelist',
                list : [{
                    icon : lazy.name + '/images/lingdaotong/rlt.png',
                    title : '热力图分析',
                    onclick : function() {
                        lazy.openWin('#lingdaotong/amap?tablename=rlt_idensity_hot&orgid='+org_id);
                    }
                }]
            },{
                id : 'gqyrk_chart',
                type : 'chart',
                class : 'rectdiv',
                width : 500,
                title : '各区域人口',
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
            },{
                id : 'gqyldrk_rkfx_chart',
                type : 'chart',
                class : 'rectdiv',
                width : 500,
                title : '各区域流动人口',
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
            },{
                id : 'btnljdrkbl_chart',
                type : 'chart',
                class : 'rectdiv',
                width : 600,
                title : '不同年龄阶段人口比例',
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
            },{
                type : 'autoHeight',
                height : '1rem'
            }], function() {
                init('');
            });
        });//chartInit
        
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

