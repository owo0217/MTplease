$(document).ready(function() {

	$('#btn_submit').click(function() {
		var input_data = {};
		
		$('.input_form').each(function(){
			input_data[$(this).attr('name')] = $(this).val();

			console.log($(this).val());
		});

		$.ajax({
			type : 'get',
			dataType : 'json',
			url : '/pensions/pensions_search_list_test',
			data : input_data,
			success : function(data) {
				console.log('success');
				console.log(data);
				location.href = '/pensions/pensions_search_list_test'
			},
			error : function(data, status, err) {

			}
		});

	});
});