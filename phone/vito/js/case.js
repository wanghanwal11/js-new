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
		url : baseurl +'/servicedesk/article/list.ht?status=1&channelId=10000001700021',
		success : function(data){
			var rows = data.rows;
			for( var k = 0; k< rows.length;k++){
				var li = $('<li></li>').attr('id',rows[k].id);
				var h2 = $('<h2></h2>').html(rows[k].title);
				li.append(h2);
				$('.case_content ul').append(li);
			}
			$('.case_content ul li').click(function(){
				var id = $(this).attr('id');
				$.cookie("xwid", id, { path: '/' });
				location.href = "casexq.html";
			})
		},
		 error : function() {
	          alert("error");
	     }    
	});
					
})
