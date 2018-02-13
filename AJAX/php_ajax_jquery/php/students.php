<?php
/**
 * @author Nieves Borrero
 * @version 1.0
 */
	/*
	* Array en el que recojo los nombres de los alumnos.
	*/
	$students = array( "Nieves Borrero", "Juan Rueda Morales", "Miguel Ángel Gavilán", "Jesús Mejías Leiva", "Javi Ponferrada",
				"Pablo León Alcaide", "Soledad Mª Cruz Moleón", "Víctor Manuel Gómez Muñoz", "Victoriano Sevillano Vega", "Mario Ferrer Nieto",
               		"Rafael Mellado Jiménez", "David Mateo Cuenca", "Rafael Carmona Luque", "Rafael Carmona Arrabal", "Daniel Gestino Notario",
                		"Isabel María Gómez Palomeque");

	$cadenaBusqueda = $_POST['valorBusqueda'];
	$mensaje = "";

	/*
	* Recorre el array de nombres buscando las coincidencias
	*/
	foreach($students as $student){
        if(preg_match(strtolower("/$cadenaBusqueda/"),strtolower($student))){
        	$mensaje = $mensaje."<br>".$student;
        }
    }

    if($mensaje == ""){
    	echo "No hay coincidencias";
    }else{
    	echo $mensaje;
    }
    
    
	
?>

		
	