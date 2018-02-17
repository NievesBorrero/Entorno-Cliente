<?php
	$frameworkSelect = $_GET['framework'];
	$frameworksJson = file_get_contents("../json/frameworks.json"); // Guardo el contenido del json en una variable
	$frameworks = json_decode($frameworksJson,true); // Decodifico el json a un array en php
	$mensaje;
		foreach ($frameworks['frameworks'] as $framework){
			if($framework["nombre"] == $frameworkSelect){
				$mensaje = json_encode($framework);
			}
		}
	echo $mensaje;
?>