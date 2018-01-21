/* el método live() está deprecated 
$(document).ready(function(){
	$(".verde").live("click", function(e){
		var elem = $(this);
		if (elem.html()!="Hiciste clic!!"){
		elem.html("Hiciste clic!!");
		}else{
		elem.html("Hiciste de nuevo clic!!");
	}
	})
	$("#insertarelem").click(function(e){
		var nuevoElemento = $('<div class="verde">Este elemento se ha creado e insertado dinamicamente(haz clic)</div>');
		nuevoElemento.appendTo($(document.body));
		});
		$("#ponerclaseverde").click(function(e){
		$("#noverde").addClass("verde");
	});
})
*/