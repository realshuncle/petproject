var header = $('header'),
		scrollPrev = 0;

$(window).on('scroll', function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('header__hidden');
	} else {
		header.removeClass('header__hidden');
	}
	scrollPrev = scrolled;
});