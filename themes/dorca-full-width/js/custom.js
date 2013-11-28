/* Add here all your JS customizations */

$(document).ready(function(){
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();		
		if ($('#header').hasClass('custom-header')) {
			if (scroll >= 42) {
				$(".logo-menu").addClass("navbar-fixed-top");
			} else {
			 	$(".logo-menu").removeClass("navbar-fixed-top");
		    }	
		} else {			
			if (scroll >= 87) {
				$(".navbar").addClass("navbar-fixed-top");
			} else {
			 	$(".navbar").removeClass("navbar-fixed-top");
		    }
		}	
	});	
	
	
	$("a[rel^='prettyPhoto']").prettyPhoto();
		
	$('.panel-collapse').on('shown', function (e) {
		 $(e.target).prev('.panel-heading').find('.accordion-toggle').addClass('active');
	});
		
	$('.panel-collapse').on('hidden', function (e) {
		$(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
	});
		
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
		 
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
				
	$('.scrollup-1').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
		
	$(document).ready(function() {
		$('.tooltip-code').tooltip();
	});	

	//  tiles = $(".fade-in-effect");
	//  $(window).scroll(function(d,h) {
	//	tiles.each(function(i) {
	//		a = $(this).offset().top + $(this).height() - 200;
	//		b = $(window).scrollTop() + $(window).height();
	//		if (a < b) $(this).addClass('anim');
	//		if (a > b) $(this).removeClass('anim');
	//		console.log (a);
	//	});
	// });
	
	// Progress Bar
	$("[data-appear-progress-animation]").each(function() {
		var $this = $(this);
			$this.appear(function() {

			var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);
				if(delay > 1) $this.css("animation-delay", delay + "ms");
					$this.addClass($this.attr("data-appear-animation"));

					setTimeout(function() {

						$this.animate({
							width: $this.attr("data-appear-progress-animation")
						}, 1500, "easeOutQuad", function() {
							$this.find(".progress-bar-tooltip").animate({
								opacity: 1
							}, 500, "easeOutQuad");
						});

					}, delay);

				}, {accX: 0, accY: -50});

			});
		
});

	  