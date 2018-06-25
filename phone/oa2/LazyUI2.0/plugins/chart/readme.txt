chart_type : 'line',    //图表类型
chart_data : {},    //数据格式
chart_options : {}   //配置项
chart_canvas : ''   //自定义dom对象  得是canvas
width : 400,    //不是具体数值就是相对的宽高 
height : 400
//////////////demo

horizontalBar//横向柱形图
pointRadius : 1,//点半径
//重叠
chart_options : {
                    scales: {
                        xAxes: [{
                            stacked: true,
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }}
                    
雷达
{
            type : 'chart',
            class : 'rectdiv',
            width : 600,
            title : '各区域事件逾期量排名',
            chart_type : 'radar',
            chart_data : {
                labels : ["少数民族", "本科以上", "6-8岁", "老年人"],
                datasets : [{
                    label : '常住人口',
                    backgroundColor : color[1],
                    borderColor : color[1],
                    borderWidth : 2,
                    fill : false,
                    data : [65, 59, 90, 81]
                }, {
                    label : '流动人口',
                    backgroundColor : color[5],
                    borderColor : color[5],
                    borderWidth : 2,
                    fill : false,
                    data : [28, 48, 40, 19]
                }]
            },
            chart_options : {}
        }
[{
                type : 'chart',
                width : 600,
                chart_type : 'line',
                chart_data : {
                        labels : ["1月","2月","3月","4月","5月","6月","7月"],
                        datasets: [{
                            label: '社区一',
                            backgroundColor: "rgba(75,192,192,0.4)",
                            borderColor: "rgba(75,192,192,1)",
                            borderWidth: 1,
                            data : [65,59,90,81,56,55,40]
                        },{
                            label: '社区二',
                            backgroundColor: "rgba(75,192,192,0.4)",
                            borderColor: "rgba(75,192,192,1)",
                            borderWidth: 1,
                            data : [28,48,40,19,96,27,100]
                        }]
                    },
                chart_options : {} 
        },{
                type : 'chart',
                width : 600,
                chart_type : 'bar',
                chart_data : {
                        labels : ["1月","2月","3月","4月","5月","6月","7月"],
                        datasets: [{
                            label: '社区一',
                            backgroundColor: "rgba(75,192,192,0.4)",
                            borderColor: "rgba(75,192,192,1)",
                            borderWidth: 1,
                            data : [65,59,90,81,56,55,40]
                        },{
                            label: '社区二',
                            backgroundColor: "rgba(75,192,192,0.4)",
                            borderColor: "rgba(75,192,192,1)",
                            borderWidth: 1,
                            data : [28,48,40,19,96,27,100]
                        }]
                    },
                chart_options : {} 
        },{
                type : 'chart',
                width : 600,
                chart_type : 'doughnut',        //pie 是饼图 doughnut甜甜圈
                chart_data : {
                        labels : ["1月","2月","3月"],
                        datasets: [{
                                    data: [300, 50, 100],
                                    backgroundColor: [
                                        "#FF6384",
                                        "#36A2EB",
                                        "#FFCE56"
                                    ],
                                    hoverBackgroundColor: [
                                        "#FF6384",
                                        "#36A2EB",
                                        "#FFCE56"
                                    ]
                                }]
                    },
                chart_options : {} 
        },{
                type : 'chart',
                width : 600,
                chart_type : 'bar',
                chart_data : {
                        labels : ["1月","2月","3月","4月","5月","6月","7月"],
                        datasets: [{
                            label: '社区一',
                            backgroundColor: "rgba(75,192,192,0.4)",
                            borderColor: "rgba(75,192,192,1)",
                            borderWidth: 1,
                            data : [65,59,90,81,56,55,40]
                        },{
                            label: '社区二',
                            backgroundColor: "rgba(75,192,192,0.4)",
                            borderColor: "rgba(75,192,192,1)",
                            borderWidth: 1,
                            data : [28,48,40,19,96,27,100]
                        }]
                    },
                chart_options : {} 
        }]