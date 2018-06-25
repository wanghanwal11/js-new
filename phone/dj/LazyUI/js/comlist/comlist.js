lazy.plugins.comlist = {
    "init" : function(el,data) {
        var arr = data.content;
        var header=data.header?data.header:[];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        var _html = '';
        var divs = lazy.creat("div",".header");
        var html='';
        for(var j=0;j<header.length;j++){
            html+="<div>"+header[j]+"</div>"
        }
        divs.innerHTML=html;
        el.appendChild(divs);
        var div = lazy.creat("div",".content");
        el.appendChild(div);
        for(var i = 0; i < arr.length; i++) {
            add(arr[i]);
        }
        function add(json) {
            var list = lazy.creat("div",".list");
            var hs="";
            hs +='<div >'+json.h1+'</div><div>'
            if(json.img||json.img==""){
            hs +='<img src='+json.img+' />'
            }
            hs +=json.h2+'</div><div>'+json.h3+'</div><div>'+json.h4+'</div>';
            list.innerHTML = hs;
            div.appendChild(list);;
            if(json.onclick){
                list.onclick=function(){
                   json.onclick(json) 
                }
            }
        }
        data.add = add;
        data.clean=function(){
            div.innerHTML=" ";
        }
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
