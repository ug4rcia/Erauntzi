document.addEventListener("DOMContentLoaded", (event) => {

});

const botones = document.querySelectorAll(".dias");
// Definir función y evitar definirla de manera anónima
var clicks = 0;
var local = 1;
const cuandoSeHaceClick = function (evento) {
    // Recuerda, this es el elemento
    if (clicks < 4) {

        localStorage.setItem("dia"+local,this.value);
        local = local+1;

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
    }else if (apellido.value === "") {
        alert("Ingresa los datos correctamente")
    }else if (telefono.value === "") {
        alert("Ingresa los datos correctamente")
    }else if (email.value === "") {
        alert("Ingresa los datos correctamente")
    }else {
        document.getElementById("calendario").style.display = "flex"
        document.getElementById("guardar").style.display = "block"
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
    

    var url = "/controller/cIngresar.php";
    var data = { 'nombre': nombre, 'apellido': apellido, 'telefono': telefono, 'email': email, 'dia1': dia1, 'dia2': dia2, 'dia3': dia3, 'dia4': dia4 };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: { 'Content-Type': 'application/json' }  //input data
    })
        .then(res => res.json()).then(response => {

            console.log(response.list);
            alert(response.list);

        })
        .catch(error => console.error('Error status:', error));



}