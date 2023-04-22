<?php

require_once 'connect_data.php';
require_once 'reservas_class.php';


class reservas_model extends reservas_class
{
    private $link;

    public function OpenConnect()
    {
        $konDat = new connect_data();
        try {
            $this->link = new mysqli($konDat->host, $konDat->userbbdd, $konDat->passbbdd, $konDat->ddbbname);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
        $this->link->set_charset("utf8"); // honek behartu egiten du aplikazio eta
        //                  //databasearen artean UTF -8 erabiltzera datuak trukatzeko
    }

    public function CloseConnect()
    {
        mysqli_close($this->link);
    }

    // public function getDatos(){
    //     $this->OpenConnect();

    //     $id_movimiento = $this->id_movimiento;

    //     $sql = "SELECT * FROM movimientos WHERE id_movimiento=$id_movimiento";
    //     $result = $this->link->query($sql);
    //     $list = array();

    //     while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

    //         $this->id_movimiento=$row['id_movimiento'];
    //         $this->tipo=$row['tipo'];
    //         $this->concepto=$row['concepto'];

    //         array_push($list, get_object_vars($this));

    //     }
    //     return $list;
    //     mysqli_free_result($result);
    //     $this->CloseConnect();
    // }

    public function getList() {
        $this->OpenConnect();   
        $sql = "SELECT * FROM reservas";  
        
        $result = $this->link->query($sql); 
        
        $list=array();
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $reserva=new reservas_model(); // self()
            $reserva->nombre=$row['nombre'];
            $reserva->apellido=$row['apellidos'];
            $reserva->telefono=$row['numero'];
            $reserva->email=$row['email'];
            $reserva->dia1=$row['dia1'];
            $reserva->dia2=$row['dia2'];
            $reserva->dia3=$row['dia3'];
            $reserva->dia4=$row['dia4'];

            array_push($list, $reserva);
        }
       mysqli_free_result($result);
       $this->CloseConnect();
       return($list);
 }


    public function insertDatos()
    {
        $this->OpenConnect();

        $nombre = $this->nombre;
        $apellido = $this->apellido;
        $telefono = $this->telefono;
        $email = $this->email;
        $dia1 = $this->dia1;
        $dia2 = $this->dia2;
        $dia3 = $this->dia3;
        $dia4 = $this->dia4;
        

        $sql = "INSERT INTO reservas ('nombre', 'apellidos', 'numero', 'email', 'dia1', 'dia2', 'dia3', 'dia4') VALUES ('$nombre', '$apellido', $telefono, '$email', '$dia1', '$dia2', '$dia3', '$dia4');";
        
        var_dump($sql);

        $this->link->query($sql);
        
        $this->CloseConnect();
    }

}
