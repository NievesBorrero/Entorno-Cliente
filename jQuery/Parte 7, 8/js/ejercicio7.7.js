jQuery.fn.checkboxPersonalizado = function(opciones) {
	//opciones de configuración por defecto
	var conf = {
		activo: true,
		colorTextos: {
			activo: "#00f",
			pasivo: "#669"
		},
		textos: {
			activo: "",
			pasivo: ""
		},
		imagen: {
			activo: 'images/thumb_up.png',
			pasivo: 'images/thumb_down.png'
		},
		cssElemento: {
			padding: "2px 2px 2px 24px",
			display: "block",
			margin: "2px",
			border: "1px solid #eee",
			cursor: "pointer"
		},
		cssAdicional: {
			
		},
		nameCheck: ""
	};
	//Las extiendo con las opciones recibidas al invocar el plugin
	jQuery.extend(conf, opciones);
	
	this.each(function(){
		var miCheck = $(this);
		var activo = conf.activo
		var elementoCheck = $('<input type="checkbox" style="display: none;" />');
		if(conf.nameCheck==""){
			elementoCheck.prop("name", miCheck.text());
		}else{
			elementoCheck.prop("name", conf.nameCheck);
		}
		miCheck.before(elementoCheck);
		miCheck.css(conf.cssElemento);
		miCheck.css(conf.cssAdicional);
		
		if (activo){
			activar();
		}else{	
			desactivar();
		}
		miCheck.click(function(e){
			if(activo){
				desactivar();
			}else{	
				activar();
			}
			activo = !activo;
		});
		
		function desactivar(){
			miCheck.css({
				background: "transparent url(" + conf.imagen.pasivo + ") no-repeat 3px",
				color: conf.colorTextos.pasivo
			});
			if (conf.textos.pasivo!=""){
				miCheck.text(conf.textos.pasivo)
			}
			elementoCheck.removeProp("checked");
		};									
		
		function activar(){
			miCheck.css({
				background: "transparent url(" + conf.imagen.activo + ") no-repeat 3px",
				color: conf.colorTextos.activo
			});
			if (conf.textos.activo!=""){
				miCheck.text(conf.textos.activo)
			}
			elementoCheck.prop("checked","1");
		};	
	});
	return this;
};	

$(document).ready(function(){
	$(".ch").checkboxPersonalizado();
	$("#otro").checkboxPersonalizado({
		activo: false,
		colorTextos: {
			activo: "#f80",
			pasivo: "#98a"
		},
		imagen: {
			activo: 'images/weather_cloudy.png',
			pasivo: 'images/weather_rain.png'
		},
		textos: {
			activo: 'Buen tiempo :)',
			pasivo: 'Buena cara ;)'
		},
		cssAdicional: {
			border: "1px solid #dd5",
			width: "100px"
		},
		nameCheck: "buen_tiempo"
	});
})