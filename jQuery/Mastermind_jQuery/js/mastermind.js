/**
 * @author Nieves Borrero
 */

/**
 * Mastermind
 * @return  Objeto que contiene los métodos accesibles para jugar al mastermind.
 */
masterMind = (function () {

    let colores = ["white", "black", "red", "brown", "yellow", "green", "orange", "blue"];
    let esta;
    let enSuSitio;
    let lineaMaquina;
    const NUM_COLORES = colores.length;
    const NUM_CASILLAS = 4;

    /**
    * Genera un número aleatorio entre 0 y el número de colores.
     */
    let generarAleatorio = function () {
        return Math.floor((Math.random() * NUM_COLORES));
    };

    /**
    * Crea la línea de colores a adivinar.
    */
    let generarlineaMaquina = function () {
        for (let i = 0; i < NUM_CASILLAS; i++) {
            lineaMaquina.push(colores[generarAleatorio()]);
        }
    }

    /**
     * Muestra los colores a adivinar en consola
     */
    let mostrar = function () {
        console.log(lineaMaquina);
    }

    /**
    * Comprueba si la combinación coincide y envia una pista
    *
    * @param {Array}  array 
     */
    let comprobarCombinacion = function (array) {
        let copiaLineaMaquina = lineaMaquina.slice();
        esta = 0;
        enSuSitio = 0;

        array.forEach(function (element, index) {
            if (element == copiaLineaMaquina[index]) {
                copiaLineaMaquina[index] = undefined;
                array[index] = 1;
                enSuSitio++;
            }
        });

        array.forEach(function (element, index) {
            let indexOrigen = copiaLineaMaquina.indexOf(element);
            if (copiaLineaMaquina.indexOf(array[index]) != -1) {
                copiaLineaMaquina[indexOrigen] = 0;
                esta++;
            }
        });


        return {           
            enSuSitio: enSuSitio,
            esta: esta,
        }
    }

    /**
     * Inicia la partida inicializando lineaMaquina y generando una nueva combinación de colores.
     */
    let init = function () {
        lineaMaquina = [];
        generarlineaMaquina();
    }

    return {
        init: init,
        mostrar: mostrar,
        comprobarCombinacion: comprobarCombinacion
    };
})();