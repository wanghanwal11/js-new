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
