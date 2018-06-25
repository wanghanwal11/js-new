lazy.plugins.lazyinput = {
    "init" : function(el,data) {
       
        var table = lazy.creat("div", "table");
        lazy.for(data.table?data.table:[], function(val) {
            one(val);
        });
        el.appendChild(table);
        function one(obj) {
            var tr = lazy.creat("div", "tr ub");
            
            var title = lazy.creat("div", "title ub");
            title.innerHTML = '<span>'+(obj.title)+'</span>';
            tr.appendChild(title);
            
            var content = lazy.creat("div", "content ub-f1");
            
            switch(obj.widget){
                case "text":
                    var dsa= lazy.creat("div","dsa");
                    dsa.innerHTML=obj.content;
                    dsa.onclick=function(){
                        lazy.time('0',function(y){
                            dsa.innerHTML=y;
                        })
                    }
                    content.appendChild(dsa);
                    break;
                case "input":
                    content.innerHTML = '<div class="input"><input type="text" value="" placeholder="'+(obj.content)+'"></div>';
                    break;
                case "radiobutton":
                    for(var i = 0 ; i < obj.content.length ; i++){
                        var tr_check = lazy.creat("div","ub");
                        tr_check.setAttribute("index",i);
                        if( i == 0 ){
                            tr_check.innerHTML = '<div class="q2 true"></div><span class="check">'+(obj.content[i])+'</span>';
                        }else{
                            tr_check.innerHTML = '<div class="q"></div><span class="check">'+(obj.content[i])+'</span>';
                        }
                        //tr_check.innerHTML = '<div class="q"></div><span class="check">'+(obj.content[i])+'</span>';
                        content.appendChild(tr_check);
                        tr_check.onclick = function(){
                            
                            el.getElementsByClassName("q2")[0].className = "q";
                            this.getElementsByClassName("q")[0].className = "q2 true";
                            /*if(this.getAttribute("index") == (obj.content.length-1)){
                                el.getElementsByClassName("qita")[0].style.display = "";
                            }else{
                                el.getElementsByClassName("qita")[0].style.display = "none";
                            }*/
                            
                            
                        }
                    }
                    /*var tr_qita = lazy.creat("div","qita");
                    tr_qita.innerHTML = '<input type="text" value="" placeholder="请输入付款方式">';
                    content.appendChild(tr_qita);
                    tr_qita.style.display = "none";*/
                                        
                    break;
            }
            tr.appendChild(content);
            title.onclick = function() {
               
                if(obj.onclick)
                obj.onclick(obj);
            } 
            
            
            table.appendChild(tr);
            
        }
        data.add = one;
        data.getArray = function() {
            var arr = data.table;
            for(var i = 0 ; i < arr.length ; i++){
                switch (arr[i].widget){
                    case "text":
                        arr[i].content = el.getElementsByClassName("content")[i].getElementsByClassName("dsa")[0].innerHTML;
                        break;
                    case "input":
                        arr[i].content = el.getElementsByClassName("content")[i].getElementsByTagName("input")[0].value;
                        break;
                    case "radiobutton":
                        var bol=(el.getElementsByClassName("content")[i].firstChild.firstChild.className).match('true');
                        arr[i].content = bol?bol:'false'
                        break;
                }
            }
            return data;
        }
        
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
