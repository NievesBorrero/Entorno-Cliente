	var numClics = 0;
	var numDobleClics = 0;
	$(document).ready(function(){
		$("#micapa").dblclick(function(e){
			numDobleClics++;
			$("#mensaje").html("Doble Clic " + numDobleClics);
		});
		$("#micapa").click(function(e){
			numClics++;
			$("#mensaje").html("Clic " + numClics);
	});
	})