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

	$.ajax({
		type: "get",
		url: "https://s.taobao.com/api?_ksTS=1514533247553_254&ajax=true&m=customized&sourceId=tb.index&q=电表",
		dataType: 'jsonp',
		jsonpCallback: 'callback'
	}).done(function(data) {
		$.each(data, function(k, v) {
			var content = v.itemlist.auctions;
			console.log(content);
			for(var i = 0; i < content.length; i++) {
				if(localStorage.getItem('id') == content[i].nid) {
					console.log(content[i].pic_url);
					$('.img1').prop("src", content[i].pic_url);
					$(".jiage").html(content[i].view_price);
					$(".pp").html(content[i].raw_title.slice(0, 16));
					$(".aa3").html(content[i].view_fee);

				}
			}
		})
	});
	$.ajax({
		type: "get",
		url: "https://s.taobao.com/api?_ksTS=1514533247553_254&ajax=true&m=customized&sourceId=tb.index&q=电表",
		dataType: 'jsonp',
	}).done(function(data) {
		$.each(data, function(k, v) {
			var content = v.itemlist.auctions;
			console.log(content);
			for(var i = 0; i < content.length; i++) {
				if(localStorage.getItem('id') == content[i].nid) {
					console.log(content[i].pic_url);
					$('.img1').prop("src", content[i].pic_url);
					$(".jiage").html(content[i].view_price);
					$(".pp").html(content[i].raw_title.slice(0, 16));
					$(".aa3").html(content[i].view_fee);

				}
			}
		})
	});
	$.ajax({
		type: "get",
		url: "https://s.taobao.com/api?_ksTS=1514533247553_254&ajax=true&m=customized&sourceId=tb.index&q=电压表",
		dataType: 'jsonp',
	}).done(function(data) {
		$.each(data, function(k, v) {
			var content = v.itemlist.auctions;
			console.log(content);
			for(var i = 0; i < content.length; i++) {
				if(localStorage.getItem('id') == content[i].nid) {
					console.log(content[i].pic_url);
					$('.img1').prop("src", content[i].pic_url);
					$(".jiage").html(content[i].view_price);
					$(".pp").html(content[i].raw_title.slice(0, 16));
					$(".aa3").html(content[i].view_fee);

				}
			}
		})
	});
	$(".shuliang").text(localStorage.getItem("shuliang"))
	console.log(parseInt($(".jiage").html()))
	console.log(parseInt($(".shuliang").text()))

	$(".aa1").text(parseInt($(".jiage").text()) * parseInt($(".shuliang").text()))
	console.log(parseInt($(".aa3").html()))
	$("#sp2").text(parseInt($(".aa1").text()) - parseInt($(".aa2").text()) + parseInt($(".aa3").text()))
	console.log($("#sp2").text())

	$("#btn08").click(function(e) {
		e.preventDefault();
		location.href = "支付.html"
	})
})