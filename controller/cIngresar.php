<?php
include_once '../model/reservas_model.php';

$data=json_decode(file_get_contents("php://input"),true);



$nombre = $data['nombre'];
$apellido = $data['apellido'];
$telefono = $data['telefono'];
$email = $data['email'];
$dia1 = $data['dia1'];
$dia2 = $data['dia2'];
$dia3 = $data['dia3'];
$dia4 = $data['dia4'];



$reserva = new reservas_model();

$reserva->setNombre($nombre);
$reserva->setApellido($apellido);
$reserva->setTelefono($telefono);
$reserva->setEmail($email);
$reserva->setDia1($dia1);
$reserva->setDia2($dia2);
$reserva->setDia3($dia3);
$reserva->setDia4($dia4);

$reserva->insertDatos();

$response=array();

$response['list']='no error';


echo json_encode($response);