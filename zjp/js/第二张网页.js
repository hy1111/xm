$(function(){
	
	var btns = $('.zjp_sp');
	var boxs = $('.zjp_right_bottom');

	boxs.first().css('display','block');
	btns.first().css('color','#0668a0');
	btns.click(function(){
		var index = $(this).index();
		
		boxs.eq(index).css('display','block').siblings('.zjp_right_bottom').css('display','none')
		btns.eq(index).css('color','#0668a0').siblings('span').css('color','black');
		btns.eq(index).css('font-size','20px').siblings('span').css('font-size','16px');
	})
	
});
