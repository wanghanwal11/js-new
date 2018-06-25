$(function(){
	var baseurl = "http://192.168.0.10:8011/DDS";
	$(".tab_content").eq(0).show();
	$(".tab_title li").click(function(){
        var ind = $(this).index();
       /* $(this).addClass('on').siblings().removeClass('on');*/
        $('.tab_content').eq(ind).show().siblings('.tab_content').hide();
    });
	if($("#head_menu_btn").length === 1 ){
    	//点击导航菜单
		var _menu = $(".head_menu"),stra= 0;
		$("#head_menu_btn").on("click",function(){
			stra%2 == 0 ? _menu.show() : _menu.hide();
			stra++;
		});
    }
	
			$.ajax({
				type : "POST",
				dataType:'json', 
				async: false,
				url : baseurl +'/servicedesk/DT_Article_Category/list.ht?parentId=10000085090007',
				success : function(data){
					for(var j = 0;j<data.rows.length;j++){
						$($('.border_r img')[j]).attr("src",baseurl + data.rows[j].imgUrl);
						$.ajax({
							type : "POST",
							dataType:'json', 
							async: false,
							url : baseurl +'/servicedesk/article/list.ht?status=1&channelId=' + data.rows[j].id ,
							success : function(data){
								if( j==0 ){
									for(var k = 0;k<data.rows.length;k++){
										$('.step_right').append($('<p>').html((k+1) + ">"+data.rows[k].title));
									}
								}
								if( j==1 ){
									for(var k = 0;k<data.rows.length;k++){
										$('.step_right1').append($('<p>').html((k+1) + ">"+data.rows[k].title));
									}
								}
								if( j==2 ){
									for(var k = 0;k<data.rows.length;k++){
										$('.step_right2').append($('<p>').html((k+1) + ">"+data.rows[k].title));
									}
								}
								if( j==3 ){
									for(var k = 0;k<data.rows.length;k++){
										$('.step_right3').append($('<p>').html((k+1) + ">"+data.rows[k].title));
									}
								}
								if( j==4 ){
									debugger
									for(var k = 0;k<data.rows.length;k++){
										$('.step_right4').append($('<p>').html((k+1) + ">"+data.rows[k].title));
									}
								}
							},
							 error : function() {
						          alert("error");
						     }    
						});
					}
				},
				 error : function() {
			          alert("error");
			     }    
			});
	
		$.ajax({
			type : "POST",
			dataType:'json', 
			async: false,
			url : baseurl +'/servicedesk/Dt_Channel_Site/list.ht?channelId=10000001700013',
			success : function(data){
				debugger
				$('.copyright span').html(data.rows[0].address);
				$($('.copyright')[1]).html(data.rows[0].copyright + data.rows[0].crod);
			},
			 error : function() {
		          alert("error");
		     }    
		});
		$.ajax({
			type : "POST",
			dataType:'json', 
			async: false,
			url : baseurl +'/servicedesk/article/list.ht?status=1&channelId=10000001700032',
			success : function(data){
				var jiejue = '';
				for( var i = 0;i<data.rows.length;i++){
					jiejue += '<li><span><img src="'+ baseurl + data.rows[i].imgUrl +'"/></span><em>'+data.rows[i].title+'</em></li>'
				}
				$('.case-one').html(jiejue);
			},
			 error : function() {
		          alert("error");
		     }    
		});
		$.ajax({
			type : "POST",
			dataType:'json', 
			async: false,
			url : baseurl +'/servicedesk/article/list.ht?status=1&channelId=10000001700034',
			success : function(data){
				/*for( var i = 0;i<data.rows.length;i++){
					$($('.case-two li span img')[i]).attr('src',baseurl + data.rows[i].imgUrl);
					$($('.case-two li em')[i]).html(data.rows[i].title);
				}*/
				var jiejue = '';
				for( var i = 0;i<data.rows.length;i++){
					jiejue += '<li><span><img src="'+ baseurl + data.rows[i].imgUrl +'"/></span><em>'+data.rows[i].title+'</em></li>'
				}
				$('.case-two').html(jiejue);
			},
			 error : function() {
		          alert("error");
		     }    
		});
		$.ajax({
			type : "POST",
			dataType:'json', 
			async: false,
			url : baseurl +'/servicedesk/article/list.ht?status=1&channelId=10000001700230',
			success : function(data){
				debugger
				var xinwen = '';
				for( var i = 0;i<data.rows.length;i++){
					var result = moment(Number(data.rows[i].addTime)).format("MM.DD");
					xinwen += '<li class="border_b border_c"><h2>'+ result +'</h2><h3>'+ data.rows[i].title +'</h3><p>'+ data.rows[i].zhaiyao +'</p></li>';
					/*$($('.border_c h2')[i]).html(result);
					$($('.border_c h3')[i]).html(data.rows[i].title);
					$($('.border_c p')[i]).html(data.rows[i].content);*/
				}
				$('.news-list').append(xinwen);
			},
			 error : function() {
		          alert("error");
		     }    
		});
		$.ajax({
			type : "POST",
			dataType:'json', 
			async: false,
			url : baseurl +'/servicedesk/article/list.ht?status=1&channelId=10000001700021',
			success : function(data){
				debugger
				var ying = '';
				for( var i = 0;i<4;i++){
					ying += '<li class="border_b clearfix"><span><img src="'+ baseurl + data.rows[i].imgUrl +'"></span><div class="detail-right"><h3>'+ data.rows[i].title +'</h3><p><span>'+ data.rows[i].zhaiyao +'</span><a href="article/hydt.html?id='+ data.rows[i].id +'"><详情></a></p></div></li>';
					/*$($('.index-detail li')[i]).css('display','block');
					$($('.index-detail img')[i]).attr('src',baseurl + data.rows[i].imgUrl);
					$($('.detail-right h3')[i]).html(data.rows[i].title);
					$($('.detail-right p span')[i]).html(data.rows[i].content);*/
				}
				$('.index-detail ul').append(ying);
			},
			 error : function() {
		          alert("error");
		     }    
		});
		$.ajax({
			type : "POST",
			dataType:'json', 
			async: false,
			url : baseurl +'/servicedesk/article/list.ht?status=1&channelId=10000001700228',
			success : function(data){
				debugger
				$('.fl').append('<a href=article/hydt.html?id='+ data.rows[0].id +'&title='+data.rows[0].title+'><img src="'+ baseurl + data.rows[0].imgUrl +'"/></a>');
				var xinwen = '';
				if(data.rows.length > 4){
					data.rows.length = 4;
				}
				for( var i = 1;i<data.rows.length;i++){
					xinwen += '<li><span><a href=article/hydt.html?id='+ data.rows[i].id +'&title='+data.rows[0].title+'><img src="'+ baseurl + data.rows[i].imgUrl +'"/></a></span></li>';
				}
				$('#frtu').append(xinwen);
				
			},
			 error : function() {
		          alert("error");
		     }    
		});
})
