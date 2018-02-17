/**
 * Manejando JSON con jQuery
 * @author Nieves Borrero
 * @version 1.0
 */
{	
	let $nombre;
	let $url;
	let $imagen;
	let $descripcion;

	/**
	 * Inicializa las variables y el comportamiento
	 */
 	let init = function(){
		$nombre = $("#name");
		$imagen = $("#image");
		$descripcion = $("#descripcion");
		$url = $("#enlace");
		$('.dato').click(sendRequest);
	}
	/**
	 * Envia una petición y la muestra
	 */
	let sendRequest = function(event){
		let $frameworkSelect = $(this).html().toLowerCase();
		event.preventDefault();
		$.getJSON("./php/frameworks.php?framework="+$frameworkSelect, function(data){
    		mostrarDatos(data);			  	
		});
	}
	/**
	 * Muestra los datos
	 * @param   {array} data
	 */
	let mostrarDatos = function(data){
		$nombre.html(data.nombre);
    	$descripcion.html(data.descripcion);     				
		$imagen.prop("src", data.imagen);
    	$url.prop("href", data.url);
	}

	$().ready(init);
}


