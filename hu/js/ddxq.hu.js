$(function() {

	if(localStorage.getItem('user')) {
		$('#userBox').html('你好,' + localStorage.getItem('user'));
		$("#zhu").html('注销');
	}
	$('#userBox').click(function(e) {
		if(localStorage.getItem('user')) {
			e.preventDefault();
		}
	})
})