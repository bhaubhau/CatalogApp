jQuery(window).load(function() {
	$('.carousel').carousel({
    	pause: "false",
    	interval: 4000
	});

	$('.carousel').css({'margin-top': 0, 'width': $(window).outerWidth(20), 'height': $(window).outerHeight() - 140});	
	$('.carousel .item').css({'position': 'fixed','width':'100%','height':'100%'});
	//$('.carousel-inner div.item img').css({'padding-top': '70px'});
	
	$('.carousel-inner div.item img').each(function() {
		var imgSrc = $(this).attr('src');		
		$(this).parent().css(
				{'background': 'url('+imgSrc+') center center no-repeat'					 
				 //'-webkit-background-size': '100% ', 
				 //'-moz-background-size': '100%', 
				 //'-o-background-size': '100%', 
				 //'background-size': '100%', 
				 //'-webkit-background-size': 'cover', 
				 //'-moz-background-size': 'cover', 
				 //'-o-background-size': 'cover', 
				 //'background-size': 'cover'
				});		
		$(this).remove();
	});
	

	$(window).on('resize', function() {
		$('.carousel').css({'width': $(window).outerWidth(20), 'height': $(window).outerHeight() - 140});
	});
}); 