/**
 * @author Nieves Borrero
 * @version 1.0
 */
{
    let puntero;
    let casillas;
    let casillasPistas;   
    let num_lineas;
    let divCampeon;
    const NUM_CASILLAS = 4;
    /**
     * Pinta una casilla de un color según el id introducido por parámetro.
     * 
     */    
    let pintarCasilla = function () {
	    for (let i = 0; i < casillas.length; i++) {
	        if (estaVacia(i)) {
	            casillas[i].style.backgroundColor = this.id;
	            $(this).effect('shake');            
	            $(casillas[i]).click(limpiarFicha);
	            avanzarPuntero();
	            break;
	        }
	    }
	}
    /**
     * Avanza una posición el puntero
     */
    let avanzarPuntero = function(){
        if(puntero<4)
            puntero++;
    }
    /**
     * Comprueba si la casilla está vacia
     *
     * @param  {int}  index 
     * @return {boolean} true o false
     */
    let estaVacia = function(index){
        let casillaActual = casillas[index];
        return casillaActual.style.backgroundColor == "transparent" || casillaActual.style.backgroundColor == "";
    }
    /**
     * Reinicia y modifica los valores necesarios para iniciar un nuevo turno
     */
    let nuevoTurno = function(){
        puntero = 0; // Cuando se crea una nueva línea, debemos poner el puntero a 0 para ir añadiendo los colores desde el inicio.
        casillas = $(".casilla" + num_lineas); // Cambiamos las casillas objetivo
        casillasPistas = $(".casillaPista" + num_lineas); // Cambiamos las casillas de pista objetivo        
        num_lineas++; // Dejamos preparado el sufijo para la línea siguiente.
        window.scrollTo(0, 0); 
    }
    /**
     * Genera una nueva fila de casillas a rellenar y de casillas para pistas.
     */
    let crearFila = function () {  
    	eliminarEventos();   
        let html = "<div id='fila'><div id='divCasillas'>";                
        // Generamos las casillas
        for (let i = 0; i < NUM_CASILLAS; i++) {
        	html += "<div class='casilla casilla"+num_lineas+"'></div>";
        }
        html += "</div><div id='pistas'>"
        // Generamos las casillas de pistas
        for (let i = 0; i < NUM_CASILLAS; i++) {
            html += "<div class='casillaPista casillaPista"+num_lineas+"'></div>";
        }
        html += "</div></div>";
        $('#tablero').append(html);
        nuevoTurno();
    }
    /**
     * Extrae los colores que ha introducido el usuario
     *
     * @return     {Array}  Array con los colores marcados por el usuario
     */
    let obtenerColoresUsuario = function(){    	
        let coloresUsuario = [];  // Array de colores introducidos por el usuario para comprobar.  
    	casillas.each(function (indice, casilla) {
            coloresUsuario.push(casilla.style.backgroundColor);
		});
        return coloresUsuario;
    }
    /**
     * Comprueba si la combinación introducida por el usuario coincide con la 
     * del juego, dibujando pistas según las coincidencias
     */
    let comprobar = function () {   
        let punteroComprobacion = 0;
        let coloresUsuario = obtenerColoresUsuario();
        if (puntero >= NUM_CASILLAS) {
            mastermind = masterMind.comprobarCombinacion(coloresUsuario);
            if (mastermind.enSuSitio > 0) {
                 punteroComprobacion = pintarNegras(punteroComprobacion);
            }
            if (mastermind.esta > 0) {
                punteroComprobacion = pintarBlancas(punteroComprobacion);
            }
            comprobarGanador(punteroComprobacion);
        }
    }
    /**
     * Comprueba si la combinación de fichas del usuario es idéntica a la
     * del juego.
     * @param  {int}  punteroComprobacion  
     */
    let comprobarGanador = function(punteroComprobacion){
    	if (punteroComprobacion == NUM_CASILLAS) {
            openDialog();
        }else{
            crearFila();
        }
    }
    /**
     * Pinta de negro una casilla de pista en caso de que la ficha a comprobar coincida 
     * en color y en sitio con la del juego.
     * @param  {int}  punteroComprobacion  
     * @return {int}  punteroComprobacíon
     */
    let pintarNegras = function(punteroComprobacion){
    	for (let i = 0; i < mastermind.enSuSitio; i++)  {
            casillasPistas[punteroComprobacion].style = "background-color: black;";
            punteroComprobacion++;
        }
        return punteroComprobacion;
    }
    /**
     * Pinta de blanco una casilla de pista en caso de que la ficha a comprobar coincida 
     * en color pero no en sitio con la del juego.
     * @param      {int}  punteroComprobacion  
     * @return     {int}  punteroComprobacíon
     */
    let pintarBlancas = function(punteroComprobacion){
    	for (let i = 0; i < mastermind.esta; i++) {
            casillasPistas[punteroComprobacion].style = "background-color: white;";
            punteroComprobacion++;
        }
        return 0;
    }
    /**
     * Abre una ventana
     */
    let openDialog = function(){
        divCampeon.dialog("open");
            divCampeon.dialog({
                resizable: false,
                height: "auto",
                width: 400,
                modal: true,
                buttons: {
                    "Volver a jugar": function() {
                        $( this ).dialog("close");
                            reiniciar();
                    },
                    "Salir": function() {
                        $( this ).dialog("close");
                            exit();
                    }
                }
            });
    }   
    /**
     * Quita el color de un círculo
     */
    let limpiarFicha = function (event) {
        $(this).css("background-color", "transparent");
        $(this).effect('highlight');
        event.target.removeEventListener("click", limpiarFicha);
        puntero--;
    }
    /**
     * Elimina el detector de evento de las casillas de la linea anterior para que el usuario no pueda clickar
     */
    let eliminarEventos = function () {
       casillas.off("click");
    }
    /**
    * Permite reiniciar el juego
    */
    let reiniciar = function () {
        document.location.reload(true);
    }
    /**
     * Cierra la ventana 
     */
    let exit = function(){
        window.close();
    }
    /**
    * Inicia el juego con todos sus elementos.
    */
    let init = function(){
        masterMind.init();
        masterMind.mostrar();
        $('#main').hide().toggle( "blind", 1500);
        num_lineas=0;
        casillas = $(".casilla");
        casillasPistas = $(".casillaPista");
        divCampeon = $("#divCampeon");
        crearFila();
        divCampeon.dialog({ autoOpen: false });
        //Eventos
        $("#btnCheck").click(comprobar);
        $(".fichas").click(pintarCasilla);
    };
    $(document).ready(init);
}