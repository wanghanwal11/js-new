lazy.plugins.xuanzeti1 = {
	"init" : function(el,data) {
	    var p = 0;
	    var bolc = true;
		var arr = data.content;
		var ydf = 0;
		//每题多少分
		var fen = data.fen?data.fen:1;
		//标题
		el.innerHTML = '<div class="ub titlename"><div class="t1">共'+arr.length+'题</div><div class="ub-f1 t2" id="djs"><div></div>';
		//
		for(var i = 0; i < arr.length; i++) {
		    var trclassname = "tr ub ub-ver";
            if(i==0)trclassname = "tr ub ub-ver";
            var tr = lazy.creat("div",trclassname,{"trid":arr[i].id,"index":i,"value":""});
            tr.innerHTML = '<div class="title"><span>'+arr[i].title+'</span></div>';
            var answer = arr[i].answer;
            for(var j = 0; j < answer.length; j++) {
                if(answer[j].key!=null){
                    var val = answer[j].value.toLowerCase();
                    var valzq = arr[i].testanswer.toLowerCase();
                    var tdclassname = "td hh";
                    if(val == valzq) {
                        tdclassname = "td hh tdzq";
                    }
                    var td = lazy.creat("a",tdclassname,{"key":answer[j].key, "value":answer[j].value});
                    td.innerHTML = '<span>'+answer[j].key+'</span>';
                    tr.appendChild(td);
                }
                if(arr[i].cuowu.bol){
                    var skk="td hh ";
                    for(var k=0;k<arr[i].cuowu.falseanswer.length;k++){
                        skk+='xz'+arr[i].cuowu.falseanswer[k]+" ";
                    }
                     td.className=skk;
                    
                }else{
                    td.onclick = function() {
                    var pel = this.parentNode;
                    var index = parseInt(pel.getAttribute("index"));
                    //
                    var val = this.getAttribute("value").toLowerCase().replace(/\s/g,"");
                    var valzq = arr[index].testanswer.toLowerCase().replace(/\s/g,"");
                    //
                        pel.setAttribute("value",val);
                       this.className = "td hh tdzq td_zq";
                       var sib=lazy.siblings(this);
                       for(var i=0;i<sib.length;i++){
                           if(i!=0){
                               sib[i].className="td hh tdzq"
                           }
                       }
                       if(pel.getElementsByClassName("td_cw")[0]) {
                           pel.getElementsByClassName("td_cw")[0].className = "td hh";
                       }
                    }
                }
            }
            if(arr[i].trueanswer){
                 var footer=lazy.creat("div","footer");
                footer.innerHTML="正确答案："+arr[i].trueanswer
                tr.append(footer);
            }
            el.appendChild(tr);
            
		}
		var ydfspan = el.getElementsByClassName("ydf")[0];
        var yhdspan = el.getElementsByClassName("yhd")[0];
        var zqdaspan = el.getElementsByClassName("zqda");
        var zsd = el.getElementsByClassName("zsd")[0];
		data.getValue = function() {
            var dataarr = [];
            var list = el.getElementsByClassName("tr");
            for(var i = 0; i < list.length; i++) {
                var id = list[i].getAttribute("trid");
                var value = list[i].getAttribute("value");
                dataarr.push({
                    "questionid" : id,
                    "selectopoion" : value,
                    "testanswer":arr[i].testanswer
                });
            }
            return  dataarr;
		}
		data.clear=function(){
		    el.innerHTML=" ";
		}
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
