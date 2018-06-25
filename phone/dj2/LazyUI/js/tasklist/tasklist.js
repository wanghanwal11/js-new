lazy.plugins.tasklist = {
	"init" : function(el,data) {
        var arr=data.task?data.task:[];
        for(var i=0;i<arr.length;i++){
            add(arr[i]);
        }
        function add(obj){
            var mtask=$('<div class="mtask"></div>').appendTo(el);
            var left=$('<div class="left"></div>').appendTo(mtask);
            var center=$('<div class="center"></div>').appendTo(mtask);
            var right=$('<div class="right"></div>').appendTo(mtask);
            left.html($('<div><a><img src='+obj.img+'>'+obj.title+'</a></div>'))
            center.html($('<div class="tab"><div>'+obj.content+'</div></div>'))
            if(obj.type){
                right.html($('<div><span class="span1">去完成</span></div>'))
                right.on("click",function(){
                    obj.onclick()
                })
            }else{
                right.html($('<div><span class="span2">已完成</span></div>'))
            }
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
