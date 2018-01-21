
$(document).ready(function(){
		$("p").bind("click mouseenter mouseleave", function(e){
		if ($(this).css("color")!="rgb(250, 100, 0)")
		$(this).css("color", "rgb(250, 100, 0)");
		else
		$(this).css("color", "rgb(150, 0, 255)");
		})
		function clicAlerta(){
		alert("Has hecho clic");
		}
		$(".miclase").bind("click", clicAlerta);
		$("#quitarevento").bind("click", function(){
		$(".miclase").unbind("click", clicAlerta);
		})
})