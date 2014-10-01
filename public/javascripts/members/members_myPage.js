$(document).ready(function(){
	
	$('#btn-modify').click(function(){
		location.href = '/members/modify';
	});	// end of click
	
	$('#btn-logout').click(function(){
		$.ajax({
			type: 'post',
			url: '/members/logout',
			success: function(data){
				if(data.result ===true){
					alert(data.message);
					location.href = '/members/myPage';
				}	// end of if
			}	// end of success
		}); 	// end of ajax
		
	});	// end of click
	
});	// end of bind