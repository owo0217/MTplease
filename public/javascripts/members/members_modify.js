$(document).ready(function(){

	$.ajax({
		type: 'post'
		, dataType: 'json'
		, url: '/members/get'
		, success: function(data){
			console.log('data :', data);
	
			$("input[name='members_sex']").val(data.result[0].members_sex);
			$("input[name='members_school']").val(data.result[0].members_school);
			$("input[name='members_major']").val(data.result[0].members_major);
			$("input[name='members_group']").val(data.result[0].members_group);
			$("input[name='members_mobile']").val(data.result[0].members_mobile);
			$("input[name='members_startYear']").val(data.result[0].members_startYear);
			$("input[name='members_emailAD']").val(data.result[0].members_emailAD);
			$("input[name='members_mobileAD']").val(data.result[0].members_mobileAD);
		}	// end of success
		, error: function(data, status, err){

		}	// end of error
	}); 	// end of ajax

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


	$('#btn-submit').click(function(){
		var input_data = {};

		// 비밀번호를 적지 않은 경우
		if($("input[name='members_password']").val()==""){
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
			alert('이메일 수신동의 체크 하세요');
			return;
		}
		// 모바일 수신 동의
		else if($("input[name='members_mobileAD']").val()==""){
			alert('모바일 수신 동의 체크 하세요');
			return;
		}
		// 비밀번호 확인
		else if($("input[name='members_password']").val()!= $('input[name=members_password2]').val()) {
			alert('비밀번호가 같지 않습니다.');
			return;
		}
		else{
			$('.form-control').each(function(){
				if($(this).val() != ""){
					input_data[$(this).attr('name')]= $(this).val();
				}	
			}); 	// end of each

			$.ajax({
				type: 'post'
				, dataType: 'json'
				, url: '/members/modify'
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
		}
	});	// end of click
}); 	// end of ready