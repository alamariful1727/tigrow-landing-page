// //
// let navHeight = document.getElementById("div-nav").offsetHeight;
// let wh = window.innerHeight;
// let result = wh - navHeight;
// document.getElementById("ptext").innerHTML = `${window.innerHeight}px * ${
// 	window.innerWidth
// }px`;

// fixed Nav
$(window).scroll(function() {
	if ($(window).scrollTop() > 1) {
		$("#div-nav").addClass("stuck");
	} else {
		$("#div-nav").removeClass("stuck");
	}
});
// scrollTop-Brand click
$(".navbar-brand").click(function(e) {
	$("html, body").animate(
		{
			scrollTop: 0
		},
		1000
	);
	e.preventDefault();
});
// scrollTop
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
	autoplayTimeout: 2800,
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

$(document).ready(function() {
	//Smooth Scrolling Effect
	var headerHeight = document.getElementById("div-nav").offsetHeight;
	$(".scroll").click(function(e) {
		var targetHref = $(this).attr("href");
		$("html, body").animate(
			{
				scrollTop: $(targetHref).offset().top - headerHeight
			},
			1000
		);

		e.preventDefault();
	});

	// Active link switching
	$(window).scroll(function() {
		var scrollbarLocation = $(this).scrollTop();
		console.log(scrollbarLocation);
		$(".scroll").each(function() {
			var sectionOffset = $(this.hash).offset().top - headerHeight - 1;

			if (sectionOffset <= scrollbarLocation) {
				$(this)
					.parent()
					.addClass("active");
				$(this)
					.parent()
					.siblings()
					.removeClass("active");
			}
		});
	});
});
// team
$(".main-iso").isotope({
	itemSelector: ".team-item",
	filter: "." + "business",
	masonry: {
		columnWidth: 300
	}
});
let click = true;
// Isotope click function
$(".iso-nav ul li").click(function() {
	// $(".main-iso").removeClass("d-none");
	// $(".main-iso").addClass("d-block");
	$(".iso-nav ul li").removeClass("active");
	$(this).addClass("active");

	var selector = $(this).attr("data-filter");
	$(".main-iso").isotope({
		filter: selector
	});
	return false;
});
