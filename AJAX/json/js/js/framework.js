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
			select[i].addEventListener("click", sendRequest); 
		}		
	}
	/**
	 * Realiza la petición y muestra los datos obtenidos
	 */
	let sendRequest = function(event){
		let xmlhttp = new XMLHttpRequest();
		let frameworkSelect = this.innerHTML.toLowerCase();
		event.preventDefault();
		xmlhttp.onreadystatechange = function(){
			if(xmlhttp.readyState === 4 && xmlhttp.status ===200){
				mostrarDatos(xmlhttp);						
			}
		}
		xmlhttp.open("GET", "./php/frameworks.php?framework="+frameworkSelect, true);
		xmlhttp.send();		
	}
	/**
	 * Obtiene los datos y los muestra
	 * @param {Object XMLHttpRequest}  xmlhttp  
	 */
	let mostrarDatos = function(xmlhttp){
		let datos = JSON.parse(xmlhttp.responseText);
		nombre.innerHTML = datos.nombre;
		imagen.setAttribute("src", datos.imagen); 
		descripcion.innerHTML = datos.descripcion;
		url.setAttribute("href", datos.url);
		url.innerHTML = "Link";		
	}
	window.onload = init;
}
