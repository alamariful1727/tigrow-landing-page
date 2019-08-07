// //
// let navHeight = document.getElementById("div-nav").offsetHeight;
// let wh = window.innerHeight;
// let result = wh - navHeight;
// document.getElementById("tigrow-wrapper").style.height = `${result}px`;

// // fixed Nav
// $(window).scroll(function() {
// 	if ($(window).scrollTop() > 31) {
// 		$("#cn").addClass("stuck");
// 	} else {
// 		$("#cn").removeClass("stuck");
// 	}
// });
// // scrollTop
$("#scrollTop ").click(function(e) {
	$("html, body").animate(
		{
			scrollTop: 0
		},
		1000
	);
	e.preventDefault();
});
// slider
$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 0,
	nav: false,
	autoplay: true,
	autoplayTimeout: 4000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 1
		}
	}
});
