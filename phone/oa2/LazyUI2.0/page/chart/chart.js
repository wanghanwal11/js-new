PAGE_INIT = function(parent) {
    chartInit(function() {
        
        setData([{
                id : 'chart',
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
            type : 'button',
            label : '按钮',
            onclick : function() {
                getData('chart').renderer([{
                            label: '社区一1111',
                            backgroundColor: "rgba(75,192,192,0.4)",
                            borderColor: "rgba(75,192,192,1)",
                            borderWidth: 1,
                            data : [65,59,90,81,56,55,140]
                        },{
                            label: '社区二222',
                            backgroundColor: "rgba(75,192,192,0.4)",
                            borderColor: "rgba(75,192,192,1)",
                            borderWidth: 1,
                            data : [28,48,40,19,96,127,100]
                        }]);
            }
            
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
                chart_options : {
                                    title: {
                                        display: true,
                                        text: 'Custom Chart Title'
                                    }
                                }
        },{
                type : 'chart',
                width : 600,
                chart_type : 'doughnut',
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
