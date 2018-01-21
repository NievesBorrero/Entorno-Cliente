
function colaEfectos(){
	capa = $("#micapa");
	capa.slideUp(1000);
	capa.delay(2000)
	capa.slideDown(1000);
	
	capa.fadeTo(1500, 0.3).delay(3000).fadeTo(500, 1);
	
	capa.delay(500);
	capa.animate({
		"font-size": "+=0.5em"
	}, 1000, colaEfectos);
	//alert (capa.queue().length)
}
$(document).ready(function(){
	colaEfectos();
});