/*
	//Inicializa a variavel map que sera usada dentro da função LoadMap(). Precisa ser uma variavel global para a funcao goTo poder acessa-la
	var map;

	// Seleciona estado e mostra as cidades correspondentes
	var estados_select = document.getElementById("estados_select");
	var cidades_select = document.getElementById("cidades_select");
	var cidades_optgroups = cidades_select.getElementsByTagName('optgroup');

	var lojas_div = document.getElementsByClassName("lojas_div");


	// var lojas_select = document.getElementById("lojas_select");
	// var lojas_optgroups = lojas_select.getElementsByTagName('optgroup');
	// var lojas_div = document.getElementsByClassName("loja_div");
	// document.getElementsByTagName('optgroup').style.display = 'none';
	cidades_select.style.display = 'none';

	//Quando selecionar o estado, mostrar as cidades correspondentes a esse estado
	estados_select.onchange = function() {
		var estado_selecionado = this.value;
		cidades_select.style.display = 'inline-block';

		for(var i = 0, len = cidades_optgroups.length; i < len; i++) {
			var optgroup_cidade = cidades_optgroups[i];
			optgroup_cidade.style.display = 'none';
			if(optgroup_cidade.id == estado_selecionado) {
				optgroup_cidade.style.display = 'block';
			}
		}
		cidades_select.getElementsByTagName('option')[0].selected = true;
	}

	cidades_select.onchange = function() {
		var cidade_selecionada = this.value;

		for(var i = 0, len = lojas_optgroups.length; i < len; i++) {
			var optgroup = lojas_optgroups[i];
			optgroup.style.display = 'none';
			if(optgroup.id == cidade_selecionada) {
				optgroup.style.display = 'block';
			}

		}

		// lojas_select.getElementsByTagName('option')[0].selected = true;
	}

	//Inicializa o mapa
	window.onload = function () {
		LoadMap();
	}
	function LoadMap() {
		var marker, pos;
		var mapOptions = {
			zoom: 13,
			center: new google.maps.LatLng(lojas_div[0].getAttribute('data-lat'), lojas_div[0].getAttribute('data-lng')),
			scrollwheel: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
		var bounds = new google.maps.LatLngBounds();
		var infoWindow = new google.maps.InfoWindow();

		//Cospe todas as lojas no mapa
		var img = 'img/pin.png';
		for(var i = 0, len = lojas_div.length; i < len; i++) {
			var loja = lojas_div[i];
			var lat = loja.getAttribute("data-lat");
			var lng = loja.getAttribute("data-lng");
			pos = new google.maps.LatLng(lat, lng);
			marker = new google.maps.Marker({
				map: map,
				position: pos,
				icon: img
			});
			bounds.extend(pos);

			// Quando clicar no marker, exibir o Info Window
			(function (marker, loja) {
				google.maps.event.addListener(marker, "click", function (e) {
					map.panTo(marker.getPosition());
					map.setZoom(17);
					infoWindow.setContent("<div class='info-window'>" + "<p class='title'>" + loja.getAttribute("data-title") + "</p>" + "<p>" + loja.getAttribute("data-address") + "</p>" + "</div>");
					infoWindow.open(map, marker);
				});
			})(marker, loja);
			
		}
		map.fitBounds(bounds);
		
		var loja_selecionada;
		cidades_select.onchange = function() {
			cidade_selecionada = this.value; //Pega o valor da cidade selecionada
			
			// Exibir as divs das lojas da cidade selecionada
			for(var i = 0, len = lojas_div.length; i < len; i++) {
				var loja = lojas_div[i];
				var data_loja = loja.getAttribute('data-cidade');

				if(loja.classList.contains('is-visible')) {
					loja.classList.remove('is-visible');
				}

				if(data_loja == cidade_selecionada) {
					loja.classList.add('is-visible');
					console.log(cidade_selecionada);
				}
			}

			bounds = new google.maps.LatLngBounds(null); // Reseta o centro do mapa

			for(var i = 0, len = lojas_div.length; i < len; i++) {
				var loja = lojas_div[i];
				// console.log(loja.getAttribute("data-cidade"));
				if(loja.getAttribute("data-cidade") == cidade_selecionada) {
					var pos = new google.maps.LatLng(loja.getAttribute("data-lat"), loja.getAttribute("data-lng"))
					bounds.extend(pos);
				}

				
			}
			// Exibe no mapa as lojas da cidade selecionada

			map.fitBounds(bounds); //Centraliza as lojas

			// Limita o tamanho maximo do zoom para 18
			google.maps.event.addListenerOnce(map, 'bounds_changed', function(event) {
				if(this.getZoom() > 18) {
					this.setZoom(18);
				}
			});
		}


	}// End Load Map

	//Quando clicar na div da loja, mostrar ela no mapa
	function goTo(el) {
		for(var i = 0, len = lojas_div.length; i < len; i++) {
			if(lojas_div[i].classList.contains('clicked')) {
				lojas_div[i].classList.remove('clicked');
				break;
			}
		};
		el.classList.add('clicked');

		var lat = el.getAttribute('data-lat');
		var lng = el.getAttribute('data-lng');
		map.setCenter( new google.maps.LatLng(lat, lng) );
		map.setZoom(17);
	}


*/