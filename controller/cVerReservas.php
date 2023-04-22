<?php

include_once ("../model/reservas_model.php");

$reserva= new reservas_model();
$response=array();

$response['list']=$reserva->getList(); 
$response['error']="no error"; 

echo json_encode($response);
unset ($response);