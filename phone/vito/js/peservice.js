$(function(){
	$(".index_footer ul li").eq(0).click(function() {
		window.location.href = "home.html";
	})
	$(".index_footer ul li").eq(1).click(function() {
		window.location.href = "societygl.html";
	})
	$(".index_footer ul li").eq(2).click(function() {
		window.location.href = "peservice.html";
	})
	$(".index_footer ul li").eq(3).click(function() {
		window.location.href = "solution.html";
	})
	$(".index_footer ul li").eq(4).click(function() {
		window.location.href = "lol.html";
	})
	//公共tab切换
	var baseurl = "http://www.bjvito.com";
		$.ajax({
			type : "POST",
			dataType:'json', 
			async: false,
			url : baseurl +'/servicedesk/article/listBySort.ht?status=1&channelId=10000001700017',
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
					var li = $('<p></p>').html(rows[i].content);
					tab.append(li);
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
