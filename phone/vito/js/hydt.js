$(function(){
	var baseurl = "http://192.168.0.10:8011/DDS";
	var id = $.request.getParameter('id');
	$.ajax({
		type : "POST",
		dataType:'json', 
		async: false,
		url : baseurl +'/servicedesk/article/list.ht?status=1&id=' + id,
		success : function(data){
			$('.hydt_main h2').html(data.rows[0].title);
			$('.hydt_main p').html(data.rows[0].content);
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
			$('.copyright span').html(data.rows[0].address);
			$($('.copyright')[1]).html(data.rows[0].copyright + data.rows[0].crod);
		},
		 error : function() {
	          alert("error");
	     }    
	});
})