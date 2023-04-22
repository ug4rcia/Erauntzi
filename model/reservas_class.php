<?php

class reservas_class{

    public $nombre;
    public $apellido;
    public $telefono;
    public $email;
	public $dia1;
	public $dia2;
	public $dia3;
	public $dia4;

	public function getDia1() {
		return $this->dia1;
	}

	public function setDia1($dia1) {
		$this->$dia1 = $dia1;
	}

	public function getDia2() {
		return $this->dia2;
	}

	public function setDia2($dia2) {
		$this->$dia2 = $dia2;
	}

	public function getDia3() {
		return $this->dia3;
	}

	public function setDia3($dia3) {
		$this->$dia3 = $dia3;
	}

	public function getDia4() {
		return $this->dia4;
	}

	public function setDia4($dia4) {
		$this->$dia4 = $dia4;
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