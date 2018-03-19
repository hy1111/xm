	$.ajax({
		type: "get",
		url: "https://s.taobao.com/api?_ksTS=1514533247553_254&ajax=true&m=customized&sourceId=tb.index&q=电表",
		dataType: 'jsonp',
		jsonpCallback: 'callback'
		}).done(function(data) {
	$.each(data, function(k,v) {
//		console.log(v)
		var content = v;
	for(var i=0;i<4;i++){
		var txt = content.itemlist.auctions[i].raw_title;
		var txt1 = content.itemlist.auctions[i].nick;
		var txt3 = content.itemlist.auctions[i].view_sales;
		var img = content.itemlist.auctions[i].pic_url;
		$('.zjp_ajax_p').eq(i).html($('.zjp_ajax_p').eq(i).html()+txt1);
		$('.zjp_ajax_span').eq(i).html($('.zjp_ajax_span').eq(i).html()+txt);
		$('.zjp_ajax_span2').eq(i).html($('.zjp_ajax_span2').eq(i).html()+txt3);
		$(".zjp_ajax_img")[i].src=""+img+"";
		$(".zjp_ajax_img").eq(i).attr("data_id",content.itemlist.auctions[i].nid);	
		}
				
		for(var i=0;i<8;i++){
			var txt2 = content.itemlist.auctions[i].view_price;
			$('.zjp_ajax_span1').eq(i).html($('.zjp_ajax_span1').eq(i).html()+txt2);
			}
				 	
			})									
		});
					
		$.ajax({
		type: "get",
		url: "https://s.taobao.com/api?_ksTS=1514533247553_254&ajax=true&m=customized&sourceId=tb.index&q=电表",
		dataType: 'jsonp',
		}).done(function(data){
			$.each(data,function(k,v){
				var content = v;
				
				for(var i=0;i<12;i++){
					var imgs = content.itemlist.auctions[i].pic_url;
					var pp = content.itemlist.auctions[i].raw_title;
					var pps =pp.substring(0,15);
					$(".zjp_ajax_imgs").eq(i).attr("data_id",content.itemlist.auctions[i].nid);
					$(".zjp_ajax_imgs")[i].src=""+imgs+"";
					$('.zjp_ajax_pp').eq(i).html($('.zjp_ajax_pp').eq(i).html()+pps);
				}
						
			})
		});
		$.ajax({
		type: "get",
		url: "https://s.taobao.com/api?_ksTS=1514533247553_254&ajax=true&m=customized&sourceId=tb.index&q=电压表",
		dataType: 'jsonp',
		}).done(function(data){
			$.each(data,function(k,v){
				var content = v;
				
				for(var i=0;i<7;i++){
					console.log(content.itemlist.auctions[i])
					var imgs = content.itemlist.auctions[i].pic_url;
					var pp = content.itemlist.auctions[i].raw_title;
					var pps =pp.substring(0,15);
					$(".zjp_ajax_imgg").eq(i).attr("data_id",content.itemlist.auctions[i].nid);
					$(".zjp_ajax_imgg")[i].src=""+imgs+"";
					$('.zjp_ajax_pps').eq(i).html($('.zjp_ajax_pps').eq(i).html()+pps);
				}
						
			})
		});		
		$.ajax({
		type: "get",
		url: "https://s.taobao.com/api?_ksTS=1514533247553_254&ajax=true&m=customized&sourceId=tb.index&q=电压表",
		dataType: 'jsonp',
		}).done(function(data){
			$.each(data,function(k,v){
				var content = v;
				console.log(content)			
			})
		});