$(function(){
	//公共tab切换
		var baseurl = "http://www.bjvito.com";
		$.ajax({
			type : "POST",
			dataType:'json', 
			async: false,
			url : baseurl +'/servicedesk/DT_Article_Category/list.ht?parentId=10000001700023',
			success : function(data){
				var rows = data.rows;
				for( var i = 0; i< rows.length;i++){
					if(i == 0){
						var li = $('<li></li>').attr('class','on').html(rows[i].title);
						$('.tab_title').append(li);
					}else{
						var li = $('<li></li>').html(rows[i].title);
						$('.tab_title').append(li);
					}
					$.ajax({
						type : "POST",
						dataType:'json', 
						async: false,
						url : baseurl +'/servicedesk/article/list.ht?status=1&channelId=' + rows[i].id,
						success : function(data){
							var rows = data.rows;
							for( var k = 0; k< rows.length;k++){
								var result = moment(Number(rows[k].addTime)).format("YYYY-MM-DD");
								var li = $('<li></li>').attr('id',rows[k].id);
								var h2 = $('<h2></h2>').html(rows[k].title);
								li.append(h2);
								var p = $('<p></p>').html(result);
								li.append(p);
								$($('.tab_content ul')[i]).append(li);
							}
						},
						 error : function() {
					          alert("error");
					     }    
					});
					
				}
				$(".tab_content").eq(0).show();
				$(".tab_title li").click(function() {
					var ind = $(this).index();
					$(this).addClass("on").siblings().removeClass("on");
					$(".tab_content").eq(ind).show().siblings('.tab_content').hide();
				});
				$('.gsxw ul li').click(function(){
					var id = $(this).attr('id');
					$.cookie("xwid", id, { path: '/' });
					location.href = "companyxq.html";
				})
				$('.hydt ul li').click(function(){
					var id = $(this).attr('id');
					$.cookie("xwid", id, { path: '/' });
					location.href = "hydtxq.html";
				})
				$('.mtbd ul li').click(function(){
					var id = $(this).attr('id');
					$.cookie("xwid", id, { path: '/' });
					location.href = "mtbdxq.html";
				})
			},
			 error : function() {
		          alert("error");
		     }    
		});
})
