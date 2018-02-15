/**
 * @author Nieves Borrero
 * @version 1.0
 */
{	
	let $busqueda;
	let $respuesta;

	/**
	 * Inicializa las variables y el comportamiento
	 */
 	let init = function(){
		$busqueda = $("#busqueda").keyup(mostrarResultado);		
		$respuesta = $("#respuesta");
	}
	/**
	 * Muestra el resultado de la búsqueda
	 */
	function mostrarResultado(){
		let cadenaBusqueda = $busqueda.val();

		if(cadenaBusqueda!= ""){
			$.post("./php/students.php", {valorBusqueda: cadenaBusqueda}, function (mensaje){
				$respuesta.html(mensaje);
			});
		}
		else{
			$respuesta.html("");
		}
	}

	$().ready(init);
}


