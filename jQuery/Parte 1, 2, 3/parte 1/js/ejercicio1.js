/*
* Cuando el navegador ha recibido el código HTML completo y lo ha procesado...
*/
$(document).ready(function(){
	/*Tomamos todas las etiquetas A del documento y definimos un evento click sobre esos 
	* elementos. 
	*/
	$("a").click(function(evento){
		alert("Has pulsado el enlace...Ahora serás enviado a DesarrolloWeb.com");
		evento.preventDefault();
	});
}); 