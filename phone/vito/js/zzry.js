$(function(){
	var baseurl = "http://www.bjvito.com";
		$.ajax({
			type : "POST",
			dataType:'json', 
			async: false,
			url : baseurl +'/servicedesk/article/list.ht?id=' + $.cookie('xwid'),
			success : function(data){
				var rows = data.rows;
				for(var i=0;i<2;i++){
				    var s=$("<div><div class='title'>"+rows[0].title+"</div><div>"+rows[0].content+"</div></div>");
                    $(".content_news").append(s)
				}
			},
			 error : function() {
		          alert("error");
		     }    
		});

		$('img').parent(".MsoNormal").css("textIndent","0")
})
