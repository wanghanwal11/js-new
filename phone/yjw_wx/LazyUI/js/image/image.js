lazy.plugins.image = {
	"init" : function(el,data) {
        var count = 0;
        var temp = 0;
        var max = 3;
        var chacha = 0;
	    var tr = lazy.create("div","tr ub ub-ver");
        var tr1 = lazy.create("div","tr1 box");
        tr1.innerHTML = '<span>'+(data.label?data.label:'')+'</span>';
        var pic_line = lazy.create("div","line box");
        var add = lazy.create("div","add box");
        pic_line.appendChild(add);
        tr.appendChild(tr1);
        tr.appendChild(pic_line);
        el.appendChild(tr);
        add.onclick = function() {
            lazy.startPhoto(function(pics, upids) {
               // var pics=["eK79Ga-WY6mrXlox4HINT4aVLaZyOH2HelHFDJzmIt6KCg1SSj9nxxGWzslOZ2ke"]
               // var upids=["u2CfPJb_kNNOzKvnJPXFHLW6AMsi15rou33hIovX-_aSzgSrvqdf9iplMRjL6fO2"]
                var addnode = add;
                count = count + pics.length;

                if (count <= max) {
                    temp = pics.length;
                } else {
                    temp = pics.length - (count - max);
                }
                count = count - pics.length;

                for (var i = 0; i < temp; i++) {
                    var zu = lazy.create("div", "zu zu" + (i + count)
                        + " box");
                    var pic = lazy.create("img", "pic box");
                    pic.src = pics[i];
                    pic.setAttribute('upid', upids[i]);
                    var cha = lazy.create("div", "cha", {
                        "index" : chacha
                    });
                    chacha++;
                    cha.onclick = function() {

                        chacha--;
                        var index = this.getAttribute("index") * 1;

                        pic_line.removeChild(document.getElementsByClassName("zu" + index)[0]);

                        addnode.style.display = '';
                        count--;
                    }

                    zu.appendChild(pic);
                    zu.appendChild(cha);

                    pic_line.insertBefore(zu, addnode);
                }
                count = document.getElementsByClassName("zu").length;

                if (count >= max) {
                    addnode.style.display = 'none';
                }

            },3);
        }
        data.re=function(){
            var arr=[];
            var d=el.getElementsByClassName("pic");
            for(var i=0;i<d.length;i++){
                arr.push(d[i].getAttribute("upid"))
            }
            return arr;
        }
        data.setPic = function(src){
            el.getElementsByClassName("add")[0].style.display = 'none';
            
            for (var i = 0; i < src.length; i++) {
                    var zu = lazy.create("div", "zu zu" + i + " box");
                    var pic = lazy.create("img", "pic box");
                    pic.src = src[i];
                   

                    zu.appendChild(pic);
                   
                    pic_line.appendChild(zu);
                }
        }
	},
	"edit" : function(parentElement,el,data) {
		
	}
}
