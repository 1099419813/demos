;$(function(){
    //设置遮罩宽度高
	$('.col-md- .text').css({
		'width':$('.col-md- img').width(),
		'height':$('.col-md- img').height()
	})

    //切换
	  var  scrollist=$('.col-md-3.col-md-6');
	  var  scrollW=scrollist.outerWidth(true);
	  var  scrolllength=scrollist.length;
		//  $('.scrolltab').css('width',scrollW*scrolllength+'px');
    $('.content-news-l-hd li').click(function(){
		$(this).addClass('content-news-l-active').siblings('li').removeClass('content-news-l-active');
		$('.content-news-l-bd .list').eq($(this).index()).show().siblings().hide();
	});
   
       //切换2
	 var scrolllength2=$('.scrolltab').length; 
	 $('.scrolltab-bg').css('width',scrolllength2*100+'%'); 
	 $('.scrolltab').css('width',100/scrolllength2+'%'); 
	 var scrolllength2Width=parseInt($('.scrolltab-bg').css('width'));
	 var scrolllength2list=scrolllength2Width/scrolllength2;
	 var ctimer=0;
	 $('.next').click(function(){
		 if(ctimer>=scrolllength2-1){
			 alert('已到结尾 没有啦');	
			 return;}
		    ctimer++;
		   $('.scrolltab-bg').animate({
			 left:'-='+scrolllength2list+'px'
		},999);
		 console.log(ctimer);
	 });
	 $('.prev').click(function(){
		 if(ctimer<1){alert('已到头了');	
			 return;}
		    ctimer--;
					 console.log(ctimer);

		   $('.scrolltab-bg').animate({
			 left:'+='+scrolllength2list+'px'
		},999);
	 });
      
	 //圆环加载
//if (window.addEventListener) {
			$('.range').each(function(i){

				 var val=$(this).val(),
				     perimeter = Math.PI * 2 * 28;
                 var percent=val/100;
				     $(this).val(val+"%");
				 var circle=document.querySelectorAll("circle:nth-child(even)");
					   $(circle[i]).css({
							'stroke-dasharray':perimeter * percent + " " + perimeter * (1- percent)
					   });
			});
//}//

});

//add navClass
if(document.documentElement.clientWidth>=768){
	$('.banner').css('marginTop','135px');
	$('header').addClass('navfixed');
}