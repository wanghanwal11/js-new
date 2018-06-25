$(function() {

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
	
			//应用案例跳转
			$(".case_content ul li").click(function() {
					window.location.href = "casexq.html"
			});
			//新闻中心跳转	
				$(".tab_content ul li").click(function() {
					window.location.href="companyxq.html"
			});
			
			//新闻列表跳转	
				$(".news_list li").click(function() {
					window.location.href="companyxq.html"
			});
				
			//对接
				var baseurl = "http://www.bjvito.com";
				$.ajax({
					type : "POST",
					dataType:'json', 
					async: false,
					url : baseurl +'/servicedesk/DT_Article_Category/list.ht?parentId=10000086350023',
					success : function(data){
						var rows = data.rows;
						for(var i = 0;i<rows.length;i++){
							var li = $('<li></li>').addClass('swiper-slide');
							var img = $('<img>').attr('src',baseurl + rows[i].imgUrl);
							li.append(img);
							$('.portal_banner').append(li);
						}
					},
					 error : function() {
				          alert("error");
				     }    
				});
				//新闻
				$.ajax({
					type : "POST",
					dataType:'json', 
					async: false,
					url : baseurl +'/servicedesk/article/list.ht?isTop=1&channelId=10000001700228',
					success : function(data){
						var rows = data.rows;
						$('.left_img').css('background','url(' + baseurl + rows[0].imgUrl + ') no-repeat center center');
						$('.left_img').css('background-size','auto 100%');
						for(var i = 0;i<4;i++){
							if(rows[i].title.length > 13){
								var title = rows[i].title.substring(0,13) + '...';
							}else{
								var title = rows[i].title;
							}
							var li = $('<li></li>').attr('id',rows[i].id).html(title);
							$('.news_list').append(li);
						}
						/*var wid = $('.wrap_news_left').width();
						var imwid = $('.wrap_news_left img').width();
						debugger
						var lef = (imwid-wid)/imwid*100*(-1)+ '%';
						if( imwid < wid ){
							$('.wrap_news_left img').css('top',lef);
						}*/
						$('.wrap_news_left').click(function(){
							debugger
							var id = $($('.news_list li')[0]).attr('id');
							$.cookie("xwid", id, { path: '/' });
							location.href = "companyxq.html";
						});
						$('.news_list li').click(function(){
							var id = $(this).attr('id');
							$.cookie("xwid", id, { path: '/' });
							location.href = "companyxq.html";
						})
					},
					 error : function() {
				          alert("error");
				     }    
				});

		})