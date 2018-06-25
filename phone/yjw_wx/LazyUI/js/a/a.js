lazy.plugins.a = {
    "init" : function(el,data) {
        
       var banner = lazy.create("div","banner");
       banner.innerHTML = '<span>北科维拓手机组控件库</span>'
       var center = lazy.create("div","center");
       var left = lazy.create("div","left");
       var right = lazy.create("div","right");
       var now_page = 0;
       lazy.for(data.list,function(obj,i){
           var li = lazy.create("a","li "+(i==0?"choose":""));
           li.innerHTML = '<span>'+obj.class+'</span>';
           li.setAttribute("index",i)
           li.onclick = function(){
               var index = this.getAttribute("index");
               el.getElementsByClassName("choose")[0].className = 'li';
               el.getElementsByClassName("li")[index].className = 'li choose';
               var right_content = el.getElementsByClassName("right")[0];
               right_content.innerHTML='';
               renderRight(index);
           }
           left.appendChild(li)
       })
       renderRight(0)
       
       center.appendChild(left)
       center.appendChild(right)
       el.appendChild(banner)
       el.appendChild(center)
       
       function renderRight(index){
           lazy.for(data.list[index].content,function(obj){
               setData(obj.data, function(_el) {
                  console.log(obj.data)
                    right.appendChild(_el);
                    var code = lazy.create("div","code");
                    //code.innerHTML='<pre>'+JSON.stringify(obj.data,null,2)+'</pre>';
                    code.innerHTML='<pre>'+format(obj2Str(obj.data))+'</pre>';
                   //code.innerHTML='<pre>'+format(obj.data+"")+'</pre>';
                    right.appendChild(code)
                    if(obj.tips){
                        var tip = lazy.create("div","tip");
                        tip.innerHTML='<span><b>备注：</b>'+obj.tips+'</pre>';
                        right.appendChild(tip)
                    }
                });
               
           })
       }
       
       function format(jsonStr) {
         
            var level = 0;
            var jsonForMatStr = '';
            for(var i=0;i<jsonStr.length;i++){
                var c = jsonStr.charAt(i);
                if(level>0&&'\n'==jsonForMatStr.charAt(jsonForMatStr.length-1)){
                    //jsonForMatStr.append(getLevelStr(level));
                    jsonForMatStr = jsonForMatStr+getLevelStr(level);
                }
                
                switch (c) {
                    case '{': 
                    case '[':
                        //jsonForMatStr.append(c+"\n");
                        jsonForMatStr = jsonForMatStr+c;
                        
                        level++;
                        
                        break;
                    case ',': 
                        //jsonForMatStr.append(c+"\n");
                         jsonForMatStr = jsonForMatStr+c;
                        break;
                    case '}':
                    case ']':
                        //jsonForMatStr.append("\n");
                         jsonForMatStr = jsonForMatStr;
                        level--;
                        //jsonForMatStr.append(getLevelStr(level));
                        //jsonForMatStr.append(c);
                         jsonForMatStr = jsonForMatStr+getLevelStr(level);
                         jsonForMatStr = jsonForMatStr+c+"<br/>";
                        break;
                    default:
                        //jsonForMatStr.append(c);
                        jsonForMatStr = jsonForMatStr+c;
                        break;
                }
            }
            //alert(jsonForMatStr)
            return jsonForMatStr;

        }
        function getLevelStr(level){
            var levelStr='';
            for(var levelI = 0;levelI<level ; levelI++){
                //levelStr.append("\t");
                levelStr = levelStr+"\t";
            }
            return levelStr;
        }
        function obj2Str(obj){  
            
            switch(typeof(obj)){  
               case 'object':  
                    var ret = [];  
                    if (obj instanceof Array){  
                        for (var i = 0, len = obj.length; i < len; i++){  
                            ret.push(obj2Str(obj[i]));  
                        }  
                        return '[' + ret.join(',') + ']';  
                    }else if (obj instanceof RegExp){  
                        return obj.toString();  
                    }else{  
                         for (var a in obj){  
                            ret.push('<br/>\t'+a + ':' + obj2Str(obj[a]));  
                         }  
                         return '{' + ret.join(',') + '}';  
                    } 
               case 'string':  
                    return "\"" + obj.replace(/(\\|\")/g, "\\$1").replace(/\n|\r|\t/g, function(a) {return ("\n"==a)?"\\n":("\r"==a)?"\\r":("\t"==a)?"\\t":"";}) + "\"";  
               
               default:  
                     return obj.toString();  
            }  
        }  
////
    }
}