$(function() {
	$("#totalClass_fhb").click(function() {
		$("#totalClass_ul_fhb").toggle();
	})

	function fun(class1, class2) {
		$(class1).mouseover(function() {
			$(class2).css('display', 'block');
			$(class1).css('background', '#FFFFFF')
		})

		var head_left_nr1_ul_fhb = $(class2 + '>li');

		head_left_nr1_ul_fhb.mouseover(function() {
			head_left_nr1_ul_fhb.removeClass('head_nr_li_fhb');
			$(this).addClass('head_nr_li_fhb')
		})

		$(class1).mouseout(function() {
			$(class2).css('display', 'none');
			$(class1).css('background', '');
			head_left_nr1_ul_fhb.removeClass('head_nr_li_fhb');
		})
	}
	fun('.head_nr2_fhb', ".head_left_nr2_ul_fhb");
	fun('.head_nr1_fhb', ".head_left_nr1_ul_fhb");
	fun('.head_right_dd_fhb', '.head_right_nr1_fhb');
	fun(".head_right_ck_fhb", ".head_right_nr2_ul_fhb");
	fun(".head_right_fw_fhb", ".head_right_nr3_ul_fhb");

	//添加地址
	var option1_fhb = "";
	var arr = ["海南", "福建", "浙江", "上海", "天津", "重庆", "北京", "黑龙江", "辽宁", "内蒙古", "新疆", "西藏", "青海", "广西", "广东", "江西", "江苏", "山东", "陕西", "山西", "四川", "湖南", "湖北", "云南", "贵州", "河南", "河北", "宁夏", "吉林", "安徽"]
	$.each(arr, function(index, value) {
		option1_fhb += "<option>" + value + "</option>"
	});
	$(".city_fhb").append(option1_fhb);

	//颜色改变
	var span1_fhb = $(".price3_fhb span");
	span1_fhb.click(function() {
		var index = $(this).index();
		span1_fhb.eq(index - 1).css("border", "2px solid #000").siblings("span").css("border", "")
	})

	//型号改变
	var price4_1_fhb = $(".price4_1_fhb p");
	price4_1_fhb.click(function() {
		var index = $(this).index();
		price4_1_fhb.eq(index).css("border", "1px solid #05689f").siblings("p").css("border", "")
	})

	//收藏
	var commodity_box1_bottomLeft1_fhb = $(".commodity_box1_bottomLeft1_fhb h1")
	commodity_box1_bottomLeft1_fhb.click(function() {
		var index = $(this).index();
		commodity_box1_bottomLeft1_fhb.eq(index).css("display", "none").siblings("h1").css("display", "block")
	})

	//数量
	var ipt = $(".commodity_box1_bottomRight_input_fhb")
	var mui_amount_increase_fhb = $(".mui_amount_increase_fhb")
	var mui_amount_decrease_fhb = $(".mui_amount_decrease_fhb")
	console.log(mui_amount_increase_fhb)
	console.log(mui_amount_decrease_fhb)
	ipt.keydown(function(e) {
		var code = parseInt(e.keyCode);
		if(code >= 96 && code <= 105 || code >= 48 && code <= 57 || code == 8) {
			return true;
		} else {
			return false;
		}
	})
	mui_amount_increase_fhb.click(function() {
		alert(1)
		var val = ipt.val()
		val++
		if(val > 999) {
			val = 999
		}
		ipt.val(val)
	})
	mui_amount_decrease_fhb.click(function() {
		alert(1)
		var val = ipt.val()
		val--
		if(val < 1) {
			val = 1
		}
		ipt.val(val)

	})

//	//添加图片+边框小轮播图
//	var dt1_fhb = "";
//	for(var i = 0; i < 6; i++) {
//		dt1_fhb += "<dd></dd>"
//	}
//	$(".commodity_box1_dt_fhb").append(dt1_fhb);
//	var commodity_box1_dd_fhb = $(".commodity_box1_dt_fhb dd");
//	var commodity_box1_topLeft_li_fhb = $(".commodity_box1_topLeft_ul_fhb li")
//	commodity_box1_dd_fhb.eq(0).css("border", "1px solid #05689f")
//	commodity_box1_topLeft_li_fhb.eq(0).css("display", "block").siblings("li").css("display", "none");
//
//	
//	;(function($) {
//		$.fn.slider = function(options) {
//			var that = this;
//			//默认参数
//			var defults = {
//				index: 0, //初始图片索引
//				num: 6 //图片轮播的张数，0表示第一张，6表示为五张
//			}
//
//			var opt = $.extend({}, defults, options);
//
//			//轮播动画函数
//			var animate = function() {
//				if(opt.index > opt.num) {
//					opt.index = 0;
//				} else if(opt.index < 0) {
//					opt.index = opt.num;
//				}
//				that.children('dt').children().eq(opt.index).css("border", "1px solid #05689f").siblings('dd').css("border", "");
//				commodity_box1_topLeft_li_fhb.eq(opt.index).css("display", "block").siblings("li").css("display", "none");
//			}
//
//			that.children('li').eq(0).click(function() { //左边按钮点击事件
//				--opt.index;
//				animate()
//			})
//
//			that.children('li').eq(1).click(function() { //右边按钮点击事件
//				++opt.index;
//				animate()
//			})
//			that.on('click', 'dd', function() {
//				//这里的this指向当前点击的dd	
//				opt.index = $(this).index();
//				animate()
//			})
//
//		}
//
//	})($)
//	$(".commodity_box1_ul_fhb").slider()
//
//	//添加图片+边框大轮播图
//	//添加dd+默认第一个dd有样式
//	//		var ul2_fhb = "";
//	//		for (var i = 0; i < 6;i++) {
//	//			ul2_fhb += "<dd></dd>"
//	//		}
//	//	 	$(".lunbotu_dt_fhb").append(ul2_fhb);
//	//		var lunbotu_dd_fhb = $(".lunbotu_dt_fhb dd");
//	//		lunbotu_dd_fhb.eq(0).css("border","1px solid #05689f");
//	//		lunbotu_dd_fhb.click(function(){
//	//			var index = $(this).index();
//	//			lunbotu_dd_fhb.eq(index).css("border","1px solid #05689f").siblings("dd").css("border","")
//	//		})
//
//	//详情评论点击切换
	var max_box_img_top_btn_fhb = $(".max_box_img_top_btn_fhb p");
	var max_box_img_top_fhb = $(".max_box_img_top_fhb");
	var max_box_comment_bottom_fhb = $(".max_box_comment_bottom_fhb");
	max_box_img_top_fhb.css("display", "block");
	max_box_img_top_btn_fhb.eq(0).css({
		"border-top": "1px solid #208ac4",
		"background": "#fff"
	})
	max_box_img_top_btn_fhb.click(function() {
		var index = $(this).index();
		max_box_img_top_btn_fhb.eq(index).css({
			"border-top": "1px solid #208ac4",
			"background": "#fff"
		}).siblings("p").css({
			"border": "",
			"background": "#ececec"
		})
		if(index == 0) {
			max_box_img_top_fhb.css("display", "block");
			max_box_comment_bottom_fhb.css("display", "none");

		} else if(index == 1) {
			max_box_comment_bottom_fhb.css("display", "block");
			$(".max_box_img_top_nr1_fhb").css("display", "block");
			max_box_img_top_fhb.css("display", "none");
		}
	})

	//星星
	var wjx_none = '☆',
		wjx_sel = '★';
	$(".stars_fhb li").mouseenter(function() {
		$(this).text(wjx_sel);
		$(".stars_fhb li:gt(" + $(this).index() + ")").text(wjx_none);
		$(".stars_fhb li:lt(" + $(this).index() + ")").text(wjx_sel);
	}).click(function() {
		$(this).addClass('clicked').siblings().removeClass('clicked');
		$(".stars_fhb li:lt(" + $(this).index() + ")").addClass('clicked');
	});
	$(".stars_fhb").mouseleave(function() {
		$(".stars_fhb li").text(wjx_none);
		$(".clicked").text(wjx_sel);
	});

})