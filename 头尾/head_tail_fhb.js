$(function(){
		$("#totalClass_fhb").click(function(){
			$("#totalClass_ul_fhb").toggle();
		})
		function fun(class1,class2){
			$(class1).mouseover(function(){
				$(class2).css('display','block');
				$(class1).css('background','#FFFFFF')
			})
			
			var head_left_nr1_ul_fhb= $(class2+'>li');
			
			head_left_nr1_ul_fhb.mouseover(function(){
				head_left_nr1_ul_fhb.removeClass('head_nr_li_fhb');
				$(this).addClass('head_nr_li_fhb')
			})
			
			$(class1).mouseout(function(){
				$(class2).css('display','none');
				$(class1).css('background','');
				head_left_nr1_ul_fhb.removeClass('head_nr_li_fhb');
			})
		}
		fun('.head_nr2_fhb',".head_left_nr2_ul_fhb")
		fun('.head_nr1_fhb',".head_left_nr1_ul_fhb")
		fun('.head_right_dd_fhb','.head_right_nr1_fhb')
		fun(".head_right_ck_fhb",".head_right_nr2_ul_fhb")
		fun(".head_right_fw_fhb",".head_right_nr3_ul_fhb")
	})