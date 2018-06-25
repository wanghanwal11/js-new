lazy.plugins.xuanzeti = {
	"init" : function(el,data) {
	    var p = 0;
	    var bolc = true;
		var arr = data.content;
		var ydf = 0;
		//每题多少分
		var fen = data.fen?data.fen:1;
		//标题
		el.innerHTML = '<div class="ub titlename"><div class="t1">'+data.title+'</div><div class="ub-f1 t2">共'+arr.length+'题　回答<span class="yhd">0</span>题</div></div>';
		//
		for(var i = 0; i < arr.length; i++) {
		    if(arr[i].type=="单选题"||arr[i].type=="判断题"){
		    var trclassname = "tr ub ub-ver hide";
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
                var b=true;
                td.onclick = function() {
                    var pel = this.parentNode;
                    var index = parseInt(pel.getAttribute("index"));
                    if(b){
                    //
                    var val = this.getAttribute("value").toLowerCase().replace(/\s/g,"");
                    var valzq = arr[index].testanswer.toLowerCase().replace(/\s/g,"");
                    //
                    if(bolc) {
                        bolc = false;
                        pel.setAttribute("value",val);
                        zqdaspan.innerHTML = arr[index].testanswer;
                        zsd.innerHTML=arr[index].knowpoint
                        if(val == valzq)ydf++;
                    }
                    if(val == valzq) {
                       this.className = "td hh tdzq td_zq";
                       if(pel.getElementsByClassName("td_cw")[0]) {
                           pel.getElementsByClassName("td_cw")[0].className = "td hh";
                       }
                    }else {
                        b=false;
                       if(pel.getElementsByClassName("td_cw")[0]) {
                          pel.getElementsByClassName("td_cw")[0].className = "td hh";
                       }
                       if(pel.getElementsByClassName("tdzq")[0]) {
                           pel.getElementsByClassName("tdzq")[0].className = "td hh tdzq td_zq";
                       } 
                       this.className = "td hh td_cw"; 
                       //错误
                       ts.className = "ts";
                       ydfspan.innerHTML = ydf*fen;
                    }
                    }
                }
                
            }
            el.appendChild(tr);
		    }else{
		        var trclassname = "tr ub ub-ver hide";
                if(i==0)trclassname = "tr ub ub-ver";
                var tr = lazy.creat("div",trclassname,{"trid":arr[i].id,"index":i,"value":""});
                tr.innerHTML = '<div class="title"><span>'+arr[i].title+'</span></div>';
                var answer = arr[i].answer;
                for(var j = 0; j < answer.length; j++) {
                    if(answer[j].key!=null){
                        var val = answer[j].value.toLowerCase();
                        var valzq = arr[i].testanswer.toLowerCase();
                        var tdclassname = "td hh";
                        if(valzq.match(val)!=null) {
                            tdclassname = "td hh tdzq";
                        }
                        var td = lazy.creat("a",tdclassname,{"key":answer[j].key, "value":answer[j].value});
                        td.innerHTML = '<span>'+answer[j].key+'</span>';
                        tr.appendChild(td);
                    }
                    var numval="";
                    var b=true;
                    td.onclick = function() {
                        var pel = this.parentNode;
                        var index = parseInt(pel.getAttribute("index"));
                        if(b){
                        //
                        var val = this.getAttribute("value").toLowerCase().replace(/\s/g,"");
                        if(numval.match(val)==null){
                            numval+=val;
                        }
                        var valzq = arr[index].testanswer.toLowerCase().replace(/\s/g,"");
                        //
                        if(bolc) {
                            pel.setAttribute("value",numval);
                            zqdaspan.innerHTML = arr[index].testanswer;
                            zsd.innerHTML=arr[index].knowpoint
                            if(val == valzq)ydf++;
                        }
                        if(valzq.match(val)!=null) {
                           this.className = "td hh tdzq td_zq";
                           if(pel.getElementsByClassName("td_cw")[0]) {
                               pel.getElementsByClassName("td_cw")[0].className = "td hh";
                           }
                        }else {
                           b=false;
                           if(pel.getElementsByClassName("td_cw")[0]) {
                              pel.getElementsByClassName("td_cw")[0].className = "td hh";
                           }
                           for(var j=0;j<pel.getElementsByClassName("tdzq").length;j++){
                               if(pel.getElementsByClassName("tdzq")[j]) {
                                     pel.getElementsByClassName("tdzq")[j].className = "td hh tdzq td_zq";
                                } 
                           }
                           this.className = "td hh td_cw"; 
                           //错误
                           ts.className = "ts";
                        }
                        }
                    }
                }
                el.appendChild(tr);
		    }
		    
		}
		//提示信息
		var ts = lazy.creat("div","ts hide");
		ts.innerHTML = '<div class="t1 ts1">答案：<span class="zqda">A</span></div>';
		ts.innerHTML += '<div class="t1 ts1">知识点：<span class="zsd"></span></div>';
		el.appendChild(ts);
		//
		var ydfspan = el.getElementsByClassName("ydf")[0];
		var yhdspan = el.getElementsByClassName("yhd")[0];
		var zqdaspan = el.getElementsByClassName("zqda")[0];
		var zsd = el.getElementsByClassName("zsd")[0];
		//按钮
		var btn = lazy.creat("div","btn");
		var buttondiv = lazy.creat("a","buttondiv");
        buttondiv.innerHTML = '<span>下一题</span>';
        btn.appendChild(buttondiv);
        var trlist = el.getElementsByClassName("tr");
        buttondiv.onclick = function() {
            if(data.getValue()[p].selectopoion==""){
                    return lazy.alertyesno("还有题目未答完确定下一题？",function(){},function(){return});
            }
            b=true;
            //去掉下面提示
            ts.className = "ts hide";
            //
            if(p < arr.length-1) {
                bolc = true;
                trlist[p].className = "tr ub ub-ver hide";
                p++;
                trlist[p].className = "tr ub ub-ver";
                if(p == arr.length-1) {
                    buttondiv.innerHTML = '<span>提交</span>';
                }
            }else {
                if(data.back)data.back(data.getValue());
            }
            //已回答
            yhdspan.innerHTML = p;
        }
		document.body.appendChild(btn);
		//
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
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
