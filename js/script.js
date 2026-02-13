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

  const swiper = new Swiper('.p-top-voice__items', {
    loop: true,

    slidesPerView: 1,
    spaceBetween: 35,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });

});