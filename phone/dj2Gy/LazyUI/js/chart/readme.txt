chart_type : 'line',    //图表类型
chart_data : {},    //数据格式
chart_options : {}   //配置项
width : 400,    //不是具体数值就是相对的宽高 
height : 400
//////////////demo

曲线图
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