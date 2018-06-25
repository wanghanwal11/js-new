lazy.plugins.input = {
    "init" : function(el,data) {
        typeFun();
        function typeFun() {
            var _html = '';
            
            switch(data.inputtype) {
                case 'textarea' :
                    _html += '<div class="cell">';
                    _html += '  <textarea class="input" value="'+(data.value?data.value:"")+'" placeholder="'+(data.placeholder?data.placeholder:"")+'" /></textarea>';
                    _html += '</div>';
                    el.innerHTML = _html;
                    if(data.readOnly) el.getElementsByClassName('input')[0].readOnly=true;
                    if(data.value) el.getElementsByClassName('input')[0].value=data.value;
                    break;
                default :
                    _html += '<div class="cell">';
                    _html += '  <input class="input" value="'+(data.value?data.value:"")+'" placeholder="'+(data.placeholder?data.placeholder:"")+'"  '+(data.readOnly?"readOnly":"")+' type="text" />';
                    _html += '</div>';
                    el.innerHTML = _html;
                    el.getElementsByClassName('input')[0].onkeyup = function() {
                        data.value = this.value;
                    };
                    break;
            }
            
        }
        if(data.foc){
            el.getElementsByClassName('input')[0].onclick=function(){
                data.foc()
            }
        }
        data.return=function(val){
            el.getElementsByClassName('input')[0].value=val;
        }
        data.re=function(){
            var s=el.getElementsByClassName('input')[0].value;
            return  s
        }
    }
}