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


    public function getList()
    {
        $this->OpenConnect();
        $sql = "SELECT * FROM reservas";

        $result = $this->link->query($sql);

        $list = array();

        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

            // $reserva=new reservas_model(); // self()
            $this->nombre = $row['nombre'];
            $this->apellido = $row['apellido'];
            $this->telefono = $row['numero'];
            $this->email = $row['email'];
            $this->dia = $row['dia'];

            array_push($list, get_object_vars($this));
        }
        mysqli_free_result($result);
        $this->CloseConnect();
        return ($list);
    }

    public function getListFecha()
    {

        $this->OpenConnect();

        $dia = $this->dia;

        $sql = "SELECT COUNT(dia) as dias FROM reservas WHERE dia='$dia'";

        // $result = $this->link->query($sql);
        $result = mysqli_query($this->link, $sql);
        $fila = mysqli_fetch_assoc($result);
        $valor = $fila['dias'];
        var_dump("result");
        var_dump($result);
        var_dump("fila");
        var_dump($fila);
        var_dump("valor");
        var_dump($valor);

        // mysqli_free_result($result);
        $this->CloseConnect();
        return $valor;
    }
}
