lazy.plugins.wdkxq = {
    "init" : function(el,data) {
        var arr = data.table?data.table:[];
        if(arr.length < 1) return;
        var k = 0;
        //
        
        var pic = lazy.creat("div","pic ub");
       
        pic.style.backgroundImage='url('+(arr[k].photo?arr[k].photo:"../LazyUI/js/wdkxq/images/bg.png")+')';
        pic.style.backgroundSize='100% 16rem';
        pic.style.backgroundRepeat='no-repeat';
        
        var left = lazy.creat("div","left");
        left.onclick = function() {
            //alert(arr[k].video);
            
                lazy.goBack();
        }
        var center = lazy.creat("div","center");
        center.onclick = function() {
            //alert(arr[k].video);
            lazy.playVideo(arr[k].video);
        }
        pic.appendChild(left);
        pic.appendChild(center);
        el.appendChild(pic);
        //
        var h1 = lazy.creat("div", "h1 ub");
        var _html1 = '';
        _html1 += '<span>'+(arr[0].h1)+'</span>';
        h1.innerHTML = _html1;
        var tr1 = lazy.creat("div", "tr1 ub");
        var _html = '';
        //_html += ' <div class="icon"><img src="'+(arr[0].icon?arr[0].icon:"../LazyUI/js/wdkxq/images/default.png")+'" alt="用户"></div>';
        _html += ' <div class="content"><span>'+(arr[0].user?arr[0].user:"")+'</span></div>';
        _html += ' <div class="content"><span>'+(arr[0].date?arr[0].date:"")+'</span></div>';
        //_html += ' <div class="content ub-f1"><span>'+(arr[0].time?arr[0].time:"00:00")+'</span></div>';
        tr1.innerHTML = _html; 
        el.appendChild(h1);
        el.appendChild(tr1);
        //
        var tr2 = lazy.creat("div", "tr_list ub");
        var _html2 = '<span>选择其他('+(arr[0].number?arr[0].number:0)+')</span>';
        tr2.innerHTML = _html2; 
        el.appendChild(tr2);
        //        
        
        var table = lazy.creat("div", "table");
        el.appendChild(table);
        lazy.for(arr, function(obj, i) {
            one(obj, i);
        })
        function one(obj, i) {
            var tr3 = lazy.creat("div","tr2 ub");
            var html = '';
            html += '<div class="tr3 ub '+(i==0?"selected":"")+'">';
            html += '   <div class="ub-f1"><span>'+(obj.h1?obj.h1:"")+'</span></div>';
            //html += '   <div class="time ub"><span>'+(obj.time?obj.time:"00:12:34")+'</span></div>';
            html += '</div>'
            tr3.innerHTML=html;
            tr3.onclick = function() {
                if(i!=k) {
                    var _tr3 = table.getElementsByClassName("tr2")[k];
                    _tr3.getElementsByClassName("tr3")[0].className = "tr3 ub";
                    tr3.getElementsByClassName("tr3")[0].className = "tr3 ub selected";
                    //
                    h1.innerHTML = '<span>'+(arr[i].h1)+'</span>';
                    //
                    var content0 = tr1.getElementsByClassName("content")[0];
                    var content1 = tr1.getElementsByClassName("content")[1];
                    var content2 = tr1.getElementsByClassName("content")[2];
                    content0.innerHTML = '<span>'+(arr[i].user?arr[i].user:"")+'</span>';
                    content1.innerHTML = '<span>'+(arr[i].date?arr[i].date:"")+'</span>';
                    //content2.innerHTML = '<span>'+(arr[i].time?arr[i].time:"00:00")+'</span>';
                    k = i;     
                }
            }
            table.appendChild(tr3);
            
           
        }
        data.add = function(obj) {}
       
        data.clean = function() {
            table.innerHTML = '';
        }
        
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
