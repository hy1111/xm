	$.ajax({
		type: "get",
		url: "https://s.taobao.com/api?_ksTS=1514533247553_254&ajax=true&m=customized&sourceId=tb.index&q=显卡",
		dataType: 'jsonp',
		}).done(function(data){
			$.each(data,function(k,v){
				var content = v;
				console.log(content)
				
			for(var i=0;i<12;i++){
				var imgs = content.itemlist.auctions[i].pic_url;
				var sp = content.itemlist.auctions[i].view_price;
				var sps = content.itemlist.auctions[i].view_sales;
				console.log(sp)
//				
				$(".zjp_ajax2_img")[i].src=""+imgs+"";
				$('.zjp_ajax2_sp').eq(i).html($('.zjp_ajax2_sp').eq(i).html()+sp);
				$('.zjp_ajax2_sps').eq(i).html($('.zjp_ajax2_sps').eq(i).html()+sps);
			}
			})
		});