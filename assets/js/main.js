jQuery(document).ready(function($){
	// =========================
	// menu hamburguer
	// =========================
	try {
		$('.hamburguer').click(function(){
			// ALTERNA O ESTADO PARA X OU ESTADO ORIGINAL
			$('.navigation-toggle, .menu-overlay, .menu--primary, .header--menu, .menu--social, .header--main, .header--menu---wrap').toggleClass('active');
		});
	} catch(e) {
		console.log(e);
	}






	// =========================
	// MENU MOBILE
	// =========================
	// DROP DOWN ESPECIFICO DE CELULAR
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('.menu--primary > ul > li > a').click(function(e){
			$(this).parent().siblings().find('ul').removeClass('open-submenu');
			if($(this).parent().find('ul').length > 0 ){
				e.stopPropagation();
				e.preventDefault();
				$(this).parent().find('ul').first().toggleClass('open-submenu');
			}
		});
	}





	// ==================
	// header sticky
	// ==================
	try {
		var header = $('.header');
		var stickyNavTop = header.offset().top + header.height();

		$(window).scroll(function() {
			$(window).scrollTop() > 250 ? header.addClass('sticky') : header.removeClass('sticky');
		});
	} catch(e) {
		console.log(e)
	}





	// ==========
	// ancora
	// ==========
	try {
		$.easing.easeInOutExpo = function (x, t, b, c, d) { // definição do efeito que será posteriormente usado no animate
			if (t==0) return b;
			if (t==d) return b+c;
			if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
			return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
		}


		$('.anchor').each(function(){
			$(this).click(function(e){
				$('html, body').stop().animate({
					scrollTop: $( $(this.hash) ).offset().top
				}, 800, 'easeInOutExpo');
				return false;
			});
		});
	} catch(e) {
		console.log(e)
	}






	// =========================
	// slider fade single
	// =========================
	try {
		var galleryTop = new Swiper('.card-slider--single', {
			centeredSlides: true,
			// effect: 'fade',
			speed: 1000,
			// autoplay: {
			// 	delay: 6000,
			// 	disableOnInteraction: false,
			// },
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});


	} catch(e) {
		console.log(e)
	}
	




	// ========================
	// fancybox 3
	// ========================
	try {
		$('[data-fancybox]').fancybox({
			buttons : [
				'close'
			],
		});
	} catch(e) {
		console.log(e);
	}






	// ===============
	// button
	// ===============

	$('section a').each(function(){
		$(this).mousemove(function(e){
			var x = e.pageX - e.target.offsetLeft;
			var y = e.pageY - e.target.offsetTop;

			e.target.style.setProperty('--x', x + 'px');
			e.target.style.setProperty('--y', y + 'px');
		});
	});




	// ===================
	// animation
	// ===================

	try {
		$.fn.isOnScreen = function(){

		    var win = $(window);

		    var viewport = {
		        top : win.scrollTop(),
		        left : win.scrollLeft()
		    };
		    viewport.right = viewport.left + win.width();
		    viewport.bottom = viewport.top + win.height();

		    var bounds = this.offset();
		    bounds.right = bounds.left + this.outerWidth();
		    bounds.bottom = bounds.top + this.outerHeight();

		    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

		};

		$('.item-animation').each(function(){
			if ($(this).isOnScreen() == true) {
				$(this).addClass('visible');
			}
		});

		$(window).scroll(function(){
			$('.item-animation').each(function(){
				var elPos = $(this).offset().top;
				var topWindow = $(window).scrollTop();
				var vp = $(window).height();

				if ($(this).isOnScreen() == true) {
					$(this).addClass('visible');
				}
			});
		});
	} catch(e) {
		console.log(e);
	}



	// ===============
	// acordion
	// ===============
	// try {
	// 	$('dl dt').first().addClass('active');
	// 	$('dl dd').first().slideDown().addClass('active');
		
	// 	$('dt').click(function(){
	// 	  $('dt').removeClass('active');
	// 	  $('dd').stop().slideUp().removeClass('active');
	// 	  if(!$(this).next().is(":visible")) {
	// 		$(this).next().slideDown().addClass('active');
	// 		$(this).addClass('active');
	// 	}
	// });
	// } catch(e) {
	// 	console.log(e)
	// }





	// =========================
	// navegacao por ancora
	// =========================
	$('.item-banner--fullscreen---downbutton a').click(function(e){
		$('html, body').animate({scrollTop : $(this.hash).offset().top - 80}, 900);
		e.preventDefault();
	});


	// =========================
	// coloca o id na proxima div abaixo do slider da home
	// =========================
	$('.home main section:nth-of-type(2)').attr('id', 'under-the-fold');





	// =========================
	// EFEITO PARALLAX DOS OBJETOS
	// =========================

	try {
		function parallax(){
			var scrolled = $(window).scrollTop();
			$('.item-parallax-1').css('transform', 'translateY('+ -(scrolled*0.08)+'px)');
			$('.item-parallax-2').css('transform', 'translateY('+ -(scrolled*0.15)+'px)');
			$('.item-parallax-3').css('transform', 'translateY('+ -(scrolled*0.2)+'px)');
			$('.item-parallax-4').css('transform', 'translateY('+ -(scrolled*0.3)+'px)');
			$('.item-parallax-5').css('transform', 'translateY('+ -(scrolled*0.45)+'px)');
			$('.item-parallax-6').css('transform', 'translateY('+ -(scrolled*0.15)+'px)');
			$('.item-parallax-7').css('transform', 'translateY('+ -(scrolled*0.2)+'px)');
			$('.item-parallax-8').css('transform', 'translateY('+ -(scrolled*0.3)+'px)');
		}

		$(window).scroll(function(e){
			$('div[class^="item-parallax-"').each(function(){
				if ($(this).isOnScreen() == true) {
					parallax();
				}
			});
		});
	} catch(e) {
		console.log(e);
	}
	







	// =========================
    // INSTAFEED
    // =========================
	// if ($('#instagram')[0]) {
	// 	var feed = new Instafeed({
	// 		get: 'user',
	// 		userId: 1491737471,
	// 		accessToken: '1491737471.1677ed0.5a30682b006a4fc4847e63127bc03448',
	// 		template: '<div class="instagram-item"><a href="{{link}}" target="_blank"><img src="{{image}}"></a></div>',
	// 		target: 'instagram',
	// 		limit: '10', /* Número de fotos */
	// 		sortBy: 'most-recent',
	// 		resolution: 'standard_resolution',
	// 		// after: function(){
	// 		// 	createInstagramGrid();
	// 		// }
	// 	});
	// 	feed.run();
	// }

	

	// ========================
	// modal
	// ========================
	
	try {
		$('.open-modal').click(function (e) {
			openModal = $(this).attr('href');

			$('.modal-overlay, ' + openModal).addClass('active');
			e.preventDefault();
		});

		$('.close-modal, .modal-overlay').click(function (e) {
			$('.modal-overlay,' + openModal).removeClass('active');
		});
	} catch(e) {
		console.log(e);
	}



	// ==================
	// mapa
	// ==================
	// try {
	// 	$('.item-map--legends a').click(function(){
	// 		// clique = $(this).attr('href');
	// 		// $(clique).css({'display' : 'flex'});
	// 		$(this).parent().next().css({'display' : 'flex'});
	// 	});

	// 	$('.item-map--fechar a').click(function(){
	// 		$('.item-map--tooltip').hide();
	// 	});

	// 	$(document).keyup(function(e) {
	// 		if (e.keyCode === 27) {
	// 			$('.item-map--tooltip').hide();
	// 		}
	// 	});
	// } catch(e) {
	// 	console.log(e);
	// }

	// ==================
	// send mail error
	// ==================
	// try {
	// 	var hash = window.location.hash;
	// 	console.log(hash);
	// 	if (hash === '#sendError') {
	// 		$('.item-return').html('<h4>Atenção!</h4><p>Você não preencheu os campos corretamente</p>').addClass('erro');
	// 	}
	// 	if (hash === '#sendSuccess') {
	// 		$('.item-return').html('<p>E-mail enviado com sucesso!</p>').addClass('sucesso');
	// 	}

	// 	if (hash === '#conteudo-extra') {
	// 		$('.item-return').html('<p>Você foi cadastrado com sucesso!</p>').addClass('sucesso');
	// 	}
	// } catch(e) {
	// 	console.log(e);
	// }


	// =========================
	// mapa ilustrado
	// =========================
	// jQuery("#map").draggable({
	// 	containment: $('#container')
	// });


	// ===============
	// load more
	// ===============
	// try {
	// 	$(function () {
	// 		$(".card-grid--imprensa > ul > li").slice(0, 4).show();
	// 		$("#loadMore").on('click', function (e) {
	// 			e.preventDefault();
	// 			$(".card-grid--imprensa > ul > li:hidden").slice(0, 4).slideDown();
	// 			if ($(".card-grid--imprensa > ul > li:hidden").length == 0) {
	// 				$("#load").fadeOut('slow');
	// 			}
	// 			$('html,body').animate({
	// 				scrollTop: $(this).offset().top
	// 			}, 1500);
	// 		});
	// 	});
	// } catch(e) {
	// 	console.log(e);
	// }

	
	// ===============
	// input fields
	// ===============
	// try {
	// 	$('.card-form--contato input, .card-form--contato textarea').focus(function(){
	// 		$(this).parents('.field').addClass('focused');
	// 	});

	// 	$('.card-form--contato input, .card-form--contato textarea').blur(function(){
	// 		var inputValue = $(this).val();
	// 		if ( inputValue == "" ) {
	// 			$(this).removeClass('filled');
	// 			$(this).parents('.field').removeClass('focused');  
	// 		} else {
	// 			$(this).addClass('filled');
	// 		}
	// 	});
	// } catch(e) {
	// 	console.log(e)
	// }


	// ==========
	// deixa video responsivo
	// ==========
	// try {
	// 	$('iframe').wrap('<div class="video-container"><div class="video">');
	// } catch(e) {
	// 	console.log(e)
	// }




	// ===============
	// tabs
	// ===============
	// $('.tab-content div[id^=tab-target-]:not(:first-child)').hide(); // AQUI DA FADE OUT EM TODAS AS ABAS menos na primeira
	// $('.tab-content div').first().show();
	// $('.tabs-list li a').first().addClass('active');

	// $('.tabs-list li a').click(function(){
	// 	$('div[id^=tab-target-]').hide(); // AQUI DA FADE OUT EM TODAS AS ABAS
	// 	$(this.hash).fadeIn(); // AQUI EXIBE SO A ABA QUE FOI CLICADA
	// 	$('.tabs-list li a, .tabs-list').removeClass('active'); // TIRA A CLASSE ACTIVE DE TODOS
	// 	$(this).addClass('active'); // COLOCA A CLASSE ACTIVE PRA DEIXAR MARCADA A ABA CLICADA
	// 	$('html, body').stop().animate({
	// 			scrollTop: $( $(this).attr('href') ).offset().top - 200
	// 		}, 800, 'swing');
	// 	return false;
	// });

	// ===================
	// tabs responsive
	// ===================
	// $('.tabs-open-list').click(function(){
	// 	$('.tabs-list').addClass('active');
	// });

	// $('.tabs-back-list').click(function(){
	// 	$('.tabs-list').removeClass('active');
	// });


	

	// =========================
	// mapa contato
	// =========================
	// try {
	// 	if($('#item-map')[0]) {
	// 		var image = '../img/pin.png';
	// 		var mapOptions = {
	// 			zoom: 17,
	// 			center: new google.maps.LatLng(-22.9083942, -43.1740729), 
	// 			mapTypeId: google.maps.MapTypeId.ROADMAP,
	// 			styles: 
	// 				[
	// 					{
	// 						'featureType': 'landscape.man_made',
	// 						'stylers': [
	// 						{ 'hue': '#0091ff' },
	// 						{ 'saturation': -90 },
	// 						]
	// 					}
	// 				],
	// 			scrollwheel: false
	// 		}
	// 		var map = new google.maps.Map(document.getElementById('item-map'), mapOptions);
	// 		var myPos = new google.maps.LatLng(-22.9083942, -43.1740729); 
	// 		var myMarker = new google.maps.Marker({position: myPos, map: map, icon: image });
	// 	} else {
	// 		// 
	// 	}
	// } catch(e) {
	// 	console.log(e);
	// }





 //    // monta o grid
 //    // ========================
 //    function createInstagramGrid(){
 //        $('#instagram div').each(function(i){

 //            if(i == 0){
 //                $('.instagram-grid').append('<div class="card-grid grid-1">');
 //                $('.instagram-grid .grid-1').append($(this).clone().addClass('item-'+(i+1)));
 //            }
 //            if(i == 1){
 //                $('.instagram-grid').append('<div class="card-grid grid-2">');   
 //                $('.instagram-grid .grid-2').append($(this).clone().addClass('item-'+(i+1)));
 //            }

 //            if(i == 2){
 //                $('.instagram-grid').append('<div class="card-grid grid-3"></div>');
 //                $('.instagram-grid .grid-3').append($(this).clone().addClass('item-'+(i+1)));
 //            }

 //            if(i == 3){
 //                $('.instagram-grid').append('<div class="card-grid grid-4"></div>');
 //                $('.instagram-grid .grid-4').append($(this).clone().addClass('item-'+(i+1)));
 //            }


 //            if(i == 4){
 //                $('.instagram-grid').append('<div class="card-grid card-wrapper grid-5">');
 //            }

 //            if(i == 5){
 //                $('.instagram-grid').append('</div>');
 //            }

 //            if(i >= 4 && i <= 7){
 //                $('.instagram-grid .grid-5').append($(this).clone().addClass('item-'+(i+1)));
 //            }


 //            if(i == 8){
 //                $('.instagram-grid').append('<div class="card-grid grid-6"></div>');
 //                $('.instagram-grid .grid-6').append($(this).clone().addClass('item-'+(i+1)));
 //            }

 //            if(i == 9){
 //                $('.instagram-grid').append('<div class="card-grid grid-7"></div>');
 //                $('.instagram-grid .grid-7').append($(this).clone().addClass('item-'+(i+1)));
 //            }

 //            if(i == 10){
 //                $('.instagram-grid').append('<div class="card-grid grid-8"></div>');
 //                $('.instagram-grid .grid-8').append($(this).clone().addClass('item-'+(i+1)));
 //            }

 //        });
 //    }
});