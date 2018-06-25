lazy.plugins.button = {
    "init" : function(el,data) {
        !data.disabled&&(data.disabled=false);
        !data.padding&&(data.padding='0 0.8rem');
        (data.fill==undefined)&&(data.fill = true);
        disabledFun(data.disabled);
        !data.disabled && (el.onclick = function() {
            data.onclick && data.onclick(data);
        }); 
        data.all_change = function() {
            disabledFun(data.disabled);
        }
        data.disabled_change = disabledFun;
        data.change = function(bol){
           if(!bol){
                el.onclick = function() {
                    data.onclick && data.onclick(data);
                }
           }
        }
        data.change_title = function(title){
           el.getElementsByClassName("button_a")[0].innerHTML = '<span>'+title+'</span>';
        }
        data.change_color = function(color){
           el.getElementsByClassName("button_a")[0].style.backgroundColor = color;
        }
        data.change_bordercolor = function(color){
           el.getElementsByClassName("button_a")[0].style.borderColor = color;
        }
        data.change_textcolor = function(color){
           el.getElementsByTagName("span")[0].style.color = color;
        }
        function disabledFun(bol) {
            el.style.padding = data.padding;
            if(bol) el.innerHTML = '<div class="button_a '+(data.color||"green")+' disabled '+(data.fill?"":"nobg")+'"><span>'+data.label+'</span></div>';
            else el.innerHTML = '<a href="javascript:;" class="button_a '+(data.color||"green")+' '+(data.fill?"":"nobg")+'"><span>'+data.label+'</span></a>';
        }
    }
}