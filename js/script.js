jQuery(function ($) {
	// ナビの下線
	$(function () {
		$(".l-header-nav-link").on("click", function () {
			$(".l-header-nav-link").removeClass("is-active");
			$(this).addClass("is-active");
		});
	});
});

// ハンバーガー
$(".hamburger").click(function () {
	$(this).toggleClass("is-open");
	$(".l-header__nav").toggleClass("is-open");
});

$(".l-header-nav-link").click(function () {
	$(".hamburger").removeClass("is-open");
	$(".l-header__nav").removeClass("is-open");
});

//  voiceのスワイパー

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

// トップに戻るボタンがfvで消える

// document.addEventListener("DOMContentLoaded", function () {
// 	const fv = document.querySelector(".p-top-fv");
// 	const fixedArea = document.querySelector(".p-fixed-area");

// 	const observer = new IntersectionObserver(function (entries) {
// 		entries.forEach(function (entry) {
// 			if (entry.isIntersecting) {
// 				// FVが見えている間は非表示
// 				fixedArea.classList.add("is-hidden");
// 			} else {
// 				// FVが見えなくなったら表示
// 				fixedArea.classList.remove("is-hidden");
// 			}
// 		});
// 	});

// 	observer.observe(fv);
// });

//  よくある質問のアコーディオン

jQuery(function ($) {
	$(".p-top-question-item").on("click", function () {
		const answer = $(this).find("dd");

		// 他を閉じる
		// $(".p-top-question-item__answer").not(answer).slideUp(300);
		// $(".p-top-question-item").not(this).removeClass("is-open");

		// 今のを開閉
		answer.slideToggle(300);
		$(this).toggleClass("is-open");
	});
});

// footerの前で固定

document.addEventListener("DOMContentLoaded", function () {
	const fixedArea = document.querySelector(".p-fixed-area");
	const footer = document.querySelector("footer");

	if (!fixedArea || !footer) return;

	window.addEventListener("scroll", () => {
		const footerTop = footer.getBoundingClientRect().top;
		// console.log(footerTop)
		const windowHeight = window.innerHeight;
		const scrollY = window.scrollY || window.pageYOffset;
		if (footerTop <= windowHeight) {
			fixedArea.classList.add("is-absolute");
		} else {
			fixedArea.classList.remove("is-absolute");
		}
		if(scrollY > 100) {
			fixedArea.classList.remove("is-hidden");
		} else {
			fixedArea.classList.add("is-hidden");
		}
	});
});



// document.addEventListener("DOMContentLoaded", function () {
//   const fixedArea = document.querySelector(".p-fixed-area");
//   const footer = document.querySelector("footer");

//   if (!fixedArea || !footer) return;

//   window.addEventListener("scroll", () => {

//     const footerTop = footer.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;
//     const fixedHeight = fixedArea.offsetHeight;
//     const scrollY = window.scrollY;

//     // footerにぶつかる前で止める
//     if (footerTop <= windowHeight - fixedHeight) {
//       fixedArea.classList.add("is-absolute");
//     } else {
//       fixedArea.classList.remove("is-absolute");
//     }

//     // 100pxスクロールで表示
//     if (scrollY > 100) {
//       fixedArea.classList.remove("is-hidden");
//     } else {
//       fixedArea.classList.add("is-hidden");
//     }

//   });
// });