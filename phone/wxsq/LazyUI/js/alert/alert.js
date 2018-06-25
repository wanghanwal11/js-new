lazy.plugins.alert = {
    "init" : function(el,data) {
       
            var table = lazy.create("div", "table box box_v");
           
               var tr = lazy.create("div","tr");
               tr.style.backgroundImage='url('+data.img+')';
               var _html = '';
               _html += '<div class="title">'+data.title+'</div>';
               _html += '<div class="content">'+data.content+'</div>'
               tr.innerHTML = _html;
            var btn = lazy.create('div','btn');
            btn.innerHTML='<span>'+data.button+'</span>';
            btn.onclick = function(){
                if(data.onclick) data.onclick(data)
            }
          btn.onclick = function(){
              if(data.onclick) data.onclick(data)
          }
           table.appendChild(tr);
           table.appendChild(btn);
            el.appendChild(table);
            el.onclick=function(){
                this.style.display='none';
            }
        if(data.hide) el.style.display='none';
        data.show=function(){
            el.style.display='';
        }
        
        data.hide=function(){
            el.style.display='none';
        }
    }
}
