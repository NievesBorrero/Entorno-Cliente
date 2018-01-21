	function muestraRestantesCola(){
			var funcionesEnCola = $("#micapa").queue("fx").length;
			$("#mensaje").text("En el momento de hacer el último clic en los botones hay " + funcionesEnCola + " funciones de efectos en cola");
		}
		$(document).ready(function(){
			$("#botonfade").click(function(){
				capa = $("#micapa");
				capa.fadeOut(500);
				capa.fadeIn(500);
				muestraRestantesCola();
			});
			$("#botonslide").click(function(){
				capa = $("#micapa");
				capa.slideUp(500);
				capa.slideDown(500);
				muestraRestantesCola();
			});
			$("#botontamanocola").click(function(){
				muestraRestantesCola();
			});
	});