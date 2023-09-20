$('.slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	focusOnSelect: true,
});

$('.slider-nav').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.slider',
	focusOnSelect: true,

});

$('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	$('.slider-nav__item').css('opacity', '1')
	$(`.slider-nav__item[data-slick-index=${nextSlide}]`).css('opacity', '.5')
});


const countDownDate = new Date(Date.now() + 1000 * 60 * 60 * 5);

const x = setInterval(() => {

	const now = new Date().getTime();
	const distance = countDownDate - now;

	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	hours = hours >= 10 ? hours : "0" + hours;
	minutes = minutes >= 10 ? minutes : "0" + minutes;
	seconds = seconds >= 10 ? seconds : "0" + seconds;

	document.querySelector(".timer__counter").innerHTML = hours + ":" + minutes + ":" + seconds;

	if (distance < 0) {
		clearInterval(x);
		document.querySelector(".timer__counter").innerHTML = "EXPIRED";
	}
}, 1000);


