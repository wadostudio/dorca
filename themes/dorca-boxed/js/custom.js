/* Add here all your JS customizations */

$(document).ready(function(){
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >= 87) {
			$(".navbar").addClass("navbar-fixed-top");
		} else {
			$(".navbar").removeClass("navbar-fixed-top");
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
		$('.social-icons a').tooltip();
	});	

	tiles = $(".fade-in-effect").fadeTo(0, 0);
	$(window).scroll(function(d,h) {
		tiles.each(function(i) {
			a = $(this).offset().top + $(this).height();
			b = $(window).scrollTop() + $(window).height();
			if (a < b) $(this).fadeTo(400,1);
		});
	});
		
});

	  