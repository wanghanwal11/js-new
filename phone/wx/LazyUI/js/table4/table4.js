lazy.plugins.table4= {
	"init" : function(el,data) {
	    var title = lazy.create("div","title");
	    title.innerHTML="<div class='icons' style='background:url("+data.title[0].icon+");background-size: cover;background-position-y: -0.3rem;'></div>"+data.title[0].text
	    el.appendChild(title);
	    function addTable(data){
	        var col = 4;
            var arr = data;
            var len = arr.length;
            var tit=data.title?data.title:[{"text":"标题","icon":"moren.png"}];
            var row =  parseInt((len-1)/col) + 1;//行数
            
            var table = lazy.create("div","table box box_v");
            var more,shouqi;
           
            var temp_row = row;
            if(len>8&&(len%4==0)) temp_row++;
            for(var i = 0; i < temp_row; i++) {
                tr = lazy.create("div","box box_around tr tr"+i);
                for(var j = 0; j < col; j++) {
                    var n = j + i * col;
                    one(arr[n],tr);
                }
                table.appendChild(tr);
            }
            
            el.appendChild(table);
            switch_show(true)
            if(len>8){
                btn_more()
                var temp = --row;
                
                var shouqi =  el.getElementsByClassName("tr")[temp].getElementsByClassName("td")[len%4];
                shouqi.innerHTML = '<div class="icon" style="background-image: url(../LazyUI/js/table4/shouqi.png);"></div><div class="label"><span>收起</span></div>';
                shouqi.onclick = function(){
                    btn_more()
                    switch_show(true)
                }
                
            }
            function one(obj, tr) {
            var td;
            if(obj) {
                if(obj.class) {
                   td = lazy.create("a","td box_f1 "+obj.class);
                }else {
                   td = lazy.create("a","td box_f1 "); 
                }
                var icon = lazy.create("div","icon");
                icon.style.backgroundColor = obj.color;
                icon.style.backgroundImage = "url("+obj.icon+")";
                var label = lazy.create("div","label");
                label.innerHTML = '<span>'+obj.label+'</span>';
                td.appendChild(icon);
                td.appendChild(label);
                if(obj.onclick) {
                    td.onclick = function() {
                        obj.onclick(obj);
                    }
                }
            }else {
                td = lazy.create("div","td box_f1");
            }
            tr.appendChild(td);
        }
        function switch_show(bol){
            lazy.for(el.getElementsByClassName("tr"),function(obj,i){
                if(i>1){
                    bol?(obj.style.display='none'):(obj.style.display='');
                }
            })
        }
        function btn_more(){
            more = el.getElementsByClassName("tr")[1].getElementsByClassName("td")[3];
            more.getElementsByClassName("icon")[0].style.backgroundImage = "url(../LazyUI/js/table4/more.png)";
            more.getElementsByClassName("label")[0].innerHTML = '<span>更多</span>';
            more.onclick = function(){
                more.getElementsByClassName("icon")[0].style.backgroundImage = "url("+arr[7].icon+")";
                more.getElementsByClassName("label")[0].innerHTML = '<span>'+arr[7].label+'</span>';
                more.onclick = function(){
                    arr[7].onclick(arr[7])
                }
                switch_show(false)
            }
            
        }
	    }
	    
	    
	    data.hide=function(){
	        el.style.display="none";
	    }
	    data.show=function(){
            el.style.display="block";
        }
        data.add = addTable;
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
