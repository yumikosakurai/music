jQuery(function ($) {
	// ナビの下線
	$(function () {
		$(".l-header-nav-link").on("click", function () {
			$(".l-header-nav-link").removeClass("is-active");
			$(this).addClass("is-active");
		});
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const swiper = new Swiper(".p-top-voice__items", {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 35,

		navigation: {
			nextEl: ".voice-button-next",
			prevEl: ".voice-button-prev",
		},

		// pagination: {
		// 	clickable: true,
		// },

		breakpoints: {
			768: { slidesPerView: 2 },
			1024: { slidesPerView: 3 },
		},
	});
});

document.addEventListener("DOMContentLoaded", function () {
  const fv = document.querySelector(".p-top-fv");
  const fixedArea = document.querySelector(".p-fixed-area");

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // FVが見えている間は非表示
        fixedArea.classList.add("is-hidden");
      } else {
        // FVが見えなくなったら表示
        fixedArea.classList.remove("is-hidden");
      }
    });
  });

  observer.observe(fv);
});