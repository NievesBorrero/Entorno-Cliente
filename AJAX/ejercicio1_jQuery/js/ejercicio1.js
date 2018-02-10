/*
 * Manejo de AJAX con jQuery
 * @autor Nieves Borrero
 */

 
$(function() {
  let recurso;
  recurso = $("#recurso");
  recurso.val(location.href);
  $("#enviar").on("click",request);
  
});

/**
 * Envía la solicitud
 */
let request = function(){
  $.ajax({
      url: $("#recurso").html(),
      dataType: 'text',

      beforeSend: function() {
        setTimeout(function() {$("#estados").html('Antes de enviar')},500);
      },
      success: function(data) {  
        setTimeout(function() {$("#estados").html('Solicitud con éxito')},1500);
        setTimeout(function() {$("#contenidos").text(data);},3000);
      },

      complete: function(xhr) {
        setTimeout(function() {
          $("#estados").html('Solicitud completa'); 
          $("#codigos").html(xhr.statusText + ' ' + xhr.status);
        },3000);
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


