//	$.ajax({
//		type: "get",
//		url: "https://s.taobao.com/api?_ksTS=1514533247553_254&ajax=true&m=customized&sourceId=tb.index&q=filco机械键盘",
//		dataType: 'jsonp',
//		}).done(function(data){
//			$.each(data,function(k,v){
//				var content = v;
//				
//			for(var i=0;i<12;i++){
//				var imgs = content.itemlist.auctions[i].pic_url;
//				var sp = content.itemlist.auctions[i].view_price;
//				var sps = content.itemlist.auctions[i].view_sales;
//				var pps = content.itemlist.auctions[i].raw_title;
//				var ppx = content.itemlist.auctions[i].nick;
//				var pps =pps.substring(0,15);
//
//				
//				$(".zjp_ajax2_img")[i].src=""+imgs+"";
//				$('.zjp_ajax2_sp').eq(i).html($('.zjp_ajax2_sp').eq(i).html()+sp);
//				$('.zjp_ajax2_sps').eq(i).html($('.zjp_ajax2_sps').eq(i).html()+sps);
//				$('.zjp_ajax2_pp').eq(i).html($('.zjp_ajax2_pp').eq(i).html()+pps);
//				$('.zjp_ajax2_pps').eq(i).html($('.zjp_ajax2_pps').eq(i).html()+ppx);
//			}
//			})
//		});
//		
//
//	$.ajax({
//		type: "get",
//		url: "https://s.taobao.com/api?_ksTS=1514533247553_254&ajax=true&m=customized&sourceId=tb.index&q=雷蛇鼠标",
//		dataType: 'jsonp',
//		}).done(function(data){
//			$.each(data,function(k,v){
//				var content = v;
//				
//			for(var i=0;i<12;i++){
//				var imgs = content.itemlist.auctions[i].pic_url;
//				var sp = content.itemlist.auctions[i].view_price;
//				var sps = content.itemlist.auctions[i].view_sales;
//				var pps = content.itemlist.auctions[i].raw_title;
//				var ppx = content.itemlist.auctions[i].nick;
//				var pps =pps.substring(0,15);
//			
//				$(".zjp_ajax2_imgs")[i].src=""+imgs+"";
//				$('.zjp_ajax2_sn').eq(i).html($('.zjp_ajax2_sn').eq(i).html()+sp);
//				$('.zjp_ajax2_sns').eq(i).html($('.zjp_ajax2_sns').eq(i).html()+sps);
//				$('.zjp_ajax2_px').eq(i).html($('.zjp_ajax2_px').eq(i).html()+pps);
//				$('.zjp_ajax2_pxs').eq(i).html($('.zjp_ajax2_pxs').eq(i).html()+ppx);
//			}
//			})
//		});
//
//
//
//
//	$.ajax({
//		type: "get",
//		url: "https://s.taobao.com/api?_ksTS=1514533247553_254&ajax=true&m=customized&sourceId=tb.index&q=罗技鼠标",
//		dataType: 'jsonp',
//		}).done(function(data){
//			$.each(data,function(k,v){
//				var content = v;
//				
//			for(var i=0;i<12;i++){
//				var imgs = content.itemlist.auctions[i].pic_url;
//				var sp = content.itemlist.auctions[i].view_price;
//				var sps = content.itemlist.auctions[i].view_sales;
//				var pps = content.itemlist.auctions[i].raw_title;
//				var ppx = content.itemlist.auctions[i].nick;
//				var pps =pps.substring(0,15);
//				
//				$(".zjp_ajax2_imgss")[i].src=""+imgs+"";
//				$('.zjp_ajax2_spa').eq(i).html($('.zjp_ajax2_spa').eq(i).html()+sp);
//				$('.zjp_ajax2_spas').eq(i).html($('.zjp_ajax2_spas').eq(i).html()+sps);
//				$('.zjp_ajax2_ppx').eq(i).html($('.zjp_ajax2_ppx').eq(i).html()+pps);
//				$('.zjp_ajax2_ppxs').eq(i).html($('.zjp_ajax2_ppxs').eq(i).html()+ppx);
//			}
//			})
//		});
//		
//	$.ajax({
//		type: "get",
//		url: "https://s.taobao.com/api?_ksTS=1514533247553_254&ajax=true&m=customized&sourceId=tb.index&q=陀螺",
//		dataType: 'jsonp',
//		}).done(function(data){
//			$.each(data,function(k,v){
//				var content = v;
//				
//			for(var i=0;i<12;i++){
//				var imgs = content.itemlist.auctions[i].pic_url;
//				var sp = content.itemlist.auctions[i].view_price;
//				var sps = content.itemlist.auctions[i].view_sales;
//				var pps = content.itemlist.auctions[i].raw_title;
//				var ppx = content.itemlist.auctions[i].nick;
//				var pps =pps.substring(0,15);
//			
//				$(".zjp_ajax2_ig")[i].src=""+imgs+"";
//				$('.zjp_ajax2_sx').eq(i).html($('.zjp_ajax2_sx').eq(i).html()+sp);
//				$('.zjp_ajax2_sxs').eq(i).html($('.zjp_ajax2_sxs').eq(i).html()+sps);
//				$('.zjp_ajax2_pb').eq(i).html($('.zjp_ajax2_pb').eq(i).html()+pps);
//				$('.zjp_ajax2_pbs').eq(i).html($('.zjp_ajax2_pbs').eq(i).html()+ppx);
//			}
//			})
//		});
//		
		$.ajax({
		type: "get",
		url: "https://s.taobao.com/api?_ksTS=1514533247553_254&ajax=true&m=customized&sourceId=tb.index&q=switch",
		dataType: 'jsonp',
		}).done(function(data){
			$.each(data,function(k,v){
				var content = v;
				
			for(var i=0;i<4;i++){
				var imgs = content.itemlist.auctions[i].pic_url;
				var sp = content.itemlist.auctions[i].view_price;
				var sps = content.itemlist.auctions[i].view_sales;
				var pps = content.itemlist.auctions[i].raw_title;
				var ppx = content.itemlist.auctions[i].nick;
				var pps =pps.substring(0,15);
			
				$(".zjp_img")[i].src=""+imgs+"";
				$('.zjp_ajax2_spp').eq(i).html($('.zjp_ajax2_spp').eq(i).html()+sp);
				$('.zjp_ajax2_spps').eq(i).html($('.zjp_ajax2_spps').eq(i).html()+sps);
				$('.zjp_ajax2_xxp').eq(i).html($('.zjp_ajax2_xxp').eq(i).html()+pps);
				$('.zjp_ajax2_xxps').eq(i).html($('.zjp_ajax2_xxps').eq(i).html()+ppx);
			}
			})
		});
				