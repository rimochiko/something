(function($){
	$.fn.fadeSlider = function(options) {
		return this.each(function(){
				var $this = $(this);
				var $ul_images = $(this).find(".imgs-slider");
				var $ul_btns = $(this).find(".btns-slider");
				var $count = $ul_images.find("li").length;
				var $height = $(this).find("li").eq(0).find("img").height();
				var $html_btn = "";
				var $num = 0;
				var $timer = null;

				var _init = function () {
					for(var i = 0;i < $count ; i++) {
						if(i == 0) 
							$html_btn += "<li class=\"active\"></li>";
						else
							$html_btn += "<li></li>";
					}
					$ul_images.find("li").height($height);
					$ul_images.height($height);
					$ul_btns.html($html_btn);
				};



				var _doing = function(){
					var $lis = $ul_images.find("li");
					var $btns = $ul_btns.find("li");

					setInterval(function(){
						$lis.removeClass("active");
						$btns.removeClass("active");

						$lis.eq($num).addClass("active");
						$btns.eq($num).addClass("active");

						$num++;

						if($num == $count)
							$num = 0;
					},options.transitionTime);

					$btns.click(function(){
						$index = $(this).index();
						$num = $index;

						$lis.removeClass("active");
						$btns.removeClass("active");

						$lis.eq($num).addClass("active");
						$btns.eq($num).addClass("active");

					});
				}

				
				_init();
				_doing();


		});
	}

})(jQuery);