<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$nombre = $_POST['nombre'];
	$apellido = $_POST['apellido'];
	$telefono = $_POST['telefono'];
	$email = $_POST['email'];
	$dia = $_POST['dia'];

	// Conexión a la base de datos
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "erauntzi";

	$conn = mysqli_connect($servername, $username, $password, $dbname);

	if (!$conn) {
	    die("Conexión fallida: " . mysqli_connect_error());
	}

	// Inserción de datos en la base de datos
	$sql = "INSERT INTO reservas (nombre, apellido, numero, email, dia)
	VALUES ('$nombre', '$apellido', '$telefono', '$email', '$dia')";

	if (mysqli_query($conn, $sql)) {
	    echo "Reserva guardada correctamente";
        header("Location: /view/paginas/cursos.html");
	} else {
	    echo "Error al guardar la reserva: " . mysqli_error($conn);
	}

	mysqli_close($conn);
} else {
	header("Location: index.html");
	exit;
}
