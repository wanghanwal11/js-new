lazy.plugins.sound = {
    "init" : function(el,data) {
        var ress="";//录音
        var tr = lazy.create("div","tr");
        var _html = '';
            _html += '<div class="tr_sound box">';
            _html += '  <span class="box_f1">'+(data.title?data.title:"")+'</span>';
            _html += '  <div class="luyin box"></div>';
            _html += '</div>';
            _html += '<div class="sounddiv"></div>';
        tr.innerHTML = _html;
        el.appendChild(tr);
        
        var luyin = tr.getElementsByClassName("luyin")[0];
        var sounddiv = tr.getElementsByClassName("sounddiv")[0];
        var pdd = lazy.create("div","pdd");
        var t = null;
        lazy.touchEvent(luyin, function(){
            if(t)clearTimeout(t);
            luyin.className="luyin luyin1";
            document.body.appendChild(pdd);
            t = setTimeout(function() {
                lazy.startRecord();
            },300);
        },function(){

        },function() {
            if(t)clearTimeout(t);
             pdd.remove();
            lazy.stopRecord(function (res1,res2) {
                ress=res1;
                add(res2)
            })
        })

        function add(id){
            luyin.style.display="none";
            var bofang = lazy.create("div","bofang");
            var del = lazy.create("div","del");
            bofang.appendChild(del)
            sprtitle.appendChild(bofang)
            var states=true;
            bofang.onclick=function(){
                if(states){
                    bofang.className="bofang bofang1";
                    lazy.playVoice(id);
                    states=false
                }else{
                    bofang.className="bofang";
                    lazy.stopVoice(id);
                    states=true
                }
            }
            del.onclick=function(){
                luyin.style.display="block";
                bofang.remove()
            }
            lazy.stopVoiceJt(function () {
                bofang.className="bofang";
                states=true
            })
        }
        data.getValue=function(){
            
            return ress;
        }
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
