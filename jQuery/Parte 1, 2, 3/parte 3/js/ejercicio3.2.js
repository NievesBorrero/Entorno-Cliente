$(document).ready(function(){
	$("#boton").click(function(evento){
		var selectorEscrito = $("#camposelector").prop("value"); //en el ejemplo lo hacía con .attr pero está deprecated y en su lugar se utiliza .prop
		if (selectorEscrito==""){
			alert("Escribe algo en el campo de texto")
		}else{
			elementosSeleccionados = $(selectorEscrito);
			elementosSeleccionados.fadeOut("slow", function(){
				elementosSeleccionados.fadeIn("slow");
			});
		}
	});
});