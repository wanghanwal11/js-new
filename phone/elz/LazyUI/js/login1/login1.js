lazy.plugins.login1 = {
    "init" : function(el,data) {
       
        var table = lazy.creat("div", "table");
        var top = lazy.creat("div","top")
        var  str = '<span>白云区e廉政</span>'
        top.innerHTML = str; 
        table.appendChild(top);
        el.appendChild(table);
        var login = lazy.creat("div","login");
        var _str = '';
            _str += '<div class="row1">';
            _str += '<span><img src='+(data.user)+'></span>';
            _str += '<input type="text" class="a" placeholder="'+(data.tpinfo)+'" />';
            _str += '</div>';
            _str += '<div class="row2">';
            _str += '<span><img src='+(data.password)+'></span>';
            _str += '<input type="password" class="a" placeholder="'+(data.tppass)+'" />';
            _str += '</div>';
        login.innerHTML = _str; 
        table.appendChild(login);
        el.appendChild(table);
        data.getValue = function() {
            var list = el.getElementsByClassName("a");
            var arr = [];
            for(var i = 0; i < list.length; i++) {
                arr.push(list[i].value);
            }
            return arr;
        }
            
    },

}
