lazy.plugins.alertcode = {
    "init" : function(el,data) {
       var alertDiv = lazy.create("div","alertDiv3 box box_v");
        var _html = '<div class="box_f1"></div>';
        _html += '<div class="tanchu">';
        if(data.title){
            _html += '  <div class="title">'+data.title+'</div>';
        }
        
        _html += '  <div class="alertcontent1">';
        _html += '      <div class="alertsucc"></div>';
        
        _html += '  </div>';
        _html += '</div>';
        _html += '<div class="box_f1"></div>';
        alertDiv.innerHTML = _html;
        
        el.appendChild(alertDiv);
        
        var alertsuccdiv = el.getElementsByClassName('alertsucc')[0];
            alertsuccdiv.style.background = 'url(../LazyUI/images/refresh.png) center no-repeat';
            alertsuccdiv.style.backgroundSize = '9rem 9rem';
            alertsuccdiv.style.borderRadius = "1rem";
            alertsuccdiv.style.height = "10rem";
        alertsuccdiv.onclick = function(e){
            if(lazy.getParameter("state")==0) e.stopPropagation(); 
            if(data.onclick) data.onclick(alertsuccdiv)
        }
        var alertcontent1 = el.getElementsByClassName('alertcontent1')[0];
        alertcontent1.style.height="10rem";
        alertcontent1.style.width="10rem";
        alertcontent1.style.padding="0rem";
        
        //事件
        alertDiv.onclick = function() {
           
            el.style.display='none';
        }
        if(data.hide) el.style.display='none';
        data.show=function(){
            el.style.display='';
        }
        
        data.hide=function(){
            el.style.display='none';
        }
        data.changeUrl = function(url){
            alertsuccdiv = el.getElementsByClassName('alertsucc')[0];
            alertsuccdiv.style.background = 'url('+url+') center no-repeat';
            alertsuccdiv.style.backgroundSize = '9rem 9rem';
            
        }
    }
}
