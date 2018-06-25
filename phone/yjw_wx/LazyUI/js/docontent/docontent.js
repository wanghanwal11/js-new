lazy.plugins.docontent = {
    "init" : function(el,data) {
       var index=0; 
       var delete_id;   
       function one(list){
         /*添加分类按钮*/
           var hidden = true;
           var addtype_div = lazy.create("div","addtype_div box box_h");
           var add = lazy.create("div","add_type");
           add.innerHTML = '<span>添加控件</span>';
           add.onclick = function(){
               if(hidden){
                   inputdiv.style.display='';
                   yes.style.display = "";
                   cancel.style.display = "";
                   hidden = false;
               }else{
                   inputdiv.style.display='none';
                   yes.style.display = "none";
                   cancel.style.display = "none";
                   hidden = true;
               }
               
               
           }
           /*添加分类*/
           var inputdiv = lazy.create("div","inputdiv");
           inputdiv.style.display = "none";
           var input = lazy.create("textarea","inputtext");
           input.placeholder='请输入控件代码';
           inputdiv.appendChild(input);
           var yes = lazy.create("div","yes");
           yes.style.display = "none";
           yes.onclick = function(){
               if(data.addContent) data.addContent(input.value)
           }
           var cancel = lazy.create("div","cancel");
           cancel.style.display = "none";
           cancel.onclick = function(){
               input.value = '';
               inputdiv.style.display='none';
               yes.style.display='none';
               cancel.style.display='none';
               hidden = true;
           }
           addtype_div.appendChild(add);
           addtype_div.appendChild(yes);
           addtype_div.appendChild(cancel);
            
           el.appendChild(addtype_div)
           el.appendChild(inputdiv)
          
           
           /*删除框*/
           var shadow = lazy.create("div","shadow");
           shadow.onclick = function(){
               this.style.display= 'none';
               el.getElementsByClassName("delete_alert")[0].style.display = 'none';
           }
           shadow.style.display = 'none';
           var delete_alert =lazy.create("div","delete_alert");
           delete_alert.style.display = 'none';
           var delete_title = lazy.create("div","delete_title");
           delete_title.innerHTML = '<span>要删除该控件吗？</span>';
           delete_alert.appendChild(delete_title)
           var btn = lazy.create("div","button box box_around");
           var btn_yes = lazy.create("div","btn_yes");
           btn_yes.innerHTML = '<span>确定</span>';
           btn_yes.onclick = function(e){
                e.stopPropagation();
               el.getElementsByClassName("delete_alert")[0].style.display = 'none';
               el.getElementsByClassName("shadow")[0].style.display = 'none';
               if(data.deleteContent) data.deleteContent(delete_id)
           }
           var btn_no = lazy.create("div","btn_no");
           btn_no.innerHTML = '<span>取消</span>';
           btn_no.onclick = function(){
               el.getElementsByClassName("delete_alert")[0].style.display = 'none';
               el.getElementsByClassName("shadow")[0].style.display = 'none';
           }
           btn.appendChild(btn_yes);
           btn.appendChild(btn_no);
           delete_alert.appendChild(btn)
           el.appendChild(shadow)
           el.appendChild(delete_alert)
           

           lazy.for(list,function(obj){
               //alert(obj.code)
               
               delete_id = obj.id
               var obj_code = getObj(obj.code);
               //alert(obj_code)
               setData(obj_code,function(_el){
                   el.appendChild(_el);
                   var show = lazy.create("div","show");
                   
                   
                    /*编辑按钮*/
                   var li_edit = lazy.create("div","edit");
                   li_edit.onclick = function(){
                       this.style.display = 'none';
                       li_yes.style.display = '';
                       li_cancel.style.display = '';
                       this.parentNode.nextSibling.getElementsByTagName("textarea")[0].readOnly="";
                       
                   }
                   /*删除按钮*/
                   var li_delete = lazy.create("div","delete");
                   li_delete.onclick = function(e){
                       
                        el.getElementsByClassName("delete_alert")[0].style.display = '';
                        el.getElementsByClassName("shadow")[0].style.display = '';
                       
                   }
                   /*保存按钮*/
                   var li_yes = lazy.create("div","yes");
                   li_yes.style.display = 'none';
                   li_yes.onclick = function(){
                       this.style.display = 'none';
                       li_edit.style.display = '';
                       li_cancel.style.display = 'none';
                       this.parentNode.nextSibling.getElementsByTagName("textarea")[0].readOnly="readOnly";
                       var returncontent = this.parentNode.nextSibling.getElementsByTagName("textarea")[0].value;
                       //alert(returncontent)
                       //console.log(returncontent)
                       if(data.updateContent)
                       data.updateContent(obj.base_id,returncontent)
                   }
                    /*取消按钮*/
                   var li_cancel = lazy.create("div","cancel");
                   li_cancel.style.display = 'none';
                   li_cancel.onclick = function(){
                       this.style.display = 'none';
                       li_yes.style.display = 'none';
                       li_edit.style.display = '';
                       this.parentNode.nextSibling.getElementsByTagName("textarea")[0].readOnly = "readOnly";
                       
                   }
                   
                   show.appendChild(li_delete);
                   show.appendChild(li_edit);
                   show.appendChild(li_cancel);
                   show.appendChild(li_yes);
                   el.appendChild(show);
                   
                   
                   
                   
                   var code = lazy.create("div","code");
                   
                   var textarea = lazy.create("textarea","code_textarea");
                   var str = obj.code.replace(/\s|\n/g,"");
                   
                   //var result = str.match(/\"\w*\":/g);
                   //alert(result)
                   textarea.value = format1(str);
                   //alert(obj.code)
                   //console.log(obj.code)
                   textarea.readOnly = "readOnly";
                   code.appendChild(textarea)
                   el.appendChild(code)
                   
               })
              
           })
            
       }
       function format(temp){
           var str='{';
           for( key in temp){
               str += '\n\t"'+formatIndex(index)+key+'"';
                   switch (typeof temp[key]){
                       case 'boolean':
                            str += ' : '+temp[key]+',';
                            break;
                       case 'function':
                            str += ' : '+temp[key]+'';
                            break;
                       case 'object':
                            if(typeof temp[key].length == 'number'){
                                index++
                                str += ' : [';
                                lazy.for(temp[key],function(a){
                                    str += ''+format(a)+'';
                                })
                                str += ']';
                                index--;
                                break;
                            }else{
                                str += ' : '+temp[key]+'';
                                break;
                            }
                            
                       default:
                            str += ' : "'+temp[key]+'",';
                            break;
                   }
           }
           str+='\n'+formatIndex(index)+'}';
         
           return str;
       }
       function formatIndex(index){
           var blankspace = '';
           for(var i = 0 ; i<index ; i++){
                blankspace+= '\t';
           }
           return blankspace;
       }
       function getObj(str){
           var key = getKey(str);
           var value = getValue(str);
           getNote(str)
           var obj={};
           for(var i = 0 ; i<value.length ; i++){
                   
                   obj[key[i]]=value[i];
               
           }
           
           return obj;
       }
       function getKey(str) {
            str= str.replace(/\s|\n/g,"");
            var result = str.match(/\"\w*\":/g);
            return result.map(function(element){
                return element.replace(/\":|\"/g, '');
            });
        }
       function getValue(str) {
            var result = str.match(/\:(\w|[\u4E00-\u9FA5\uF900-\uFA2D]|\"|\(|\)|\;|\.|\'|\{|\}|\s|\n)*\,/g);
           
            return result.map(function(element){
                element = element.replace(/\:|\",|\,|\"/g, '');
                return element.replace(/(^\s+)|(\s+$)/g,"");//去掉前后空格
            });
        }
        function getNote(str) {
            var result = str.match(/\\\(\w|[\u4E00-\u9FA5\uF900-\uFA2D]|\"|\(|\)|\;|\.|\'|\{|\}|\s|\n)*/g);
            var result2 = str.match(/\\*(\w|[\u4E00-\u9FA5\uF900-\uFA2D]|\"|\(|\)|\;|\.|\'|\{|\}|\s|\n)*\*\/g);
            alert(result)
            alert(result2)
            //return result.map(function(element){
                //element = element.replace(/\:|\",|\,|\"/g, '');
                //return element.replace(/(^\s+)|(\s+$)/g,"");//去掉前后空格
            //});
        }
        function format1(jsonStr) {
         
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
                        jsonForMatStr = jsonForMatStr+c+"\n";
                        
                        level++;
                        
                        break;
                    case ',':
                    case ';':  
                        //jsonForMatStr.append(c+"\n");
                         jsonForMatStr = jsonForMatStr+c+"\n";
                        break;
                    case '}':
                    case ']':
                        //jsonForMatStr.append("\n");
                         jsonForMatStr = jsonForMatStr+"\n";
                        level--;
                        //jsonForMatStr.append(getLevelStr(level));
                        //jsonForMatStr.append(c);
                         jsonForMatStr = jsonForMatStr+getLevelStr(level);
                         jsonForMatStr = jsonForMatStr+c;
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
       data.add = one;
       data.clean = function(){
           el.innerHTML = '';
       }
    }
}