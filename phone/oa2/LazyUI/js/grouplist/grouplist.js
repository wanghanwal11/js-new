lazy.plugins.grouplist = {
	"init" : function(el, data){
	    var grouplist = lazy.creat("div","grouplist");
	    var table = data.table;
	    for(var i=0;i<table.length;i++){
	        var hangdiv = lazy.creat("div","groupone ub");
	        hangdiv.setAttribute("id",table[i].id);
	        var icondiv = lazy.creat("div","icon box box_hh");
	        var iconarr = table[i].icon
	        for(var j=0;j<iconarr.length;j++){
	            //var iconhang = lazy.creat("div","iconhang box box_hh");
	            //var iconhangarr = iconarr[j];
	            //for(var m=0;m<iconhangarr.length;m++){
                var iconone = lazy.creat("div","iconone bcolor"+parseInt(j%7));
                if(j%2==0){
                    iconone.innerHTML = "<span class='left'>"+iconarr[j]+"</span>";
                }else{
                    iconone.innerHTML = "<span class='right'>"+iconarr[j]+"</span>";
                }
                //iconhang.appendChild(iconone);
	            //}
	            icondiv.appendChild(iconone);
	        }
	        hangdiv.appendChild(icondiv)
	        var titlediv = lazy.creat("div","title");
	        var h1div = lazy.creat("div","h1");
	        h1div.innerHTML = table[i].h1;
	        titlediv.appendChild(h1div);
	        var h2div = lazy.creat("div","h2");
            h2div.innerHTML = table[i].h2;
            titlediv.appendChild(h2div);
            hangdiv.appendChild(titlediv);
            
            hangdiv.onclick = function(){
                var list = el.getElementsByClassName("groupone");
                for(var i = 0; i < list.length; i++) {
                    if(this == list[i]) {
                        table[i].onclick(this.getAttribute("id"));
                        return;
                    }
                }
            }
	        grouplist.appendChild(hangdiv);
	    }
	    el.appendChild(grouplist)
    },
    "edit" : function(parentEl, el, data){
        
    }
}