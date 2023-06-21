jQuery(document).ready(function(){
	var headH = $("#header").outerHeight();
	var offsetd = jQuery(".one-page-nav").offset();
	jQuery(window).scroll(function(){		
		if($(document).scrollTop() > offsetd.top){
			jQuery(".one-page").css("padding-top", "70px");
			jQuery(".one-page-nav").addClass("fixed");
		}else{
			jQuery(".one-page").css("padding-top","0");
			jQuery(".one-page-nav").removeClass("fixed");
		}
	});
	var onePage = (function(){
		var onePage = {}
		var hash = window.location.hash;

		if(hash != ''){
			var targetPos = jQuery(hash).offset().top;
			jQuery('html, body').animate({scrollTop : targetPos-headH}, 1200);
		} 
		
			jQuery('.one-page-nav .space-menu a').each(function(){
				jQuery(this).on('click', function(e){					
					e.preventDefault();
					var target = jQuery(this).attr('href');
					var targetOffset = jQuery(target).offset();
					var targetPos = targetOffset.top;
					jQuery('html, body').animate({scrollTop : targetPos-headH}, 1200, 'easeInOutQuint', function(){
						jQuery(this).parent("li").addClass('active').siblings().parent("li").removeClass('active');
					});					
				});
			});
			

			jQuery(window).scroll(function () {
				var winScroll = jQuery(this).scrollTop();
				var stopPoint = [];
				var count;

				jQuery('.one-page .section').each(function () {
					stopPoint.push(parseInt(jQuery(this).offset().top));

				});
				for (count = 0; count < jQuery('.one-page .section').length; count++){

					if (winScroll >= stopPoint[count]-300){
						jQuery('.one-page-nav .space-menu li').eq(count).addClass('active').siblings().removeClass('active');
					}

				}
			});
		return onePage;
	})();
});