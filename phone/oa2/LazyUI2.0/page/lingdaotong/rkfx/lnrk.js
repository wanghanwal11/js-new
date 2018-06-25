//老年人口
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
            lazy.URLRequestCache(urlConfig.org + 'wktcode=&orgid=' + orgid||'', function(str){
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
                showChart(orgid||'');
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
                        showChart(_orgid);
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
                        chartid: 'gqylnr_chart',
                        url:urlConfig.gqylnr + 'tablename=rlt_older_lowerpeople&orgid='+ orgid
                     },{
                        chartid: 'gqyldlnr_chart',
                        url:urlConfig.gqyldlnr + 'tablename=rlt_older_lowerflowpeople&orgid=' + orgid
                     },{
                         key:'moreline',
                         chartid: 'btnllnrxbdb_chart',
                         url:urlConfig.btnllnrxbdb + 'tablename=rlt_older_agegender&orgid=' + orgid
                     }
                     ,{
                        key:'jyn',
                        chartid: 'jynlnrk_chart',
                        url:urlConfig.jyn + 'field=old&orgid=' + orgid_jyn||''
                     }
            ];
            var k = 0;
            function one() {
                lazy.URLRequestCache(urls[k].url, function(str){
                    var data = {};
                    try{data = JSON.parse(str)}catch(e){lazy.log('后台传递非正确json格式');}
                       //两条折线
                    if(urls[k].key && urls[k].key=='moreline') {
                        var chartdatalist = [],xlist = [], namelist = [], valuelist = [];
                        lazy.for(data.data||[],function(mobj,i) {
                            xlist.push(mobj.xaxis);
                            lazy.for(mobj.dataArr||[],function(obj,j) {
                                if(i==0)namelist.push(obj.name);
                                if(!valuelist[j])valuelist[j]=[];
                                valuelist[j][i] = obj.value;
                            })
                        });
                        lazy.for(namelist,function(obj,i) {
                            chartdatalist.push({
                                label : namelist[i], 
                                backgroundColor : color[i],
                                borderColor : color[i],
                                borderWidth : 1,
                                fill:false,
                                pointRadius:1,
                                data : valuelist[i]
                            });
                        });
                        getData(urls[k].chartid).renderer(chartdatalist, xlist);
                    }else if(urls[k].key && urls[k].key == 'jyn'){
                        var chartdata = [],labeldata = [],name=[];
                        lazy.for(data.data,function(item,i){
                            chartdata.push(item.value);
                            labeldata.push(item.name);
                            name.push(item.orgname);
                        })
                        getData(urls[k].chartid).renderer([{ 
                            label : name[0],
                            backgroundColor : color,
                            borderColor : color,
                            borderWidth : 1,
                            pointRadius : 1,
                            fill : false,
                            data : chartdata
                        }],labeldata);
                    }else{
                        var chartdata = [],labeldata = [];
                        lazy.for(data.data||[],function(obj,i) {
                            chartdata.push(obj.value);
                            labeldata.push(obj.name);
                        })
                        getData(urls[k].chartid).renderer([{ 
                            backgroundColor : color,
                            borderColor : color,
                            fill:false,
                            pointRadius:1,
                            borderWidth : 1,
                            data : chartdata
                        }],labeldata);
                    }
                    
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
                        lazy.openWin('#lingdaotong/amap?tablename=rlt_older_hot&orgid='+org_id);
                    }
                }]
            },{
                id : 'gqylnr_chart',
                type : 'chart',
                class : 'rectdiv',
                width : 500,
                title : '各区域老年人',
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
                id : 'gqyldlnr_chart',
                type : 'chart',
                class : 'rectdiv',
                width : 500,
                title : '各区域流动老年人',
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
                id : 'btnllnrxbdb_chart',
                type : 'chart',
                class : 'rectdiv',
                width : 400,
                title : '不同年龄老年人性别对比',
                chart_type : 'line',
                chart_data : {
                    labels : [],
                    datasets : []
                },
                chart_options : {}
            },
            /*{
                id:'jynlnrk_chart',
                type : 'chart',
                class : 'rectdiv',
                width : 400,
                title : '近1年老年人口统计',
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

