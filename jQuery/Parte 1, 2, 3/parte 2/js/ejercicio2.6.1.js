$(document).ready(function(){
	$("#guardar").click(function(evento){
		var valor = document.formul.valor.value;
		//Esta misma línea de código se puede codificar así también con jQuery
		//var valor = $("#valor").attr("value");
		$("#division").data("midato",valor);
		$("#division").html('He guardado en este elemento (id="division") un dato llamado "midato" con el'
			+' valor "' + valor + '"');
	}); 

	$("#leer").click(function(evento){
		valor = $("#division").data("midato");
		$("#division").html('En este elemento (id="division") leo un dato llamado "midato" con el valor ' 
		+'"' + valor + '"');
	}); 

	$("#eliminar").click(function(evento){
		$("#division").removeData("midato");
		$("#division").html('Acabo de eliminar del elemento (id="division") el dato llamado "midato"');
	}); 

});

// $("#capa").removeData("midato") -> Para eliminarlo
