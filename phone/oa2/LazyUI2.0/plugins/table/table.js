lazy.plugins.table = {
    
    init : function(el,data) {
        var table_div = lazy.create('div','table_div');
        var table_table = lazy.create('table','table_table');
        data.renderer = function(list) {
            table_table.innerHTML = '';
            lazy.for(list || [[]], function(arr,i){
                var table_tr = lazy.create('tr','table_tr '+(i%2==0?'table_tr0':'table_tr1'));
                lazy.for(arr, function(val){
                    var table_td = lazy.create('td','table_td');
                    table_td.innerHTML = '<span class="h1">'+val+'</span>';
                    table_tr.appendChild(table_td);
                });
                table_table.appendChild(table_tr);
            });
        }
        data.renderer(data.table);
        if(data.title) {
            var title = lazy.create('div','table_title');
            title.innerHTML = '<span class="h0">'+data.title+'</span>';
        }
        table_div.appendChild(title);
        table_div.appendChild(table_table);
        el.appendChild(table_div);
        
    },
    clear : function() {
        
    }
    
}
