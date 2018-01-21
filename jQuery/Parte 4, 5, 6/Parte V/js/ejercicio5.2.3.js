function dimensionCapa(capa){
	capa = $(capa);
	var dimensiones = "";
	dimensiones += "Dimensiones internas: " + capa.innerWidth() + "x" + capa.innerHeight();
	dimensiones += "\nDimensiones externas: " + capa.outerWidth() + "x" + capa.outerHeight();
	alert(dimensiones);
	}
function posicionCapa(capa){
	capa = $(capa);
	var posicion = "";
	posicion += "Posición relativo al documento:\nLEFT: " + capa.offset().left + "\nTOP:" + 
	capa.offset().top;
	posicion += "\n\nPosición si no tuviera margen:\nLEFT: " + capa.position().left + "\nTOP:" + 
	capa.position().top;
	alert(posicion);
}
	
	$(document).ready(function(){
		$("#botondimensiones").click(function(){
		dimensionCapa("#capa1"); 
	});
	$("#botonposicion").click(function(){
		posicionCapa("#capa1"); 
	});
	$("#botontamano").click(function(){
		$("#capa1").css("width", 200);
	});
	$("#botonmargen").click(function(){
		$("#capa1").css("margin", 20);
	});
	$("#botondimensionesc2").click(function(){
		dimensionCapa("#capa2"); 
	});
	$("#botonposicionc2").click(function(){
		posicionCapa("#capa2"); 
	});
});