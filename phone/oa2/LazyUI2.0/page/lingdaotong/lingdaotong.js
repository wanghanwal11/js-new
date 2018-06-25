PAGE_INIT = function(parent) {
    
    var color = ['rgba(62,148,209,.5)',
                'rgba(0,176,96,.5)',
                'rgba(255,165,64,.5)',
                'rgba(67,125,212,.5)',
                'rgba(94,196,205,.5)',
                'rgba(177,101,212,.5)',
                'rgba(245,73,85,.5)',
                'rgba(255,209,0,.5)',
                'rgba(52,207,190,.5)',
                'rgba(152,63,213,.5)',
                'rgba(134,179,45,.5)',
                'rgba(213,70,70,.5)',
                'rgba(42,163,95,.5)',
                'rgba(255,141,64,.5)',
                'rgba(155,132,46,.5)',
                'rgba(128,200,89,.5)',
                'rgba(105,151,211,.5)',
                'rgba(207,95,211,.5)']
    chartInit(function() {
        
        setData([{
            id : 'topNav_0',
            type : 'topNav_0',
            leftOnclick : function() {
                getData('leftNav').show();
            },
            rightOnclick : function() {
                lazy.openWin('#lingdaotong/other');
            },
            titles : ['区', '全部'],
            onclick : function(i) {
                //alert(i);
                //getData('topNav_0').setTitles(['区1', '全部2','区2', '全部3']);
                getData('picker').list = [[
                        {
                            name : '东城区'
                        },{
                            name : '西城区'
                        },{
                            name : '北城区'
                        }
                    ]];
                getData('picker').split = [];
                getData('picker').renderer();
                getData('picker').show();
            },
            data1 : []
        },{
            id : 'picker',
            type : 'picker',
            /*
            list : [{
                        id : 1,
                        pid : 0,
                        name : '区'
                    },{
                        id : 2,
                        pid : 1,
                        name : '街道1'
                    },{
                        id : 3,
                        pid : 1,
                        name : '街道2'
                    },{
                        id : 4,
                        pid : 2,
                        name : '网格1'
                    },{
                        id : 5,
                        pid : 2,
                        name : '网格2'
                    }],
            */
            list : [
                [{
                    name : 0
                },{
                    name : 1
                },{
                    name : 2
                },{
                    name : 322
                }],
                [{
                    name : 0
                },{
                    name : 1
                },{
                    name : 2
                },{
                    name : 3
                },{
                    name : 411
                },{
                    name : 5
                },{
                    name : 6
                }],[{
                    name : 0
                },{
                    name : 1
                },{
                    name : 22
                },{
                    name : 3
                },{
                    name : 4
                },{
                    name : 5
                },{
                    name : 6
                },{
                    name : 7
                },{
                    name : 8
                }]
            ],
            split : [],
            contact : false,
            onclick : function(arr) {
                alert(JSON.stringify(arr));
            }
        },{
            id : 'topNav_1',
            type : 'topNav_1',
            index : 0,
            list : ['今天','昨天','最近7天','最近20天','自定义'],
            onclick : function(n) {
                getData('topNav_1').setIndex(n);
                if(n == 4) {
                    getData('picker').list = [[
                        {
                            name : '2014'
                        },{
                            name : '2015'
                        },{
                            name : '2016'
                        }
                    ],[
                        {
                            name : '11'
                        },{
                            name : '12'
                        },{
                            name : '10'
                        }
                    ],[
                        {
                            name : '1'
                        },{
                            name : '2'
                        },{
                            name : '3'
                        }
                    ],[
                        {
                            name : '2014'
                        },{
                            name : '2015'
                        },{
                            name : '2016'
                        }
                    ],[
                        {
                            name : '11'
                        },{
                            name : '12'
                        },{
                            name : '10'
                        }
                    ],[
                        {
                            name : '1'
                        },{
                            name : '2'
                        },{
                            name : '3'
                        }
                    ]];
                    getData('picker').split = ['-','-','/','-','-'],
                    getData('picker').renderer();
                    getData('picker').show();
                }
                
            }
        },{
            id : 'leftNav',
            type : 'leftNav',
            icon : '',
            list : [{
                        title : '网格化分析',
                        icon : lazy.name + '/images/lingdaotong/wgh.png',
                        onclick : function() {
                            lazy.refresh();
                            //getData('leftNav').hide();
                            //lazy.openWin('lingdaotong.html#lingdaotong/lingdaotong');
                        }
                    },{
                        title : '人口分析',
                        icon : lazy.name + '/images/lingdaotong/rkfx.png',
                        onclick : function() {
                            
                        }
                    },{
                        title : '协同办公',
                        icon : lazy.name + '/images/lingdaotong/wgh.png',
                        onclick : function() {
                            
                        }
                    }]
        },{
            type : 'tableTitle2',
            list : [{
                        h1 : '网格员员总数',
                        h2 : 1520
                    },{
                        h1 : '在线网格员',
                        h2 : 118
                    },{
                        h1 : '上报事件数量',
                        h2 : 56
                    },{
                        h1 : '逾期事件数量',
                        h2 : 12
                    }]
        },{
            type : 'icontitlelist',
            list : [{
                        icon : lazy.name+'/images/lingdaotong/rlt.png',
                        title : '热力图分析',
                        onclick : function() {
                            lazy.openWin('#lingdaotong/amap');
                        }
                    }]
        },{
            type : 'table',
            title : '网格员上报排名',
            table : [
                        ['排名','网格员', '区域名称', '数量'],
                        ['1','李晓霞', '东城城区', '95'],
                        ['2','张翠芬', '东城区', '85'],
                        ['3','李晓霞', '东城区', '80'],
                        ['4','扈继瑞', '东城区', '76'],
                        ['5','刘学梅', '东城区', '40'],
                        ['6','李晓霞', '东城区', '35'],
                        ['7','姚淑梅', '东城区', '24'],
                        ['8','何丽', '东城区', '21'],
                        ['9','耿荣梅', '东城区', '18'],
                        ['10','巴芳', '东城区', '5']
                    ]
            
        },{
                type : 'chart',
                class : 'rectdiv',
                width : 600,
                title : '各区域事件处理量排名',
                chart_type : 'bar',
                chart_data : {
                        labels : ["1月","2月","3月","4月","5月","6月","7月"],
                        datasets: [{
                            label: '社区一',
                            backgroundColor: color[0],
                            borderColor: color[0],
                            borderWidth: 1,
                            data : [65,59,90,81,56,55,40]
                        },{
                            label: '社区二',
                            backgroundColor: color[1],
                            borderColor: color[1],
                            borderWidth: 1,
                            data : [28,48,40,19,96,27,100]
                        }]
                    },
                chart_options : {}
        },{
                type : 'chart',
                class : 'rectdiv',
                width : 600,
                title : '各区域事件返工量排名',
                chart_type : 'bar',
                chart_data : {
                        labels : ["1月","2月","3月","4月","5月","6月","7月"],
                        datasets: [{
                            label: '社区一',
                            backgroundColor: color[2],
                            borderColor: color[2],
                            borderWidth: 1,
                            data : [65,59,90,81,56,55,40]
                        },{
                            label: '社区二',
                            backgroundColor: color[3],
                            borderColor: color[3],
                            borderWidth: 1,
                            data : [28,48,40,19,96,27,100]
                        }]
                    },
                chart_options : {}
        },{
                type : 'chart',
                class : 'rectdiv',
                width : 600,
                title : '各区域事件逾期量排名',
                chart_type : 'bar',
                chart_data : {
                        labels : ["1月","2月","3月","4月","5月","6月","7月"],
                        datasets: [{
                            label: '社区一',
                            backgroundColor: color[4],
                            borderColor: color[4],
                            borderWidth: 1,
                            data : [65,59,90,81,56,55,40]
                        },{
                            label: '社区二',
                            backgroundColor: color[5],
                            borderColor: color[5],
                            borderWidth: 1,
                            data : [28,48,40,19,96,27,100]
                        }]
                    },
                chart_options : {}
        },{
                id : 'chart',
                type : 'chart',
                class : 'rectdiv',
                width : 600,
                title : '网格员事件上报时间分布',
                chart_type : 'line',
                chart_data : {
                        labels : ["1月","2月","3月","4月","5月","6月","7月"],
                        datasets: [{
                            label: '社区一1',
                            backgroundColor: color[6],
                            borderColor: color[6],
                            borderWidth: 1,
                            fill : false,
                            data : [65,59,90,81,56,55,40]
                        }]
                    },
                chart_options : {
                     legend: {
                                display: false
                            }
                } 
        },{
                type : 'chart',
                class : 'rectdiv',
                width : 600,
                title : '事件类型统计',
                chart_type : 'doughnut',
                chart_data : {
                        labels : ["1月","2月","3月"],
                        datasets: [{
                                    data: [300, 50, 100],
                                    backgroundColor: [
                                        color[7],
                                        color[8],
                                        color[9]
                                    ],
                                    hoverBackgroundColor: [
                                        color[7],
                                        color[8],
                                        color[9]
                                    ]
                                }]
                    } 
        },{
            type : 'autoHeight',
            height : '1rem'
        }]);
        
    });
     function chartInit(callback) {
        if(document.getElementById('ChartClassJs')===null) {
            lazy.loadJs({
                id : 'ChartClassJs',
                path : lazy.name + '/plugins/chart/ChartClass.js',
                onload : function() {
                    callback();
                }
            });
        }else { 
            callback();
        }
    }
}

