<?php
include_once '../model/usuario_model.php';

$data = json_decode(file_get_contents("php://input"), true);

$dni = $data['dni'];
$pasahitza = $data['pasahitza'];


$usuario = new usuario_model();
$usuario->setUsuario($dni);
$usuario->setContrasena($pasahitza);

$array = $usuario->setUserData();

$response = array();

if($array["valor"] == 0){
    $response["error"] = "user error";
    
}else{
    if ($array["valor"] == 1){
        if (!isset($_SESSION)){
            session_start();
        }
        $_SESSION['dni']=$dni;
        $response["error"] = "no error";

    }else{
        $response["error"] = "password error";
    }
    
}

echo json_encode($response);
unset($response);
