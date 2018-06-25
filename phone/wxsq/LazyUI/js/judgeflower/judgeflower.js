lazy.plugins.judgeflower = {
    "init" : function(el,data) {
        var table = lazy.create("div", "table box");
        var level = 3;
        el.appendChild(table);
        
        var judge = lazy.create("div",'judge box');
        judge.innerHTML = '<div class="title">'+data.title+'</div>';
        
        var good = lazy.create("div",'good_choose box_f1');
        good.innerHTML = '<span class="text">好评</span>';
        good.setAttribute("choose",1)
        var middle = lazy.create("div",'middle box_f1');
        middle.innerHTML = '<span class="text">中评</span>';
        middle.setAttribute("choose",0)
        var bad = lazy.create("div",'bad box_f1');
        bad.innerHTML = '<span class="text">差评</span>';
        bad.setAttribute("choose",0)
        good.onclick = function(){
            if(good.getAttribute("choose") == 0){
                good.setAttribute("choose",1)
                middle.setAttribute("choose",0)
                bad.setAttribute("choose",0)
                level=3;
                good.className="good_choose box_f1"
                middle.className="middle box_f1"
                bad.className="bad box_f1"
            }
            if(data.onclick) data.onclick(data,5)
        }
        middle.onclick = function(){
            if(middle.getAttribute("choose") == 0){
                middle.setAttribute("choose",1)
                good.setAttribute("choose",0)
                bad.setAttribute("choose",0)
                level=2
                console.log(middle);
                
                middle.className="middle_choose box_f1"
                good.className="good box_f1"
                bad.className="bad box_f1"
            }
            if(data.onclick) data.onclick(data,3)
        }
        bad.onclick = function(){
            if(bad.getAttribute("choose") == 0){
                bad.setAttribute("choose",1)
                good.setAttribute("choose",0)
                middle.setAttribute("choose",0)
                level=1;
                bad.className="bad_choose box_f1"
                good.className="good box_f1"
                middle.className="middle box_f1"
            }
            if(data.onclick) data.onclick(data,1)
        }
        judge.appendChild(good)
        judge.appendChild(middle)
        judge.appendChild(bad)
       
        table.appendChild(judge)
         
       
         data.getLevel = function(){
             return level;
         }
        
    },
    "edit" : function(parentElement,el,data) {
        
    }
}
