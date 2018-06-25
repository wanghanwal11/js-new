lazy.plugins.danyuan = {
	"init" : function(el,data) {
	    var arr = data.table?data.table:[];
	    var table = lazy.creat("div","table");
	    var hang = lazy.creat("div","hang");
	    var left = lazy.creat("div","left icon");
	    hang.appendChild(left);
        var unitdiv = lazy.creat("div","unit");
        var floordiv = lazy.creat("div","floor");
        var btns  = lazy.creat("div","btns");
	    for(var i=0;i<arr.length;i++){
	        if(i==0){
    	        btns.innerHTML += "<div class='btndiv click' index='"+i+"'>"+arr[i].unit+"单元</div>";
	        }else{
                btns.innerHTML += "<div class='btndiv' index='"+i+"'>"+arr[i].unit+"单元</div>";
            }
	    }
	    unitdiv.appendChild(btns)
	    hang.appendChild(unitdiv);
	    var right = lazy.creat("div","right icon");
	    hang.appendChild(right)
	    table.appendChild(hang);
	    table.appendChild(floordiv)
	    el.appendChild(table);
	    var btndivs= el.getElementsByClassName("btndiv");
	    load(0);
	    var btndivs = el.getElementsByClassName("btndiv");
	    for(var i=0;i<btndivs.length;i++){
	        btndivs[i].onclick = function(){
	            if(el.getElementsByClassName("click").length>0){
	                el.getElementsByClassName("click")[0].className = "btndiv";
	            }
	            this.className = "btndiv click";
    	        load(this.getAttribute("index"))
	        }
	    }
	    function load(i){
	        floordiv.innerHTML = "";
	        var floor = arr[i].floor;
	        for(var j=0;j<floor.length;j++){
	            var hangdiv = lazy.creat("div","zu");
    	        var cengdiv = lazy.creat("div","ceng");
    	        cengdiv.innerHTML = floor[j].floor+"层";
    	        hangdiv.appendChild(cengdiv)
    	        var house = floor[j].house;
    	        var househangdiv = lazy.creat("div","househang");
    	        for(var n=0;n<house.length;n++){
    	            var cme = "house "+house[n].color
    	            var housediv = lazy.creat("a",cme);
    	            housediv.setAttribute("obj",JSON.stringify(house[n]));
    	            var obj = house[n];
    	            housediv.onclick = function(){
                        obj.onclick(JSON.parse(this.getAttribute("obj")))
    	            }
    	            housediv.innerHTML = house[n].housenum;
    	            househangdiv.appendChild(housediv)
        	        hangdiv.appendChild(househangdiv)
    	        }
    	        floordiv.appendChild(hangdiv);
	        }
	    }
	    var index = 0;
	    el.getElementsByClassName("left")[0].onclick = function(){
	        if(arr.length>5){
    	        if(index>=1){
    	            index--;
    	            var width = el.getElementsByClassName("btndiv")[0].clientWidth*5;
        	        el.getElementsByClassName("btns")[0].style.marginLeft = -width*index+"px";
    	        }
	        }
	    }
	    el.getElementsByClassName("right")[0].onclick = function(){
	        if(arr.length>5){
                if(index<arr.length-1){
                    index++;
                    var width = el.getElementsByClassName("btndiv")[0].clientWidth*5;
                    el.getElementsByClassName("btns")[0].style.marginLeft = -width*index+"px";
                    //el.getElementsByClassName("btns")[0].style.marginLeft = -el.getElementsByClassName("btns")[0].clientWidth*index+"px";
                }
	        }
        }
	},
	"edit" : function(el,data) {
		
	}
}
