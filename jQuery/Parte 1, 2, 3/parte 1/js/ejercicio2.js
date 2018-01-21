
$(document).ready(function(){
	/* Al pasar el ratónpor encima añadimos una clase*/
	$("a").mouseover(function(event){
		$("#capa").addClass("clasecss");
	}); 
	/* Al quitar el ratón de encima la eliminamos*/
	$("a").mouseout(function(event){
		$("#capa").removeClass("clasecss");
	}); 
}); 