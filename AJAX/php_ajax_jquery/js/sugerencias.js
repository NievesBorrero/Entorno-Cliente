/**
 * @author Nieves Borrero
 * @version 1.0
 */
{
 	let init = function(){
	$("#busqueda").keyup(mostrarResultado);
	}
	/**
	 * Muestra el resultado de la búsqueda
	 */
	function mostrarResultado(){
		let cadenaBusqueda = $("#busqueda").val();
		if(cadenaBusqueda!= ""){
			$.post("./php/students.php", {valorBusqueda: cadenaBusqueda}, function (mensaje){
				$("#respuesta").html(mensaje);
			});
		}
		else{
			$("#respuesta").html("");
		}
	}

	$(document).ready(init);
}


