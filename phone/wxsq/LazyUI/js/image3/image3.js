lazy.plugins.image3 = {
	"init" : function(el,data) {
        var k = 0;
        var addbtn = lazy.create("div","add");
        var list = [];
        var cha = [];
        for(var i=0;i<data.max;i++){
            list[i] = lazy.create("div",".td");
            cha[i] = lazy.create("div","cha hide");
            el.appendChild(list[i]);
            list[i].appendChild(cha[i]);
            if(i==0)list[i].appendChild(addbtn);
            cha[i].onclick = function() {
                k--;
                //var deleimg = this.parentNode.getElementsByTagName("img")[0];
                //list[k].removeChild(deleimg)
                var parent = this.parentNode;
                parent.removeChild(parent.getElementsByTagName("img")[0]);
                cha[k].className = "cha hide";
                var height = parseInt(k/3)+1;
                //alert(height)
                 //el.style.height = height*5.5+'rem';
                fun();
            }
        }
        addbtn.onclick = function() {
            //lazy.startPhoto(function(pics, upids) {
                pics=['../../LazyUI/images/default.png','../../LazyUI/images/default.png','../../LazyUI/images/default.png','../../LazyUI/images/default.png']
                lazy.for(pics,function(obj,i){
                    if(k>=data.max){
                        lazy.alert2("最多只能上传"+data.max+"张图片")
                        fun()
                        return;
                    }
                    cha[k].className = "cha";
                    var img = lazy.create('img','.img');
                    img.src = pics[i];
                    list[k].appendChild(img);
                    k++;
                })
                /*
                cha[k].className = "cha";
                var img = lazy.create('img','.img');
                img.src = pics[0];
                list[k].appendChild(img);
                
                k++;
                */
                fun();
               
            //},3);
           
        }
        
        function fun() {
            if(k<0) k = 0;
            if(k<data.max) {
                addbtn.style.display = "block";
                list[k].appendChild(addbtn);
                //el.style.height = (Math.ceil(k/3))*5.5+'rem';
                el.style.height = (parseInt(k/3)+1)*5.5+'rem';
            }else {
                el.style.height = 3*5.5+'rem';
                addbtn.style.display = "none";
            }
            img();
        }
        function img() {
           var imgarr = el.getElementsByClassName("img");
           //alert(imgarr.length);
           for(var i = 0; i < imgarr.length; i++) {
               list[i].appendChild(imgarr[i]);
           }
        }
        
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
