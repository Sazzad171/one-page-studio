// mobile navigation
function showMobileDropdown() {
	document.getElementById("mobile-dropdown").style.display = "block";
}
function hideMobileDropdown() {
	document.getElementById("mobile-dropdown").style.display = "none";
}
function showMobileNav() {
	document.getElementById("full-mobile-nav").style.marginLeft = "0";
	document.getElementById("overlay-mobile-nav").style.display = "block";
}
function hideMobileNav() {
	document.getElementById("full-mobile-nav").style.marginLeft = "-500px";
	document.getElementById("overlay-mobile-nav").style.display = "none";
}

// slick slider for our works
$('.slider').slick({
	dots: false,
	infinite: true,
	speed: 2000,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000
});
$('.left').click(function(){
  $('.slider').slick('slickPrev');
})

$('.right').click(function(){
  $('.slider').slick('slickNext');
})

// slick slider for testimonial
$('.testimonial-slider').slick({
	dots: false,
	infinite: true,
	speed: 1500,
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 1500,
	responsive: [
		{
			breakpoint: 667,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
	]
});

$('.left').click(function(){
  $('.testimonial-slider').slick('slickPrev');
})

$('.right').click(function(){
  $('.testimonial-slider').slick('slickNext');
})