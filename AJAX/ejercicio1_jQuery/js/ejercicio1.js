/*
 * Manejo de AJAX con jQuery
 * @autor Nieves Borrero
 */
 
$(function() {
  let recurso;
  xhr = new XMLHttpRequest();
  recurso = $("#recurso");
  recurso.val(location.href);
  $("#enviar").on("click",request);
});

/**
 * Envía la solicitud
 */
let request = function(){
    let peticion = $.ajax({
      url: $("#recurso").html(),
      dataType: 'text',
      

      beforeSend: function(xhr) {
      		$("#estados").html('Antes de enviar ');

      },
      success: function(data, xhr) {  
        $("#estados").html($("#estados").html()+'\nSolicitud con éxito ');
        $("#contenidos").text(data);
      },

      complete: function(xhr) {
          $("#estados").html($("#estados").html()+'\nSolicitud completa '); 
          $("#codigos").html(xhr.statusText + ' ' + xhr.status);
      },

      error: function(xhr) {
        $("#contenidos").html(getError(xhr.status));
      }

    });

}

/**
 * Devuelve un mensaje según el error
 *
 * @param      {string}  número de error
 * @return     {string}  msj
 */
let getError = function(number) {
  let msj = "Se ha producido un error número " + number;
    switch(number) {
      case 0: return msj + " Quizás intentas acceder a una url que no está en este dominio";
      case 400 : return msj +" Solicitud incorrecta";
      case 401 : return msj +" No autorizado";
      case 403: return msj + " Prohibido";
      case 404: return msj + " Archivo no encontrado";
      case 405 : return msj +" Método HTTP no permitido";
      case 408 : return msj +" Tiempo de espera superado";
      case 500 : return msj +" Error del servidor";
      case 503 : return msj +" El servicio no está disponible";
      case 505 : return msj +" Versión HTTP no compatible";
      default: return msj + " Error " + number;
    }
      
}


