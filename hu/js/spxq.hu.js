$(function(){
	if(localStorage.getItem('user')){
		$('#userBox').html('你好,'+localStorage.getItem('user'));
		$("#zhu").html('注销');
	}
	$('#userBox').click(function(e){
		if(localStorage.getItem('user')){
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
			for(var i=0;i<content.length;i++){
				if(localStorage.getItem('id') == content[i].nid){
//					console.log("load:1");
					localStorage.setItem("url",content[i].pic_url)
					console.log(content[i].view_price)
					console.log(content[i].raw_title)
					localStorage.setItem("jiage",content[i].view_price)
					localStorage.setItem("title",content[i].raw_title)
					localStorage.setItem("shuliang",$(".commodity_box1_bottomRight_input_fhb").val())
					console.log(content[i].pic_url);
					$('#img1').prop("src",content[i].pic_url);
					$("#jiage").html("1"+content[i].view_price);
					$("#jiage1").html(content[i].view_price);
					$("#dizhi").html(content[i].item_loc);
					$("#youfei").html("邮费"+content[i].view_fee);
					$("#xiaoliang").html(content[i].view_sales);
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
			for(var i=0;i<content.length;i++){
				if(localStorage.getItem('id') == content[i].nid){
//					console.log("load:2");
					localStorage.setItem("url",content[i].pic_url)
					console.log(content[i].view_price)
					console.log(content[i].raw_title)
					localStorage.setItem("jiage",content[i].view_price)
					localStorage.setItem("title",content[i].raw_title)
					localStorage.setItem("shuliang",$(".commodity_box1_bottomRight_input_fhb").val())
					console.log(content[i].pic_url);
					$('#img1').prop("src",content[i].pic_url);
					$("#jiage").html("1"+content[i].view_price);
					$("#jiage1").html(content[i].view_price);
					$("#dizhi").html(content[i].item_loc);
					$("#youfei").html("邮费"+content[i].view_fee);
					$("#xiaoliang").html(content[i].view_sales);
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
			for(var i=0;i<content.length;i++){
				if(localStorage.getItem('id') == content[i].nid){
//					console.log("load:3");
					localStorage.setItem("url",content[i].pic_url)
					console.log(content[i].view_price)
					console.log(content[i].raw_title)
					localStorage.setItem("jiage",content[i].view_price)
					localStorage.setItem("title",content[i].raw_title)
					localStorage.setItem("shuliang",$(".commodity_box1_bottomRight_input_fhb").val())
					console.log(content[i].pic_url);
					$('#img1').prop("src",content[i].pic_url);					
					$("#jiage").html("1"+content[i].view_price);
					$("#jiage1").html(content[i].view_price);
					$("#dizhi").html(content[i].item_loc); 
					$("#youfei").html("邮费"+content[i].view_fee);
					$("#xiaoliang").html(content[i].view_sales);
				}
			}
		})
	});
	$(".commodity_box2_fhb").click(function(){
		location.href="../gwj/订单.html"
		localStorage.setItem('shuliang',$('.commodity_box1_bottomRight_input_fhb').val())
	})
	
	
	$(".commodity_box3_fhb").click(function(){
		var id=localStorage.getItem("id");
		var urll=localStorage.getItem("url")
		var jiage=localStorage.getItem('jiage')
		var shuliang=localStorage.getItem("shuliang")
		var title= localStorage.getItem('title')
		$.ajax({
			type:"post",
			url:"../hu/js/gouwuche.php",
			data:{
				id:id,
				urll:urll,
				jiage:jiage,
				shuliang:shuliang,
				title:title				
			}
		}).done(function(data){
			console.log(data)
			if(data=="添加成功"){
				alert(1)
				location.href="../hu/购物车.html"
			}
		});
	})
});