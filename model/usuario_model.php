<?php
require_once 'connect_data.php';
require_once 'usuario_class.php';


class usuario_model extends usuario_class
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


    public function setUserData()
    {

        $this->OpenConnect();
        $usuario = $this->usuario;
        $contrasena = $this->contrasena;

        $sql = "SELECT * FROM usuario WHERE contrasena = '$usuario'";

        $result = $this->link->query($sql);
        $valor = 0;
        $admin = 0;


        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            if ($this->link->affected_rows == 1) {

                $this->usuario = $row['usuario'];

                $p1 = $row['contrasena'];

                if ($p1 == $contrasena) {
                    $valor = 1;
                } else {
                    $valor = -1;
                }
            }
        }

        return array("valor" => $valor);;
        $this->CloseConnect();
    }

    public function setList()
    {

        $this->OpenConnect();

        $sql = "SELECT * FROM usuario";
        $result = $this->link->query($sql);

        $list = array();

        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

            $new = new usuario_class();

            $new->setusuario($row['usuario']);
            $new->setContrasena($row['contrasena']);

            array_push($list, get_object_vars($new));
        }
        mysqli_free_result($result);
        $this->CloseConnect();
        return $list;
    }

    public function findUserByusuario()
    {
        $this->OpenConnect();

        $usuario = $this->usuario;

        $sql = "SELECT * FROM usuario WHERE usuario.contrasena = '$usuario'";

        $result = $this->link->query($sql);
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);

        $this->setusuario($row['usuario']);
        $this->setContrasena($row['contrasena']);


        mysqli_free_result($result);

        $this->CloseConnect();
    }


    public function objVars()
    {
        return get_object_vars($this);
    }
}
