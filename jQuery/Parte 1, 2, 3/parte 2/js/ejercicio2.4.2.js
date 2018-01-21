$(document).ready(function(){
	$("div").each(function(i){
		elemento = $(this);
		if(elemento.html() == "white")
			return true;
		if(elemento.html() == "nada")
			return false;
		elemento.css("color", elemento.html());
	}); 
});