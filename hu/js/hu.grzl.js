$.ajax({
	type:"get",
	url:"js/hu.grzl.json"
}).done(function(data){
	console.log(data)
	var a=data.datas[0];
	console.log(a)
	$("#bb").prop("src",a[0]);
	$("#a1").html(a[1])
	$("#a2").html(a[2])
	$("#a3").html(a[3])
	$("#a4").html(a[4])
	$("#a5").html(a[5])
	$("#a6").html(a[6])
	$("#a7").html(a[7])
	$("#a8").html(a[8])
	$("#a9").html(a[9])
});

	if(localStorage.getItem('user')){
		$('#userBox').html('你好,'+localStorage.getItem('user'));
		$("#zhu").html('注销');
	}
	$('#userBox').click(function(e){
		if(localStorage.getItem('user')){
			e.preventDefault();
		}
	})