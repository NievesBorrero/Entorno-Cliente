/**
 * @author Nieves Borrero
 * @version 1.0
 * Correcciones: 
 * Usar pointerEvent
 */

{
    let puntero;
    let casillas;
    let casillasPistas;   
    let num_lineas;
    let divCampeon;
    let haGanado;

    const NUM_CASILLAS = 4;

    /**
     * Pinta una casilla de un color según el id introducido por parámetro.
     * @param  id
     */
    let pintarCasilla = function () {

         for (let i = 0; i < NUM_CASILLAS; i++) {

            if (casillas[i].style.backgroundColor == "transparent" || casillas[i].style.backgroundColor == "") {

            switch (this.id) {
                case "blanca":
                    casillas[i].style= "background-color: white;";
                    break;

                case "negra":
                    casillas[i].style = "background-color: black;";
                    break;

                case "roja":
                    casillas[i].style = "background-color: red;";
                    break;

                case "marron":
                    casillas[i].style = "background-color: brown;";
                    break;

                case "amarilla":
                    casillas[i].style = "background-color: yellow;";
                    break;

                case "verde":
                    casillas[i].style = "background-color: green;";
                    break;

                case "naranja":
                    casillas[i].style = "background-color: orange;";
                    break;

                case "azul":
                    casillas[i].style = "background-color: blue;";
                    break;
            }

            $(casillas[i]).on("click", limpiarFicha);
            break;
        }

         }
         if(puntero<4)
            puntero++;
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
        let fila = $("<div id='fila'></div>");        
        let divCasillas= $("<div id='divCasillas'></div>");
        let pistas = $("<div id='pistas'></div>");
        let casilla;
        let pista;
        eliminarEventos();   

        $('#tablero').append(fila);
        fila.append(divCasillas);
        fila.append(pistas);


        // Generamos las casillas
        for (let i = 0; i < NUM_CASILLAS; i++) {
            casilla= document.createElement("div");
            casilla.classList.add("casilla", "casilla"+num_lineas);
            divCasillas.append(casilla);
        }

        // Generamos las casillas de pistas
        for (let i = 0; i < NUM_CASILLAS; i++) {
            pista= document.createElement("div");
            pista.classList.add("casillaPista", "casillaPista"+num_lineas);
            pistas.append(pista);
        }

        nuevoTurno();
    }

    /**
     * Comprueba si la combinación introducida por el usuario es correcta
     */

    let comprobar = function () {
        let coloresUsuario = [];       
        let punteroComprobacion = 0;

      for (let i = 0; i < NUM_CASILLAS; i++) {
            switch (casillas[i].style.backgroundColor) {
                case "red":
                    coloresUsuario.push("roja");
                    break;
                case "white":
                    coloresUsuario.push("blanca");
                    break;
                case "black":
                    coloresUsuario.push("negra");
                    break;
                case "green":
                    coloresUsuario.push("verde");
                    break;
                case "blue":
                    coloresUsuario.push("azul");
                    break;
                case "brown":
                    coloresUsuario.push("marron");
                    break;
                case "orange":
                    coloresUsuario.push("naranja");
                    break;
                case "yellow":
                    coloresUsuario.push("amarilla");
                    break;
            }

        };

        if (puntero >= NUM_CASILLAS) {
            mastermind = masterMind.comprobarCombinacion(coloresUsuario);

            if (mastermind.enSuSitio > 0) {
                while (punteroComprobacion < mastermind.enSuSitio) {
                    casillasPistas[punteroComprobacion].style = "background-color: black;";
                    punteroComprobacion++;
                }
            }

            if (punteroComprobacion == NUM_CASILLAS) {
            	$("#divCampeon").css("display", "block");
                $("#btnCheck").css("disabled", "true");
                haGanado = true;

            }

            if (mastermind.esta > 0) {
                for (let i = 0; i < mastermind.esta; i++) {
                    casillasPistas[punteroComprobacion].style = "background-color: white;";
                    punteroComprobacion++;
                }
                punteroComprobacion = 0;
            }
            if(!haGanado)
            crearFila();
        }
    }

    
    /**
     * Quita el color de un círculo
     */
    let limpiarFicha = function (event) {
        $(this).css("background-color", "transparent");
        event.target.removeEventListener("click", limpiarFicha);
        puntero--;
    }

    /**
     * Elimina el detector de evento de las casillas de la linea anterior para que el usuario no pueda clickar
     */
    let eliminarEventos = function () {
       $('.casilla').off("click");
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
        haGanado = false;

        casillas = $(".casilla");
        casillasPistas = $(".casillaPista");

        crearFila();

        //Eventos
        $("#btnCheck").on("click", comprobar);
        $("exit").on("click", exit);
        $(".fichas").on("click", pintarCasilla);
        $("#reset").on("click", reiniciar);
    };

    $(document).ready(init);
}