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
	$('#zhu').click(function(e) {
		if(localStorage.getItem('user')) {
			e.preventDefault();
			localStorage.removeItem('user');
			location.href = "首页.html"
		}
	})
	var i = 0;
	//i代表图片的索引，0表示第一张图片
	var timer = null;
	$('.btn_r').click(function() {
		clearInterval(timer);
		i == 3 ? i = 0 : i++;
		lbs(i)
	});
	$('.btn_l').click(function() {
		clearInterval(timer);
		i == 0 ? i = 3 : i--;
		lbs(i)
	});
	$('.btn_lis').children().click(function() {
		clearInterval(timer);
		i = $(this).index();
		lbs(i);
	});

	function lbs(s) {
		$('.lbk').children().eq(s).fadeIn(500).siblings('li').fadeOut(500);
		$('.btn_lis').children().eq(s).addClass('btn_ls').siblings('li').removeClass('btn_ls');
	}
	timer = setInterval(lb, 1500);

	function lb() {
		i++;
		if(i == 3) {
			i = 0;
		}
		lbs(i);
	}
	$.ajax({
		type: "get",
		url: "https://s.taobao.com/api?_ksTS=1514533247553_254&ajax=true&m=customized&sourceId=tb.index&q=电表",
		dataType: 'jsonp',
		jsonpCallback: 'callback'
	}).done(function(data) {
		$.each(data, function(k, v) {
			//		console.log(v)
			var content = v;
			for(var i = 0; i < 4; i++) {
				var txt = content.itemlist.auctions[i].raw_title;
				var txt1 = content.itemlist.auctions[i].nick;
				var txt3 = content.itemlist.auctions[i].view_sales;
				var img = content.itemlist.auctions[i].pic_url;
				$('.zjp_ajax_p').eq(i).html($('.zjp_ajax_p').eq(i).html() + txt1);
				$('.zjp_ajax_span').eq(i).html($('.zjp_ajax_span').eq(i).html() + txt);
				$('.zjp_ajax_span2').eq(i).html($('.zjp_ajax_span2').eq(i).html() + txt3);
				$(".zjp_ajax_img")[i].src = "" + img + "";
				$(".zjp_ajax_img").eq(i).attr("data_id", content.itemlist.auctions[i].nid);
			}

			for(var i = 0; i < 8; i++) {
				var txt2 = content.itemlist.auctions[i].view_price;
				$('.zjp_ajax_span1').eq(i).html($('.zjp_ajax_span1').eq(i).html() + txt2);
			}
		})
	});
	$.ajax({
		type: "get",
		url: "https://s.taobao.com/api?_ksTS=1514533247553_254&ajax=true&m=customized&sourceId=tb.index&q=电表",
		dataType: 'jsonp',
	}).done(function(data) {
		$.each(data, function(k, v) {
			var content = v;

			for(var i = 0; i < 12; i++) {
				var imgs = content.itemlist.auctions[i].pic_url;
				var pp = content.itemlist.auctions[i].raw_title;
				var pps = pp.substring(0, 15);
				$(".zjp_ajax_imgs").eq(i).attr("data_id", content.itemlist.auctions[i].nid);
				$(".zjp_ajax_imgs")[i].src = "" + imgs + "";
				$('.zjp_ajax_pp').eq(i).html($('.zjp_ajax_pp').eq(i).html() + pps);
			}
		})
	});
	$.ajax({
		type: "get",
		url: "https://s.taobao.com/api?_ksTS=1514533247553_254&ajax=true&m=customized&sourceId=tb.index&q=电压表",
		dataType: 'jsonp',
	}).done(function(data) {
		$.each(data, function(k, v) {
			var content = v;

			for(var i = 0; i < 7; i++) {
				console.log(content.itemlist.auctions[i])
				var imgs = content.itemlist.auctions[i].pic_url;
				var pp = content.itemlist.auctions[i].raw_title;
				var pps = pp.substring(0, 15);
				$(".zjp_ajax_imgg").eq(i).attr("data_id", content.itemlist.auctions[i].nid);
				$(".zjp_ajax_imgg")[i].src = "" + imgs + "";
				$('.zjp_ajax_pps').eq(i).html($('.zjp_ajax_pps').eq(i).html() + pps);
			}

		})
	});
	$.ajax({
		type: "get",
		url: "https://s.taobao.com/api?_ksTS=1514533247553_254&ajax=true&m=customized&sourceId=tb.index&q=电压表",
		dataType: 'jsonp',
	}).done(function(data) {
		$.each(data, function(k, v) {
			var content = v;
			console.log(content)
		})
	});
	$('.lbk').mouseenter(function() {
		clearInterval(timer);
	});
	$('.lbk').mouseleave(function() {
		timer = setInterval(lb, 3000);
	});
	$(".dj").click(function(e) {
	e.preventDefault();
	if(localStorage.getItem('user')) {
		$('#userBox').html('你好,' + localStorage.getItem('user'));
		$("#zhu").html('注销');		
			e.preventDefault();
			console.log(this)
			localStorage.setItem("id", $(this).siblings("img").attr("data_id"));
			window.location.href = '../fhb/商品详情.html'
			console.log(this)		
	} else {
		alert('请先登陆')
	}
	})
});