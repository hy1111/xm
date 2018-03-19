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

//$("#registForm").submit(function(e) {
//	alert(123);
//	e.preventDefault();
//	//		return false;
//})

$("#zhuce").click(function(e) {
	console.log($("#a2").val().length)
	e.preventDefault();
	if($("#a2").val() == $("#aa").val() && $("#verification_code_fhb").val() == $("#input_content_fhb").val() && $("#a2").val().length >= 6) {

		$.ajax({
			type: "post",
			url: "../hu/js/hu.zhuce.php",
			data: {
				yh: $("#a1").val(),
				mm: $("#a2").val(),
				sj: $("#a3").val(),
				yx: $("#a4").val()
			}
		}).done(function(data) {
			if(data.trim() == "success") {
				window.location.href = '用户登陆fhb.html';
				//					localStorage.setItem('user', $("#a1").val())
			} else {
				alert("输入格式不对");
			}
		});

	}
});
//if(localStorage.getItem('user')) {
//	$('#userBox').html('你好,' + localStorage.getItem('user'));
//	$("#zhu").html('注销');
//}
//$('#userBox').click(function(e){
//	if(localStorage.getItem('user')) {
//		e.preventDefault();
//	}
//});