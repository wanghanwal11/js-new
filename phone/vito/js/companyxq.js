$(function(){
	var baseurl = "http://www.bjvito.com";
		$.ajax({
			type : "POST",
			dataType:'json', 
			async: false,
			url : baseurl +'/servicedesk/article/list.ht?id=' + $.cookie('xwid'),
			success : function(data){
				var rows = data.rows;
				$('.content_news h2').html(rows[0].title);
				var p = $('.news_rap').html(rows[0].content);
				$('.news_rap').append(p);
			},
			 error : function() {
		          alert("error");
		     }    
		});


		$('img').parent(".MsoNormal").css("textIndent","0")
})
