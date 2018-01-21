
	$(document).ready(function(){
			$("h1").animate({
				color: "#f80"
			}, 3000);
			
			var iluminado = false;
			$("h2").click(function(){
				var elem = $(this);
				if(iluminado){
					elem.animate({
						"background-color": "#9f9"
					}, 500);
				}else{
					elem.animate({
						"background-color": "#ffc"
					}, 500);
				}
				iluminado = !iluminado;
			})
	});