$(document).ready(function(){
	$("#micapa").css("color", "green");

	$("#micapa").css({
		"background-color": "#ff8800",
		"position": "absolute",
		"width": "100px",
		"top": "100px",
		"left": "200px"
	})

	$("#fondogris").click(function(e){
		e.preventDefault();
		$("#micapa").css("background-color","#999");
	})

	$("#fondonaranja").click(function(e){
		e.preventDefault();
		$("#micapa").css("background-color","#f80");
	})

	$("#ocultarmostrar").click(function(e){
		e.preventDefault();
		let c = $("#micapa");
		let mostrandose = c.css("display");
		if (mostrandose=="block"){
			c.css("display", "none");
		}else{
			c.css("display", "block");
		}
	})

	$("#micapa").mouseover(function(){
		antiguoLeft = parseInt($(this).css("left"));
		$(this).css("left", antiguoLeft + 10 + "px");
	})

	$("#micapa").click(function(){
		$(this).css("width", function(index, value){
			let aumento = prompt("cuanto quieres aumentar?", "25");
			return (parseInt(value) + parseInt(aumento)) + "px";
		});
	})
})

