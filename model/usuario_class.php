<?php

class usuario_class{

    protected $usuario;
    protected $contrasena;



    /**
     * Get the value of dni
     */ 
    public function getUsuario()
    {
        return $this->usuario;
    }

    /**
     * Set the value of dni
     *
     * @return  self
     */ 
    public function setUsuario($usuario)
    {
        $this->usuario = $usuario;

        return $this;
    }

    /**
     * Get the value of nombre
     */ 
    public function getContrasena()
    {
        return $this->contrasena;
    }

    /**
     * Set the value of nombre
     *
     * @return  self
     */ 
    public function setContrasena($contrasena)
    {
        $this->contrasena = $contrasena;

        return $this;
    }
}