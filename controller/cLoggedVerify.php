<?php
session_start(); 

$response=array();

if (isset($_SESSION['usuario']) && (isset($_SESSION['contrasena'])))
{
    $response["usuario"]=$_SESSION['usuario'];
    $response["contrasena"]=$_SESSION['contrasena'];
    
    $response["error"]="logged";
}else{
    $response["error"]="not logged";
}
echo json_encode($response);