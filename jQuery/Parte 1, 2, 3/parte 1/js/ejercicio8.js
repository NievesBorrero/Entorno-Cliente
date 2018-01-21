$(document).ready(function(){
	$("#enlaceajax").click(function(evento){
		evento.preventDefault();
		$("#cargando").css("display", "inline");
		$("#destino").load("pagina-lenta.php", function(){
			$("#cargando").css("display", "none");
		});
	});
})