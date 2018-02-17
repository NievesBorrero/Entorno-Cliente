/**
 * Manejando JSON con js
 * @author Nieves Borrero
 * @version 1.0
 */
{	
	let nombre;
	let url;
	let imagen;
	let descripcion;

	/**
	 * Inicializa las variables y el comportamiento
	 */
 	let init = function(){
		let select = document.getElementsByClassName("dato");
		nombre = document.getElementById("name");
		imagen = document.getElementById("image");
		descripcion = document.getElementById("descripcion");
		url = document.getElementById("enlace");
		for (let i = 0; i < select.length; i++) {
			select[i].addEventListener("click", getJson); 
		}
		
	}
	/**
	 * Muestra la respuesta
	 */
	let getJson = function(event){
		let xmlhttp = new XMLHttpRequest();
		let frameworkSelect = this.innerHTML.toLowerCase();
		let datos;
		event.preventDefault();

		xmlhttp.onreadystatechange = function(){
			if(xmlhttp.readyState === 4 && xmlhttp.status ===200){
				datos = JSON.parse(xmlhttp.responseText); // Convierto el objeto JSON en un array
				datos['frameworks'].forEach(function(item){
					if(item.nombre == frameworkSelect){
						nombre.innerHTML = item.nombre;
						imagen.setAttribute("src", item.imagen); 
						descripcion.innerHTML = item.descripcion;
						url.setAttribute("href", item.url);
						url.innerHTML = "Link";
					}
				});
				
			}
		}

		xmlhttp.open("GET", "./json/frameworks.json", true);
		xmlhttp.send();		
	}

	window.onload = init;
}


