lazy.plugins.label = {
    "init" : function(el,data) {
        !data.padding&&(data.padding='0 0.8rem');
        textFun();
        data.text_change = textFun;
        data.all_change = function() {
            textFun();
        };
        function textFun() {
            el.className = el.className + (data.color||'gray');
            el.style.padding = data.padding;
            el.innerHTML = '<span>'+(data.text||'')+'</span>';
            if(data.onclick){
                el.onclick = function(){
                    data.onclick(data);
                }
            }
        }
        if(data.widgethide){
            el.style.display='none';
        }
    }
}