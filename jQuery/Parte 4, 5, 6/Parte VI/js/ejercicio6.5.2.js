$(document).ready(function(){
	$("#mitexto").keypress(function(e){
	e.preventDefault();
	$("#loescrito").html(e.which + ": " + String.fromCharCode(e.which))
	});
})