lazy.plugins.chart = {
    
    init : function(el,data) {
        //
        var canvas = data.chart_canvas || null;
        if(!canvas) {
            var id = lazy.getAutoId()+"_Chart";
            canvas = lazy.create('canvas', '#'+id, {
                width : data.width || 400,
                height : data.height || 400
            });
           
        }
        var title = lazy.create('div','chart_titlezw');
        if(data.title) {
            title = lazy.create('div','chart_title');
            title.innerHTML = '<span class="h0">'+data.title+'</span>';
        }
        data.setTitles = function(str) {
            title.innerHTML = '<span class="h0">'+str+'</span>';
                    }
        
        el.appendChild(title);
        el.appendChild(canvas);
        var myChart = new Chart(canvas, {
            type: data.chart_type,
            data: data.chart_data || {},
            options: data.chart_options || {}
        });
        //
        data.renderer = function(datasets,labels) {
            if(labels)myChart.data.labels = labels;
            myChart.data.datasets = datasets;
            myChart.update(); 
        } 
    },
    clear : function() {
        
    }
}
