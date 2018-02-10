{  

  let estadosPosibles = ['No inicializado', 'Cargando', 'Cargado', 'Interactivo', 'Completado'];
  let tiempoInicial = 0;

  /**
   * Borra los datos anteriores
   */
  let borrarDatosAnteriores = function(){
    document.getElementById('contenidos').innerHTML = "";
    document.getElementById('estados').innerHTML = "";
  }
  /**
   * Carga el contenido 
   */
  let cargaContenido = function() {
    // Borramos datos anteriores
    borrarDatosAnteriores();
 
    // Instanciamos el objeto XMLHttpRequest
    peticion = new XMLHttpRequest();

    // Prepara función de respuesta
    peticion.onreadystatechange = muestraContenido;
    // Realiza petición
    tiempoInicial = new Date();
    let recurso = document.getElementById('recurso').value;
    peticion.open('GET', recurso+'?nocache='+Math.random(), true);
    // Envía la solicitud al servidor
    peticion.send(null);
  }
 
  /*
  * Genera una respuesta, mostrando el contenido
  */
  let muestraContenido = function() {
    let tiempoFinal = new Date();
    let milisegundos = tiempoFinal - tiempoInicial;
 
    let estados = document.getElementById('estados');
    estados.innerHTML += "[" + milisegundos + " mseg.] " + estadosPosibles[peticion.readyState] + "<br/>";
 
    if(peticion.readyState == 4) {
      if(peticion.status == 200) {
        let contenidos = document.getElementById('contenidos');
        contenidos.innerHTML = peticion.responseText.transformaCaracteresEspeciales();
      }
      muestraCabeceras();
      muestraCodigoEstado();
    }
  }
 
  let muestraCabeceras = function() {
    let cabeceras = document.getElementById('cabeceras');
    cabeceras.innerHTML = peticion.getAllResponseHeaders().transformaCaracteresEspeciales();
  }
 
  let muestraCodigoEstado= function() {
      let codigo = document.getElementById('codigo');
      codigo.innerHTML = peticion.status + "<br/>" + peticion.statusText;        
  }

  let init = function() {
      // Carga en el input text la URL de la página
      let recurso = document.getElementById('recurso');
      recurso.value = location.href;

      // Carga el recurso solicitado cuando se pulse el botón MOSTRAR
      document.getElementById('enviar').onclick = cargaContenido;
  }

  String.prototype.transformaCaracteresEspeciales = function() {
    return unescape(escape(this).
                      replace(/%0A/g, '<br/>').
                      replace(/%3C/g, '&lt;').
                      replace(/%3E/g, '&gt;'));
  }

    window.onload = init;



}