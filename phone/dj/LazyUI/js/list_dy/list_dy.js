lazy.plugins.list_dy = {
    "init" : function(el, data) {
        var _html = '';
        for(var i=0;i<data.src.length;i++){
            var url=lazy.url + "LazyUI/js/list_dy/"+data.src[i];
            _html+="<div class='list' index="+i+">"
            _html+='<div class="cs"><span class="photo" style="background-image:url('+url+') "></span><span>'+data.content[i]+'</span></div>';
            _html+="</div>"
        }
        el.innerHTML = _html;
        eventFun();
         function eventFun() {
             if(data.select) {
                 var list = el.getElementsByClassName("list");
                 for(var i = 0; i < list.length; i++) {
                     list[i].onclick = function() {
                         var index = this.getAttribute("index");
                         data.select(index);
                     }
                 }
             }
         }

    },
    "edit" : function(parentElement, el, data) {

    }
}
