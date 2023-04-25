<?php

class reservas_class{

    public $nombre;
    public $apellido;
    public $telefono;
    public $email;
	public $dia;

	public function getDia() {
		return $this->dia;
	}

	public function setDia1($dia) {
		$this->$dia = $dia;
	}

	public function getNombre() {
		return $this->nombre;
	}

	public function setNombre($nombre) {
		$this->$nombre = $nombre;
	}

	public function getApellido() {
		return $this->apellido;
	}

	public function setApellido($apellido) {
		$this->$apellido = $apellido;
	}

	public function getTelefono() {
		return $this->telefono;
	}

	public function setTelefono($telefono) {
		$this->$telefono = $telefono;
	}

	public function getEmail() {
		return $this->email;
	}

	public function setEmail($email) {
		$this->$email = $email;
	}



}