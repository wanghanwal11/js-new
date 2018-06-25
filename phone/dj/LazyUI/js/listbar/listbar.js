lazy.plugins.listbar = {
    "init" : function(el, data) {
        var arr = data.table?data.table:[];
        for(var i = 0; i < arr.length; i++) {
            add(arr[i]);
        }
        function add(json) {
            var table = lazy.creat("a","table ub");
            var icon = lazy.creat("img","icon",{
                "src" : json.icon
            });
            var tr = lazy.creat("div","tr ub-f1");
            tr.innerHTML = '<div><span class="titlespan">'+(json.title?json.title:"")+'</span></div>';
            if(json.h) {
                var h = json.h;
                for(var i = 0; i < h.length; i++) {
                    var h2 = lazy.creat("div","h2 slh");
                    h2.innerHTML = '<span>'+h[i]+'</span>';
                    tr.appendChild(h2); 
                }
            }
            if(json.icon)table.appendChild(icon); 
            table.appendChild(tr);
            table.onclick = function() {
                if(json.onclick)json.onclick(json);
            } 
            el.appendChild(table);    
        }
        function clean() {
            el.innerHTML = "";
        }
        data.add = add;
        data.clean = clean;
        /*
        var arr=data.content?data.content:[];
        var div=lazy.creat("div","all")
        el.appendChild(div);
        for(var i = 0; i < arr.length; i++) {
            add(arr[i]);
        }
        function add(json){
            var _html="";
            var title=json.title?json.title:"";
            var h1=json.h1?json.h1:[];
            var h2=json.h2?json.h2:[];
            var h3=json.h3?json.h3:[];
            var h4=json.h4?json.h4:[];
            var h=lazy.creat("div","h");
            div.appendChild(h);
            if(title){
                _html+="<div class='title'><span style='background:url("+json.photo+") no-repeat;background-size:60%;background-position: 0.3rem 0.3rem;'></span>"+json.title+"</div>";
            }
            if(h1.length>0){
                _html+="<div class='h1'>";
                for(var i=0;i<h1.length;i++){
                    _html+="<div>"+h1[i]+"</div>"
                }
                _html+="</div>";
            }
            if(h2.length>0){
                _html+="<div class='h2'>";
                for(var i=0;i<h2.length;i++){
                    _html+="<div>"+h2[i]+"</div>"
                }
                _html+="</div>";
            }
             if(h3.length>0){
                 _html+="<div class='h3'>";
                for(var i=0;i<h3.length;i++){
                    _html+="<div>"+h3[i]+"</div>"
                }
                _html+="</div>";
            }
            h.innerHTML=_html;
            h.onclick=function(){
                json.onclick(json);
            }
        }
        data.add=add;
        data.clean=function(){
            div.innerHTML="";
        }
        */
    },
    "edit" : function(parentElement, el, data) {

    }
}
