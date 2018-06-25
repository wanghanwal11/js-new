lazy.plugins.flow = {
     "init" : function(el, data){
        var table = lazy.create("div","table");
        /*lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });*/
       one(data)
        el.appendChild(table);
        function one(obj) {
        	var tr0 = lazy.create("div","tr0 box box_v")
        	var html = "";
        	switch(obj.status){
        	    case '0':
        	    case '5':
        	    case '6':
        	       tr0.style.backgroundImage = 'url(../LazyUI/js/flow/process1.png)';
        	       html +="<div class='content'>";
                   html +="<div class='title'>订单派单中</div>";
                   html +="<div class='time'>"+obj.date1+'  '+obj.time1+"</div>"
                   html +="</div>";
        	       break;
        	    case '1':
        	    case '2':
        	       tr0.style.backgroundImage = 'url(../LazyUI/js/flow/process2.png)';
        	       html +="<div class='content'>";
        	       html +="<div class='title'>上门服务中</div>";
        	       html +="<div class='time'>"+obj.date2+'  '+obj.time2+"</div>"
                   html +="</div>";
                   break;
                case '3':
                case '7':
                   tr0.style.backgroundImage = 'url(../LazyUI/js/flow/process3.png)';
                   html +="<div class='content2'>";
                   html +="<div class='title'>服务已完成</div>";
                   
                   html +="</div>";
                   break;
                case '4':
                   tr0.style.backgroundImage = 'url(../LazyUI/js/flow/process3.png)';
                   html +="<div class='content2'>";
                   html +="<div class='title'>服务已取消</div>";
                   
                   html +="</div>";
                   break;
        	}
        	/*if(obj.status == 5){
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
        	}else if(obj.status == 1 || obj.status == 2 || obj.status == 3){
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