/*
 * Cuando ponga el ratón sobre la capa -> display block
 */
$("#capa").mouseenter(function(evento){
	$("#mensaje").css("display", "block");
});
/*
 * Cuando lo quite -> display none
 */
$("#capa").mouseleave(function(evento){
	$("#mensaje").css("display", "none");
});

/*  
* Selecciona la capa con id "mensaje" e indicamos que queremos cambiar el atributo 
*"display" al valor "block" de ese elemento. 
 */
$("#mensaje").css("display", "block");

$("#mensaje").css("display", "none"); 