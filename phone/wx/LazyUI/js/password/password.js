lazy.plugins.password = {
    "init" : function(el,data) {
        var table = lazy.create("div", "table box box_v");
        
        if(data.title1){
            var title1 = lazy.create("div","title1");
            title1.innerHTML = '<span>'+data.title1+'</span>';
            table.appendChild(title1)
        }
       
        if(data.title2){
           var title2 = lazy.create("div","title2");
           title2.innerHTML = '<span>'+data.title2+'</span>';
           table.appendChild(title2)
        }
        
        var pay_con = lazy.create("div","pay_con");
        var _html = '';
         _html += '<input type="tel" id="pay_input_1" class="pay_input" maxlength="1">';
         _html += '<input type="tel" id="pay_input_2" class="pay_input border_left" maxlength="1">';
         _html += '<input type="tel" id="pay_input_3" class="pay_input border_left" maxlength="1">';
         _html += '<input type="tel" id="pay_input_4" class="pay_input border_left" maxlength="1">';
         _html += '<input type="tel" id="pay_input_5" class="pay_input border_left" maxlength="1">';
         _html += '<input type="tel" id="pay_input_6" class="pay_input border_left" maxlength="1">';
        //pay_con.innerHTML='<input type="tel" id="pay_input_1" class="pay_input" maxlength="1"><!- -><input type="tel" id="pay_input_2" class="pay_input border-left" maxlength="1"><!- -><input type="tel" id="pay_input_3" class="pay_input border-left" maxlength="1"><!- -><input type="tel" id="pay_input_4" class="pay_input border-left" maxlength="1"><!- -><input type="tel" id="pay_input_5" class="pay_input border-left" maxlength="1"><!- -><input type="tel" id="pay_input_6" class="pay_input border-left" maxlength="1">';
        pay_con.innerHTML= _html;
        table.appendChild(pay_con)
        
        var btngroup = lazy.create("div","btngroup box");
        
        var btn_cancle = lazy.create("div","btn_cancle");
        btn_cancle.innerHTML = '<span>取消</span>';
        btn_cancle.onclick = function(){
             el.style.display='none';
        }
        
        var btn_submit = lazy.create("div","btn_submit");
        btn_submit.innerHTML = '<span>确定</span>';
        btn_submit.onclick = function(){
             if(data.onclick) data.onclick(passWord)
        }
        
        btngroup.appendChild(btn_cancle)
        btngroup.appendChild(btn_submit)
        table.appendChild(btngroup)
        
        el.appendChild(table)
        
       
        var activeIndex = 0;
        var passWord = [];
        toNext(0);
        pay_con.addEventListener('keypress',function(e) {
            if (e.target.className.toLowerCase() == 'pay_input' || e.target.className.toLowerCase() == 'pay_input border_left') {
                e.preventDefault();
                
                if (activeIndex < 6 && e.keyCode != 8) {
                    var k = String.fromCharCode(e.charCode);
                    if (/\d/.test(k)) {
                        //el.getElementById(e.target.id).val(1);
                        var temp = e.target.id.substring(10,11)
                        temp = parseInt(temp)-1;
                        el.getElementsByTagName("input")[temp].value = '1';
                        //$("#"+e.target.id).val(1);
                        passWord.push(k);
                        if (activeIndex != 6 - 1) {
                            toNext(activeIndex + 1);
                        }
                        activeIndex++;
                    } else {
                    //    alert('\u8BF7\u8F93\u5165\u6570\u5B57\u5BC6\u7801');
                    }
                }
                if (activeIndex == 6) {
                    //alert(passWord);
                }
            }
        },false);
        pay_con.addEventListener('keyup',function(e) {
            var e = e || window.event;
            if (e.keyCode == 8) {
                if (activeIndex > 0) {
                    activeIndex--;
                    reback(activeIndex);
                    passWord.pop();
                }
            }
        },false);
        function toNext(index) {
            el.getElementsByTagName("input")[index].focus();
        }
        function reback(index) {
            el.getElementsByTagName("input")[index].value='';
            el.getElementsByTagName("input")[index].focus();
        }
        data.show=function(){
            el.style.display='';
        }
        
        data.hide=function(){
            el.style.display='none';
        }
    }
}