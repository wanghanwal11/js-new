lazy.plugins.textarea = {
    "init" : function(el,data) {
       switch(data.widget){
           case 'text':
               textFun();
               break;
           case 'radiobutton':
               radioFun();
               break;
           case 'checkbox':
               checkboxFun();
               break;
           case 'input':
               inputFun();
               break;
           case 'textarea':
               textareaFun();
               break;
           case 'singlebutton':
               singlebuttonFun();
               break;
           default :
               textFun();
               break;
               
       }
       var checked = false;
       function radioFun(){
           var div=lazy.create("div","top");
           lazy.for(data.title,function(val,i){
               
               var tr = lazy.create("div","tr_radio "+(i==0?"choose_radio":""));
               tr.innerHTML = "<div class='box'>"+val+"</div>";
               tr.setAttribute("index",i);
               tr.onclick = function(){
                   el.getElementsByClassName("choose_radio")[0].className='tr_radio';
                   this.className = "tr_radio choose_radio";
                   if(data.onclick){
                       data.onclick(data,parseInt(this.getAttribute("index"))+1);
                   }
                   
               }
               div.appendChild(tr);
               
           })
           el.appendChild(div);
       }
       function singlebuttonFun(){
           var div=lazy.create("div","top");
          
            var tr = lazy.create("div","tr box");
               var choose = lazy.create("div","choose "+(lazy.getParameter("checked")?"choose_check":"choose_nocheck"));
               var tr_check = lazy.create("div","tr_check")
               tr_check.innerHTML = "<div class='box'>"+data.title+"</div>";
               //tr_check.setAttribute("index",i);
               tr.appendChild(choose);
               tr.appendChild(tr_check);
               tr.onclick = function(){
                   if(el.getElementsByClassName("choose_check").length){
                       lazy.setParameter("checked",0)
                       el.getElementsByClassName("choose_check")[0].className='choose choose_nocheck';
                   }else if(el.getElementsByClassName("choose_nocheck").length){
                        lazy.setParameter("checked",1)
                       el.getElementsByClassName("choose_nocheck")[0].className='choose choose_check';
                   }
                   
                   //this.getElementsByClassName("choose")[0].className = "choose choose_check";
                   if(data.onclick){
                       data.onclick(data);
                   }
                   
               }
               div.appendChild(tr);
               
           
           el.appendChild(div);
           if(data.widgethide){
                el.style.display='none';
            }
       }
       function checkboxFun(){
           var div=lazy.create("div","top");
           lazy.for(data.title,function(val,i){
               
               var tr = lazy.create("div","tr box");
               var choose = lazy.create("div","choose "+(i==0?"choose_nocheck":"choose_nocheck"));
               var tr_check = lazy.create("div","tr_check")
               tr_check.innerHTML = "<div class='box'>"+val+"</div>";
               tr_check.setAttribute("index",i);
               tr.appendChild(choose);
               tr.appendChild(tr_check);
               tr.onclick = function(){
                   if(el.getElementsByClassName("choose_check").length){
                       el.getElementsByClassName("choose_check")[0].className='choose choose_nocheck';
                   }
                   
                   this.getElementsByClassName("choose")[0].className = "choose choose_check";
                   if(data.onclick){
                       data.onclick(data,parseInt(this.getAttribute("index"))+1);
                   }
                   
               }
               div.appendChild(tr);
               
           })
           el.appendChild(div);
       }
       function inputFun(){
           var tr = lazy.create("div","tr_input");
           var input = lazy.create("input","");
           input.setAttribute("type",data.input_type);
           input.setAttribute("placeholder",data.placeholder);
           
           tr.appendChild(input)
           el.appendChild(tr)
       }
       function textareaFun(){
           var tr = lazy.create("div","tr_textarea");
           var textarea = lazy.create("textarea","");
           textarea.setAttribute("placeholder",data.placeholder);
           tr.appendChild(textarea)
           
           
           el.appendChild(tr)
           if(data.length) {
               var fontnumber = lazy.create("div","fontnumber");
               fontnumber.innerHTML = '<span>0/'+data.length+'</span>'
               tr.appendChild(fontnumber)
               textarea.oninput = function() {
                  var length = textarea.value.length;
                  if(length<=data.length){
                      fontnumber.innerHTML = '<span>'+length+'/'+data.length+'</span>'
                  }else{
                      textarea.value = textarea.value.substr(0,data.length)
                  }
               };
           }
       }
       function textFun(){
           el.innerHTML = '<div class="text"><span>'+data.title+'</span></div>';
       }
       function length(length,obj){
           //alert(obj.value)
       }
       data.getTextareaValue = function(){
           var val = el.getElementsByTagName('textarea')[0].value;
           return val;
       }
       data.getCheck = function(){
           
           return checked;
       }
       data.hide = function(){
           el.style.display = 'none';
       }
       data.show = function(){
           el.style.display = '';
       }
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
