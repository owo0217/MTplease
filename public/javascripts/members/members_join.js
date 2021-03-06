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
		// 두번째 비밀번호를 적지 않은 경우
		else if($("input[name='members_password2']").val()==""){
			alert('비밀번호 확인을 입력하세요');
			return;
		}		
		// 이메일 수신 동의
		else if($("input[name='members_emailAD']").val()==""){
			alert('이메일 수신 동의 체크를 입력하세요');
			return;
		}
		// 모바일 수신 동의
		else if($("input[name='members_mobileAD']").val()==""){
			alert('모바일 수신 동의 체크를 입력하세요');
			return;
		}
		// 비밀번호 확인
		else if($("input[name='members_password']").val()!= $('input[name=members_password2]').val()) {
			alert('비밀번호가 같지 않습니다.');
			return;
		}


		$('.form-control').each(function(){
			if($(this).val() != ""){
				input_data[$(this).attr('name')]= $(this).val();
			}	
		}); 	// end of each

		console.log('input_data: ', input_data);

		$.ajax({
			type: 'post'
			, dataType: 'json'
			, url: '/members/join'
			, data: input_data
			, success: function(data){
				console.log('data :', data);

				if(data.result === true){
					location.href = '/members/myPage';
				}
				else{
					console(data.message);
//					alert(data.message);
				}
			}	// end of success
			, error: function(data, status, err){

			}	// end of error
		}); 	// end of ajax
	});	// end of click
}); 	// end of ready