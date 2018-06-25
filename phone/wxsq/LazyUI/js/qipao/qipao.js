lazy.plugins.qipao = {
     "init" : function(el, data){
        var table = lazy.create("div","table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
        	var tr0 = lazy.create("div","tr0 box box_v")
            var qiu = lazy.create("div","qiu");
        	var qiu_html = '';
        	if(obj.status_t == 7){
        		qiu_html += '    <div class="x2"></div>';
                qiu_html += '    <div class="final"></div>';
                
                
        	}else{
        		qiu_html += '    <div class="x"></div>';
                qiu_html += '    <div class="yes"></div>';
                
        	}
        	qiu.innerHTML = qiu_html;
            var tr = lazy.create("div","tr hh box");
            var tr4_innerHTML = "<span class='jiao'></span>";
            tr4_innerHTML += '     <div class= "tr4 box">';
             tr4_innerHTML += '         <div class="icon" style="background-image:url(\''+obj.photo+'\')"></div>';
             tr4_innerHTML += '         <div class= "r1 box box_v">';
             tr4_innerHTML += '             <div class= "r2 box">';
             tr4_innerHTML += '                 <div class= "r3 box_f1">'+(obj.user)+'</div>';
             tr4_innerHTML += '                 <div class= "r3 box"><span>'+(obj.date)+'<span></div>';
             tr4_innerHTML += '             </div>';
            
             switch(obj.status){
                case 0:
                 tr4_innerHTML += '<div class= "r4 box"><span class="span1">已提交</span></div>';
                   // _html += '<div class="status box_f1"><span class="span1">已提交</span></div>';
                     break;
                case 1:
                 tr4_innerHTML += '<div class= "r4 box"><span class="span1">已受理</span></div>';
                   // _html += '<div class="status box_f1"><span class="span1">已受理</span></div>';
                     break;
                case 2:
                 tr4_innerHTML += '<div class= "r4 box"><span class="span1">正在办理</span></div>';
                    // _html += '<div class="status box_f1"><span class="span1">正在办理</span></div>';
                     break;
                case 3:
                tr4_innerHTML += '<div class= "r4 box"><span class="span1">已办结</span></div>';
                    //_html += '<div class="status box_f1"><span class="span1">已办结</span></div>';
                     break;
                case 4:
                 tr4_innerHTML += '<div class= "r4 box"><span class="span2">逾期正在办理</span></div>';
                    //_html += '<div class="status box_f1"><span class="span2">逾期正在办理</span></div>';
                     break;
                case 5:
                tr4_innerHTML += '<div class= "r4 box"><span class="span2">逾期已办结</span></div>';
                     //_html += '<div class="status box_f1"><span class="span2">逾期已办结</span></div>';
                     break;
                case 6:
                tr4_innerHTML += '<div class= "r4 box"><span class="span3">已作废</span></div>';
                    //_html += '<div class="status box_f1"><span class="span3">已作废</span></div>';
                     break;
                
                default:
                tr4_innerHTML += '<div class= "r4 box"><span class="span2"></span></div>';
                     //_html += '<div class="status box_f1"><span class="span2"></span></div>';
                     break;
            }
             // if(i==0){
                 //tr4_innerHTML += '      <div class= "r4 ub"><span>已录入微信政务服务系统</span></div>';
             // }else{
//             switch(obj.status){
//              case 1:
//            	  tr4_innerHTML += '             <div class= "r4 wb ub"><span>已接收</span></div>';
//            	  break;
//              case 2:
//            	  tr4_innerHTML += '             <div class= "r4 wb ub"><span>已受理</span></div>';
//            	  break;
//              case 3:
//            	  tr4_innerHTML += '             <div class= "r4 wb ub"><span>已转办</span></div>';
//            	  break;
//              case 4:
//            	  tr4_innerHTML += '             <div class= "r4 wb ub"><span>正在办理</span></div>';
//            	  break;
//              case 5:
//            	  tr4_innerHTML += '             <div class= "r4 wb ub"><span>待办理</span></div>';
//            	  break;
//              case 6:
//            	  tr4_innerHTML += '             <div class= "r4 wb ub"><span>待回访</span></div>';
//            	  break;
//              case 7:
//            	  tr4_innerHTML += '             <div class= "r4 wb ub"><span>已办结</span></div>';
//            	  break;
//              case 10:
//            	  tr4_innerHTML += '             <div class= "r4 wb ub"><span>已办结</span></div>';
//            	  break;
//              case 11:
//            	  tr4_innerHTML += '             <div class= "r4 wb ub"><span>待回访</span></div>';
//            	  break;
//              case 12:
//            	  tr4_innerHTML += '             <div class= "r4 wb ub"><span>正在办理</span></div>';
//            	  break;
//              case 13:
//            	  tr4_innerHTML += '             <div class= "r4 wb ub"><span>已转办</span></div>';
//            	  break;
//              case 14:
//            	  tr4_innerHTML += '             <div class= "r4 wb ub"><span>待审核</span></div>';
//            	  break;
              /*default:
            	  tr4_innerHTML += '             <div class= "r4 wb ub"><span>待办理</span></div>';
            	  break;*/
//             }
                /* if(obj.status=="F"){
                     tr4_innerHTML += '             <div class= "r4 wb ub"><span>待办理</span></div>';
                 }else{
                     tr4_innerHTML += '             <div class= "r4 ub"><span>'+(obj.user)+'已处理</span></div>';
                 }*/
             // }
             tr4_innerHTML += '      <div class= "r5 box"><span>'+(obj.backcontent)+'</span></div>';
             // tr4_innerHTML += ' <div class= "r4
                // ub"><span>'+(obj.progress[i].user)+'</span></div>';
             tr4_innerHTML += '         </div>';
             tr4_innerHTML += '     </div>';
            tr.innerHTML = tr4_innerHTML;
            tr0.appendChild(qiu);
            tr0.appendChild(tr);
            table.appendChild(tr0);
            el.appendChild(table);
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