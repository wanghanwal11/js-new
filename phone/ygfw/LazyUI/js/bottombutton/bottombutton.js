lazy.plugins.bottombutton = {
    "init" : function(el,data) {
        var buttonarr = data.list;
        var index = data.index;
        var button_row = lazy.create("div","button_row ub");
        for(var i=0;i<buttonarr.length;i++){
            var button_col = lazy.create("a","button_col ub-f1");
            button_col.setAttribute("i",i);
            button_col.setAttribute("clickicon",buttonarr[i].icon);
            button_col.setAttribute("icon",buttonarr[i].icon.replace(/(.*)\./g,"$11."));
            if(index==i){
                button_col.className = "button_col ub-f1 click";
                var  _html = '<div class="button_icon" style="background-image:url('+buttonarr[i].icon+')"></div>';
                _html += '<div class="button_label">'+buttonarr[i].label+'</div>';
            }else{
                var  _html = '<div class="button_icon" style="background-image:url('+buttonarr[i].icon.replace(/(.*)\./g,"$11.")+')"></div>';
                _html += '<div class="button_label">'+buttonarr[i].label+'</div>';
            }
            button_col.innerHTML = _html
            button_col.onclick = function(){
                var clickDom = button_row.getElementsByClassName("click")[0];
                clickDom.className = "button_col ub-f1";
                clickDom.getElementsByClassName("button_icon")[0].style.backgroundImage = "url("+clickDom.getAttribute("icon")+")";
                this.className = "button_col ub-f1 click";
                this.getElementsByClassName("button_icon")[0].style.backgroundImage = "url("+this.getAttribute("clickicon")+")";
                buttonarr[this.getAttribute("i")].onclick();
            }
            button_row.appendChild(button_col);
        }
        el.appendChild(button_row);
    }
}