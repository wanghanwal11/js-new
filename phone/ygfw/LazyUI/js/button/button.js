lazy.plugins.button = {
    "init" : function(el,data) {
        !data.disabled&&(data.disabled=false);
        (data.fill==undefined)&&(data.fill = true);
        disabledFun(data.disabled);
        !data.disabled && (el.onclick = function() {
            data.onclick && data.onclick(data);
        }); 
        data.label_change = function() {
            disabledFun(data.disabled);
        }
        data.fill_change = function() {
            disabledFun(data.disabled);
        }
        data.disabled_change = disabledFun;
        function disabledFun(bol) {
            if(bol) el.innerHTML = '<div class="button_a '+(data.color||"green")+' disabled '+(data.fill?"":"nobg")+'"><span>'+data.label+'</span></div>';
            else el.innerHTML = '<a href="javascript:;" class="button_a '+(data.color||"green")+' '+(data.fill?"":"nobg")+'"><span>'+data.label+'</span></a>';
        }
    }
}