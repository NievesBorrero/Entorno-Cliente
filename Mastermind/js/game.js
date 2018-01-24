/**
 * @author Nieves Borrero
 * @version 1.0
 * Correcciones: 
 * Usar pointerEvent
 */

{
    let puntero;   
    let casillas;
    let colores;
    let casillasPistas;   
    let btnComprobar;
    let num_lineas;
    let tableroIzquierda;
    let divCampeon;
    let btnSalir;
    let btnReiniciar;
    let punteroComprobacion;
    let btnReset;

    const NUM_CASILLAS = 4;

    /**
     * Pinta una casilla de un color según el id introducido por parámetro.
     * @param  id
     */
    let pintarCasilla = function (id) {

         for (let i = 0; i < casillas.length; i++) {

            if (casillas[i].style.backgroundColor == "transparent" || casillas[i].style.backgroundColor == "") {

            switch (id) {

                case "blanca":
                    casillas[i].style = "background-color: white;";
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

            casillas[i].addEventListener("click", limpiarFicha);
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
        casillas = document.getElementsByClassName("casilla" + num_lineas); // Cambiamos las casillas objetivo
        casillasPistas = document.getElementsByClassName("casillaPista" + num_lineas); // Cambiamos las casillas de pista objetivo        
        num_lineas++; // Dejamos preparado el sufijo para la línea siguiente.
        window.scrollTo(0, 0); 
    }

    /**
     * Genera una nueva fila de casillas a rellenar y de casillas para pistas.
     */

    let crearFila = function () {
        
        eliminarEventos();
        // Declaración de variables
        let nuevaCasilla;
        let nuevaCasillaPista;
        let fila = document.createElement("div");
        let filaCasillas = document.createElement("div");
        let pistas = document.createElement("div");

        
        // Añadimos los correspondientes ids
        fila.id = "fila";       
        filaCasillas.id = "casillas";       
        pistas.id = "pistas";      

        // Generamos las casillas
        for (let i = 0; i < 4; i++) {
            nuevaCasilla = document.createElement("div");
            nuevaCasilla.classList.add("casilla");
            nuevaCasilla.classList.add("casilla" + num_lineas);
            filaCasillas.appendChild(nuevaCasilla);
        }

        // Generamos las casillas de pistas
        for (let i = 0; i < 4; i++) {
            nuevaCasillaPista = document.createElement("div");
            nuevaCasillaPista.classList.add("casillaPista");
            nuevaCasillaPista.classList.add("casillaPista" + num_lineas);
            pistas.appendChild(nuevaCasillaPista);
        }

        fila.appendChild(filaCasillas);
        fila.appendChild(pistas);
        tableroIzquierda.appendChild(fila);
        
        nuevoTurno();
    }

    /**
     * Comprueba si la combinación introducida por el usuario es correcta
     */

    let comprobar = function () {
        let coloresUsuario = [];       
        let punteroComprobacion = 0;
        for (let i = 0; i < casillas.length; i++) {
            if (casillas[i].style.backgroundColor == "red") {
                coloresUsuario.push("roja");
            } else if (casillas[i].style.backgroundColor == "white") {
                coloresUsuario.push("blanca");
            } else if (casillas[i].style.backgroundColor == "black") {
                coloresUsuario.push("negra");
            } else if (casillas[i].style.backgroundColor == "green") {
                coloresUsuario.push("verde");
            } else if (casillas[i].style.backgroundColor == "blue") {
                coloresUsuario.push("azul");
            } else if (casillas[i].style.backgroundColor == "yellow") {
                coloresUsuario.push("amarilla");
            } else if (casillas[i].style.backgroundColor == "brown") {
                coloresUsuario.push("marron");
            } else if (casillas[i].style.backgroundColor == "orange") {
                coloresUsuario.push("naranja");
            }

        }

        if (puntero >= 4) {
            mastermind = masterMind.comprobarCombinacion(coloresUsuario);

            if (mastermind.enSuSitio > 0) {
                while (punteroComprobacion < mastermind.enSuSitio) {
                    casillasPistas[punteroComprobacion].style = "background-color: black;";
                    punteroComprobacion++;
                }
            }

            if (punteroComprobacion == 4) {
                divCampeon.style = "display: block;";
                btnComprobar.setAttribute("disabled", "true");

            }

            if (mastermind.esta > 0) {
                for (let i = 0; i < mastermind.esta; i++) {
                    casillasPistas[punteroComprobacion].style = "background-color: white;";
                    punteroComprobacion++;
                }
                punteroComprobacion = 0;
            }

            crearFila();
        }
    }

    
    /**
     * Quita el color de un círculo
     */
    let limpiarFicha = function (event) {
        event.target.style = "background-color: transparent;";
        event.target.removeEventListener("click", limpiarFicha);
        puntero--;
    }

    /**
     * Elimina el detector de evento de las casillas de la linea anterior para que el usuario no pueda clickar
     */
    let eliminarEventos = function () {
        for (let i = 0; i < casillas.length; i++) {
           casillas[i].removeEventListener("click", limpiarFicha);
        }
    }

    /**
    * Permite reiniciar el juego
    */
    let reiniciar = function () {
        init();
        divCampeon.style = "display: none;"
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
    let init = function () {

        masterMind.init();
        masterMind.mostrar();
        num_lineas=0;
        casillas = document.getElementsByClassName("casilla");
        casillasPistas = document.getElementsByClassName("casillaPista");
        colores = document.getElementsByClassName("fichas");
        tableroIzquierda = document.getElementById("tablero");       
        btnComprobar = document.getElementById("btnCheck");
        divCampeon = document.getElementById("divCampeon");
        btnReset = document.getElementById("exit");
        //Eventos
        btnComprobar.addEventListener("click", comprobar);
        btnReset.addEventListener("click", exit);
        for (let i = 0; i < colores.length; i++) {
            colores[i].addEventListener("click", pintarCasilla.bind(null, colores[i].id));
        }

        crearFila();
    }

    window.onload = init;
}