lazy.plugins.datebutton = {
	"init" : function(el,data) {
        var tr = lazy.creat("div", "tr ub");
        tr.innerHTML="<div><input type='input' readonly placeholder='开始时间'><span class='span1'></span></div><div><input type='input' readonly placeholder='结束时间'><span class='span2'></span></div>"
        el.appendChild(tr);
        var span1=el.getElementsByClassName("span1")[0];
        var span2=el.getElementsByClassName("span2")[0];
        var input=el.getElementsByTagName("input");
        span1.onclick=function(){
            lazy.time("0",function(val){
                input[0].value=val
                
                 if(input[1].value!=""){
                    data.select1(val)
                }
            })
        }
         span2.onclick=function(){
            lazy.time("0",function(val){
                input[1].value=val
                if(input[0].value!=""){
                    data.select2(val)
                }
                
            })
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
