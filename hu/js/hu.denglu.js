$(function(){
	var arr = [];
		for(var i = 65; i <= 90; i++) {
			var ah = String.fromCharCode(i);
			arr.push(ah);
		}
		var str = arr.join("");
		console.log(str)
		var str1 = str.toLowerCase()
		for(var j = 0; j < str1.length; j++) {
			arr.push(str1[j])
		}
		for(var k = 0; k < 10; k++) {
			arr.push(k)
		}
		var str1 = ""
		for(var l = 0; l < 4; l++) {
			str1 += arr[parseInt(Math.random() * arr.length)];
		}
		console.log(str1)
		$("#verification_code_fhb").val(str1)
	$("#btn").click(function() {
		
		if($("#input_content_fhb").val()==$("#verification_code_fhb").val()){

		$.ajax({
			type: "post",
			url: "../hu/js/hu.denglu.php",
			data: {
				yh: $("#a1").val(),
				mm: $("#a2").val()
			}
		}).done(function(data) {
			if(data.trim() == "登陆成功") {
				localStorage.setItem('user', $("#a1").val());
				window.location.href = '../zjp/首页.html';
			}else{alert("用户名或密码输入错误")}
		});
		}else{
			alert("验证码输入不对")
		}
	})

});