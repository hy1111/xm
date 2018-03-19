$(function(){
	var i = 0;
	//i代表图片的索引，0表示第一张图片
	var timer = null;
	$('.btn_r').click(function(){
		clearInterval(timer);
		i==3?i=0:i++;
		lbs(i)
	});
	$('.btn_l').click(function(){
		clearInterval(timer);
		i==0?i=3:i--;
		lbs(i)
	});
	$('.btn_lis').children().click(function(){
		clearInterval(timer);
		i = $(this).index();
		lbs(i);
	});
	function lbs(s){
		$('.lbk').children().eq(s).fadeIn(500).siblings('li').fadeOut(500);
		$('.btn_lis').children().eq(s).addClass('btn_ls').siblings('li').removeClass('btn_ls');
	}
	timer=setInterval(lb,1500);
	function lb(){
		i++;
		if(i==3){
			i=0;
		}
		lbs(i);
	}
	
	$('.lbk').mouseenter(function(){
		clearInterval(timer);
	});
	$('.lbk').mouseleave(function(){
		timer=setInterval(lb,3000);
	});
	
	
	
	
	
	
	
});
