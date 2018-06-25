$(function(){
	//公共tab切换
	var baseurl = "http://www.bjvito.com";
		$.ajax({
			type : "POST",
			dataType:'json', 
			async: false,
			url : baseurl +'/servicedesk/article/listBySort.ht?status=1&channelId=10000001700015',
			success : function(data){
				var rows = data.rows;
				for( var i = 0; i< rows.length;i++){
					if(i == 0){
						var li = $('<li></li>').addClass('on').html(rows[i].title);
						$('.tab_title').append(li);
					}else{
						var li = $('<li></li>').html(rows[i].title);
						$('.tab_title').append(li);
					}
					var tab = $('<div></div>').addClass('tab_content societygl');
					for(var j=0;j<4;j++){
					    var li = $('<div class="hh" index='+j+'><div class="list"><div class="left">'+"我们的战场"+'</div><div class="right"><img src="image/datu.png"></div></div></div>');
                        li.on("click",function(){alert(this.getAttribute("index"));window.location.href = "casexq.html";})
                        tab.append(li);
					}
					$('.con').append(tab);
				}
				$(".tab_content").eq(0).show();
				$(".tab_title li").click(function() {
					var ind = $(this).index();
					$(this).addClass("on").siblings().removeClass("on");
					$(".tab_content").eq(ind).show().siblings('.tab_content').hide();
				});
			},
			 error : function() {
		          alert("error");
		     }   
			
			
			
			
		});
		$('img').parent("p").css("textIndent","0")
})
