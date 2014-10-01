$(document).ready(function(){
	$('#btn-submit').click(function(){
		var input_data = {};

		// 아이디를 적지 않은 경우
		if($("input[name='members_ID']").val()==""){
			alert('아이디를 입력하세요.');
			return;
		}

		// 비밀번호를 적지 않은 경우
		else if($("input[name='members_password']").val()==""){
			alert('비밀번호를 입력하세요');
			return;
		}

		$('.form-control').each(function(){
			if($(this).val() != ""){
				input_data[$(this).attr('name')]= $(this).val();
			}	
		}); 	// end of each

		$.ajax({
			type: 'post'
			, dataType: 'json'
			, url: '/members/login'
			, data: input_data
			, success: function(data){
				console.log('data :', data);

				if(data.result == true){
					location.href = '/members/myPage';
				}
				else{
					alert(data.message);
				}
			}	// end of success
			, error: function(data, status, err){

			}	// end of error
		}); 	// end of ajax
	});	// end of click
}); 	// end of ready