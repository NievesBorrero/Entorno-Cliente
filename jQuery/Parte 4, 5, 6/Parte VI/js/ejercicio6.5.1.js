function operaEvento(evento){
	$("#loescrito").html($("#loescrito").html() + evento.type + ": " + evento.which + ", ")
	}
	$(document).ready(function(){
	$(document).keypress(operaEvento);
	$(document).keydown(operaEvento);
	$(document).keyup(operaEvento);
})