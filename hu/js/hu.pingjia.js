$(function(){
			var wjx_none = '☆',
				wjx_sel  = '★';
			$(".comment li").mouseenter(function(){
				//鼠标移入: 自己和前面的兄弟变实心，其余变空心
				$(this).text(wjx_sel);
				$(".comment li:gt("+$(this).index()+")").text(wjx_none);
				$(".comment li:lt("+$(this).index()+")").text(wjx_sel);
//				$(this).text(wjx_sel).prevAll().text(wjx_sel).end().nextAll().text(wjx_none);
			}).click(function(){
//				鼠标点击后，把自己添加clicked类，其余的清除clicked类
				$(this).addClass('clicked').siblings().removeClass('clicked');
				$(".comment li:lt("+$(this).index()+")").addClass('clicked');
			});

			//当鼠标移开评分控件时，实心显示到被点击的五角星的上
			$(".comment").mouseleave(function(){
				$(".comment li").text(wjx_none);//先给所有五角星都变空心
				$(".clicked").text(wjx_sel);
//				$(".clicked").text(wjx_sel).prevAll().text(wjx_sel).end().nextAll().text(wjx_none);
			});
		

	if(localStorage.getItem('user')){
		$('#userBox').html('你好,'+localStorage.getItem('user'));
		$("#zhu").html('注销');
	}
	$('#userBox').click(function(e){
		if(localStorage.getItem('user')){
			e.preventDefault();
		}
	})
	});
