document.addEventListener("DOMContentLoaded", (event) => {


});

const botones = document.querySelectorAll(".dias");
// Definir función y evitar definirla de manera anónima
var clicks = 0;
var local = 1;
const cuandoSeHaceClick = function (evento) {
    // Recuerda, this es el elemento
    if (clicks < 4) {

        localStorage.setItem("dia" + local, this.value);
        local = local + 1;

        console.log(this.value);

        // Podemos cambiar cualquier cosa, p.ej. el estilo
        this.disabled = "true";
        clicks = clicks + 1;
    } else {
        alert("No puedes seleccionar mas dias")

        document.getElementById("calendario").style.display = "none"

    }

}
// botones es un arreglo así que lo recorremos
botones.forEach(boton => {
    //Agregar listener
    boton.addEventListener("click", cuandoSeHaceClick);
});

document.querySelector(".guardardatos").addEventListener("click", comprobar);



function comprobar() {
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var telefono = document.getElementById("telefono");
    var email = document.getElementById("email");

    if (nombre.value === "") {
        alert("Ingresa los datos correctamente")
    } else if (apellido.value === "") {
        alert("Ingresa los datos correctamente")
    } else if (telefono.value === "") {
        alert("Ingresa los datos correctamente")
    } else if (email.value === "") {
        alert("Ingresa los datos correctamente")
    } else {
        document.getElementById("calendario").style.display = "flex"
        document.getElementById("guardar").style.display = "block"
    }
}

function validateEmail() {

    // Get our input reference.
    var emailField = document.getElementById('email');

    // Define our regular expression.
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    // Using test we can check if the text match the pattern
    if (validEmail.test(emailField.value)) {
        alert('Email is valid, continue with form submission');
        return true;
    } else {
        alert('Email is invalid, skip form submission');
        return false;
    }
}

function valideKey(evt) {

    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;

    if (code == 8) { // backspace.
        return true;
    } else if (code >= 48 && code <= 57) { // is a number.
        return true;
    } else { // other keys.
        return false;
    }
}


document.getElementById("guardar").addEventListener("click", guarda);

function guarda() {

    var nombre = document.getElementById("nombre").value
    console.log(nombre)

    var apellido = document.getElementById("apellido").value
    console.log(apellido)

    var telefono = document.getElementById("telefono").value
    console.log(telefono)

    var email = document.getElementById("email").value
    console.log(email)

    var dia1 = localStorage.getItem("dia1");
    console.log(localStorage.getItem("dia1"));

    var dia2 = localStorage.getItem("dia2");
    console.log(localStorage.getItem("dia2"));

    var dia3 = localStorage.getItem("dia3");
    console.log(localStorage.getItem("dia3"));

    var dia4 = localStorage.getItem("dia4");
    console.log(localStorage.getItem("dia4"));


    // var url = ;
    // var data = ;

    fetch("/controller/cIngresar.php", {
        method: 'POST',
        body: JSON.stringify({
            'nombre': nombre,
            'apellido': apellido,
            'telefono': telefono,
            'email': email,
            'dia1': dia1,
            'dia2': dia2,
            'dia3': dia3,
            'dia4': dia4
        }), // data can be `string` or {object}!
        // headers: { 'Content-Type': 'application/json' }  //input data
    })
        .then(response => response.json())
        .then(data => {
            // Mostrar una alerta con la respuesta del servidor
            alert(data.mensaje);
        })
        .catch(error => console.error(error));



}
