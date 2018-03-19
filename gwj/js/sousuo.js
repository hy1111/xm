                var txt=$('#inp');
				var content = $('#uu');

                 $(function(){
				var arr=['虹润电流表,数显电流表','WIFI数传结构','三防平板电脑','防汛组合工具包七件套','张力电子围栏拉力测探仪','TFT真彩液晶控制板','HW-RCX-100D红外热成像摄影机','七寸4网络高端'];

				txt.keyup(function(){
					content.empty();
					var val = txt.val();
					if(val == ''){
						return;
					}
					$.each(arr,function(index,value){
						//value表示数组的每一个值，把输入框的值与数组的每一个值进行匹配
						if(value.indexOf(val) != -1 ){
							var lis = $("<li>"+value+"</li>");
							content.append(lis)
						}
					})
				});
				
				content.on('click','li',function(){
					var v = $(this).html();
					txt.val(v);//把当前点击的li的内容添加到input里面
					content.empty();
					
				})
				
				
			})
			
			
