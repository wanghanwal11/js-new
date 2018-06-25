lazy.plugins.scan = {
    "init" : function(el,data) {
        var _html = '<div class="circle" style="background-color:'+data.color+'">';
        if(data.icon)
            _html += '<div class="icon" style="background-image:url('+data.icon+')"></div>';
        else 
            _html += '<div class="text">'+data.text+'</div>';
        _html += '<div class="label">'+data.label+'</div>';
        _html += '</div>';
        el.innerHTML = _html
        //el.style.backgroundColor = data.color;
        el.onclick = data.onclick;
    }
}