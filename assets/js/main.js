/*-------------------
Template: Gramentheme (themeforest.net/user/gramentheme)
Versão enxuta para a página única da Surrealiza: mesmos efeitos do template
(header fixo, menu lateral, tilt, linhas animadas, voltar ao topo, contadores,
carrossel de depoimentos, AOS e acordeões), sem preloader, busca, popup e select,
que a página não usa.
-------------------*/

(function ($) {
	"use strict";

	$(document).ready(function () {
		//--- Header ---//
		$(".navbar-toggle-btn").on("click", function () {
			$(".navbar-toggle-item").slideToggle(300);
			$("body").toggleClass("overflow-hidden");
			$(this).toggleClass("open");
		});
		// No celular, clicar num link do menu fecha o menu.
		$(".navbar-toggle-item a").on("click", function () {
			if ($(".navbar-toggle-btn").is(":visible")) {
				$(".navbar-toggle-item").slideUp(300);
				$("body").removeClass("overflow-hidden");
				$(".navbar-toggle-btn").removeClass("open");
			}
		});

		var fixed_top = $(".header-section");
		function headerFixo() {
			if ($(window).scrollTop() > 50) {
				fixed_top.addClass("animated fadeInDown header-fixed");
			} else {
				fixed_top.removeClass("animated fadeInDown header-fixed");
			}
		}
		headerFixo();
		$(window).on("scroll", headerFixo);

		//--- Menu lateral ---//
		$(".remove-click").on("click", function () {
			$(".subside-barmenu").toggleClass("active");
		});
		$(".subside-barmenu a").on("click", function () {
			$(".subside-barmenu").removeClass("active");
		});

		//--- Tilt ---//
		if (window.VanillaTilt) {
			VanillaTilt.init(document.querySelectorAll(".tilt"), {
				reverse: true,
				max: 15,
				speed: 400,
				scale: 1.01,
				glare: true,
				reset: true,
				perspective: 800,
				transition: true,
				"max-glare": 0.45,
				"glare-prerender": false,
			});
		}

		//--- Linhas animadas do fundo ---//
		for (let i = 0; i < 3; i++) {
			$("<span></span>").appendTo(".line-shape.first");
		}

		//--- Voltar ao topo ---//
		var scrollProgress = document.getElementById("progress");
		if (scrollProgress) {
			scrollProgress.addEventListener("click", function () {
				document.documentElement.scrollTop = 0;
			});
			var mostraTopo = function () {
				scrollProgress.style.display = document.documentElement.scrollTop > 250 ? "grid" : "none";
			};
			window.addEventListener("scroll", mostraTopo, { passive: true });
			mostraTopo();
		}

		//--- Contadores ---//
		if ($.fn.counterUp) {
			$(".count").counterUp({ delay: 15, time: 2500 });
		}

		//--- Carrossel de depoimentos ---//
		if (window.Swiper) {
			new Swiper(".testimonial-version01", {
				spaceBetween: 30,
				speed: 1500,
				loop: true,
				autoplay: { delay: 5000, disableOnInteraction: false },
				navigation: { nextEl: ".cmn-next", prevEl: ".cmn-prev" },
				slidesPerView: 1,
			});
		}

		//--- AOS ---//
		if (window.AOS) {
			AOS.init({ once: true });
			// Imagens com loading="lazy" carregam durante a rolagem e empurram a página;
			// sem recalcular, o AOS dispara nas posições antigas e o fim da página não aparece.
			var aosTimer;
			var recalcula = function () {
				clearTimeout(aosTimer);
				aosTimer = setTimeout(function () { AOS.refresh(); }, 120);
			};
			$("img").on("load", recalcula);
			$(window).on("load", recalcula);
		}

		//--- Acordeões (trabalhos e dúvidas) ---//
		$(".accordion-single .header-area").on("click", function () {
			var item = $(this).closest(".accordion-single");
			var btn = $(this).find(".accordion-btn");
			if (item.hasClass("active")) {
				item.removeClass("active");
				btn.attr("aria-expanded", "false");
				$(this).next(".content-area").slideUp();
			} else {
				item.siblings(".accordion-single").removeClass("active").find(".accordion-btn").attr("aria-expanded", "false");
				item.siblings(".accordion-single").find(".content-area").slideUp();
				item.addClass("active");
				btn.attr("aria-expanded", "true");
				$(this).next(".content-area").slideDown();
			}
		});
	});
})(jQuery);
