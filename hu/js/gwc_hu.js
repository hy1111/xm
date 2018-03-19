$(function(){
	if(localStorage.getItem('user')){
		$('#userBox').html('你好,'+localStorage.getItem('user'));
		$("#zhu").html('注销');
	}
	$('#userBox').click(function(e){
		if(localStorage.getItem('user')){
			e.preventDefault();
		}
	});
	$.ajax({
		type:"post",
		url:"js/gwc.php",
		data:{
			id:localStorage.getItem("id")
		}
	}).done(function(data){
		console.log(data)
//		for(var i=0;i<data.length;i++){
//			console.log(data[i])
//		}
	});
})