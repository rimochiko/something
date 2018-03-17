(function($) {
	var Accordion = function(ele, options) {
		console.log(ele);
		this.$ele = ele;
		this.defaults = {
			activeIndex: 0,
			images: ['images/2.jpg']
		};
		this.opts = $.extend({}, this.defaults, options);
	}

	Accordion.prototype.init = function() {
		var li = this.$ele.find("li");
		var len = li.length;
		var images = this.opts.images;
		for(var i=0;i<len;i++) {
			if(i==this.opts.activeIndex) {
				li.eq(0).css({"background-image":'url('+images[i]+')'});
			}
			li.eq(i+1).css({"left":880+i*54+'px',"background-image":'url('+images[i]+')'});
		}	
		this.listener();
	}

	Accordion.prototype.listener = function() {
		var $this = this;
		var li = this.$ele.find("li");
		var len = li.length;

		li.click(function() {
			var ac_acd_index = $this.opts.activeIndex;
			var acd_index = $(this).index();
			$this.opts.activeIndex = acd_index;

			li.removeClass("active");
			$(this).addClass("active");

			if(acd_index > ac_acd_index) {
				for(i=0;i<=acd_index;i++) {
					li.eq(i).animate({"left":i*54+'px'});				
				}
			}
			else {
				for(i=ac_acd_index;i>acd_index;i--) {
					li.eq(i).animate({"left":880+(i-1)*54+'px'});			
				}
			}
		});
	};

	$.fn.extend({
		"accordion": function(options) {
			var accordion = new Accordion(this, options);
			accordion.init();
		}
	});
})(jQuery);

