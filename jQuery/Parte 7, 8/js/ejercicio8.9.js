
function muestraRestantesCola(){
	var funcionesEnCola = $("#micapa").queue("micola").length;
	var funcionesEnColaPredeterminada = $("#micapa").queue().length;
	//console.log("Cola 'micola':", $("#micapa").queue("micola"));
	
	var textoMostrar = "Hay " + funcionesEnCola + " funciones de efectos en la cola 'micola'";
	textoMostrar += "<br>Hay " + funcionesEnColaPredeterminada + " funciones de efectos en la cola por defecto";
	$("#mensaje").html(textoMostrar);
}

function cambiarColores(){
	capa = $("#micapa");
	capa.delay(1000, "micola");
	capa.queue("micola", function(sig){
		$(this).css({
			"background-color": "#339"
		});
		sig()
	});
	capa.delay(1000, "micola");
	capa.queue("micola", function(sig){
		$(this).css({
			"background-color": "#933"
			
		});
		sig();
	});
	capa.delay(1000, "micola");
	capa.queue("micola", function(sig){
		$(this).css({
			"background-color": "#393"
		});
		cambiarColores();
	});
	capa.dequeue("micola");
}

/*
 POSIBILIDAD PARA HACER ESTA MISMA FUNCIÓN PERO CON SETTIMEOUT EN VEZ DE DELAY
function cambiarColores(){
	capa = $("#micapa");
	capa.queue("micola", function(){
		$(this).css({
			"background-color": "#339"
		});
		setTimeout("capa.dequeue('micola')", 1000);
	});
	capa.queue("micola", function(){
		$(this).css({
			"background-color": "#933"
		});
		setTimeout("capa.dequeue('micola')", 1000);
	});
	capa.queue("micola", function(){
		$(this).css({
			"background-color": "#393"
		});
		setTimeout("cambiarColores()", 1000);
	});
	capa.dequeue("micola");
}
*/

function ocultaMuestra(){
	capa = $("#micapa");
	capa.fadeTo(500, 0.3);
	capa.fadeTo(1200, 1);
	capa.animate({
		"left": "350px"
	},1200);
	capa.animate({
		"left": "100px"
	},1000, ocultaMuestra);
}

$(document).ready(function(){
	cambiarColores();
	ocultaMuestra();
	$("#botontamanocola").click(function(){
		muestraRestantesCola();
	});
});