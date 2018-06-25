lazy.plugins.commentlist = {
	"init" : function(el,data) {
	    //title
	    var commenttitle = lazy.create("div","title box");
	    var title_td1 = lazy.create("div","title_td1 box_f1");
	    title_td1.innerHTML = '<span>评论</span>';
	    var title_td2 = lazy.create("div","title_td2 box");
	    title_td2.innerHTML = '<span>写评论</span>';
	    if(data.editclick){
	        title_td2.onclick = function(e){
	            e.stopPropagation();
	            data.editclick()
	        }
	    }
	    commenttitle.appendChild(title_td1)
	    commenttitle.appendChild(title_td2)
	    if(data.title){
	        el.appendChild(commenttitle)
	    }
	   
	    
	    //评论内容
	    var table = lazy.create("div", "table");
        el.appendChild(table);
        
	    lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        function one(obj){
            var tr = lazy.create("div","pllist box")
            var icon = lazy.create("div","icon box");
            icon.style.backgroundImage = "url("+obj.icon+")";
            tr.appendChild(icon)
            
            var content = lazy.create("div","content box_f1")
            tr.appendChild(content)
            /*第一行 姓名和点赞*/
            var tr1 = lazy.create("div","box")
            var name = lazy.create("div","name box_f1")
            name.innerHTML = "<span>"+obj.username+"</span>"
            var zan = lazy.create("div","zan box")
            zan.innerHTML = "<span>"+obj.qlikes+"</span>"
            zan.setAttribute("isqlick",obj.isqlike)
            if(obj.isqlike=='1'){
                zan.style.backgroundImage = "url(../LazyUI/images/huodong/zan.png)";
            }else{
                zan.style.backgroundImage = "url(../LazyUI/images/huodong/nzan.png)";
            }
            tr1.appendChild(name)
            tr1.appendChild(zan)
            
            content.appendChild(tr1)
            
            zan.onclick = function(){
                    var that = this
                    if(this.getAttribute("isqlick")==1){
                        //that.style.backgroundImage = "url(../LazyUI/images/huodong/nzan.png)";
                        
                        //that.setAttribute("isqlick","0")
                         obj.zanclick(obj,1,0,that)
                         
                    }else{
                        //that.style.backgroundImage = "url(../LazyUI/images/huodong/zan.png)";
                        //that.setAttribute("isqlick","1")
                        obj.zanclick(obj,1,1,that)
                    }
                    
                }
            
            /*第二行 内容和删除*/
            
            var tr2 = lazy.create("div","tr box")
            var ping = lazy.create("div","ping box_f1")
            ping.innerHTML = "<span>"+obj.question+"</span>"
            tr2.appendChild(ping)
            
            if(obj.ismy){
               var del = lazy.create("div","del box")
               del.innerHTML = "<span>删除</span>"
               tr2.appendChild(del)
               del.onclick = function(){
                   obj.delclick(obj)
               }
            }
            content.appendChild(tr2)
            
            /*第三行 时间*/
            var tr3 = lazy.create("div","tr3 box")
            tr3.innerHTML = '<span>'+obj.questiontime+'</span>'
            content.appendChild(tr3)
            
            /*作者回复*/
            if(obj.answer){
                /*第一行*/
                var tr1 = lazy.create("div","tr1 box")
                var xian = lazy.create("div","xian box")
                var name = lazy.create("div","name box_f1")
                name.innerHTML = "<span>作者回复</span>"
                var zan = lazy.create("div","zan box")
                zan.innerHTML = "<span>"+obj.alikes+"</span>";
                zan.setAttribute("isalike",obj.isalike)
                if(obj.isalike=='1'){
                    zan.style.backgroundImage = "url(../LazyUI/images/huodong/zan.png)";
                    zan.innerHTML = "<span>"+obj.alikes+"</span>";
                }else{
                    zan.style.backgroundImage = "url(../LazyUI/images/huodong/nzan.png)";
                }
                tr1.appendChild(xian)
                tr1.appendChild(name)
                tr1.appendChild(zan)
                
                content.appendChild(tr1)
                
                zan.onclick = function(){
                    var that = this
                    if(this.getAttribute("isalike")==1){
                        //that.style.backgroundImage = "url(../LazyUI/images/huodong/nzan.png)";
                        //that.setAttribute("isalike","0")
                        obj.zanclick(obj,2,0,that)
                    }else{
                        //that.style.backgroundImage = "url(../LazyUI/images/huodong/zan.png)";
                        //that.setAttribute("isalike","1")
                        obj.zanclick(obj,2,1,that)
                    }
                    
                }
                
                
                 /*第二行 内容和删除*/
                var tr2 = lazy.create("div","tr")
                var ping = lazy.create("div","ping")
                ping.innerHTML = "<span>"+obj.answer+"</span>"
                //ping.innerHTML = "<span>我的很多中文字de</span>"
                tr2.appendChild(ping)
                content.appendChild(tr2)
                
                /*第三行 时间*/
                var tr3 = lazy.create("div","tr3 box")
                tr3.innerHTML = '<span>'+obj.answertime+'</span>'
                content.appendChild(tr3)
            }
            table.appendChild(tr)
        }
	    
	    
	    //more
	    var more = lazy.create("div","title box");
            more.innerHTML ='<div class="more"><span>查看更多</span></div><div class="right"></div>'
            if(data.moreclick){
                more.onclick = function(){
                    data.moreclick()
                }
            }
            el.appendChild(more)
	    more.style.display='none';
	    var datanull = lazy.create("div","datanull")
            datanull.innerHTML = '<span>暂时还没有评论哦~</span>'
            el.appendChild(datanull)
	    data.datanull = function(val){
	        if(val){
	            datanull.style.display=''
	        }else{
	            datanull.style.display='none'
	        }
	    }
	    data.showmore = function(){
	        more.style.display=''
	    }
        data.addZan = function(qlike,alike,node){
            console.log(qlike)
            console.log(alike)
            console.log(node)
            var text = parseInt(node.getElementsByTagName('span')[0].innerText)
            node.style.backgroundImage = "url(../LazyUI/images/huodong/zan.png)";
            if(qlike){
                node.setAttribute("isqlick","1")
            }else{
                node.setAttribute("isalike","1")
            }
            node.innerHTML = '<span>'+(text+1)+'<span>'
            //console.log(text)
        }
        data.cancelZan = function(qlike,alike,node){
            console.log(qlike)
            console.log(alike)
            console.log(node)
            var text = parseInt(node.getElementsByTagName('span')[0].innerText)
            node.style.backgroundImage = "url(../LazyUI/images/huodong/nzan.png)";
            if(qlike){
                node.setAttribute("isqlick","0")
            }else{
                node.setAttribute("isalike","0")
            }
            node.innerHTML = '<span>'+(text-1)+'<span>'
            //console.log(text)
        }
        
	    data.add = one;
	    data.clean = function(){
	        table.innerHTML = '';
	    }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
