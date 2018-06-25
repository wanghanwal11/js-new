lazy.plugins.qipaorow = {
     "init" : function(el, data){
        var table = lazy.create("div","table");
        /*lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });*/
       one(data)
        el.appendChild(table);
        function one(obj) {
        	var tr0 = lazy.create("div","tr0 box box_i")
        	var html = "";
        	if(obj.status == 5){
        	    html += '<div class="canceldiv box">';
        	    html += '  <div class = "cancel"></div><div class="canceltext">已取消</div>';
        	    html += '</div>';
        	    
        	}else if(obj.status == 0){
        	    tr0.style.paddingLeft="2rem";
            
                html += '<div class="qiu box box_v" index="0">';
                html += '    <div class="box box_i"><div class="q box"></div>';
                html += '    <div class="x1 box"></div></div>';
                html += '    <div class="status">派单中</div>';
                html += '    <div class="date1">'+obj.date1+'</div>';
                html += '    <div class="date2">'+obj.time1+'</div>';
                html += '</div>';
                html += '<div class="qiu box box_v" index="1">';
                html += '    <div class="box box_i"><div class="q1 box"></div>';
                html += '    <div class="x1 box"></div></div>';
                html += '    <div class="status">上门中</div>';
               
                html += '</div>';
                html += '<div class="qiu box box_v" index="2">';
                html += '    <div class="yes2"></div>';
                html += '    <div class="status">已完成</div>';
              
                html += '</div>';
        	}else if(obj.status == 1 || obj.status == 2){
        	    tr0.style.paddingLeft="2rem";
            
                html += '<div class="qiu box box_v" index="0">';
                html += '    <div class="box box_i"><div class="q box"></div>';
                html += '    <div class="x box"></div></div>';
                html += '    <div class="status">派单中</div>';
                html += '    <div class="date1">'+obj.date1+'</div>';
                html += '    <div class="date2">'+obj.time1+'</div>';
                html += '</div>';
                html += '<div class="qiu box box_v" index="1">';
                html += '    <div class="box box_i"><div class="q box"></div>';
                if(obj.status == 1){
                    html += '    <div class="x1 box"></div></div>';
                }else{
                    html += '    <div class="x box"></div></div>';
                }
                //html += '    <div class="x1 box"></div></div>';
                html += '    <div class="status">上门中</div>';
                html += '    <div class="date1">'+obj.date2+'</div>';
                html += '    <div class="date2">'+obj.time2+'</div>';
                html += '</div>';
                html += '<div class="qiu box box_v" index="2">';
                if(obj.status == 1){
                    html += '    <div class="yes2"></div>';
                }else{
                    html += '    <div class="yes"></div>';
                }
                html += '    <div class="status">已完成</div>';
              
                html += '</div>';
        	}/*else if(obj == 2){
        	    tr0.style.paddingLeft="2rem";
        	
            	html += '<div class="qiu box box_v" index="0">';
            	html += '    <div class="box box_i"><div class="q box"></div>';
            	html += '    <div class="x box"></div></div>';
            	html += '    <div class="status">派单中</div>';
            	html += '    <div class="date1">'+obj.time2+'</div>';
            	html += '    <div class="date2">'+obj.time2+'</div>';
            	html += '</div>';
            	html += '<div class="qiu box box_v" index="1">';
                html += '    <div class="box box_i"><div class="q box"></div>';
                html += '    <div class="x box"></div></div>';
                html += '    <div class="status">上门中</div>';
                html += '    <div class="date1">'+obj.time2+'</div>';
                html += '    <div class="date2">'+obj.time2+'</div>';
                html += '</div>';
                html += '<div class="qiu box box_v" index="2">';
                html += '    <div class="yes"></div>';
                html += '    <div class="status">已完成</div>';
              
                html += '</div>';
           }*/
           tr0.innerHTML = html;
            table.appendChild(tr0);
            //el.appendChild(table);
        }
        data.add = one;
        data.clean = function() {
            table.innerHTML = '';
            if(document.getElementsByClassName("tr0")[0])
            	document.getElementsByClassName("tr0")[0].remove();
        }
    },
    "edit" : function(parentEl, el, data){
       
    }
}