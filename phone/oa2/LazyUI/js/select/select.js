lazy.plugins.select = {
	"init" : function(el,data) {
	    var option = data.option;
	    var selectdiv = lazy.creat("div","selectdiv")
	    for(var i=0;i<option.length;i++){
	        add(option[i],i)
	    }
	    function add(obj,index){
	        var questiondiv = lazy.creat("div","question");
            questiondiv.setAttribute("index",index)
            if(obj.title&&obj.title!=""){
    	        var title = lazy.creat("div","title");
    	        title.innerHTML = obj.title;
    	        questiondiv.appendChild(title);
            }
	        var options = lazy.creat("div","options");
	        var onemore = obj.more&&!obj.more?false:true;
	        var arr = obj.arr;
	        for(var i=0;i<arr.length;i++){
	            var one = lazy.creat("div","one");
                var _html = '';
	            _html += '<div class="hang ub">';
	            _html += '<a class="left check_false" id="'+arr[i].id+'" obj='+JSON.stringify(arr[i])+'></a>';
	            _html += '<div class="right ub-f1">'+arr[i].value+'</div>';
	            _html += '</div>';
    	        one.innerHTML = _html;
    	        one.getElementsByClassName("left")[0].onclick=function(){
    	            if(this.getAttribute("onemore")=="false"){
        	            if(document.getElementsByClassName("left check_true").length>0){
        	                document.getElementsByClassName("left check_true")[0].className = "left check_false";
        	            }
    	            }
    	            if(this.className.indexOf("true")>=0){
    	                this.className = "left check_false";
    	            }else{
    	                this.className = "left check_true";
    	            }
    	        }
    	        options.appendChild(one);
	        }
	        questiondiv.appendChild(options);
	        selectdiv.appendChild(questiondiv);
	    }
	    el.appendChild(selectdiv)
	    data.getOption = function(){
	        var questiondivs = el.getElementsByClassName("question");
	        var obj = [];
	        for(var i=0;i<questiondivs.length;i++){
    	        var arr = [];
	            var ones = questiondivs[i].getElementsByClassName("check_true");
	            for(var j=0;j<ones.length;j++){
	                arr.push(JSON.parse(ones[j].getAttribute("obj")));
	            }
	            obj.push(arr)
	        }
	        return obj;
	    }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
