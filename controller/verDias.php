<?php

// Detalles de la conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "erauntzi";

// Crear la conexión a la base de datos
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Verificar si la conexión fue exitosa
if (!$conn) {
    die("La conexión a la base de datos falló: " . mysqli_connect_error());
}

$valor = json_decode(file_get_contents("php://input"), true)["dia"];

// Realiza la consulta SQL con el valor recibido desde JavaScript
$sql = "SELECT COUNT(*) FROM reservas WHERE dia = '$valor'";
$resultado = mysqli_query($conn, $sql);

// Obtiene el valor Count
$count = mysqli_fetch_array($resultado)[0];

// Retorna el valor Count en formato JSON
echo json_encode($count);
