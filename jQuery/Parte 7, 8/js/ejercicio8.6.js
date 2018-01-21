
$(document).ready(function(){
	$("#botoncomenzar").click(function(){
		capa = $("#micapa");
		//encolo directamente funciones que son efectos 
		capa.animate({"width": "80px"}, 1000);
		//para encolar otras funciones utilizo queue()
		capa.queue(function(){
			$(this).css({
				"border": "3px solid #339",
			});
			$("#botoncomenzar").text("Acabo de ponerle el borde... puedes seguir pulsando para encolar más funciones");
			$(this).dequeue();
		});
		capa.animate({"height": "200px"}, 2000);
		capa.queue(function(continua){
			$(this).css({
				"border": "0px"
			});
			$("#botoncomenzar").text("Quitado el borde... puedes seguir pulsando para encolar más funciones");
			//el parámetro continua es una función que si la llamo se pasa al siguiente paso de la cola (jpara Query 1.4)
			continua();
		});
		capa.animate({
			"height": "50px",
			"width": "400px"
		}, 1000);
	});
});
