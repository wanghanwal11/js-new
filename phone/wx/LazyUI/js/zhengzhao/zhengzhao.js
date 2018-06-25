lazy.plugins.zhengzhao = {
	"init" : function(el,data) {
	    var table = lazy.create("div", "");
	    lazy.for(data.table?data.table:[], function(val) {
	        one(val);
	    });
	    el.appendChild(table);
	    function one(obj) {
	        var table1 = lazy.create("div", "table")
	        var tr = lazy.create('div','tr box box_v');
	        tr.style.backgroundColor = ""+obj.color+"";
	        var tr1 = lazy.create('div','tr1 box box_v');
	        var td1 = lazy.create('div','td1 box');
	        td1.innerHTML = '<div class="type box">'+obj.type+'</div><div class="number box_f1">'+obj.number+'</div>';
	        var td2 = lazy.create('div','td2');
	        td2.innerHTML=obj.name;
	        tr1.appendChild(td1)
	        tr1.appendChild(td2)
	        tr.appendChild(tr1)
	        //tr.appendChild(td2)
	        
	        table1.appendChild(tr);
	        table.appendChild(table1)
	        table1.onclick = function(){
	            if(obj.onclick) obj.onclick(obj)
	        }
	    }
	   
	    data.add = one;
	    
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
