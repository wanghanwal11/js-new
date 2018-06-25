lazy.plugins.doclist = {
    "init" : function(el,data) {
       
       function one(list){
           
            var left = lazy.create("div","left");
           var now_page = 0;
           var delete_id;
           
           el.appendChild(left)
            /*添加分类按钮*/
           var hidden = true;
           var add = lazy.create("div","add_type");
           add.innerHTML = '<span>添加分类</span>';
           add.onclick = function(){
               if(hidden){
                   addtype_div.style.display='';
                   hidden = false;
               }else{
                   addtype_div.style.display='none';
                   hidden = true;
               }
               
               
           }
           /*添加分类*/
           var addtype_div = lazy.create("div","addtype_div box box_around");
           addtype_div.style.display = 'none';
           
           var inputdiv = lazy.create("div","inputdiv");
           var input = lazy.create("input","inputtext");
           input.placeholder='请输入分类名';
           inputdiv.appendChild(input);
           var yes = lazy.create("div","yes");
           yes.onclick = function(){
               if(data.addtype) data.addtype(input.value)
           }
           var cancel = lazy.create("div","cancel");
           cancel.onclick = function(){
               input.value = '';
               addtype_div.style.display='none';
               hidden = true;
           }
           addtype_div.appendChild(inputdiv);
           addtype_div.appendChild(yes);
           addtype_div.appendChild(cancel);
          
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
           delete_title.innerHTML = '<span>亲：删除分类会清空该分类所有内容,确定要继续吗？</span>';
           delete_alert.appendChild(delete_title)
           var btn = lazy.create("div","button box box_around");
           var btn_yes = lazy.create("div","btn_yes");
           btn_yes.innerHTML = '<span>确定</span>';
           btn_yes.onclick = function(){
               el.getElementsByClassName("shadow")[0].style.display = 'none';
               el.getElementsByClassName("delete_alert")[0].style.display = 'none';
               if(data.deletetype) data.deletetype(delete_id)
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
           
           el.appendChild(add)
           el.appendChild(addtype_div)
           el.appendChild(shadow)
           el.appendChild(delete_alert)
           lazy.for(list,function(obj,i){
               var li = lazy.create("a","li "+(i==0?"choose":""));
               var lidiv = lazy.create("div","lidiv box box_h box_between");
               /*标题*/
               var title_input = lazy.create("input","")
               title_input.value = obj.title;
               title_input.readOnly="readonly";
                /*设置按钮*/
               var li_setting = lazy.create("div","setting");
               li_setting.style.display = (i==0)?"":"none";
               li_setting.onclick = function(e){
                   //e.stopPropagation();//阻止点击事件向上冒泡
                   settinglist.style.display = '';
                   li.onclick = null;
               }
               
               /*保存按钮*/
               var li_yes = lazy.create("div","yes");
               li_yes.style.display = 'none';
               
               li_yes.onclick = function(e){
                    e.stopPropagation();//阻止点击事件向上冒泡
                   if(data.updatetype) data.updatetype(obj.id,title_input.value)
                   this.style.display = 'none';
                   li_cancel.style.display = 'none';
                   li_setting.style.display = '';
                   li.onclick = lionclick;
               }
                /*取消按钮*/
               var li_cancel = lazy.create("div","cancel");
               li_cancel.style.display = 'none';
               li_cancel.onclick = function(){
                   this.style.display = 'none';
                   li_yes.style.display = 'none';
                   li_setting.style.display = '';
                   this.parentNode.getElementsByTagName("input")[0].readOnly = "readOnly";
                   li.onclick = lionclick;
               }
              
               /*设置列表*/
               var settinglist = lazy.create("div","settinglist");
               settinglist.style.display = 'none';
               
               var li_rename = lazy.create("div","li");
               li_rename.innerHTML = '<span>修改分类名</span>';
               li_rename.onclick = function(e){
                   //e.stopPropagation();//阻止点击事件向上冒泡
                   li.onclick = null;
                   el.getElementsByClassName("choose")[0].getElementsByTagName("input")[0].readOnly = "";
                   el.getElementsByClassName("choose")[0].getElementsByTagName("input")[0].focus();
                   li_setting.style.display = 'none';
                   settinglist.style.display = 'none';
                   li_yes.style.display = '';
                   li_cancel.style.display = '';
               }
               var li_xian = lazy.create("div","li_xian");
               
               var li_delete = lazy.create("div","li");
               li_delete.innerHTML = '<span>删除该分类</span>';
               li_delete.onclick = function(e){
                   li.onclick = null;
                  //e.stopPropagation();//阻止点击事件向上冒泡
                  settinglist.style.display = 'none';
                  el.getElementsByClassName("delete_alert")[0].style.display = '';
                  el.getElementsByClassName("shadow")[0].style.display = '';
                  delete_id = obj.id;
               }
               
                settinglist.appendChild(li_rename);
                settinglist.appendChild(li_xian);
                settinglist.appendChild(li_delete);
                settinglist.style.top = (i==0)?"20px":((20+i*24)+"px");
               
               lidiv.appendChild(title_input);  //标题 
               lidiv.appendChild(li_setting);
               lidiv.appendChild(li_yes);
               lidiv.appendChild(li_cancel);
               li.appendChild(lidiv);
               function lionclick(){
                    var pre = el.getElementsByClassName("choose")[0];
                   pre.getElementsByClassName("setting")[0].style.display='none';
                   /*
                   pre.getElementsByClassName("setting")[0].style.display='none';
                   //pre.getElementsByClassName("settinglist")[0].style.display='none';
                   pre.getElementsByClassName("yes")[0].style.display='none';
                   pre.getElementsByClassName("cancel")[0].style.display='none';
                   pre.getElementsByTagName("input")[0].readOnly='readOnly';
                   */
                   pre.className = 'li';
                   this.className = "li choose";
                   this.getElementsByClassName("setting")[0].style.display='';
                   //li_setting.style.display = 'block'
                   if(obj.onclick)
                   obj.onclick(obj);
               }
               li.onclick = lionclick;
               
               left.appendChild(li)
               left.appendChild(settinglist)
           })
       }
       
       data.add = one;
       data.clean = function(){
           el.innerHTML = '';
       }
    }
}